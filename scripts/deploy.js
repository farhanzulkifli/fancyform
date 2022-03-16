const main = async () => {
    const contractFactory = await hre.ethers.getContractFactory("Fancy_form");
    const contract = await contractFactory.deploy({
      value: hre.ethers.utils.parseEther("0.1"),
    });
  
    await contract.deployed();
  
    console.log("contract: ", contract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  
  runMain();
  // 0xb4f4d6182d9EDF1b6f50381DcAB9D12D9Cdf98cA