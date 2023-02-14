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

export default {
  data() {
    return {
      factoryContract: "0x84db0126e01Fd5ed96DFB0973Bd3106C7eBCA14A",
      tokenContract: "",
      tokenName: "",
      tokenSymbol: "",
    };
  },
  methods: {
    async getSigner() {
      let provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts");
      return provider.getSigner();
    },

    async createContract() {
      const signer = await this.getSigner();

      const factory = await new ethers.Contract(
        this.factoryContract,
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
