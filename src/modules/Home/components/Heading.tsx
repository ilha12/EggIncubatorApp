import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TitleText from '../../../common/components/TitleText';
import {ms, mvs, s} from 'react-native-size-matters';
import {colors} from '../../../utils';

interface props {
  title: string;
  value: string | number;
  tag: string;
}
const Heading = ({title, tag, value}: props) => {
  return (
    <View style={styles.contianer}>
      <View>
        <TitleText title={title} />
        <Text style={styles.textStyle}>{value}</Text>
      </View>
      <View style={styles.btnStyle}>
        <Text style={styles.tagStyle}>{tag}</Text>
      </View>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  contianer: {
    width: '95%',
    height: ms(150),
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginVertical: mvs(10),
    borderRadius: s(10),
    padding: mvs(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: s(40),
    color: '#000',
    fontWeight: 'bold',
  },
  btnStyle: {
    width: ms(30),
    height: mvs(40),
    borderRadius: ms(50),
    backgroundColor: colors.Ten,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagStyle: {
    fontSize: s(20),
    color: '#fff',
  },
});
