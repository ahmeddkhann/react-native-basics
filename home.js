import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text1}>
          Hello 
        </Text>
        <Text style={styles.text2}>
          Ahmed Khan
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,                    
    backgroundColor: 'blue',     
  },
  content: {
    flex: 1,                    
    justifyContent: 'center',    
    alignItems: 'center',        
  },
  text1: {
    color: 'white',
    fontSize: 40,
  },
  text2: {
    color: 'white',
    fontSize: 40,
  },
});

export default Home;
