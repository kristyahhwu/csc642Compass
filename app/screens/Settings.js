import React from 'react';
import { Alert, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default function Settings(props) {
    return (
        <View>
            <Text style={styles.container}>

                <MaterialCommunityIcons style={styles.allIcons}
                    name="account"
                    size={30}
                    color={'black'} />
                Your Account
            </Text>

            <Text style={styles.container}>
                <MaterialCommunityIcons style={styles.allIcons}
                    name="bell-outline"
                    size={30}
                    color={'black'} />
                Notifications
            </Text>

            <Text style={styles.emptyLine}></Text>

            <Text style={styles.container}>
                <MaterialCommunityIcons style={styles.allIcons}
                    name="exit-to-app"
                    size={30}
                    color={'black'} />
                Logout
            </Text>


            <StatusBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        marginLeft: 0,
        fontSize: 20,
        padding: 20,
        backgroundColor: '#727272',
        color: 'white',
        textAlign: 'auto',
    },

    emptyLine: {
        marginTop: 0,
        marginLeft: 0,
        fontSize: 30,
        padding: 20,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        color: 'white',
    },

    allIcons: {
        justifyContent: 'space-between'
    },


})