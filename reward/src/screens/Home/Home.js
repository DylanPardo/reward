import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import {scale, verticalScale} from '../../constants/responsiveSizes';
import dummyData from '../../constants/dummyData';
import {useNavigation} from '@react-navigation/native';
import colors from '../../constants/colors';

const Home = () => {
  const navigation = useNavigation();
  function renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          activeOpacity={0.8}
          style={styles.menuCont}>
          <Image
            tintColor={colors.white}
            source={imagePath.icMenu}
            style={styles.menu}
          />
        </TouchableOpacity>
        <Text style={styles.welcomeText}>Welcome back Dylan!</Text>
        <Image
          resizeMode="contain"
          source={imagePath.icMasterCard}
          style={styles.masterCard}
        />
      </View>
    );
  }

  function renderItem({item, index}) {
    const isFirstChild = index === 0;
    const isLastChild = index === item.id.length - 1;

    return (
      <View
        style={[
          styles.box,
          {
            marginLeft: isFirstChild ? scale(18) : scale(10),
            marginRight: isLastChild ? scale(18) : 0,
          },
        ]}
      />
    );
  }

  function renderFeaturedList() {
    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentContainerStyle}
        data={dummyData.featuredItems}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView
        style={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}>
        {/* Your Rewards */}
        <View style={styles.infoRewards}>
          <Text style={styles.yourReward}>Your Rewards</Text>
          <View style={styles.cardContainer}>
            <View style={styles.stats}>
              <View style={styles.headingLayout}>
                <Text style={styles.heading}>This Month</Text>
              </View>
              <Text style={styles.subHeading}>$108.22</Text>
            </View>
            <View style={styles.stats}>
              <View style={styles.headingLayout}>
                <Text style={styles.heading}>This Year</Text>
              </View>
              <Text style={styles.subHeading}>$1150.48</Text>
            </View>
            <View style={styles.stats}>
              <View style={styles.headingLayout}>
                <Text style={styles.heading}>All Time</Text>
              </View>
              <Text style={styles.subHeading}>$1150.48</Text>
            </View>
          </View>
        </View>

        {/* Feature Items */}
        <Text style={styles.featured}>Featured Items</Text>
        {/* List of featured items */}
        {renderFeaturedList()}
        {/* Feature Items */}
        <Text style={styles.featured}>Popular Items</Text>
        {/* List of featured items */}
        {renderFeaturedList()}
        {/* Feature Items */}
        <Text style={styles.featured}>Recently Viewed Items</Text>
        {/* List of featured items */}
        {renderFeaturedList()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
