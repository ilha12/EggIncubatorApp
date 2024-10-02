import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';
import {screenNames} from '../../../navigation/ScreenNames';
import {Ionicons, SimpleLineIcons} from '../../../constants/icons';
import {colors, fonts, images} from '../../../utils';

const SignupScreen = ({navigation}: any) => {
  const [secureEntery, setSecureEntery] = useState(true);
  const handleGoBack = () => {
    navigation.goBack();
  };
  const handlelogin = () => {
    navigation.navigate(screenNames.Login);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <Ionicons
          name={'arrow-back-outline'}
          color={colors.black}
          size={30}></Ionicons>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Let's get,</Text>
        <Text style={styles.headingText}>Started</Text>
      </View>
      {/* form */}
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Ionicons
            name="mail-outline"
            size={30}
            color={colors.secondary}></Ionicons>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            placeholderTextColor={colors.secondary}
            keyboardType="email-address"></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <SimpleLineIcons
            name="screen-smartphone"
            size={30}
            color={colors.secondary}></SimpleLineIcons>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Phone no"
            placeholderTextColor={colors.secondary}
            secureTextEntry={secureEntery}
            keyboardType="phone-pad"></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <SimpleLineIcons
            name="lock"
            size={30}
            color={colors.secondary}></SimpleLineIcons>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Password"
            placeholderTextColor={colors.secondary}
            secureTextEntry={secureEntery}></TextInput>
          <TouchableOpacity
            onPress={() => {
              setSecureEntery(prev => !prev);
            }}>
            <SimpleLineIcons
              name="eye"
              size={20}
              color={colors.secondary}></SimpleLineIcons>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButtonWrapper}>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
        <Text style={styles.continueText}>or continue with</Text>
        <TouchableOpacity style={styles.googleButtonContainer}>
          <Image source={images.googleImage} style={styles.googleImage}></Image>
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text style={styles.accountText}>Already have an Account?</Text>
          <TouchableOpacity onPress={handlelogin}>
            <Text style={styles.signupText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.Orange,
    padding: 20,
  },
  backButtonWrapper: {
    height: 30,
    width: 30,
    backgroundColor: colors.Orange,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginVertical: 20,
  },
  headingText: {
    fontSize: 32,
    color: colors.Orange,
    fontFamily: fonts.Bold,
  },
  formContainer: {
    marginTop: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.Orange,
    borderRadius: 100,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: fonts.Light,
  },
  forgetPasswordText: {
    color: colors.Orange,
    fontFamily: fonts.SemiBold,
    textAlign: 'right',
    marginVertical: 10,
  },
  loginButtonWrapper: {
    backgroundColor: colors.Orange,
    borderRadius: 100,
    marginTop: 20,
  },
  loginText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.Bold,
    textAlign: 'center',
    padding: 10,
  },
  continueText: {
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: fonts.Regular,
    fontSize: 14,
  },
  googleButtonContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.Orange,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 10,
  },
  googleImage: {
    height: 25,
    width: 25,
  },
  googleText: {
    fontSize: 25,
    fontFamily: fonts.Bold,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    gap: 10,
  },
  signupText: {
    color: colors.Orange,
    fontFamily: fonts.Bold,
  },
  accountText: {
    fontFamily: fonts.Regular,
  },
});
