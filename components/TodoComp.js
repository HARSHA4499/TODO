import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoComp({item,pressHandler}) {
    return (
        <TouchableOpacity onPress={()=>pressHandler(item.key,item.text)}>
            <View style={styles.item}>
            <MaterialIcons name="delete" size={20} color="red" />
            <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'coral',
        flexDirection:"row",
        borderWidth:1.5

    },
    itemText:{
        marginLeft:10
    }
})
