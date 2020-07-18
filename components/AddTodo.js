import React,{useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, Keyboard } from 'react-native'



export default function AddTodo({submitHandler}) {
    const [text, setText] = useState('')
    const changeHandler=(val)=>{
        setText(val);

    }


    return (
        <View>
            <TextInput 
                placeholder="Add what u want to do"
                style={styles.input}
                onChangeText={(val)=>changeHandler(val)}
                clearTextOnFocus={true}
            />
            <TouchableOpacity onPress={()=>{return (submitHandler(text),Keyboard.dismiss())}}  style={styles.button}>
                <Text style={styles.text}>
                    Add Todo
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        paddingHorizontal:20,
        marginBottom:12,
        paddingVertical:8,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'

    },
    button:
    {
       borderWidth: 1, 
       borderRadius: 80,
       borderColor: 'coral',
       width: '80%',
       padding:5,
       backgroundColor: 'coral',
       marginHorizontal:25
 
    },
 
    text:
    {
        textAlign: 'center',
        color: 'white',
        padding: 5,
        fontWeight:'bold'
    
    }
    
})
