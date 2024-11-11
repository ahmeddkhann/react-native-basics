import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, useColorScheme } from 'react-native';

const Home = () => {
  const lightMode = useColorScheme() === "light"
  return (
    <SafeAreaView style={ lightMode? styles.container2 : styles.container1}>
      <View style={styles.content}>
        <Text style={lightMode? styles.text2 : styles.text1}>
          Hello 
        </Text>
        <Text style={lightMode? styles.text2 : styles.text1}>
          Ahmed Khan
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,                    
    backgroundColor: 'white',     
  },
  container2: {
    flex: 1,                    
    backgroundColor: 'black',     
  },
  content: {
    flex: 1,                    
    justifyContent: 'center',    
    alignItems: 'center',        
  },
  text1: {
    color: 'red',
    fontSize: 40,
  },
  text2: {
    color: 'white',
    fontSize: 40,
  },
});

export default Home;
