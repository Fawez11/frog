// src/screens/Intro.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Onboarding from '../components/Onboarding';
import homeImage from '../../assets/hrouz4.png'; // Replace with your home image

const Intro = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate('Home'); // Navigate to the Home screen when Get Started is clicked
  };

  return (
    <View style={styles.container}>
      <Onboarding
        image={homeImage}
        description="Welcome to the Intro Screen! Explore our app features."
        nextScreen="Home" // Navigate to Home screen after Intro
        showNextSkipButtons={false} // Show the Get Started button only on the Intro screen
        onGetStarted={handleGetStarted} // Pass the navigation handler
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Intro;
