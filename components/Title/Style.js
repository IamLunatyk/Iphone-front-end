import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const Style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 24,
  },
});

export default Style;
