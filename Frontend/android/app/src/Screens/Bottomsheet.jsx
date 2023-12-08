import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
  SafeAreaView,
} from 'react-native';

function Bottomsheet() {
  return (
    <View>
      <Text style={styles.text}>Bottomsheet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'black',
  },
});

export default Bottomsheet;
