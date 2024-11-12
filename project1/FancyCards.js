import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";

export default function FancyCards() {
  const cardImage = {
    uri: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Badshahi_Mosque_front_picture.jpg",
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.mainText}>Famous Places</Text>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image source={cardImage} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Badshahi Mosque</Text>
            <Text style={styles.cardDescription}>
              The Badshahi Mosque is one of the largest mosques in the world,
              renowned for its stunning Mughal architecture. Built by Emperor
              Aurangzeb in 1673, it remains a symbol of Lahore’s rich cultural
              heritage.
            </Text>
            <Text style={styles.cardAddress}>
              Location: Near Lahore Fort, Lahore, Pakistan
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 6,
  },
  cardImage: {
    height: 220,
  },
  card: {
    padding: 25,
    backgroundColor: "#0f6475",
  },
  cardContainer: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    marginTop: 10,
  },
  cardDescription: {
    fontSize: 12,
    color: "white",
    marginTop: 8,
  },
  cardAddress: {
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
    marginTop: 6,
  },
});
