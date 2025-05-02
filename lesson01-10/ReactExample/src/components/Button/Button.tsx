import React, {ReactNode} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {styles} from './styles';
import {Text} from 'react-native-gesture-handler';

interface ButtonRootProps extends TouchableOpacityProps {
  children: React.ReactElement<ButtonLabelProps> | React.ReactElement<ButtonLabelProps>[];
  type?: 'default' | 'outiline' | 'ghost';
  style?: any;
}

function ButtonRoot({
    type = 'default',
    children,
    style,
    ...props
}: ButtonRootProps) {
    const typeStyles = {
      default: styles.default,
      outiline: styles.outiline,
      ghost: styles.ghost,
    };
  return (
    <TouchableOpacity
      {...props}
      style={[typeStyles[type], style]}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {type});
        }
        return child;
      })}
    </TouchableOpacity>
  );
}

interface ButtonLabelProps {
  children: ReactNode;
  type?: 'default' | 'outiline' | 'ghost';
}

function ButtonLabel({children, type = 'default'}: ButtonLabelProps) {
    const typeStylesLabel = {
        default: styles.defaultLabel,
        outiline: styles.outilineLabel,
        ghost: styles.ghostLabel,
      };

  return <Text style={[styles.label, typeStylesLabel[type]]}>{children}</Text>;
}
export const Button = {
  Root: ButtonRoot,
  Label: ButtonLabel,
};
