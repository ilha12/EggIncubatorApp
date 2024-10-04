import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {ms, mvs, s} from 'react-native-size-matters';
import {MatrialIcon} from '../../constants/icons';

interface props {
  title: string;
  iconName: string;
  Onbtn: () => void;
  offbtn: () => void;
}
const ControllerButton = ({title, iconName, Onbtn, offbtn}: props) => {
  return (
    <View style={[styles.row, {justifyContent: 'space-between'}]}>
      <View style={styles.row}>
        <MatrialIcon name={iconName} corlor={colors.Orange} size={s(30)} />
        <Text style={styles.controlText}>{title}</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={Onbtn} style={styles.btnStyle}>
          <Text style={styles.btnText}>On</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={offbtn}
          style={[styles.btnStyle, {backgroundColor: 'red'}]}>
          <Text style={styles.btnText}>off</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ControllerButton;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlText: {
    fontSize: ms(20),
    fontWeight: '700',
    fontFamily: fonts.SemiBold,
    marginLeft: ms(30),
  },
  btnStyle: {
    width: ms(60),
    height: mvs(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    marginHorizontal: s(5),
  },
  btnText: {
    color: colors.white,
    fontSize: ms(16),
    textTransform: 'uppercase',
  },
});
