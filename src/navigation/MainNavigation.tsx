import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {screenNames} from './ScreenNames';
import {EggIncubator, LoginScreen, SignupScreen} from '../modules/Auth/screens';
import DrawerNavigation from './DrawerNavigation';
//          Main Navigation
const MainNavigation = () => {
  const Stack = createNativeStackNavigator<ParamListBase>();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={screenNames.EggIncubator}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={screenNames.EggIncubator}
          component={EggIncubator}
        />
        <Stack.Screen name={screenNames.Login} component={LoginScreen} />
        <Stack.Screen name={screenNames.SignUp} component={SignupScreen} />
        <Stack.Screen name={screenNames.Drawer} component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
