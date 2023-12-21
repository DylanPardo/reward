import {StyleSheet} from 'react-native';
import {
  moderateScale,
  scale,
  textScale,
  verticalScale,
} from '../constants/responsiveSizes';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(10),
    marginHorizontal: scale(10),
    backgroundColor: colors.orange,
    borderRadius: moderateScale(15),
    marginTop: verticalScale(20),
  },
  pointBalance: {
    fontSize: textScale(18),
    color: colors.primary,
    fontWeight: '500',
  },
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  digit: {
    fontSize: textScale(28),
    color: colors.primary,
    fontWeight: '500',
    paddingTop: verticalScale(10),
  },
  space: {
    height: moderateScale(20),
  },
  drawerIcon: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
});

export default styles;
