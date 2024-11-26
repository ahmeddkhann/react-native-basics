import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import FlatCards from './project1/flatCards';
import Scrolling from './project1/Scrolling';
import FancyCards from './project1/FancyCards';
import ActionCard from './project1/ActionCard';
import ContactList from './project1/ContactList';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatCards />
        <View style={styles.spacing} />
        <Scrolling />
        <FancyCards/>
        <ActionCard/>
        <ContactList/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spacing: {
    marginVertical: 10,  // Adjust this value for a decent space between components
  },
});
