import {ActivityIndicator, PermissionsAndroid, Text, View} from 'react-native';
import {styles} from './styles';
import {useEffect, useState} from 'react';

import Geolocation from '@react-native-community/geolocation';
import MapView, {LatLng, Marker} from 'react-native-maps';


interface MapProps {
    onLocationChange?: (latitude: number, longitude: number) => void
}

export default function Maps({onLocationChange}: MapProps) {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [corrdinates, setCorrdinates] = useState<LatLng>();

  async function getPermission() {
    const hasPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    return hasPermission === PermissionsAndroid.RESULTS.GRANTED;
  }

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      error => {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
      },
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Ponto de encontro</Text>
      {latitude && longitude ? (
        <MapView
          onMapReady={getPermission}
          style={styles.map}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          provider="google"
          showsUserLocation={true}
          zoomEnabled={true}
          minZoomLevel={17}
          loadingEnabled={true}
            onLongPress={(e) => {
                setCorrdinates(e.nativeEvent.coordinate);
                setLatitude(e.nativeEvent.coordinate.latitude);
                setLongitude(e.nativeEvent.coordinate.longitude);
                onLocationChange && onLocationChange(e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude);
            }}
          >
          {corrdinates && (
            <Marker
              draggable={true}
              coordinate={corrdinates}
              onDragEnd={(e) => {
                setLatitude(e.nativeEvent.coordinate.latitude);
                setLongitude(e.nativeEvent.coordinate.longitude);
                onLocationChange && onLocationChange(e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude);
              }}
              title="Ponto de encontro"
              description="Aqui é o ponto de encontro"
            />
          )}
        </MapView>
      ) : (
        <ActivityIndicator size="large" color="#121212" />
      )}
    </View>
  );
}
