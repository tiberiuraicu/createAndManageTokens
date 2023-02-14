<template>
  <CardWrapper>
    <label class="mb-2">Token Contract Address</label>
    <input
      type="text"
      class="form-control"
      v-model="token.address"
      placeholder="Token contract address"
    />
    <button class="btn btn-primary mt-3 mb-2" @click="validateTokenContract">
      See token contract
    </button>
    <p>Your balance is : {{ userBalance }} {{ token.symbol }}</p>
  </CardWrapper>

  <CardWrapper>
    <label class="mb-2">Number of tokens to mint</label>
    <input
      type="text"
      class="form-control mb-2"
      v-model="mint.tokensToMint"
      placeholder="Number of tokens to mint"
    />
    <label class="mt-2 mb-2">Address to mint to </label>

    <input
      type="text"
      class="form-control mb-2"
      v-model="mint.addressToMintTo"
      placeholder="Address to mint to "
      :disabled="mint.isAddressToMintToDisabled"
    />
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="mint.isMintCheckboxChecked"
      />
      <label class="form-check-label mb-2">Use your address</label>
    </div>
    <div>
      <button class="btn btn-primary mt-3" @click="mintTokens">Mint</button>
    </div>
  </CardWrapper>
  <CardWrapper>
    <label class="mb-2">Number of tokens to burn</label>
    <input
      type="text"
      class="form-control mb-2"
      v-model="burn.tokensToBurn"
      placeholder="Number of tokens to burn"
    />
    <label lass="mb-2 mt-2">Address from where to burn </label>

    <input
      type="text"
      class="form-control mb-2"
      v-model="burn.addressFromWheretoBurn"
      placeholder="Address from where to burn "
      :disabled="burn.isAddressFromWhereToBurnDisabled"
    />
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="burn.isBurnCheckboxChecked"
      />
      <label class="form-check-label mb-2">Use your address</label>
    </div>
    <div>
      <button class="btn btn-primary mt-3" @click="burnTokens">Burn</button>
    </div>
  </CardWrapper>

  <CardWrapper>
    <label class="mb-2">Address to trensfer to</label>
    <input
      type="text"
      class="form-control mb-2"
      v-model="addressToTransferTo"
      placeholder="Address to trensfer to"
    />
    <label class="mb-2">Number of tokens to transfer</label>
    <input
      type="text"
      class="form-control mb-2"
      v-model="tokensToTransfer"
      placeholder="Number of tokens to transfer"
    />

    <div>
      <button class="btn btn-primary mt-3" @click="transferTokens">
        Transfer
      </button>
    </div>
  </CardWrapper>
</template>

<script>
import CardWrapper from "./WrapperComponent.vue";
import { getSigner, getTokenContractAndSigner } from "../util/auth.js";

export default {
  components: { CardWrapper },
  async created() {
    if (this.$route.query.tokenContract !== undefined) {
      this.token.address = JSON.parse(this.$route.query.tokenContract);
      this.validateTokenContract();
    }

    let changeCurrentAccountIfAccountChanges =
      this.changeCurrentAccountIfAccountChanges;
    window.ethereum.on("accountsChanged", function (accounts) {
      changeCurrentAccountIfAccountChanges(accounts);
    });
  },
  data() {
    return {
      token: {
        address: "",
        symbol: "",
      },
      userBalance: 0,
      mint: {
        tokensToMint: 0,
        addressToMintTo: "",
        isMintCheckboxChecked: false,
        isAddressToMintToDisabled: false,
      },
      burn: {
        tokensToBurn: 0,
        addressFromWheretoBurn: "",
        isBurnCheckboxChecked: false,
        isAddressFromWhereToBurnDisabled: false,
      },
      addressToTransferTo: "",
      tokensToTransfer: 0,
    };
  },
  watch: {
    "burn.isBurnCheckboxChecked": async function (newValue) {
      if (newValue === true) {
        this.burn.addressFromWheretoBurn = await (
          await getSigner()
        ).getAddress();
        this.burn.isAddressFromWhereToBurnDisabled = true;
      } else if (newValue === false) {
        this.burn.addressFromWheretoBurn = "";
        this.burn.isAddressFromWhereToBurnDisabled = false;
      }
    },
    "mint.isMintCheckboxChecked": async function (newValue) {
      if (newValue === true) {
        this.mint.addressToMintTo = await (await getSigner()).getAddress();
        this.mint.isAddressToMintToDisabled = true;
      } else if (newValue === false) {
        this.mint.addressToMintTo = "";
        this.mint.isAddressToMintToDisabled = false;
      }
    },
  },
  methods: {
    async changeCurrentAccountIfAccountChanges(accounts) {
      if (this.mint.isMintCheckboxChecked) {
        this.mint.addressToMintTo = accounts[0];
      }
      if (this.burn.isBurnCheckboxChecked) {
        this.burn.addressFromWheretoBurn = accounts[0];
      }
    },

    async seeUserTokenBalanace(tokenContract, signer) {
      this.token.symbol = (await tokenContract.functions.symbol())[0];

      this.userBalance = (
        await tokenContract.functions.balanceOf(await signer.getAddress())
      ).toString();
    },

    async validateTokenContract() {
      const [tokenContract, signer] = await getTokenContractAndSigner(
        this.token.address
      );

      await this.seeUserTokenBalanace(tokenContract, signer);
    },
    async mintTokens() {
      const [tokenContract, signer] = await getTokenContractAndSigner(
        this.token.address
      );

      let transactionReceipt = await tokenContract.functions.mint(
        this.mint.addressToMintTo,
        this.mint.tokensToMint
      );

      await transactionReceipt.wait();

      await this.seeUserTokenBalanace(tokenContract, signer);
    },

    async burnTokens() {
      const [tokenContract, signer] = await getTokenContractAndSigner(
        this.token.address
      );

      let transactionReceipt = await tokenContract.functions.burn(
        this.burn.addressFromWheretoBurn,
        this.burn.tokensToBurn
      );

      await transactionReceipt.wait();

      await this.seeUserTokenBalanace(tokenContract, signer);
    },

    async transferTokens() {
      const [tokenContract, signer] = await getTokenContractAndSigner(
        this.token.address
      );

      let transactionReceipt = await tokenContract.functions.transfer(
        this.addressToTransferTo,
        this.tokensToTransfer
      );

      await transactionReceipt.wait();

      await this.seeUserTokenBalanace(tokenContract, signer);
    },
  },
};
</script>
