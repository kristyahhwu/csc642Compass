import React from 'react';
import { Alert, SafeAreaView, Text, View, StyleSheet, Button } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { borderLeftColor, borderRightColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import AnnoucePopup from './AnnouncePopup';

export default function Announcements() {
    return (
        <View>

            <View style={styles.container}>
                <Text style={styles.mainMessage}>
                    <MaterialCommunityIcons style={styles.starIcon}
                        name="star"
                        size={15}
                        color={'#ffd21c'} />Class is cancelled today.</Text>
                <Text style={styles.infoMessage}>28-Apr-2022     Mrs. Puff</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.mainMessage}>
                    <MaterialCommunityIcons style={styles.starIcon}
                        name="star"
                        size={25}
                        color={'#ffd21c'} />
                    Assignment #2 will be due on Wednesday. Please note...</Text>
                <Text style={styles.moreMessage}> More </Text>
                <Text style={styles.infoMessage}>24-Apr-2022     Mrs. Crocker</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.mainMessage}>
                    Welcome to CSC 510!</Text>
                <Text style={styles.infoMessage}>1-Apr-2022     Mrs. Frizzle</Text>
            </View>


            <AnnoucePopup />
            <StatusBar />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginHorizontal: 15,
        marginBottom: 30,
        backgroundColor: 'white',
        elevation: 3,
        borderRadius: 20,
        padding: 15,
    },

    starIcon: {
        left: 5,
        top: 5,
    },

    mainMessage: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
    },

    infoMessage: {
        fontSize: 15,
        color: 'gray',
        marginTop: 10,
        textAlign: 'right',
    },

    moreMessage: {
        color: 'purple',
        textAlign: 'right',
    },

}
) 