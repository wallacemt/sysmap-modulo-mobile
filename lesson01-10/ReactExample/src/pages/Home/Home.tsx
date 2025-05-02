import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Dimensions,
  Modal,
} from 'react-native';
import {styles} from './styles';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useTypedNavigation} from '../../hooks/useTypedNavigation';
import useAppContext from '../../hooks/useAppContext';
import {themes} from '../../assets/themes';
import {useEffect, useState} from 'react';

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
  const {
    auth: {logout},
  } = useAppContext();

  const [show, setShow] = useState(false);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShow(true);
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <CustomButton
        text="Logout"
        color={themes.colors.perigo}
        onClick={() => logout()}
      />
      <Text style={styles.title}>Home Page</Text>
      <FlatList
        data={routes}
        renderItem={({item}) => (
          <View
            style={{
              width: Dimensions.get('window').width,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
            }}>
            <RouterCard
              name={item.name}
              title={item.title}
              description={item.description}
              params={item.params}
            />
          </View>
        )}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 30}}
      />
 
      <Modal
        animationType="fade"
        visible={show}
        onRequestClose={() => setShow(false)}
        statusBarTranslucent={true}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Modal</Text>
          <CustomButton
            text="Fechar"
            color={themes.colors.perigo}
            onClick={() => setShow(false)}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
}
