import { ethers, upgrades } from "hardhat";

async function main() {
  const AlgoNifty = await ethers.getContractFactory("AlgoNifty");
  const an = await upgrades.deployProxy(AlgoNifty);
  await an.deployed();
  console.log(`AlgoNifty deployed to: ${an.address}`);

  // Upgrading
  // const AlgoNiftyV2 = await ethers.getContractFactory("AlgoNiftyV2");
  // const anUpgraded = await upgrades.upgradeProxy(an.address, AlgoNiftyV2);
  // console.log(`AlgoNifty2 deployed to: ${anUpgraded.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
