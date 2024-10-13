import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {EggIncubator, LoginScreen, SignupScreen} from '../modules/Auth/screens';
import {ROUTES} from '../constants';
//   Auth Navigation
const AuthNavigation = () => {
  const Stack = createNativeStackNavigator<ParamListBase>();
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.EggIncubator}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTES.EggIncubator} component={EggIncubator} />
      <Stack.Screen name={ROUTES.Login} component={LoginScreen} />
      <Stack.Screen name={ROUTES.SignUp} component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
