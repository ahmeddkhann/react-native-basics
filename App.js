import React from 'react';
import { View, StyleSheet } from 'react-native';
import FlatCards from './project1/flatCards';


export default function App() {
  return (
    <View style={styles.container}>
      <FlatCards/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
});
