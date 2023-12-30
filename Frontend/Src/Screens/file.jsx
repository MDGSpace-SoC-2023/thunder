// import React, {useState} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

// const {PERMISSIONS} = require('react-native-permissions');

// function Googlemaps() {
//   const [markerlist, setmarkerlist] = useState([]);
//   const [currentmarker, setcurrentmarker] = useState({
//     id: markerlist.length + 1,
//     latitude: markerlist.nativeEvent.coordinate.latitude,
//     longitude: markerlist.nativeEvent.coordinate.longitude,
//     title: 'i am here ',
//     discription: 'marked point',
//   });

//   function addNewMarker(e) {
//     const newMarker = [...markerlist, currentmarker];
//     setmarkerlist(newMarker);
//   }
//   return (
//     <View>
//       <MapView
//         style={styles.container}
//         provider={PROVIDER_GOOGLE}
//         initialRegion={{
//           latitude: 45.5,
//           longitude: -100.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.01,
//         }}
//         region={{
//           latitude: 29.863421,
//           longitude: 77.892548,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.01,
//         }}
//         onPress={e => addNewMarker(e.value)}>
//         {markerlist.map(marker => {
//           return (
//             <Marker
//               key={marker.id}
//               coordinate={{
//                 latitude: marker.latitude,
//                 longitude: marker.longitude,
//               }}
//               title={marker.title}
//               description={marker.discription}
//             />
//           );
//         })}
//       </MapView>
//     </View>
//   );
// }

// const styles = {
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     height: 700,
//     width: 400,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// };

// export default Googlemaps;

// failing of PERMISSIONS
// i think the permission request is failing somewhere i dont know how to resolve it
// useEffect(() => {
//   getpermission();
// }, []);
// const getpermission = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       {
//         title: 'Location Permission',
//         message: 'This app needs access to your location',
//         buttonNeutral: 'Ask Me Later',
//         buttonNegative: 'Cancel',
//         buttonPositive: 'OK',
//       },
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log('Location access granted');
//       setlacationpermission(true);
//       getCurrentLocation();
//     } else {
//       console.log('Location access denied');
//     }
//   } catch (err) {
//     console.warn(err);
//   }
//  };

// const getCurrentLocation = async () => {
//   GetLocation.getCurrentPosition({
//     enableHighAccuracy: true,
//     timeout: 15000,
//   })
//     .then(location => {
//       console.log(location);
//     })
//     .catch(error => {
//       const {code, message} = error;
//       console.warn(code, message);
//     });
// };

// if (!locationpermission) {
//   return (
//     <View>
//       <Text>requesting for location permission </Text>
//     </View>
//   );
// }

// issue with stacking of screens

// const HomeStack = createNativeStackNavigator();
// const ServicesStack = createNativeStackNavigator();
// const NotificationStack = createNativeStackNavigator();
// const AccountStack = createNativeStackNavigator();

// function HomeScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'top', justifyContent: 'top'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Search"
//         onPress={() => navigation.navigate('Search')}
//       />
//     </View>
//   );
// }

// function HomeStackScreen() {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen

//         name="Home1"
//         component={HomeScreen}
//         options={{headerShown: false}}
//       />
//       <HomeStack.Screen
//         name="Search"
//         component={Search}
//         options={{tabbarstyle: {display: 'none'}}}
//       />
//       {/* <HomeStack.Screen name="Bottomsheet" component={Bottomsheet} /> */}
//     </HomeStack.Navigator>
//   );
// }

// function ServicesStackScreen() {
//   return (
//     <ServicesStack.Navigator>
//       <ServicesStack.Screen
//         name="Search1"
//         component={HomeScreen}
//         options={{headerShown: false}}
//       />
//     </ServicesStack.Navigator>
//   );
// }

// function NotificationStackScreen() {
//   return (
//     <NotificationStack.Navigator>
//       <NotificationStack.Screen
//         name="Notifications"
//         component={Notification}
//         options={{headerShown: false}}
//       />
//     </NotificationStack.Navigator>
//   );
// }

// function AccountStackScreen() {
//   return (
//     <AccountStack.Navigator>
//       <AccountStack.Screen
//         name="Account"
//         component={Accounts}
//         options={{headerShown: false}}
//       />
//     </AccountStack.Navigator>
//   );
// }

// export {
//   HomeStackScreen,
//   ServicesStackScreen,
//   NotificationStackScreen,
//   AccountStackScreen,
// };

// Method to get route name
// const getRouteName = (route) => {
//     const routename = route.name;
//     console.log(routename)
//     return routename;
//   }
