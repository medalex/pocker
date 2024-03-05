/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const { ethers } = require('ethers');
const config = require('../config');

 const getContractInstance = (contractABI) => {
  const NETWORK = 'https://goerli.infura.io/v3/ed24d96c31db43c88a81c369b2bc9b69';
  const provider = ethers.providers.getDefaultProvider(NETWORK);
  const contractAddress = config.CONTRACT_ADDRESS;
  const privateKey = config.PRIVATE_ADDRESS;
  const wallet = new ethers.Wallet(privateKey, provider);
  const contractInstance = new ethers.Contract(contractAddress, contractABI.abi, wallet);
  return contractInstance;
};

module.exports = { getContractInstance }