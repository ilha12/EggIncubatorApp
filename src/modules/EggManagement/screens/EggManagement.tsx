import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {manager} from '../../../utils';

const EggManagement = () => {
  useEffect(() => {
    const stateChangeListener = manager.onStateChange(state => {
      console.log('onStateChange: ', state);

      // if (state === State.PoweredOn) {

      // scan()

      // }
    });
    console.log(stateChangeListener);

    return () => {
      stateChangeListener?.remove();
    };
  }, [manager]);
  return (
    <View>
      <Text>EggManagement</Text>
    </View>
  );
};

export default EggManagement;

const styles = StyleSheet.create({});
