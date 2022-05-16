import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import TextComponent from '../Components/TextComponent';


const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <TextComponent />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "lightgray"
    },
    txt: {
        fontSize: 30
    }
});

export default ProfileScreen;