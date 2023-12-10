import React from "react";
import { 
      View,
      Text,
      SafeAreaView,
      StyleSheet,
      ColorSchemeName,
      useColorScheme
} from "react-native";
import Googlemaps from "./android/app/src/Screens/Googlemaps";
import Bottomsheet from "./android/app/src/Screens/Bottomsheet";


function App(){
  const darkmode = useColorScheme() === "dark"
  return(
    <SafeAreaView>

    <Googlemaps />
    <Bottomsheet/>
    
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    color: 'black',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  whiteText: {
    color: 'white'
  },
  darktext: {
    color: 'black'
  }

}) 

export default App;