import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function HeadFile() {
    return (
        <View style={styles.head}>
            <Text style={styles.title}>MY TODOS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    head: {
        backgroundColor:'coral',
        height:60,
        paddingTop:30


    },
    title:{
        textAlign:'center',
        fontStyle:'italic',
        fontWeight:'bold',
        fontSize:14,
        color:'#fff'
    }
});




