// src/screens/Screen2.js
import React from 'react';
import Onboarding from '../components/Onboarding';
import frogImage2 from '../../assets/hrouz2.png';

const Screen2 = () => {
  return (
    <Onboarding
      image={frogImage2}
      description="Track your adventures with our amazing features."
      nextScreen="Screen3"
      skipScreen="Intro" // Update skipScreen to navigate directly to Home
      showNextSkipButtons={true} // Show Next and Skip buttons
    />
  );
};

export default Screen2;
