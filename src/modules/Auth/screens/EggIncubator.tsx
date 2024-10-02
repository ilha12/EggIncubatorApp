import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {screenNames} from '../../../navigation/ScreenNames';
import {colors, fonts, images} from '../../../utils';

const EggIncubator = ({navigation}: any) => {
  const handleLogin = () => {
    navigation.navigate(screenNames.Login);
  };
  const handleSignup = () => {
    navigation.navigate(screenNames.SignUp);
  };
  return (
    <View style={styles.container}>
      <Image source={images.logo} style={styles.logo}></Image>
      <Image source={images.man} style={styles.bannerImage}></Image>
      <Text style={styles.title}>IoT Egg Incubator</Text>
      <Text style={styles.subTitle}>
        The IoT Automatic Egg Incubator is similar to the type of incubator
        which can be used as a substitue of poultry chicken to incubate the
        chicken egg automatically
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: colors.Orange}]}
          onPress={handleLogin}>
          <Text style={styles.LogInbuttonText}>LogIn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.SignUpbuttonText}>Sign-Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EggIncubator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  logo: {
    height: 40,
    width: 140,
    marginVertical: 30,
  },
  bannerImage: {
    marginVertical: 20,
    height: 250,
    width: 231,
  },
  title: {
    fontSize: 36,
    fontFamily: fonts.SemiBold,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: colors.Orange,
    marginTop: 40,
  },
  subTitle: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.Coffee,
    fontFamily: fonts.Medium,
    marginVertical: 20,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.Orange,
    width: '80%',
    height: 60,
    borderRadius: 100,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 98,
    // backgroundColor:colors.Orange,
  },
  LogInbuttonText: {
    color: colors.white,
    fontFamily: fonts.Bold,
    fontSize: 18,
  },
  SignUpbuttonText: {
    fontFamily: fonts.Bold,
    fontSize: 18,
  },
});
