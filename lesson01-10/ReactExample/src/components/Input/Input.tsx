import React, {ReactNode, useState} from 'react';
import {
  TextInput,
  TextInputProps,
  View,
  ViewProps,
  Text,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {styles} from './styles';
import {themes} from '../../assets/themes';

interface InputRootProps extends ViewProps {
  children:
    | React.ReactElement<InputLabelProps | InputTextProps | InputErrorProps>
    | React.ReactElement<InputLabelProps | InputTextProps | InputErrorProps>[];
  isError?: boolean;
}

function InputRoot({children, isError, style, ...props}: InputRootProps) {
  return (
    <View {...props} style={[style]}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {isError});
        }
        return child;
      })}
    </View>
  );
}

interface InputLabelProps {
  children: ReactNode;
  required?: boolean;
  style?: any;
  isError?: boolean;
}

function InputLabel({
  children,
  style,
  isError,
  required = false,
}: InputLabelProps) {
  return (
    <Text
      style={[styles.label, isError && {color: themes.colors.perigo}, style]}>
      {children}
      {required && <Text style={[styles.label, styles.required]}>*</Text>}
    </Text>
  );
}

interface InputTextProps extends TextInputProps {
  isError?: boolean;
}

function CustomInput({style, isError, ...props}: InputTextProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <TextInput
      {...props}
      style={[
        styles.input,
        isFocused && {borderColor: themes.colors.whiteA2},
        isError && {borderColor: themes.colors.perigo},
        style,
      ]}
      placeholderTextColor={
        isError ? themes.colors.perigo : themes.colors.softWhite
      }
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
}

interface InputErrorProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  isError?: boolean;
}

function InputErrorMessage({children, style, isError}: InputErrorProps) {
  return (
    <View style={style}>
      {isError && <Text style={[styles.label, styles.error]}>{children}</Text>}
    </View>
  );
}

export const Input = {
  Root: InputRoot,
  Label: InputLabel,
  Input: CustomInput,
  ErrorMessage: InputErrorMessage,
};
