import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Dimensions,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useTypedNavigation} from '../../hooks/useTypedNavigation';
import useAppContext from '../../hooks/useAppContext';
import {themes} from '../../assets/themes';
import {useEffect, useState} from 'react';
import { House, SignOut } from 'phosphor-react-native';

interface RouterCardProps {
  name: string;
  title: string;
  description: string;
  params?: any;
}

function RouterCard({name, description, title, params}: RouterCardProps) {
  const navigation = useTypedNavigation();

  const route: any = params
    ? {name: name, params: {...params}}
    : {name: name + ''};

  return (
    <View style={styles.card}>
      <View style={{paddingLeft: 10, gap: 10, marginTop: 10}}>
        <Text style={[styles.title, {fontSize: 25, marginVertical: 0}]}>
          {title}
        </Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 15,
        }}>
        <CustomButton
          text="Go"
          onClick={() => {
            navigation.navigate(route);
          }}
          color="blue"
        />
      </View>
    </View>
  );
}

const routes = [
  {
    name: 'Carrousel',
    title: 'Exemplo Carrousel',
    description: 'Component Carrousel',
  },
  {
    name: 'FormElement',
    title: 'Exemplo de Forms',
    description: 'FormElements',
  },
  {
    name: 'Hello',
    title: 'Hello Route',
    description: 'Component Hello',
    params: {name: 'Márcio', isError: false},
  },
  {
    name: 'BoxGroup',
    title: 'BoxGroup Route',
    description: 'Component BoxGroup',
  },
  {
    name: 'BoxGroup2',
    title: 'BoxGroup2 Route',
    description: 'Component BoxGroup2',
  },
  {name: 'FlexBox', title: 'FlexBox Route', description: 'Component FlexBox'},
  {
    name: 'Position',
    title: 'Position Route',
    description: 'Component Position',
  },
  {
    name: 'UseState',
    title: 'UseState Route',
    description: 'Component UseState',
  },
  {
    name: 'UseCallback',
    title: 'UseCallback Route',
    description: 'Component UseCallback',
  },
  {
    name: 'UseEffect',
    title: 'UseEffect Route',
    description: 'Component UseEffect',
  },
  {name: 'UseRef', title: 'UseRef Route', description: 'Component UseRef'},
  {name: 'UseMemo', title: 'UseMemo Route', description: 'Component UseMemo'},
  {
    name: 'Count',
    title: 'Count Route',
    description: 'Usando Context com Count',
  },
];

export default function Home() {

  const [show, setShow] = useState(false);
  const { auth: { logout } } = useAppContext();



  // useEffect(() => {
  //     const timer = setTimeout(() => {
  //         setShow(true);
  //     }, 3000);

  //     return () => clearTimeout(timer);
  // }, [])

  return (
      <View style={styles.container}>
          <Modal
              animationType="fade"
              visible={show}
              statusBarTranslucent={true}
              onRequestClose={() => setShow(false)}
          >
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                  <Text>Modal</Text>
                  <TouchableOpacity onPress={() => setShow(false)}>
                      <Text>Close</Text>
                  </TouchableOpacity>
              </View>
          </Modal>
          <View style={styles.header}>
              <View style={styles.iconBox}>

                  <TouchableOpacity
                      onPress={() => {
                          setShow(true);
                      }}
                  >
                      <House size={32} color="#000" />
                  </TouchableOpacity>
                  {/* <TouchableOpacity
                      onPress={() => {
                          Toast.show({
                              type: 'info',
                              text1: 'Info',
                              text2: 'This is a toast message!',
                          });
                      }}
                  >
                      <House size={32} color="#000" />
                  </TouchableOpacity> */}
                  <TouchableOpacity
                      onPress={() => {
                          logout && logout()
                      }}
                  >
                      <SignOut size={32} color="#000" />
                  </TouchableOpacity>
              </View>
              <Text style={styles.title}>
                  Home Page
              </Text>
          </View>
          <View style={{flex: 1}}>
              <FlatList
                  data={routes}
                  renderItem={({ item }) => (
                      <View style={{ width: Dimensions.get('window').width, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                          <RouterCard
                              name={item.name}
                              title={item.title}
                              description={item.description}
                              params={item.params}
                          />
                      </View>
                  )}
                  keyExtractor={(item) => item.name}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{ paddingBottom: 30 }}
              />
          </View>
      </View>
  );
}
