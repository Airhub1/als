import { useEffect } from "react";
import Web3 from "web3";

const ConnectWallet = () => {

  useEffect(() => {
    const connectButton = document.getElementById("connect");
    connectButton.addEventListener("click", () => {
      connectAccount();
    });

    async function connectAccount() {
      if(!window.ethereum) return alert("Please install Metamask. Make sure that Binance Smart Chain network is configured in Metamask.");
      if (window.ethereum) {
        ethereum.on('chainChanged', (chainId) => {
          if(chainId == 56) return;
          else { alert("Network chainged");
            window.location.reload();
          }
        });
        ethereum.on('accountsChanged', (accounts) => {
          if (accounts == 0) {alert("Disconnected")}
          else{alert("Account chainged")}
        });
      }
      const chainId = 56;
      if(window.ethereum.networkVersion !== chainId) {
        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{chainId: `0x${Number(56).toString(16)}`}]
          });
        } catch (error) {
           if (error.code === 4902) {
            alert("Please, add BSC network to Metamask")
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainName: 'Binance Smart Chain',
                  chainId: Web3.utils.toHex(chainId),
                  nativeCurrency: { name: 'Binance Coin', decimals: 18, symbol: 'BNB' },
                  rpcUrls: ['https://bsc-dataseed.binance.org/'],
                  blockExplorerUrls: ['https://bscscan.com']
                },
              ],
            });
          }
        }
      }
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      if(window.ethereum.networkVersion == chainId) { alert("You have successfully connected wallet!")
      connectButton.innerHTML =
        account[0] +
        account[1] +
        account[2] +
        account[3] +
        account[4] +
        "..." +
        account[38] +
        account[39] +
        account[40] +
        account[41];
    } else {
      alert("Please, switch Metamask to BSC network");
    }
  }
  },[]);
}

export default ConnectWallet;