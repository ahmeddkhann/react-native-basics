import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Flat Cards</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'start',
        backgroundColor: 'black',
        paddingTop: 30,
        paddingLeft: 15
      },
      
  text: {
    fontSize: 25,
    color: 'white',
  },
});

export default FlatCards;
