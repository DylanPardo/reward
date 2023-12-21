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
  leftArrow: {
    width: moderateScale(50),
    height: moderateScale(50),
  },
  allContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  masterCard: {
    width: moderateScale(200),
    height: moderateScale(200),
  },
  registrationText: {
    fontSize: textScale(30),
    fontWeight: '700',
    color: colors.orange,
  },
  sortAccountType: {
    flexDirection: 'row',
    alignItems: 'center',
    height: moderateScale(48),
    width: moderateScale(340),
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.grey3,
    marginTop: verticalScale(30),
    borderRadius: moderateScale(15),
  },
  sortCountry: {
    flexDirection: 'row',
    alignItems: 'center',
    height: moderateScale(40),
    width: moderateScale(300),
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.grey3,
    marginTop: verticalScale(20),
    alignSelf: 'center',
    borderRadius: moderateScale(15),
  },
  downArrow: {
    width: moderateScale(12),
    height: moderateScale(12),
    right: scale(20),
  },
  AccountType: {
    fontSize: textScale(18),
    fontWeight: '500',
    color: colors.black,
  },
  accountTypeCont: {
    flex: 1,
    paddingHorizontal: scale(8),
  },
  inputContainer: {
    width: moderateScale(340),
    height: moderateScale(48),
    backgroundColor: colors.white,
    alignSelf: 'center',
    marginTop: verticalScale(20),
  },
  inputContainer2: {
    width: moderateScale(340),
    height: moderateScale(48),
    backgroundColor: colors.grey3,
    alignSelf: 'center',
    marginTop: verticalScale(20),
  },
  inputStyle: {
    flex: 1,
    fontSize: textScale(18),
    paddingHorizontal: scale(8),
    color: colors.black,
    borderWidth: 1,
    borderColor: colors.grey3,
    borderRadius: moderateScale(15),
  },
  buttonStyle: {
    width: moderateScale(340),
    height: moderateScale(48),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.orange,
    marginTop: verticalScale(30),
    borderRadius: moderateScale(15),
  },
  nextStep: {
    color: colors.white,
    fontSize: textScale(18),
    fontWeight: '500',
  },
  cross: {
    width: moderateScale(30),
    height: moderateScale(30),
    left: scale(5),
  },
  cardholder: {
    color: colors.orange,
    fontSize: textScale(28),
    fontWeight: '700',
    textAlign: 'center',
  },
  layout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: moderateScale(20),
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateScale(12),
    marginTop: verticalScale(50),
    borderWidth: 1,
    borderColor: colors.grey3,
  },
  headerModal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
