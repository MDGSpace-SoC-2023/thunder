import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ColorSchemeName,
  useColorScheme,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  useSDK,
  MetaMaskProvider,
  SDKConfigProvider,
  useSDKConfig,
} from '@metamask/sdk-react';
import Messaging from '../../Components/Messaging';
import Search from '../Search';
import MultiChat from '../Notification/MultiChat';
import connectWallet from '../Connect/ConnecWallet';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function EmptyScreen() {
  const connectWallet = async () => {
    try {
      await connect();
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const disconnectWallet = async () => {
    try {
      await disconnect();
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
      }}>
      <Button
        title="Connect"
        onPress={() => {
          connectWallet();
        }}
      />
      <Button
        title="Disconnect"
        onPress={() => {
          disconnectWallet();
        }}
      />
    </View>
  );
}

function Home({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Search"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function Services({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Search"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}
function Notifications({navigation}) {
  const chatRoomId = 'unique-chat-room-id'; // Replace this with your actual chat room ID
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => {
    if (!isChatOpen) {
      navigation.navigate('Chatserver', {chatRoomId});
      setIsChatOpen(true);
    } else {
      navigation.navigate('Chatserver');
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Notification Screen</Text>
      <Button title="Go to chat" onPress={openChat} />
    </View>
  );
}

function Account({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}>
      <Text>Hello</Text>
    </View>
  );
}
function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Services" component={Services} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

function Home1() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Connect Metamask Wallet"
          component={connectWallet}
          title="Connect Metamask Wallet"
        />
        <Stack.Screen
          name="home"
          component={HomeTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Profile" component={Search} />
        <Stack.Screen
          name="Chatserver"
          component={MultiChat}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Messaging" component={Messaging} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Home1;
