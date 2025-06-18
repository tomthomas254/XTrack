import {View, Text, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {styles} from './style';

const SplashScreen = () => {
  const fontSize = useRef(new Animated.Value(20)).current;
  useEffect(() => {
    Animated.timing(fontSize, {
      toValue: 40, // Target font size
      duration: 500, // Animation duration in milliseconds
      useNativeDriver: false, // `false` because `fontSize` is a layout property
    }).start();
  }, []);
  return (
    <View style={styles.wrapper}>
      <Animated.Text style={[styles.text, {fontSize}]}>
        <Text>XTrack</Text>
      </Animated.Text>
    </View>
  );
};

export default SplashScreen;
