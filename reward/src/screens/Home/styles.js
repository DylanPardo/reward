import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {
  moderateScale,
  scale,
  textScale,
  verticalScale,
} from '../../constants/responsiveSizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: scale(18),
    marginTop: verticalScale(20),
    marginBottom: verticalScale(20),
  },
  menuCont: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(8),
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  masterCard: {
    width: moderateScale(40),
    height: moderateScale(40),
  },
  menu: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  welcomeText: {
    fontSize: textScale(20),
    color: colors.orange,
    fontWeight: '700',
  },
  yourReward: {
    color: colors.white,
    fontSize: textScale(28),
    fontWeight: '400',
    textAlign: 'center',
  },
  stats: {
    height: moderateScale(100),
    alignItems: 'center',
    width: moderateScale(90),
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginTop: verticalScale(20),
    borderRadius: moderateScale(15),
    marginLeft: scale(10),
  },
  headingLayout: {
    // width: moderateScale(120),
  },
  heading: {
    color: colors.black,
    fontSize: textScale(16),
    fontWeight: '500',
  },
  subHeading: {
    color: colors.orange,
    fontSize: textScale(16),
    fontWeight: '700',
    paddingTop: verticalScale(20),
  },
  lineDivider: {
    height: moderateScale(1),
    width: '100%',
    backgroundColor: colors.grey,
    marginTop: verticalScale(30),
  },
  featured: {
    fontSize: textScale(24),
    color: colors.orange,
    fontWeight: '700',
    marginHorizontal: scale(18),
    marginTop: verticalScale(10),
  },
  box: {
    width: moderateScale(150),
    height: moderateScale(150),
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderColor: colors.orange,
    marginBottom: verticalScale(10),
    borderRadius: moderateScale(15),
  },
  contentContainerStyle: {
    marginTop: verticalScale(30),
  },
  infoRewards: {
    paddingVertical: scale(12),
    borderRadius: moderateScale(15),
    marginHorizontal: scale(18),
    marginTop: verticalScale(20),
    backgroundColor: colors.orange,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
