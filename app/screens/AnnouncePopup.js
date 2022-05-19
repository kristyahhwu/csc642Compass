import * as React from 'react';
import { Alert, SafeAreaView, Text, View, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { borderLeftColor, borderRightColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Announcements from './Announcements';

export default function AnnoucePopup() {
    alert

    return (
        <View style={styles.container}>
            <Text>
                Assignment #2 will be due on Wednesday.
                Please note there is a typo on #5 that has been corrected.
            </Text>

            <Text style={styles.infoMessage}>24-Apr-2022     Mrs. Crocker</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        width: 150,
        height: 200,
        borderRadius: 10,
        marginVertical: 15,
        marginTop: 10,
        marginHorizontal: 25,
        backgroundColor: "white",
        textAlign: 'center',
        padding: 10,
    },

    infoMessage: {
        textAlign: 'center',
        position: 'absolute',
        bottom: 5,
        fontSize: 10,
        paddingLeft: 3,
    }

})