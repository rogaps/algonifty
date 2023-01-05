import { ethers, upgrades } from "hardhat";

async function main() {
  const MathFun = await ethers.getContractFactory("MathFun");
  const mf = await upgrades.deployProxy(MathFun);
  await mf.deployed();
  console.log(`MathFun deployed to: ${mf.address}`);

  // Upgrading
  // const MathFunV2 = await ethers.getContractFactory("MathFunV2");
  // const mfUpgraded = await upgrades.upgradeProxy(mf.address, MathFunV2);
  // console.log(`MathFun2 deployed to: ${mfUpgraded.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
