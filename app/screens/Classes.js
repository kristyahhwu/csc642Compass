import React from 'react';
import {Alert, SafeAreaView, Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

function Classes({props}) {
    return (
        <View style = {styles.container}>

            <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                <Image source={require("../assets/class-icon(1).png")}/>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                <Image source={require("../assets/class-icon(2).png")}/>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                <Image source={require("../assets/class-icon(3).png")}/>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                <Image source={require("../assets/class-icon(4).png")}/>
            </TouchableOpacity> 

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row', 
        flexWrap: 'wrap',
        alignSelf: 'center',
        padding: 25,
        justifyContent: 'space-around',
        
    },

    button: {
      backgroundColor: 'transparent',
      borderRadius: 20,
      padding: 0,
      marginBottom: 20,
      shadowColor: '#303838',
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 10,
      shadowOpacity: 0.35,
    },
  });

export default Classes;