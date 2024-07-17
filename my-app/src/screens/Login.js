// src/screens/Login.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <Button title="Go to Register" onPress={() => navigation.navigate('Register')} />
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

export default Login;