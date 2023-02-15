<template>
  <div
    class="d-flex justify-content-center align-items-center"
    style="height: 75vh"
  >
    <form @submit.prevent class="col-12 col-md-4 col-lg-4 col-xl-4">
      <div class="form-group">
        <label for="tokenAddress">Token address</label>
        <input
          type="text"
          class="form-control form-control-lg"
          :value="tokenContract"
          disabled
        />
        <router-link
          v-if="tokenContract !== ''"
          disabled
          class="btn btn-primary mt-3"
          :to="{
            name: 'manage',
            query: { tokenContract: JSON.stringify(tokenContract) },
          }"
          >Manage</router-link
        >
      </div>
      <div class="form-group mt-3">
        <input
          v-model="tokenName"
          placeholder="Token name"
          class="form-control"
        />
      </div>
      <div class="form-group mt-3">
        <input
          v-model="tokenSymbol"
          placeholder="Token symbol"
          class="form-control"
        />
      </div>
      <button @click="createContract" class="btn btn-primary mt-3">
        Create token
      </button>
    </form>
  </div>
</template>

<script>
import abiFactory from "../ABI/abiFactory.json";
import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";

export default {
  // async created() {
  //   const provider = new WalletConnectProvider({
  //     rpc: {
  //       1: "http://127.0.0.1:7545",
  //     },
  //   });

  //   //  Enable session (triggers QR Code modal)
  //   await provider.enable();
  // },
  data() {
    return {
      tokenContract: "",
      tokenName: "",
      tokenSymbol: "",
    };
  },
  methods: {
    async getProvider() {
      if (window.ethereum)
        return new ethers.providers.Web3Provider(window.ethereum);
      else {
        const provider = new WalletConnectProvider({
          rpc: {
            5: "http://192.168.100.20:7545",
          },
        });

        //  Enable session (triggers QR Code modal)
        await provider.enable();
        return provider;
      }
    },
    async getFactoryContract() {
      let provider = await this.getProvider();
      const { chainId } = await provider.getNetwork();

      if (chainId === 5) return "0xA19957583DaeD9DA82FE6c6b0b5D5b76A013b944";
      else if (chainId === 137)
        return "0xA19957583DaeD9DA82FE6c6b0b5D5b76A013b944";
      else return "0x84db0126e01Fd5ed96DFB0973Bd3106C7eBCA14A";
    },
    async getSigner() {
      let provider = await this.getProvider();
      await provider.send("eth_requestAccounts");
      return provider.getSigner();
    },

    async createContract() {
      const signer = await this.getSigner();

      const factory = await new ethers.Contract(
        await this.getFactoryContract(),
        abiFactory.abi,
        signer
      );

      await factory.createToken(
        this.tokenName,
        this.tokenSymbol,
        await signer.getAddress()
      );

      factory.on("TokenCreated", async (from, to) => {
        this.tokenContract = to.args[0];
      });
    },
  },
};
</script>
