import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Linking, Image } from 'react-native';
import React, { useState } from 'react';
import Ahmed from "../Ahmed.png";

export default function ActionCard() {
    function openWebsite(websiteLink) {
        Linking.openURL(websiteLink);
    }

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.headingText}>
                    Action Card
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subtitle}>
                    Want to know more about me?
                </Text>
                
                <Image 
                    source={Ahmed}
                    style={styles.image}
                />
                
                <Text style={styles.description} numberOfLines={isExpanded ? undefined : 2}>
                    My name is Muhammad Ahmad and I am a student of Computer Science. I am a
                    Full Stack Web and React Native Developer. I am also the founder of 
                    Infinities Solutions. I started my coding journey back in Nov 2023.
                    I also serve as a trainer at Codematics Inc.
                </Text>
                
                <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
                    <Text style={styles.toggleText}>
                        {isExpanded ? "Show Less" : "Show More"}
                    </Text>
                </TouchableOpacity>

                <Text style={styles.subtitle}>
                    Want to follow me?
                </Text>

                <View style={styles.socialButtons}>
                    <TouchableOpacity onPress={() => openWebsite("https://www.instagram.com/iahmedkhan._/")}>
                        <Text style={styles.socialText}>Instagram</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => openWebsite("https://www.facebook.com/profile.php?id=100018416598943")}>
                        <Text style={styles.socialText}>Facebook</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
    },
    card: {
        backgroundColor: '#D3D3D3',
        borderRadius: 10,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    image: {
        width: 120,
        height: 160,
        borderRadius: 50,
        alignSelf: 'center',
        marginVertical: 12,
    },
    description: {
        fontSize: 14,
        color: '#555',
        textAlign: 'justify',
        marginBottom: 12,
    },
    toggleText: {
        fontSize: 14,
        color: '#f58d42',
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 8,
    },
    socialButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    socialText: {
        fontSize: 16,
        color: '#f58d42',
        fontWeight: '600',
    },
});
