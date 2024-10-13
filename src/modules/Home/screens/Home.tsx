import {StyleSheet, SafeAreaView, Dimensions, View, Text} from 'react-native';
import {colors, fonts} from '../../../utils';
import LinearGradient from 'react-native-linear-gradient';
import Heading from '../components/Heading';
import {ms, mvs, s} from 'react-native-size-matters';
import {MatrialIcon} from '../../../constants/icons';
import {ControllerButton} from '../../../common/components';
const {width, height} = Dimensions.get('window');
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={colors.bottomsheetGradient}
        style={styles.subContainere}>
        <Heading title="Temperature" value={0.0} tag="c" />
        <Heading title="Humidity" value={0.0} tag="%" />
        <View style={styles.controlPanel}>
          <View style={styles.row}>
            <MatrialIcon
              name="plus-circle"
              corlor={colors.Orange}
              size={s(30)}
            />
            <Text style={styles.controlText}>Control Penel</Text>
          </View>
          <ControllerButton
            title="Heat Control"
            iconName="lightbulb"
            offbtn={() => console.log('Off')}
            Onbtn={() => console.log('On')}
          />
          <ControllerButton
            title="Air Control"
            iconName="hvac"
            offbtn={() => console.log('Off')}
            Onbtn={() => console.log('On')}
          />
        </View>
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
    padding: ms(16),
    justifyContent: 'space-evenly',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlText: {
    color: colors.Orange,
    fontSize: ms(20),
    fontWeight: '700',
    fontFamily: fonts.SemiBold,
    marginLeft: ms(30),
  },
});
