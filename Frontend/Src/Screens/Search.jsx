import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  PermissionsAndroid,
} from 'react-native';
import MapView, {LatLng, Marker, Callout, Dimensions} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';

// const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = 2.144;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 29.86433776131726,
  longitude: 77.88959754451946,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};
const Google_API_KEY = 'AIzaSyD5_7P_w5xDHGqNpu9HFETGQrBWio3PgaE';
function InputAutocomplete({label, placeholder, onPlaceSelected}) {
  return (
    <>
      <Text style={{color: 'black', fontSize: 10}}>{label}</Text>
      <GooglePlacesAutocomplete
        styles={{textInput: styles.textInput}}
        placeholder={placeholder || ''}
        fetchDetails
        onPress={(data, details = null) => {
          onPlaceSelected(details);
        }}
        query={{
          key: Google_API_KEY,
          language: 'pt-BR',
        }}
      />
    </>
  );
}

function Search() {
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const mapRef = useRef();
  const [showDirections, setShowDirections] = useState(false);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  //need camera from the map , so we need map ref referrence
  const moveTo = async position => {
    const camera = await mapRef.current?.getCamera(); // this function is promise so i had to use await
    if (camera) {
      camera.center = position;
      mapRef.current?.animateCamera(camera, {duration: 1500});
    }
  };

  const onPlaceSelected = (details, flag) => {
    const set = flag === 'origin' ? setOrigin : setDestination;
    const position = {
      latitude: details?.geometry.location.lat || 0,
      longitude: details?.geometry.location.lng || 0,
    };
    set(position);
    moveTo(position);
  };
  // map refference has been added
  // we also need to pass the flag which is origin or destination
  // Created a visual refference when the map moves
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={INITIAL_POSITION} ref={mapRef}>
        {origin && <Marker coordinate={origin} />}
        {destination && <Marker coordinate={destination} />}
        {showDirections && origin && destination && (
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={Google_API_KEY}
            strokeColor="#6644ff"
            strokeWidth={4}
            onReady={traceRouteOnReady}
          />
        )}
      </MapView>
      <View style={styles.searchContainer}>
        <InputAutocomplete
          label={'From'}
          onPlaceSelected={details => onPlaceSelected(details, 'origin')}
        />
        <InputAutocomplete
          label={'To'}
          onPlaceSelected={details => onPlaceSelected(details, 'destination')}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowDirections(true)}>
          <Text style={styles.buttonText}>Trace route</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 700,
    width: 400,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  searchContainer: {
    backgroundColor: 'white',

    position: 'absolute',
    width: '90%',
    top: 20,
    left: 0,
    right: 0,
    padding: 8,
    elevation: 4,
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 2,
      width: 2,
    },
    borderRadius: 8,
  },
  textInput: {
    height: 38,
    borderColor: 'black',
    borderWidth: 0.5,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 0,
    color: '#424242',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Search;
