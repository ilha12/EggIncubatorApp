import {StatusBar, StyleProp, ViewStyle} from 'react-native';
import {ReactNode} from 'react';
import LinearGradient from 'react-native-linear-gradient';
interface Props {
  children: ReactNode;
  colors: Array<string>;
  style: StyleProp<ViewStyle>;
}

const GradientView = ({children, colors, style}: Props) => {
  return (
    <LinearGradient colors={colors} style={style}>
      <StatusBar backgroundColor={colors[0]} showHideTransition={'slide'} />
      {children}
    </LinearGradient>
  );
};

export default GradientView;
