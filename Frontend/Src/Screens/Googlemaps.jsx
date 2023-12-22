import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  PermissionsAndroid,
} from 'react-native-maps';
import GetLocation from 'react-native-get-location';

function Googlemaps() {
  const [markerlist, setmarkerlist] = useState([]);
  const mapRef = useRef(null);
  const [locationpermission, setlocationpermission] = useState(false);
  useEffect(() => {
    requestCameraPermission();
  }, []);
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = async () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log(location);
        mapRef.current.animateToRegion({
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };

  const currentmarker = () => ({
    id: markerlist.length + 1,
    latitude: 0,
    longitude: 0,
    title: 'i am here ',
    discription: 'marked point',
  });

  function addNewMarker(e) {
    const newMarker = {
      ...currentmarker(),
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
    };
    setmarkerlist([...markerlist, newMarker]);
  }

  return (
    <View>
      <MapView
        style={styles.container}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 29.863347,
          longitude: 77.890531,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        onPress={addNewMarker}
        ref={mapRef}>
        {markerlist.map(marker => {
          return (
            <Marker
              key={marker.id}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.title}
              description={marker.discription}
            />
          );
        })}
      </MapView>
      <TouchableOpacity style={styles.button}>
        <Text onPress={getCurrentLocation}>Get Location</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 700,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 500,
    left: 290,
  },
};

export default Googlemaps;
