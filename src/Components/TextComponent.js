import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'




const TextComponent = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.txt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "lightgray",
        marginVertical: 5,
    },
    txt: {
        color: 'black',
        fontSize: 20,
        borderColor: 'black',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'justify'
    }
});

export default TextComponent;