import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";

const Scrolling = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text style={styles.headerText}>Elevated Cards</Text>
      </View>

      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.cardText}>Tap</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>to</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>Learn</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>More</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>About</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>Us</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>😜</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  headerText: {
    fontSize: 20,
    marginLeft: 2,
    fontWeight: "bold",
    paddingLeft: 5,
  },
  container: {
    padding: 8,
    flexDirection: "row",
  },
  card: {
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    borderRadius: 4,
    margin: 5,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    // Shadow for Android
    elevation: 5,
  },
  cardText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default Scrolling;


