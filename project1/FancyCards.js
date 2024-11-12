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
  const cardImage1 = {
    uri: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Badshahi_Mosque_front_picture.jpg",
  };
  const cardImage2 = {
    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Lahore_Fort_view_from_Baradari.jpg/1024px-Lahore_Fort_view_from_Baradari.jpg",
  };
  const cardImage3 = {
    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Jinnah_Mausoleum.JPG/375px-Jinnah_Mausoleum.JPG",
  };
  const cardImage4 = {
    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Baltit_Fort%2C_Karimabad%2C_Hunza%2C_Gilgit_Baltistan.jpg/1280px-Baltit_Fort%2C_Karimabad%2C_Hunza%2C_Gilgit_Baltistan.jpg",
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.mainText}>Famous Places</Text>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.cardContainer}>
          {/* First Card - Badshahi Mosque */}
          <View style={styles.card}>
            <Image source={cardImage1} style={styles.cardImage} />
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

          {/* Second Card - Lahore Fort */}
          <View style={styles.card}>
            <Image source={cardImage2} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Lahore Fort</Text>
              <Text style={styles.cardDescription}>
                The Lahore Fort, also known as Shahi Qila, is a UNESCO World
                Heritage Site and a symbol of Lahore’s rich Mughal history.
                Originally built during the reign of Akbar, the fort is known
                for its beautiful architecture and historic significance.
              </Text>
              <Text style={styles.cardAddress}>Location: Lahore, Pakistan</Text>
            </View>
          </View>

          {/* Third Card - Minar-e-Pakistan */}
          <View style={styles.card}>
            <Image source={cardImage3} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Quaid-e-Azam's Mausoleum</Text>
              <Text style={styles.cardDescription}>
                The Quaid-e-Azam's Mausoleum, located in Karachi, is the final
                resting place of Muhammad Ali Jinnah, the founder of Pakistan.
                The mausoleum is a symbol of Pakistan's struggle for
                independence and serves as a tribute to the nation's founding
                father. It is an iconic monument that attracts visitors from
                around the world.
              </Text>
              <Text style={styles.cardAddress}>
                Location: Karachi, Pakistan
              </Text>
            </View>
          </View>

          {/* Fourth Card - Karimabad */}
          <View style={styles.card}>
            <Image source={cardImage4} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Karimabad</Text>
              <Text style={styles.cardDescription}>
                Karimabad, located in the Hunza Valley, is a beautiful town
                surrounded by majestic peaks like Rakaposhi and Ultar Sar. It's
                famous for its stunning landscapes, hiking trails, and
                historical sites such as Baltit Fort.
              </Text>
              <Text style={styles.cardAddress}>
                Location: Hunza Valley, Gilgit-Baltistan, Pakistan
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  mainText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
  cardContainer: {
    flexDirection: "row",
    paddingHorizontal: 14,
  },
  card: {
    backgroundColor: "#0f6475",
    borderRadius: 12,
    width: 330,
    marginRight: 16,
  },
  cardImage: {
    height: 180,
    width: "100%", // Ensure the image width is set to fill the container
    resizeMode: "cover", // Make sure the image covers the container well
  },
  cardContent: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 14,
    color: "#d1d1d1",
    lineHeight: 20,
    marginBottom: 8,
  },
  cardAddress: {
    fontSize: 13,
    color: "#ffffff",
    fontWeight: "bold",
  },
});
