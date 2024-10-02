import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home} from '../modules/Home/screens';
import Setting from '../modules/Setting/screens/Setting';
import {screenNames} from './ScreenNames';
import Sensors from '../modules/Sensors/screens/Sensors';
import EggManagement from '../modules/EggManagement/screens/EggManagement';
import {Text} from 'react-native';
import CustomDrawer from './CustomDrawer';
import {colors} from '../utils';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: colors.white,
        drawerActiveTintColor: colors.Orange,
      }}
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName={screenNames.Home}>
      <Drawer.Screen name={screenNames.Home} component={Home} />
      <Drawer.Screen name={screenNames.Setting} component={Setting} />
      <Drawer.Screen name={screenNames.Sensors} component={Sensors} />
      <Drawer.Screen
        name={screenNames.EggManagement}
        component={EggManagement}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
