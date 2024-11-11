import React from 'react'
import { View, SafeAreaView, Text, StyleSheet} from 'react-native'
import { useColorScheme } from 'react-native'

const Home = () => {

  return (
   
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
        <Text style= {styles.text}>
          Hello Ahmad!
        </Text>
      </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 40
  },
  safeArea: {
    backgroundColor: "black"
  },
  text: {
    color: "white",
    fontSize: 20
  }
})

export default Home