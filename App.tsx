import SplashScreen from 'react-native-splash-screen';
import './gesture-handler';
import MainNavigation from './src/navigation/MainNavigation';
import {useEffect} from 'react';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return <MainNavigation />;
};

export default App;
