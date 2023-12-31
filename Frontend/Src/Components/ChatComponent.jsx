import {View, Text, Pressable} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
// import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {ChatStyles} from '../Utills/ChatStyles';

const ChatComponent = ({item}) => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState({});

  //👇🏻 Retrieves the last message in the array from the item prop
  useLayoutEffect(() => {
    setMessages(item.messages[item.messages.length - 1]);
  }, []);

  ///👇🏻 Navigates to the Messaging screen
  console.log(item);
  const handleNavigation = () => {
    navigation.navigate('Messaging', {
      id: item.id,
      name: item.name,
      title: item.name + "'s Chat",
    });
  };

  return (
    <Pressable style={ChatStyles.cchat} onPress={handleNavigation}>
      <View style={ChatStyles.crightContainer}>
        <View>
          <Text style={ChatStyles.cusername}>{item.name}</Text>

          <Text style={ChatStyles.cmessage}>
            {messages?.text ? messages.text : 'Tap to start chatting'}
          </Text>
        </View>
        <View>
          <Text style={ChatStyles.ctime}>
            {messages?.time ? messages.time : 'now'}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ChatComponent;
