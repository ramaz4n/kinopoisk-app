import React from 'react';

import {StyleSheet, View, Text, Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native";

export const AboutPage = () => {
    const {navigate} = useNavigation();
    return (
        <View>
            <Pressable onPress={() => navigate('home')}>
                <Text style={styles.text}>Main Page</Text>
            </Pressable>

            <Text style={styles.text}>About Page</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        color: '#000',
    },
});
