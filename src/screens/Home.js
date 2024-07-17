// src/screens/Home.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import AnimatedButton from '../components/AnimatedButton';
// import AnimatedBubbles from '../components/AnimatedBubbles';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.topHalf, { backgroundColor: '#69cb9c' }]}>
        <AnimatedButton
          text="Package"
          color="#fff"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
      <View style={[styles.bottomHalf, { backgroundColor: '#fed71a' }]}>
        <AnimatedButton
          text="Food"
          color="#333"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
      {/* <AnimatedBubbles /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topHalf: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomHalf: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
