import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
   <SafeAreaView style={styles.main}>

    <View style={styles.textContainer}>
      <Text style= {styles.flatCardText}>Flat Cards</Text>
    </View>

    <View style= {styles.mainView}>
        <View style= {[styles.cardView, styles.redCard]}>
            <Text style={styles.textColor}> red</Text>
        </View> 
        <View style= {[styles.cardView, styles.blueCard]}>
            <Text style={styles.textColor}> blue </Text>
        </View>
        <View style= {[styles.cardView, styles.greenCard]}>
            <Text style={styles.textColor}> green </Text>
        </View>
        </View>

   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    textContainer: {
        paddingLeft: 10,
        paddingTop: 35
    },
    flatCardText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    mainView: {
        flexDirection: "row",
        padding: 10
    },
    cardView: {
       
        flex: 1,
        width: 100,
        justifyContent: "center",
        height: 100,
        alignItems: "center",
        borderRadius: 4,
        marginLeft: 8
    },
    textColor: {
        color: "white"
    },
    redCard:{
        backgroundColor: "red"
    },
    blueCard:{
        backgroundColor: "blue"
    },
    greenCard:{
        backgroundColor: "green"
    },
})

export default FlatCards

