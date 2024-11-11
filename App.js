import React from 'react';
import { View, StyleSheet } from 'react-native';
import Home from './home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    // Ensures the root View takes the full screen
  },
});
