import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";

const MetaMaskConnectionScreen = () => {
  const connectToMetaMask = async () => {
    if (window.ethereum) {
      try {
        // Request account access if needed
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("Connected to MetaMask:", accounts[0]);


      } catch (error) {
        // User denied account access
        console.error("MetaMask connection request denied:", error);
      }
    } else {
      // MetaMask is not installed, provide instructions or prompt the user to install it
      console.warn(
        "MetaMask is not installed. Please install MetaMask to use this app."
      );
    }
  };

  useEffect(() => {
    connectToMetaMask();
  }, []);

  return (
    <View>
      <Text>Welcome to Your DApp</Text>
      <Button onPress={connectToMetaMask}>Connect to MetaMask</Button>
    </View>
  );
};

export default MetaMaskConnectionScreen;

















import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const MetaMaskConnectionScreen = () => {
  const connectToMetaMask = async () => {
    if (window.ethereum) {
      try {
        // Request account access if needed
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("Connected to MetaMask:", accounts[0]);

        // Handle account change events
        // window.ethereum.on('accountsChanged', (newAccounts) => {
        //   console.log('MetaMask account changed:', newAccounts[0]);
        //   // Update your UI or take necessary actions
        // });

        // Handle network change events
        // window.ethereum.on('chainChanged', (newChainId) => {
        //   console.log('MetaMask network changed:', newChainId);
        //   // Update your UI or take necessary actions
        // });
      } catch (error) {
        // User denied account access
        console.error("MetaMask connection request denied:", error);
      }
    } else {
      // MetaMask is not installed, provide instructions or prompt the user to install it
      console.warn(
        "MetaMask is not installed. Please install MetaMask to use this app."
      );
    }
  };

  return (
    <View>
      <Text>Welcome to Your DApp</Text>
      <TouchableOpacity onPress={connectToMetaMask}>
        <Text>Connect to MetaMask</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MetaMaskConnectionScreen;
