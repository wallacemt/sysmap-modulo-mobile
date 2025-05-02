import {ReactNode, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles.ts';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
interface KeyBoardAvContentProps {
  children: ReactNode;
}

export const KeyBoardAvContent = ({children}: KeyBoardAvContentProps) => {
  const [keyBoardOffSet, setKeyBoardOffSet] = useState(0);

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyBoardOffSet(Platform.OS === 'ios' ? 0 : 25);
    });

    const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyBoardOffSet(0);
    });

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
          keyboardVerticalOffset={keyBoardOffSet}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {children}
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
