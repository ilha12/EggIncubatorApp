import {StyleSheet, SafeAreaView, Dimensions, View} from 'react-native';
import {colors} from '../../../utils';
import LinearGradient from 'react-native-linear-gradient';
import Heading from '../components/Heading';
import {ms, mvs} from 'react-native-size-matters';
const {width, height} = Dimensions.get('window');
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={colors.bottomsheetGradient}
        style={styles.subContainere}>
        <Heading title="Temperature" value={0.0} tag="c" />
        <Heading title="Humidity" value={0.0} tag="%" />
        <View style={styles.controlPanel}></View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
  subContainere: {
    flex: 1,
  },
  controlPanel: {
    width: '95%',
    height: mvs(300),
    backgroundColor: colors.white,
    alignSelf: 'center',
    borderRadius: ms(10),
    marginTop: mvs(10),
  },
});
