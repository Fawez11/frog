// src/components/Onboarding.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withRepeat, Easing } from 'react-native-reanimated';
import { TapGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';

const Onboarding = ({ image, description, nextScreen, skipScreen, showNextSkipButtons, onGetStarted }) => {
  const navigation = useNavigation();
  const scale = useSharedValue(1);
  const rotateZ = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }, { rotateZ: `${rotateZ.value}deg` }],
  }));

  const handleTouchStart = () => {
    scale.value = withSpring(1.1);
    rotateZ.value = withSpring(10);
  };

  const handleTouchEnd = () => {
    scale.value = withSpring(1);
    rotateZ.value = withSpring(0);
  };

  React.useEffect(() => {
    rotateZ.value = withRepeat(withSpring(360, { duration: 5000, easing: Easing.linear }), -1);
    return () => {
      rotateZ.value = withSpring(0);
    };
  }, []);

  const handleNext = () => {
    navigation.navigate(nextScreen);
  };

  const handleSkip = () => {
    navigation.navigate(skipScreen);
  };

  const handleGetStarted = () => {
    if (onGetStarted) {
      onGetStarted();
    } else {
      navigation.navigate('Home'); // Navigate to the Home screen
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <TapGestureHandler onBegan={handleTouchStart} onEnded={handleTouchEnd}>
          <Animated.View style={animatedStyle}>
            <Image source={image} style={styles.image} />
          </Animated.View>
        </TapGestureHandler>
      </View>
      <Text style={styles.description}>{description}</Text>
      {showNextSkipButtons && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      )}
      {!showNextSkipButtons && (
        <TouchableOpacity onPress={handleGetStarted} style={styles.getStartedButton}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      )}
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 100,
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 40,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 'auto',
    marginBottom: 40,
  },
  skipButton: {
    backgroundColor: '#69cb9c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  nextButton: {
    backgroundColor: '#fed71a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  getStartedButton: {
    backgroundColor: '#69cb9c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    position: 'absolute',
    bottom: 40,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default Onboarding;
