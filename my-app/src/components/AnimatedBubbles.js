// src/components/AnimatedBubbles.js
import React, { useState } from 'react';
import { View, StyleSheet, useWindowDimensions, TouchableWithoutFeedback } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';

const AnimatedBubbles = () => {
  const { width: containerWidth, height: containerHeight } = useWindowDimensions();
  const [swimBubbles, setSwimBubbles] = useState(false);

  const bubbles = Array.from({ length: 30 }, (_, index) => ({
    id: index,
    size: Math.random() * 50 + 50, // Bubble sizes between 50 and 100
    color: index % 2 === 0 ? 'rgba(105, 203, 156, 0.5)' : 'rgba(254, 215, 26, 0.5)', // Using colors with transparency
    speed: Math.random() * 5000 + 2000, // Adjusted speed range for slow bubbles
    initialX: index % 2 === 0 ? 0 : containerWidth - (Math.random() * 100 + 50), // Random X position in corners
    initialY: index >= 15 ? 0 : containerHeight - (Math.random() * 100 + 50), // Random Y position in corners
  }));

  const animatedStyles = bubbles.map((bubble) => {
    const translateX = useSharedValue(bubble.initialX);
    const translateY = useSharedValue(bubble.initialY);

    if (swimBubbles) {
      translateX.value = withRepeat(
        withTiming(bubble.initialX === 0 ? containerWidth - bubble.size : 0, { duration: bubble.speed }),
        -1,
        true
      );
      translateY.value = withRepeat(
        withTiming(bubble.initialY === 0 ? containerHeight - bubble.size : 0, { duration: bubble.speed }),
        -1,
        true
      );
    }

    return useAnimatedStyle(() => ({
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    }));
  });

  const handlePress = () => {
    setSwimBubbles(!swimBubbles); // Toggle swimming animation
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {bubbles.map((bubble, index) => (
          <Animated.View
            key={bubble.id}
            style={[
              styles.bubble,
              {
                width: bubble.size,
                height: bubble.size,
                borderRadius: bubble.size / 2,
                backgroundColor: bubble.color,
                left: bubble.initialX,
                top: bubble.initialY,
              },
              animatedStyles[index],
            ]}
          />
        ))}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    position: 'absolute',
  },
});

export default AnimatedBubbles;
