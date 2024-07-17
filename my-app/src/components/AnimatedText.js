// src/components/AnimatedText.js
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const AnimatedText = ({ text, color, onPress }) => {
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const handlePressIn = () => {
    translateY.value = withSpring(-10, { damping: 10, stiffness: 100 });
  };

  const handlePressOut = () => {
    translateY.value = withSpring(0, { damping: 10, stiffness: 100 });
  };

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Animated.View style={[styles.textContainer, animatedStyle]}>
        <Text style={[styles.text, { color }]}>{text}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'transparent',
    elevation: 5,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
});

export default AnimatedText;
