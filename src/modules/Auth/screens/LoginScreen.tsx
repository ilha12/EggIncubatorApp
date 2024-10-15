import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState, useEffect} from 'react';
import {Ionicons, SimpleLineIcons} from '../../../constants/icons';
import {colors, fonts, images} from '../../../utils';
import {ROUTES} from '../../../constants';
import {s} from 'react-native-size-matters';
// import statusCodes along with GoogleSignin
import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const LoginScreen = ({navigation}: any) => {
  const [secureEntery, setSecureEntery] = useState(true);
  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleSignup = () => {
    navigation.navigate(ROUTES.SignUp);
  };
  const [state, setState] = useState({userInfo: {}});
  // Somewhere in your code
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      console.log(response);
      // if (isSuccessResponse(response)) {
      //   console.log(response.data);
      //   setState({userInfo: response.data});
      // } else {
      //   console.log('Cancel login');
      //   // sign in was cancelled by user
      // }
    } catch (error) {
      console.log(error);
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // Android only, play services not available or outdated
            break;
          default:
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  };
  useEffect(() => {
    GoogleSignin.configure();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <Ionicons
          name={'arrow-back-outline'}
          color={colors.black}
          size={30}></Ionicons>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Hey,</Text>
        <Text style={styles.headingText}>Welcome</Text>
        <Text style={styles.headingText}>Back</Text>
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
        <TouchableOpacity>
          <Text style={styles.forgetPasswordText}>Forget Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButtonWrapper}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.continueText}>or continue with</Text>
        <TouchableOpacity
          onPress={() => signIn()}
          style={styles.googleButtonContainer}>
          <Image source={images.googleImage} style={styles.googleImage}></Image>
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text style={styles.accountText}>Don't have an account?</Text>
          <TouchableOpacity onPress={handleSignup}>
            <Text style={styles.signupText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: s(16),
    backgroundColor: colors.white,
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
