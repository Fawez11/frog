// src/screens/Screen1.js
import React from 'react';
import Onboarding from '../components/Onboarding';
import frogImage1 from '../../assets/hrouz1.png';

const Screen1 = () => {
  return (
    <Onboarding
      image={frogImage1}
      description="Welcome to our app! Let's get started with some fun."
      nextScreen="Screen2"
      skipScreen="Intro" // Update skipScreen to navigate directly to Home
      showNextSkipButtons={true} // Show Next and Skip buttons
    />
  );
};

export default Screen1;
