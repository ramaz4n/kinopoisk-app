import React from 'react';
// import {StyleSheet, Text, View} from "react-native";
// import LinearGradient from 'react-native-linear-gradient';

import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MainPage} from "./src/screens/Main.tsx";
import {AboutPage} from "./src/screens/About.tsx";



const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };


  return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="about" component={AboutPage} />
                <Tab.Screen name="home" component={MainPage} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}


// const styles = StyleSheet.create({
//     text: {
//         fontSize: 24,
//         color: '#000',
//     },
//     linearGradient: {
//         backgroundColor: '#4c669f',
//     }
// });


export default App;


declare global {
    interface Console {
        blog: (arg: unknown) => void;
    }
}


console.blog = function (arg: unknown) {
    return console.log(JSON.stringify(arg, null, 2));
};

