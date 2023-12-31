import {View, Text, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import {ChatStyles} from '../Utills/ChatStyles';

const Modal = ({setVisible}) => {
  const [groupName, setGroupName] = useState('');

  //👇🏻 Function that closes the Modal component
  const closeModal = () => setVisible(false);

  //👇🏻 Logs the group name to the console
  const handleCreateRoom = () => {
    console.log({groupName});
    closeModal();
  };
  return (
    <View style={ChatStyles.modalContainer}>
      <Text style={ChatStyles.modalsubheading}>Enter your Group name</Text>
      <TextInput
        style={ChatStyles.modalinput}
        placeholder="Group name"
        onChangeText={value => setGroupName(value)}
      />

      <View style={ChatStyles.modalbuttonContainer}>
        <Pressable style={ChatStyles.modalbutton} onPress={handleCreateRoom}>
          <Text style={ChatStyles.modaltext}>CREATE</Text>
        </Pressable>
        <Pressable
          style={[ChatStyles.modalbutton, {backgroundColor: '#E14D2A'}]}
          onPress={closeModal}>
          <Text style={ChatStyles.modaltext}>CANCEL</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Modal;
