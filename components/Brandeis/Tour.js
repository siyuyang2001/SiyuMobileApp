import React, { useState } from "react";
import {View,StyleSheet,FlatList,Text,Button,TextInput} from 'react-native';

const renderItem = ({item}) => {
  <Text>{item.todo}</Text>
}

const ToDo = () => {
  const [data,setData] = useState([{'todo':'eat'},{'todo':'sleep'}])

  return (
    <View style={{margin:'50%',marginTop:10}}>
      <Text style={{fontSize:40, color:'dimgrey'}}>Tour List </Text>
      <FlatList
        data = {data}
        renderItem = {renderItem}
        keyExtractor={({todo}, index) => index}
        />
      <TextInput
         placeholder="item"
         />
      <Button title="add" color="darkseagreen" />
      <Text>
        data = {JSON.stringify(data)}
      </Text>
    </View>
  );
}

export default ToDo;
