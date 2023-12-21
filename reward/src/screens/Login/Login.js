import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import colors from '../../constants/colors';
import {scale, verticalScale} from '../../constants/responsiveSizes';
import navigationStrings from '../../constants/navigationStrings';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        bounces={false}
        style={styles.container}
        showsVerticalScrollIndicator={false}>
        {/* logo */}
        <View style={styles.logoContainer}>
          <Image
            resizeMode="contain"
            source={imagePath.icMasterCard}
            style={styles.logoStyles}
          />
        </View>
        {/* Logo word */}
        <Text style={styles.logoTextStyle}>mastercard</Text>
        <Text style={styles.logoTextStyle}>rewards</Text>
        {/* Inputs */}
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="email-address"
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Email"
            placeholderTextColor={colors.placeholderTextColor}
            style={styles.inputStyle}
          />
        </View>
        <View
          style={[
            styles.inputContainer,
            {
              marginTop: verticalScale(20),
            },
          ]}>
          <TextInput
            keyboardType="default"
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="Password"
            placeholderTextColor={colors.placeholderTextColor}
            style={styles.inputStyle}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.replace(navigationStrings.HOME)}
          activeOpacity={0.8}
          style={styles.buttonStyle}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
      {/* last text */}
      <View style={styles.lastTextContainer}>
        <Text style={styles.lastText}>New Customer?</Text>
        <Text
          style={[
            styles.lastText,
            {
              paddingLeft: scale(5),
            },
          ]}>
          Click{' '}
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate(navigationStrings.REGISTER)}>
          <Text
            style={[
              styles.lastText,
              {
                color: colors.orange,
              },
            ]}>
            here{' '}
          </Text>
        </TouchableOpacity>
        <Text style={styles.lastText}>to register </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
