import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const CustomImage = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/Img/MohAvatar.png')} />
        </View>
    );
};

export default CustomImage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "lightgray"
    },
    img: {
        width: 200,
        height: 200
    }
});