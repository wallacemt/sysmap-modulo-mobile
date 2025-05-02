import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import Title from '../../components/Title/Title';
import CustomText from '../../components/CustomText/CustomText';
import {Input} from '../../components/Input/Input';
import {Button} from '../../components/Button/Button';
import TextLink from '../../components/TextLink/TextLink';
import {KeyBoardAvContent} from '../../components/KeyBoardAvContent/KeyBoardAvContent';
import {useState} from 'react';
import {showErrorToast} from '../../utils/showToast';
import {emailVerify, passwordVerify} from '../../utils/verifications';
import useAppContext from '../../hooks/useAppContext';

const logo = require('../../assets/images/logo.png');
export default function Login() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const {auth: {login}} = useAppContext();

  const handleLogin = async () => {
    try {
      let isError = false;
      if(!emailVerify(email!)) {
        setEmailError(true);
        isError = true;
      }
      if(passwordVerify(password!)) {
        setPasswordError(true);
        isError = true;
      }
      if(isError) return;

      login &&  await login(email!, password!);
    } catch (error: any) {
      showErrorToast({title: 'Houve um Error!', message: error.message});
    }
  };

  return (
    <KeyBoardAvContent>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.header}>
          <Title>Faça Login e comece a treinar</Title>
          <CustomText style={styles.subtitle}>
            Encontre parceiros para treinar ao ar livre. Conecte-se e comece
            agora! 💪
          </CustomText>
        </View>
        <View style={styles.form}>
          <Input.Root isError={emailError}>
            <Input.Label required>E-mail</Input.Label>
            <Input.Input
              placeholder="Ex.: nome@email.com"
              value={email}
              autoCapitalize="none"
              onChangeText={text => {
                setEmail(text);
                setEmailError(false);
              }}
            />
            <Input.ErrorMessage style={{marginTop: 5}}>
              Preencha o campo com seu e-mail!
            </Input.ErrorMessage>
          </Input.Root>
          <Input.Root isError={passwordError}>
            <Input.Label required>Senha</Input.Label>
            <Input.Input
              placeholder="********"
              autoCapitalize="none"
              autoComplete="off"
              secureTextEntry
              value={password}
              onChangeText={text => {
                setPassword(text);
                setPasswordError(false);
              }}
            />
            <Input.ErrorMessage style={{marginTop: 5}}>
              Preencha o campo a sua senha!
            </Input.ErrorMessage>
          </Input.Root>
          <Button.Root style={styles.button} onPress={() => handleLogin()}>
            <Button.Label>Entrar</Button.Label>
          </Button.Root>
          <TextLink
            onPress={() => {}}
            simpleText="Ainda não tem uma conta?"
            boldText="Cadastre-se"
          />
        </View>
      </View>
    </KeyBoardAvContent>
  );
}
