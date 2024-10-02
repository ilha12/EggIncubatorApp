import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ms} from 'react-native-size-matters';
import {fonts} from '../../utils';

interface props {
  title: string;
}
const TitleText = ({title}: props) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default TitleText;

const styles = StyleSheet.create({
  title: {
    fontSize: ms(30),
    color: '#000',
    fontWeight: 'bold',
    marginBottom: ms(10),
    fontFamily: fonts.Bold,
  },
});
