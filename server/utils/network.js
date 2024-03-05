/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const { ethers } = require('ethers');

 const getContractInstance = (contractABI) => {
  const NETWORK = 'https://goerli.infura.io/v3/ed24d96c31db43c88a81c369b2bc9b69';
  const provider = ethers.providers.getDefaultProvider(NETWORK);
  const contractAddress = '0x36c176085ACAaf05da722D5A7A2fDD33f9B753AD';
  const privateKey = '38bf8d751f731a2922c7aacbed07c4d3d26893f42ca4cf4f7d5d259633f3e267';

  const wallet = new ethers.Wallet(privateKey, provider);
  const contractInstance = new ethers.Contract(contractAddress, contractABI.abi, wallet);
  return contractInstance;
};

module.exports = { getContractInstance }