require("@nomicfoundation/hardhat-toolbox");
 const ALCHEMY_API_KEY = "65KmOWadbW5e9_2irZzvsXY284Vu0mRS"
 const GOERLI_PRIVATE_KEY = "5138d10bf1dd5656c9c031d9fc2387c0f565249382a3c5be69fa1e6392e4f86f"
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  paths:{
    artifacts:"./public/artifacts"
  },
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    },
    
  }

  
};
