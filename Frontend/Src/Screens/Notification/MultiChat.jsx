import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  FlatList,
  StyleSheet,
} from 'react-native';
import ChatComponent from '../../Components/ChatComponent';
import {ChatStyles} from '../../Utills/ChatStyles';
import Modal from '../../Components/Modal';

const Multichat = () => {
  //👇🏻 Dummy list of rooms
  const rooms = [
    {
      id: '1',
      name: 'Novu Hangouts',
      messages: [
        {
          id: '1a',
          text: 'Hello guys, welcome!',
          time: '07:50',
          user: 'Tomer',
        },
        {
          id: '1b',
          text: 'Hi Tomer, thank you! 😇',
          time: '08:50',
          user: 'David',
        },
      ],
    },
    {
      id: '2',
      name: 'Hacksquad Team 1',
      messages: [
        {
          id: '2a',
          text: "Guys, who's awake? 🙏🏽",
          time: '12:50',
          user: 'Team Leader',
        },
        {
          id: '2b',
          text: "What's up? 🧑🏻‍💻",
          time: '03:50',
          user: 'Victoria',
        },
      ],
    },
  ];
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={ChatStyles.chatscreen}>
      <View style={ChatStyles.chattopContainer}>
        <View style={ChatStyles.chatheader}>
          <Text style={ChatStyles.chatheading}>Chats</Text>

          {/* 👇🏻 Logs "ButtonPressed" to the console when the icon is clicked */}
          <Pressable onPress={() => setVisible(true)}>
            {/* <Feather name="edit" size={24} color="green" /> */}

            <Text style={ChatStyles.chaticon}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={ChatStyles.chatlistContainer}>
        {rooms.length > 0 ? (
          <FlatList
            data={rooms}
            renderItem={({item}) => <ChatComponent item={item} />}
            keyExtractor={item => item.id}
          />
        ) : (
          <View style={ChatStyles.chatemptyContainer}>
            <Text style={ChatStyles.chatemptyText}>No rooms created!</Text>
            <Text>Click the icon above to create a Chat room</Text>
          </View>
        )}
      </View>
      {/*
                Pass setVisible as prop in order to toggle 
                the display within the Modal component.
            */}
      {visible ? <Modal setVisible={setVisible} /> : ''}
    </SafeAreaView>
  );
};

export default Multichat;
