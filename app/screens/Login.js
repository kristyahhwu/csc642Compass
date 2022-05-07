import React from 'react';
import {Button, Alert, SafeAreaView, Text, View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Classes from './Classes';


const Stack = createNativeStackNavigator();

function Login({navigation}) {
    return (
    <><Text>lkjdfffffffadsfkjasdklfjasdkdlf;ja;lksdjfl;sadjfok;asdf</Text>
    <Button
            title="Login"
            onPress={() => navigation.navigate({screen:Classes})} /></>
    );
}

export default Login;