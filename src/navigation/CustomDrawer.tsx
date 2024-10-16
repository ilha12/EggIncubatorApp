import {Image, StyleSheet, Text, View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {GradientView} from '../common/components';
import {colors, fonts, images} from '../utils';
import {ms, mvs, s} from 'react-native-size-matters';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDrawer = (props: any) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    let getUserValue = async () => {
      let user = await AsyncStorage.getItem('user');
      if (user) {
        JSON.parse(user);
        setUser(user);
      }

      return user;
    };
    console.log(getUserValue());
    getUserValue();
  }, []);

  return (
    <GradientView colors={colors.gradientPrimary} style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.profileContainer}>
          <Image source={images.man} style={styles.profileStyle} />
          <Text style={styles.userNameStyle}>Umer</Text>
          <Text style={[styles.userNameStyle, styles.userEmailStyle]}>
            umerf2432@gmail.com
          </Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </GradientView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    width: '100%',
    height: ms(150),
    marginBottom: mvs(50),
    padding: mvs(10),
  },
  profileStyle: {
    width: ms(100),
    height: mvs(100),
    borderRadius: s(20),
    borderWidth: s(1),
    borderColor: colors.white,
  },
  userNameStyle: {
    fontSize: ms(30),
    fontFamily: fonts.Medium,
    color: colors.white,
  },
  userEmailStyle: {
    fontSize: ms(20),
    fontFamily: fonts.Regular,
    color: colors.white,
  },
});
