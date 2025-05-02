import Toast from 'react-native-toast-message';
interface showErrorToastProps {
  title: string;
  message: string;
}
export const showErrorToast = ({title, message}: showErrorToastProps) => {
    Toast.show({
        type: 'error',
        text1: title,
        text2: message
    })
};
