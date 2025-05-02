import {
  Dimensions,
  Image,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {DatePicker} from '../../components/DatePicker/DatePicker';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import {useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import MapView from 'react-native-maps';
import Maps from '../../components/Maps/Maps';

const defaultImage = require('../../assets/images/image-edit.png');

export default function FormElement() {
  const [image, setImage] = useState<string>(defaultImage);

  const pickImage = async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };
    const response = await launchImageLibrary(options);

    if (response.assets) {
      setImage(response.assets[0].uri!);
    }
  };

  return (
    <View style={{alignItems: 'center', flex: 1, paddingTop: 50}}>
      <View style={{width: '100%', height: 150, paddingLeft: 10}}>
        <DatePicker
          label="Data do encontro"
          onChange={date => console.log(date.toISOString())}
        />
      </View>
      <View>
        <TouchableOpacity onPress={pickImage}>
          <Image
            source={
              image && image != defaultImage ? {uri: image} : defaultImage
            }
            resizeMethod="resize"
            resizeMode="cover"
            style={{
              width: Dimensions.get('window').width * 0.9,
              height: 200,
              borderRadius: 10,
            }}
          />
        </TouchableOpacity>
      </View>
        <Maps onLocationChange={(latitude, longitude) => console.log(latitude, longitude)} />
    </View>
  );
}
