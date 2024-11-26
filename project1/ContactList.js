import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Imran_Khan%2C_Chairman_of_the_PTI%2C_in_2023.jpg/800px-Imran_Khan%2C_Chairman_of_the_PTI%2C_in_2023.jpg",
      username: "Imran Khan",
      message: "Former Prime Minister of Pakistan"
    },
    {
      uid: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Elon_Musk_Royal_Society_crop.jpg/800px-Elon_Musk_Royal_Society_crop.jpg",
      username: "Elon Musk",
      message: "Founder of SpaceX and Tesla"
    },
    {
      uid: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/800px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
      username: "Mark Zuckerberg",
      message: "Founder of Meta"
    },
    {
      uid: 4,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/330px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg",
      username: "Steve Jobs",
      message: "Former CEO of Apple"
    }
  ];
  
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Contact List</Text>

      {contacts.map(({ uid, username, image, message }) => (
        <View key={uid} style={styles.cardContainer}>
          <Image 
            source={{ uri: image }}
            style={styles.cardImage}
          />
          <View style={styles.text}>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.message}>{message}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16, 
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8,
  },
  cardContainer: {
    backgroundColor: '#595857',
    padding: 12,
    borderRadius: 14,
    flexDirection: 'row',
    flex: 1,
    marginBottom: 8,
  },
  cardImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  text: {
    textAlign: 'center',
    marginLeft: 10,
  },
  username: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    marginTop: 2
  },
  message: {
    fontSize: 14,
    color: "#dedcd7",
    marginTop: 3
  }
});
