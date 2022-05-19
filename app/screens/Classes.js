import React, { useState } from 'react';
import {Alert, SafeAreaView, Modal, Image, StyleSheet, Text, View, TouchableOpacity, Pressable } from "react-native";
import { FormattedText } from 'react-native-formatted-text';

function Classes({props}) {

    const [classOneOpen, setOneOpen] = useState(false);
    const [classTwoOpen, setTwoOpen] = useState(false);
    const [classThreeOpen, setThreeOpen] = useState(false);
    const [classFourOpen, setFourOpen] = useState(false);

    return (


        <View>
            <View style={styles.modalBackground}>
                <Modal visible={classOneOpen} transparent={true} animationType="fade">
                    <View style = {styles.modalContainer}>
                        <Text>😃</Text>
                        <View style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                            <Pressable style={[styles.closeButton, styles.buttonClose]} onPress={() => setOneOpen(false)}>

                                <Text style = {{color:'lightgrey'}}>Close</Text>


                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Modal visible={classTwoOpen} transparent={true} animationType="fade">
                    <View style = {styles.modalContainer}>
                        <Text>Yo</Text>
                        <View style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                        <Pressable style={[styles.closeButton, styles.buttonClose]} onPress={() => setTwoOpen(false)}>
                            <Text>Close</Text>
                        </Pressable>
                        </View>
                    </View>
                </Modal>
                <Modal visible={classThreeOpen} transparent={true} animationType="fade">
                    <View style = {styles.modalContainer}>
                        <Text>Yo</Text>
                        <View style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                        <Pressable style={[styles.closeButton, styles.buttonClose]} onPress={() => setThreeOpen(false)}>
                            <Text>Close</Text>
                        </Pressable>
                        </View>
                    </View>
                </Modal>
                <Modal visible={classFourOpen} transparent={true} animationType="fade">
                    <View style = {styles.modalContainer}>
                        <Text>Yo</Text>
                        <View style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                        <Pressable style={[styles.closeButton, styles.buttonClose]} onPress={() => setFourOpen(false)}>
                            <Text>Close</Text>
                        </Pressable>
                        </View>
                    </View>
                </Modal>

                </View>

                <View style = {styles.container}>
                <TouchableOpacity style={styles.button} onPress={()=>setOneOpen(true)}>
                    <Image source={require("../assets/class-icon(1).png")}/>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.button} onPress={()=>setTwoOpen(true)}>
                    <Image source={require("../assets/class-icon(2).png")}/>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.button} onPress={()=>setThreeOpen(true)}>
                    <Image source={require("../assets/class-icon(3).png")}/>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.button} onPress={()=>setFourOpen(true)}>
                    <Image source={require("../assets/class-icon(5).png")}/>
                </TouchableOpacity> 
            </View>



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

    closeButton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        
    },

    buttonClose: {
        justifyContent: 'flex-end',
        backgroundColor: "#211C70",

    },

    modalContainer:{

        margin: 100,
        width: 250,
        height: 350,
        backgroundColor: 'white',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 7,

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,


    },

    modalBackground:{
        backgroundColor: '#00000080'
    },
  });

export default Classes;