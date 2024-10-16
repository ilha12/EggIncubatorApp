import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import DrawerNavigation from './DrawerNavigation';
import {useState} from 'react';
//          Main Navigation
const MainNavigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <NavigationContainer>
      {/* {isAuthenticated ? <DrawerNavigation /> : <AuthNavigation />} */}
      <AuthNavigation />
      {/* <DrawerNavigation /> */}
    </NavigationContainer>
  );
};

export default MainNavigation;
