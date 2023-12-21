import * as React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import navigationStrings from '../constants/navigationStrings';
import * as Screens from '../screens';
import colors from '../constants/colors';
import {moderateScale, textScale} from '../constants/responsiveSizes';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import imagePath from '../constants/imagePath';

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView scrollEnabled={false} {...props}>
      <View style={styles.container}>
        <Text style={styles.pointBalance}>Point Balance</Text>
        <View style={styles.container1}>
          <Text style={styles.digit}>1,151</Text>
        </View>
      </View>
      <View style={styles.space} />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: colors.primary,
          width: '60%',
        },
        drawerActiveTintColor: colors.orange,
        drawerActiveBackgroundColor: colors.orange,
        drawerLabelStyle: {
          fontSize: textScale(16),
          fontWeight: '500',
          color: colors.black,
        },
      }}>
      <Drawer.Screen
        name={navigationStrings.HOME}
        component={Screens.Home}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({focused, size}) => {
            return (
              <Image
                source={imagePath.icHome}
                style={[
                  styles.drawerIcon,
                  {
                    tintColor: colors.black,
                  },
                ]}
                resizeMode="contain"
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name={navigationStrings.MY_POINTS}
        component={Screens.MyPoints}
        options={{
          drawerLabel: 'My Points',
          drawerIcon: ({focused, size}) => {
            return (
              <Image
                source={imagePath.icPoints}
                style={[
                  styles.drawerIcon,
                  {
                    tintColor: colors.black,
                  },
                ]}
                resizeMode="contain"
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name={navigationStrings.PAY_WITH_REWARDS}
        component={Screens.PayWithRewards}
        options={{
          drawerLabel: 'Pay with Rewards',
          drawerIcon: ({focused, size}) => {
            return (
              <Image
                source={imagePath.icRewards}
                style={[
                  styles.drawerIcon,
                  {
                    tintColor: colors.black,
                  },
                ]}
                resizeMode="contain"
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name={navigationStrings.TRANSACTION_ERASER}
        component={Screens.TransactionEraser}
        options={{
          drawerLabel: 'Transaction Eraser',
          drawerIcon: ({focused, size}) => {
            return (
              <Image
                source={imagePath.icTransaction}
                style={[
                  styles.drawerIcon,
                  {
                    tintColor: colors.black,
                  },
                ]}
                resizeMode="contain"
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name={navigationStrings.MANAGE_YOUR_POINTS}
        component={Screens.ManageYourPoints}
        options={{
          drawerLabel: 'Manage Your Points',
          drawerIcon: ({focused, size}) => {
            return (
              <Image
                source={imagePath.icManage}
                style={[
                  styles.drawerIcon,
                  {
                    tintColor: colors.black,
                  },
                ]}
                resizeMode="contain"
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name={navigationStrings.TRANSFER_POINTS}
        component={Screens.TransferPoints}
        options={{
          drawerLabel: 'Transfer Points',
          drawerIcon: ({focused, size}) => {
            return (
              <Image
                source={imagePath.icTransfer}
                style={[
                  styles.drawerIcon,
                  {
                    tintColor: colors.black,
                  },
                ]}
                resizeMode="contain"
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name={navigationStrings.MANAGE_ACCOUNTS}
        component={Screens.ManageAccounts}
        options={{
          drawerLabel: 'Manage Accounts',
          drawerIcon: ({focused, size}) => {
            return (
              <Image
                source={imagePath.icManage}
                style={[
                  styles.drawerIcon,
                  {
                    tintColor: colors.black,
                  },
                ]}
                resizeMode="contain"
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name={navigationStrings.ONLINE_MAIL}
        component={Screens.OnlineMail}
        options={{
          drawerLabel: 'Online Mail',
          drawerIcon: ({focused, size}) => {
            return (
              <Image
                source={imagePath.icMail}
                style={[
                  styles.drawerIcon,
                  {
                    tintColor: colors.black,
                  },
                ]}
                resizeMode="contain"
              />
            );
          },
        }}
      />

      <Drawer.Screen
        name={navigationStrings.ONLINE_TRAVEL}
        component={Screens.OnlineTravel}
        options={{
          drawerLabel: 'Online Travel',
          drawerIcon: ({focused, size}) => {
            return (
              <Image
                source={imagePath.icTravel}
                style={[
                  styles.drawerIcon,
                  {
                    tintColor: colors.black,
                  },
                ]}
                resizeMode="contain"
              />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default CustomDrawer;
