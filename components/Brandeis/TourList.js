import React, { useState, useEffect }  from 'react';
import { SafeAreaView, ScrollView, View, Button,
         FlatList, StyleSheet, Text, TextInput, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ToDoList = (props) => {
  const [tour,setTour] = useState("")
  const [dueDate,setDueDate] = useState("")
  const [comment,setComment] = useState("")
  const [places,setPlaces]= useState([])

  useEffect(() => {getData()},[])

  const getData = async () => {
        try {
          // the '@profile_info' can be any string
          const jsonValue = await AsyncStorage.getItem('@todo_list')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setPlaces(data)
            console.log('just set Info, Name and Email')
          } else {
            console.log('just read a null value from Storage')
            setInfo({})
            setName("")
            setEmail("")
          }

        } catch(e) {
          console.log("error in getData ")
          console.dir(e)
          // error reading value
        }
  }

  const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@todo_list', jsonValue)
          console.log('just stored '+jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
          // saving error
        }
  }

  const clearAll = async () => {
        try {
          console.log('in clearData')
          await AsyncStorage.clear()
        } catch(e) {
          console.log("error in clearData ")
          console.dir(e)
          // clear error
        }
  }


  const renderTodoItem = ({item}) => {
    return (
      <View>
        <Text style={styles.body}>
           <Text>{item.tour} in </Text>
           <Text> {item.dueDate} </Text>
           <Text> -- {item.comment} </Text>
        </Text>
      </View>
    )
  }

  let debug=false
  const debugView =
    (<View>
      <Text style={styles.headerText}>
        DEBUGGING INFO
      </Text>
      <Text>
         The place is ({tour})
      </Text>
      <Text>
         dueDate is ({dueDate})
      </Text>
      <Text>
         comment is ({comment})
      </Text>
      <Text>
         The place is {JSON.stringify(places)}
      </Text>
  </View>);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> Personal Brandeis Tour List</Text>
     <View style={styles.content}>
        <TextInput
         label='name of the place'
           style={{ width: 180, borderColor: 'gray', borderWidth: 1 }}
          placeholder="Enter the place "
          onChangeText={text => {
               setTour(text);
             }}
          value = {tour}
        />
</View>
 <View style={styles.content}>
        <TextInput
           style={{ width: 180, borderColor: 'gray', borderWidth: 1 }}
          placeholder="Enter upper/lower campus"
          onChangeText={text => {
               setDueDate(text);
             }}
          value = {dueDate}
        />
        </View>
 <View style={styles.content}>

        <TextInput
         style={{ width: 180, borderColor: 'gray', borderWidth: 1 }}
          placeholder="Enter your comment"
          editable = {true}
          maxLength={100}
          onChangeText={text => {
               setComment(text);
             }}
          value = {comment}

        />
      </View>
      <View>
        <Button
           title={"add"}
          style={styles.button}
           onPress = {() => {
             const newToDoItems =
               places.concat(
                 {'tour':tour,
                 'dueDate':dueDate,
                 'comment':comment,
                 'date':new Date()
               })
             setPlaces(newToDoItems)
             storeData(newToDoItems)
             setTour("")
             setDueDate("")
             setComment("")
           }}
           />
      </View>
      <FlatList
        data={places}
        renderItem={renderTodoItem}
        keyExtractor={item => item.date}
      />
      {debug?debugView: <Text>""</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#eee',
    justifyContent: 'center',
    textAlign:'center',
    marginTop:30,
    padding:40,
  },
  content:{
  marginTop: 40,
  justifyContent: 'center',
  alignItems: 'center',
  textAlign:'center',
  backgroundColor: 'white',
  width: 1350,
  height: 80
  },
  todoItem:{
    justifyContent:'center',
  },
  headerText: {
    textAlign:'center',
    backgroundColor:'steelblue',
    fontSize: 20,
    padding:20,
  },
  body:{
   flexDirection:'row',
   justifyContent: 'space-between',
   fontSize: 30,
 },
  button: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
    width: '100%',
      height: '30%',
    textAlign:'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },

});


export default ToDoList;
