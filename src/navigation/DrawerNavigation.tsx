import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home} from '../modules/Home/screens';
import Setting from '../modules/Setting/screens/Setting';
import Sensors from '../modules/Sensors/screens/Sensors';
import EggManagement from '../modules/EggManagement/screens/EggManagement';
import CustomDrawer from './CustomDrawer';
import {colors} from '../utils';
import {ROUTES} from '../constants';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: colors.white,
        drawerActiveTintColor: colors.Orange,
      }}
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName={ROUTES.Home}>
      <Drawer.Screen name={ROUTES.Home} component={Home} />
      <Drawer.Screen name={ROUTES.Setting} component={Setting} />
      <Drawer.Screen name={ROUTES.Sensors} component={Sensors} />
      <Drawer.Screen name={ROUTES.EggManagement} component={EggManagement} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
