const Router = artifacts.require("JollofswapV2Router02.sol");
const WETH = artifacts.require("WETH9.sol");

module.exports = async function (deployer, network) {
  let weth;
  const FACTORY_ADDRESS = '0x7095737095734DDF1DE3Fdd378a51970aCE7a4d9';

  if(network === 'mainet') {
    weth = await WETH.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2')
  } else {
    await deployer.deploy(WETH);
    weth = await WETH.deployed();
  }

  await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};
