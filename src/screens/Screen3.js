// src/screens/Screen3.js
import React from 'react';
import Onboarding from '../components/Onboarding';
import frogImage3 from '../../assets/hrouz3.png';

const Screen3 = () => {
  return (
    <Onboarding
      image={frogImage3}
      description="Enjoy delicious offers and have fun!"
      nextScreen="Intro"
      skipScreen="Intro" // Update skipScreen to navigate directly to Home
      showNextSkipButtons={true} // Show Next and Skip buttons
    />
  );
};

export default Screen3;
