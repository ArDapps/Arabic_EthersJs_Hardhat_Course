// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

//Contract Adrress = "0x6783F18A8Aab462c8251E7dC366be0749C59f1fa"
const hre = require("hardhat");

async function main() {
  

  const MetaMessage = await hre.ethers.getContractFactory("MetaMessage");
  const metaMessage = await MetaMessage.deploy("Welcome bahaa To Metaverse");

  await metaMessage.deployed();

  console.log(
    `metaMessage with ${metaMessage.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
