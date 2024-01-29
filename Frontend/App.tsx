import React from "react";
import { 
      View,
      Text,
      SafeAreaView,
      StyleSheet,
      ColorSchemeName,
      useColorScheme,
      Button,
} from "react-native";
import Home1 from "./Src/Screens/Home/Home1";
import ConnectWallet from "./Src/Screens/Connect/ConnecWallet";
import '@walletconnect/react-native-compat'
import { WagmiConfig } from 'wagmi'
import { mainnet, polygon, arbitrum } from 'viem/chains'
import { createWeb3Modal, defaultWagmiConfig, Web3Modal } from '@web3modal/wagmi-react-native'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'



const projectId = '844e6accb15fcc38dda0c141621a2dd4';

const metadata = {
  name: 'Carpooling',
  description: 'Connect to Web3Modal with React Native',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com'
  }
}
const chains = [mainnet, polygon, arbitrum]

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({
  projectId,
  chains,
  wagmiConfig
})

 function App() {
  return (
      <WagmiConfig config={wagmiConfig}>
        <Home1 />
        <Web3Modal />
      </WagmiConfig>
     
  );
 }
 
 export default App;
 