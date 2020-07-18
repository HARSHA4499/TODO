import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import HeadFile from './components/HeadFile';
import AddTodo from './components/AddTodo';
import TodoComp from './components/TodoComp';

export default function App() {
  const [todos,setTodos] = useState([
    ])



  const pressHandler=(key,info)=>{
    setTodos((prevTodos)=>{
      Alert.alert(`u deleted "${info}" `)
      return prevTodos.filter(item=>item.key!=key)
    })
  }

  const submitHandler=(imp)=>{
    if(imp.length >3){
      setTodos((prevTodos)=>{
        return [
          {text: imp,key:Math.random().toString()},
          ...prevTodos
        ];
      });
    }
    else{
      Alert.alert('OOPS!','the todo length must be atleast 4 chars long',[{text:"understood",onPress:()=>console.log('you closed alert box')}]);
    }
    

  }
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss()
    }}>
    <View style={styles.container}>
      <HeadFile />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList 
            keyExtractor={item=>item.key.toString()}
            data={todos}
            renderItem={({item})=>(
              <TodoComp item={item} pressHandler={pressHandler}/>
            )}
          />

        </View>
      </View>
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  );

}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    flex:1,
    padding:20
  },
  list:{
    flex:1,
    marginTop:50,
    marginLeft:20

  },

});




















































































