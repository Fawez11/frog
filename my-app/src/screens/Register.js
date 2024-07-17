// src/screens/Register.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register Screen</Text>
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default Register;