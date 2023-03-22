export const web3Handler = async ({ setAccount }) => {
  const account = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  setAccount(account[0]);
  // Get provider from Metamask
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // Set signer
  const signer = provider.getSigner();
  setConnectButton("Connected");
  window.ethereum.on("chainChanged", (chainId) => {
    window.location.reload();
  });

  window.ethereum.on("accountsChanged", async function (accounts) {
    setAccount(account[0]);
    await web3Handler();
  });
  loadContracts(signer);
};
const loadContracts = async (signer) => {
  // Get deployed copies of contracts
  const marketplace = new ethers.Contract(
    MarketplaceAddress.address,
    MarketplaceAbi.abi,
    signer
  );
  setMarketplace(marketplace);
  const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer);
  setNFT(nft);
};
