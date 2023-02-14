import { ethers } from "ethers";
import abiToken from "../ABI/abiToken.json";

export async function getSigner() {
  let provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts");
  return provider.getSigner();
}

export async function getTokenContractAndSigner(tokenAddress) {
  const signer = await getSigner();
  const tokenContract = new ethers.Contract(tokenAddress, abiToken.abi, signer);

  return [tokenContract, signer];
}
