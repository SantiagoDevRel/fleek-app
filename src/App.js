import "./App.css";
import { Web3 } from "web3";
import { MetamaskPlugin } from "web3-metamask-plugin";
import { useState } from "react";

const web3 = new Web3(window.ethereum);
web3.registerPlugin(new MetamaskPlugin());

function App() {
  const [address, setAddress] = useState("none");
  const [chain, setChain] = useState("none");

  async function connectWallet() {
    const accounts = await web3.metamask.connectWallet();
    setAddress(accounts[0]);
  }

  async function disconnectWallet() {
    await web3.metamask.disconnectWallet();
    setAddress("none");
  }

  async function switchToGnosis() {
    await web3.metamask.switchToGnosis();
  }

  async function switchToSepolia() {
    await web3.metamask.switchToSepolia();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h4>
          Connected Address: <p>{address}</p>
        </h4>
        <h4>
          Connected Chain: <p>{chain}</p>
        </h4>
        <button onClick={connectWallet}>Connect Wallet</button>
        <button onClick={disconnectWallet}>Disconnect Wallet</button>
        <button onClick={switchToGnosis}>Swith To Gnosis</button>
        <button onClick={switchToSepolia}>Swith To Sepolia</button>
      </header>
    </div>
  );
}

export default App;
