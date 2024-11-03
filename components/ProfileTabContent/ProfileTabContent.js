import React from 'react';
import style from './style';
import {Image, ScrollView, View} from 'react-native';

const ProfiileTabContent = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={style.profileTabContentContainer}>
      <View style={style.profileTabContent}>
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/post1.jpg')}></Image>
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/post2.jpg')}></Image>
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/post3.jpg')}></Image>
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/post4.jpg')}></Image>
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/post5.jpg')}></Image>
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/post6.jpg')}></Image>
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/post7.jpg')}></Image>
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/post8.jpg')}></Image>
      </View>
    </ScrollView>
  );
};

export default ProfiileTabContent;
