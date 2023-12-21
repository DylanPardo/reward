import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import colors from '../../constants/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Modal from 'react-native-modal';
import {moderateScale, scale} from '../../constants/responsiveSizes';
import CustomTextInput from '../../components/CustomTextInput';

const Register = ({navigation}) => {
  const [accountNumber, setAccountNumber] = useState('');
  const [customerNumber, setCustomerNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [country, setCountry] = useState('');
  const [province, setProvince] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [ssn, setSsn] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  function renderModal() {
    return (
      <Modal isVisible={isModalVisible}>
        <KeyboardAwareScrollView
          bounces={false}
          contentContainerStyle={styles.modalContentContainer}>
          <View style={styles.headerModal}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Image
                tintColor={colors.orange}
                source={imagePath.icCross}
                style={styles.cross}
              />
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
              }}>
              <Text style={styles.cardholder}>Cardholder Info</Text>
            </View>
          </View>

          <CustomTextInput
            keyboardType="decimal-pad"
            value={customerNumber}
            onChangeText={text => setCustomerNumber(text)}
            placeholder="Customer Number"
          />

          <View style={styles.layout}>
            <CustomTextInput
              value={firstName}
              onChangeText={text => setFirstName(text)}
              placeholder="First Name"
              customStyle={{
                width: moderateScale(140),
              }}
            />

            <CustomTextInput
              value={lastName}
              onChangeText={text => setLastName(text)}
              placeholder="Last Name"
              customStyle={{
                width: moderateScale(140),
                marginLeft: scale(20),
              }}
            />
          </View>
          {/* Select Country */}
          <TouchableOpacity activeOpacity={0.8} style={styles.sortCountry}>
            <View style={styles.accountTypeCont}>
              <Text style={styles.AccountType}>United States</Text>
            </View>
            <Image
              resizeMode="contain"
              source={imagePath.icSortDown}
              style={styles.downArrow}
            />
          </TouchableOpacity>

          <CustomTextInput
            value={address1}
            onChangeText={text => setAddress1(text)}
            placeholder="Address1"
          />

          <CustomTextInput
            value={address2}
            onChangeText={text => setAddress2(text)}
            placeholder="Address 2"
          />

          <View style={styles.layout}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.sortCountry,
                {
                  width: moderateScale(140),
                },
              ]}>
              <View style={styles.accountTypeCont}>
                <Text style={styles.AccountType}>State</Text>
              </View>
              <Image
                resizeMode="contain"
                source={imagePath.icSortDown}
                style={styles.downArrow}
              />
            </TouchableOpacity>

            <CustomTextInput
              value={zipCode}
              onChangeText={text => setZipCode(text)}
              placeholder="Zip Code"
              customStyle={{
                width: moderateScale(140),
                marginLeft: scale(20),
              }}
            />
          </View>

          <CustomTextInput
            value={ssn}
            onChangeText={text => setSsn(text)}
            placeholder="Last 4 Digits of SSN"
          />
          <TouchableOpacity
            onPress={toggleModal}
            activeOpacity={0.8}
            style={[
              styles.buttonStyle,
              {
                backgroundColor: colors.orange,
                borderWidth: 1,
                borderColor: colors.white,
                width: moderateScale(300),
                height: moderateScale(40),
              },
            ]}>
            <Text style={styles.nextStep}>Register</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </Modal>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        bounces={false}
        style={styles.container}
        showsVerticalScrollIndicator={false}>
        {/* Back Arrow */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.header}
          onPress={() => navigation.goBack()}>
          <Image
            tintColor={colors.orange}
            source={imagePath.icLeftArrow}
            style={styles.leftArrow}
          />
        </TouchableOpacity>

        {/* All Content */}
        <View style={styles.allContent}>
          <Image
            resizeMode="contain"
            source={imagePath.icMasterCard}
            style={styles.masterCard}
          />
          <Text style={styles.registrationText}>Registration</Text>
          {/* Sort Account Type */}
          <TouchableOpacity activeOpacity={0.8} style={styles.sortAccountType}>
            <View style={styles.accountTypeCont}>
              <Text style={styles.AccountType}>Account Type</Text>
            </View>
            <Image
              resizeMode="contain"
              source={imagePath.icSortDown}
              style={styles.downArrow}
            />
          </TouchableOpacity>
          {/* Account Number */}
          <View style={styles.inputContainer}>
            <TextInput
              keyboardType="decimal-pad"
              value={accountNumber}
              onChangeText={text => setAccountNumber(text)}
              placeholder="Account Number"
              placeholderTextColor={colors.placeholderTextColor}
              style={styles.inputStyle}
            />
          </View>
          <TouchableOpacity
            onPress={toggleModal}
            activeOpacity={0.8}
            style={styles.buttonStyle}>
            <Text style={styles.nextStep}>Next Step</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      {isModalVisible && renderModal()}
    </SafeAreaView>
  );
};

export default Register;
