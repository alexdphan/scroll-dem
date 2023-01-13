import { ethers } from "hardhat";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = ethers.utils.parseEther("0.00000001");

  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  await lock.deployed();

  console.log(
    `Lock with 0.00000000002 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  );
  console.log(`Block explorer URL: https://l2scan.scroll.io/address/${lock.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// changes to docs needed
// ╰─ forge create --rpc-url hhttps://prealpha-rpc.scroll.io/l2 \                                                                                             ─╯
//   --value 0.00000000002ether \
//   --constructor-args 1696118400 \
//   --private-key <private key> \
//   --legacy contracts/Lock.sol:Lock
// [⠢] Compiling...
// No files changed, compilation skipped
// Error:
// builder error for url (hhttps://prealpha-rpc.scroll.io/l2): URL scheme is not allowed

// [⠢] Compiling...
// No files changed, compilation skipped
// Deployer: 0xD410e6daedebE180F2fC0910838921Ada68b6F23
// Deployed to: 0x0A6e2B6Fe8ABAc8922950205eb80623644A1c6b2
// Transaction hash: 0x32fba32551f485b4dc45768acc83f61f63c8056b5a6b26865a2e7bdeb8c8509a