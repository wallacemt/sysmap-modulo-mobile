import {FlatList, View, Image} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import {styles} from './styles';
import CustomText from '../../components/CustomText/CustomText';
import {themes} from '../../assets/themes';

const achivimentsIcon = require('../../assets/images/achivimentsImg.png');
const awardsIcon = require('../../assets/images/award.png');
const medalIcon = require('../../assets/images/medal.png');

interface ProfileStatusBoxProps {
  user: any;
}

function ProfileStatusBox({user}: any) {
  return (
    <View style={styles.profileStatusContainer}>
      <View style={styles.iconContainer}>
        <Image source={awardsIcon} style={styles.icon} />
      </View>
      <View style={styles.row}>
        <CustomText>Seu nível é</CustomText>
        <CustomText style={styles.level}>{user.level}</CustomText>
        <Image source={achivimentsIcon} style={styles.acIcon} />
      </View>
      <View>
        <View style={styles.row}>
          <CustomText>Pontos para o próximo nível</CustomText>
          <CustomText>
            {user.xp}/1000
            <CustomText>pts</CustomText>
          </CustomText>
        </View>
        <View style={styles.bar}>
          <View style={styles.barStatus} />
        </View>
      </View>
    </View>
  );
}

function RenderMedalCard(ac: any) {
  return (
    <View
      style={{
        width: 120,
        height: '100%',
        alignSelf: 'center',
        marginHorizontal: 20,
        marginTop: 10,
      }}>
      <View
        style={{
          width: 110,
          height: 110,
          borderRadius: 110 / 2,
          backgroundColor: themes.colors.whiteA1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={medalIcon} style={{width: 65, height: 90}} />
      </View>
      <View>
        <CustomText style={{fontSize: 20, fontWeight: 'bold'}}>
          {ac.name}
        </CustomText>
        <CustomText style={{fontSize: 14, lineHeight: 18}}>
          {ac.criterion}
        </CustomText>
      </View>
    </View>
  );
}

function MedalBox({user}: any) {
  const groupedAchiviments: any[][] = [];

  if (user.achiviments) {
    for (let i = 0; i < user.achiviments.length; i += 2) {
      groupedAchiviments.push(user.achiviments.slice(i, i + 2));
    }
  }

  return (
    <View style={styles.medalBoxContainer}>
      <FlatList
        data={groupedAchiviments}
        keyExtractor={(__, index) => `group-${index}`}
        renderItem={({item}) => (
          <View
            style={{
              height: 230,
              width: '80%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 10,
            }}>
            {item.map((ac, index) => (
              <View style={{paddingHorizontal: 10}} key={ac.name + '_' + index}>
                {RenderMedalCard(ac)}
              </View>
            ))}
          </View>
        )}
        showsVerticalScrollIndicator={false}
        pagingEnabled
        nestedScrollEnabled
        ListEmptyComponent={() => (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 230,
            }}>
            <CustomText style={{fontSize: 20, fontWeight: 'bold'}}>
              Voce ainda não possui medalhas
            </CustomText>
          </View>
        )}
      />
    </View>
  );
}

export default function Carrousel() {
  const userMock = {
    name: 'Wallace',
    level: 8,
    xp: 650,
    achiviments: [
      {name: 'First Steps', criterion: 'First Steps description'},
      {name: 'First Steps', criterion: 'First Steps description'},
      {name: 'First Steps', criterion: 'First Steps description'},
      {name: 'First Steps', criterion: 'First Steps description'},
      {name: 'First Steps', criterion: 'First Steps description'},
      {name: 'First Steps', criterion: 'First Steps description'},
    ],
  };

  const components = [
    <ProfileStatusBox user={userMock} key="profile-status" />,
    <MedalBox user={userMock} key="modal-box" />,
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={components}
        keyExtractor={(__, index) => `page-${index}`}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={item => <View style={styles.item}>{item.item}</View>}
      />
    </View>
  );
}
