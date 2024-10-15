import {StyleSheet, Text, View} from 'react-native';
import {BarChart, LineChart} from 'react-native-gifted-charts';
import {ms} from 'react-native-size-matters';
import {colors, fonts} from '../../../utils';
import {GradientView} from '../../../common/components';
const Sensors = () => {
  const data = [{value: 50}, {value: 80}, {value: 90}, {value: 70}];
  return (
    <GradientView colors={colors.bottomsheetGradient} style={styles.container}>
      <View>
        <Text style={styles.title}>Temperature</Text>
        <Text style={styles.title}>35.95</Text>

        <BarChart data={data} />
        <Text style={styles.title}>Humidity</Text>
        <Text style={styles.title}>51.65</Text>
        <LineChart data={data} areaChart />
      </View>
    </GradientView>
  );
};

export default Sensors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: ms(10),
  },
  title: {
    fontSize: ms(30),
    color: colors.black,
    marginBottom: ms(10),
    fontWeight: 'bold',
    fontFamily: fonts.Bold,
  },
});
