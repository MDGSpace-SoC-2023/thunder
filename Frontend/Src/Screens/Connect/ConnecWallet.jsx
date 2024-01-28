import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, StyleSheet, Button} from 'react-native';
import {useWeb3Modal} from '@web3modal/wagmi-react-native';
import {useAccount, useConnect, useWatchPendingTransactions} from 'wagmi';

export default function ConnectWallet({navigation}) {
  const {open, close} = useWeb3Modal();
  const {address, isConnecting, isConnected} = useAccount();

  useEffect(() => {
    if (isConnected && address && !navigation.isFocused()) {
      navigateToHome();
    }
  }, [isConnected, address, navigation]);
  useWatchPendingTransactions({
    onTransactions(transactions) {
      console.log('New transactions!', transactions);
      // Here you could potentially cancel the transactions, depending on the blockchain you're using.
    },
    poll: true,
  });

  function navigateToHome() {
    navigation.navigate('home');
  }

  const ConnectWallet = () => {
    open({view: 'Connect'});
  };
  const disconnect = () => {
    close();
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.logo}>⚡</Text>
        <Text style={styles.subTitle}>Thunder</Text>
        <Text style={styles.description}></Text>
      </View>

      <Button
        title="Connect Wallet"
        onPress={ConnectWallet}
        style={styles.button}
      />

      <Button
        title="Disconnect Wallet"
        onPress={disconnect}
        style={styles.button}
      />
      <Button title="Skip" onPress={navigateToHome} />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  logo: {
    fontSize: 90,
    color: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  subTitle: {
    fontSize: 60,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  description: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffa500',
  },
});
