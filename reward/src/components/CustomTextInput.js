import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {
  moderateScale,
  scale,
  textScale,
  verticalScale,
} from '../constants/responsiveSizes';
import colors from '../constants/colors';

const CustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  customStyle,
  keyboardType,
}) => {
  return (
    <View style={[styles.inputContainer2, customStyle]}>
      <TextInput
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholderTextColor}
        style={styles.inputStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer2: {
    width: moderateScale(300),
    height: moderateScale(40),
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.grey3,
    borderRadius: moderateScale(15),
    alignSelf: 'center',
    marginTop: verticalScale(20),
  },
  inputStyle: {
    flex: 1,
    fontSize: textScale(20),
    paddingHorizontal: scale(8),
    color: colors.black,
  },
});

export default CustomTextInput;
