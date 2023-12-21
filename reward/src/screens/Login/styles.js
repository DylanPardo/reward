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
  logoContainer: {
    alignSelf: 'center',
    width: moderateScale(200),
    height: moderateScale(200),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyles: {
    width: moderateScale(200),
    height: moderateScale(200),
  },
  logoTextStyle: {
    fontSize: textScale(30),
    fontWeight: '700',
    color: colors.darkBrown,
    textAlign: 'center',
    letterSpacing: 7,
  },
  inputContainer: {
    width: moderateScale(340),
    height: moderateScale(48),
    backgroundColor: colors.white,
    alignSelf: 'center',
    marginTop: verticalScale(40),
    borderRadius: moderateScale(30),
  },
  inputStyle: {
    flex: 1,
    fontSize: textScale(18),
    paddingHorizontal: scale(8),
    color: colors.black,
    borderRadius: moderateScale(15),
    borderWidth: 1,
    borderColor: colors.grey3,
  },
  buttonStyle: {
    width: moderateScale(340),
    height: moderateScale(48),
    borderRadius: moderateScale(15),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.orange,
    marginTop: verticalScale(30),
  },
  loginText: {
    color: colors.white,
    fontSize: textScale(18),
    fontWeight: '500',
  },
  lastTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lastText: {
    paddingBottom: scale(30),
    fontSize: textScale(16),
    color: colors.black,
  },
});

export default styles;
