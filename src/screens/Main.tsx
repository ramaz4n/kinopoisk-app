import React from 'react';

import {StyleSheet, View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const MainPage = () => {
    const {navigate} = useNavigation();

    return (
        <View>
            <Pressable onPress={() => navigate('about')}>
                <Text style={styles.text}>About Page</Text>
            </Pressable>

            <Text style={styles.text}>Main Page</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        color: '#000',
    },
});
