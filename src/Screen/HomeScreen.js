import * as React from 'react';
import { View, Text, StyleSheet, Button  } from 'react-native';
import ImageComponent from '../Components/ImageComponent';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <ImageComponent />
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
});

export default HomeScreen;