<template>
  <div>
    <button @click="connectToMetamask">Connect to Metamask</button>
  </div>
  <div>
    <input v-model="tokenName" placeholder="Token name" />
    <input v-model="tokenSymbol" placeholder="Token symbol" />
    <button @click="createContract">Create token</button>
  </div>
  <button @click="seeBalanace">See balance</button>

  <p>Token contract address : {{ tokenContract }}</p>
  <p>Your balance is : {{ userBalance }} {{ tokenSymbol }}</p>
  <input placeholder="Number of tokens to mint" v-model="tokensToMint" /><button
    @click="mintTokens"
  >
    Mint
  </button>
</template>

<script>
import abiLock from "./ABI/abiLock.json";
import abiToken from "./ABI/abiToken.json";
import { ethers } from "ethers";
// import { connectAndGetSigner } from "./smartContracts/smartContractFunctions.js";

export default {
  name: "App",
  data() {
    return {
      lockContract: "0xA19957583DaeD9DA82FE6c6b0b5D5b76A013b944",
      tokenContract: "",
      tokenName: "",
      tokenSymbol: "",
      userBalance: 0,
      tokensToMint: 0,
      provider: "",
      signer: "",
      address: "",
    };
  },

  methods: {
    async getParamaters() {
      let provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts");
      let signer = provider.getSigner();
      let address = await signer.getAddress();

      this.provider = provider;
      this.signer = signer;
      this.address = address;
    },

    async seeBalanace() {
      let provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts");
      let signer = provider.getSigner();
      let address = await signer.getAddress();

      this.getParamaters();
      const tokenContract = new ethers.Contract(
        this.tokenContract,
        abiToken.abi,
        signer
      );

      this.userBalance = (
        await tokenContract.functions.balanceOf(address)
      ).toString();
    },

    async connectToMetamask() {
      if (window.ethereum) {
        this.provider = new ethers.providers.Web3Provider(window.ethereum);
        await this.provider.send("eth_requestAccounts");
        this.signer = this.provider.getSigner();
      } else alert("Please install metamask");
    },

    async mintTokens() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts");
      const signer = provider.getSigner();

      const tokenContract = new ethers.Contract(
        this.tokenContract,
        abiToken.abi,
        signer
      );

      let transactionReceipt = await tokenContract.functions.mint(
        this.tokensToMint
      );

      await transactionReceipt.wait();

      let addres = await signer.getAddress();
      this.userBalance = (
        await tokenContract.functions.balanceOf(addres)
      ).toString();
    },
    async createContract() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts");
      const signer = provider.getSigner();

      const Lock = await new ethers.Contract(
        this.lockContract,
        abiLock.abi,
        signer
      );
      await Lock.createToken(
        this.tokenName,
        this.tokenSymbol,
        await signer.getAddress()
      );

      Lock.on("TokenCreated", async (from, to) => {
        this.tokenContract = to.args[0];
        const tokenContract = new ethers.Contract(
          this.tokenContract,
          abiToken.abi,
          signer
        );

        this.tokenSymbol = (await tokenContract.functions.symbol())[0];
        this.userBalance = (
          await tokenContract.functions.balanceOf(await signer.getAddress())
        ).toString();
      });
    },
    // async addToWallet() {
    //   const params = {
    //     type: "ERC20",
    //     options: {
    //       chainId: 1337,
    //       address: this.tokenContract,
    //       symbol: "RIF",
    //       decimals: 18,
    //       image: "https://s2.coinmarketcap.com/static/img/coins/64x64/3701.png",
    //       rpcUrls: ["http://127.0.0.1:7545"],
    //     },
    //   };

    //   window.ethereum
    //     .request({ method: "wallet_watchAsset", params })
    //     .then(() => console.log("Success, Token added!"))
    //     .catch((error) => console.log(error));
    // },
  },
};
</script>
