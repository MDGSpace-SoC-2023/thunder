import React from 'react';
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
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
import Search from '../Search';
import Example from '../Notification/Chat';

function EmptyScreen() {
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
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Notification Screen</Text>
      <Button
        title="Go to chat"
        onPress={() => navigation.navigate('Chatserver')}
      />
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
          name="home"
          component={HomeTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Profile" component={Search} />
        <Stack.Screen name="Chatserver" component={Example} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Home1;
