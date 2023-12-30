import React, {useState, useCallback, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';

function Messaging({id, chat}) {
  const [messages, setMessages] = useState(chat.messages);

  useEffect(() => {
    setMessages(chat.messages);
  }, [chat]);

  const onSend = useCallback((newMessage = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessage),
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      styles={{
        container: styles.container,
      }}
      textInputStyle={{color: 'black'}}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
});

export default Messaging;
