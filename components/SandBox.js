import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function SandBox() {
    return (
        <View style={styles.container}>
            <Text style={styles.one}>one</Text>
            <Text style={styles.two}>two</Text>
            <Text style={styles.three}>three</Text>
            <Text style={styles.four}>four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"flex-end",
        paddingTop:40,
        backgroundColor:'#ddd'
    },
    one:{
        flex:5,
        backgroundColor:"gold",
        padding:10
    },
    two:{
        flex:1,
        backgroundColor:"coral",
        padding:20
    },
    three:{
        flex:1,
        backgroundColor:"red",
        padding:30
    },
    four:{
        flex:1,
        backgroundColor:"blue",
        padding:40
    }
})
