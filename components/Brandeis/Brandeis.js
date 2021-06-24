import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Image, TextInput, Button, StyleSheet, Text, View } from 'react-native';


const Brandeis = ({navigation,route}) => {
  const [place, setPlace] = useState('library');
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
      First, Tell us your name:
      </Text>
      <View style={{flexDirection:'column'}}>
        <Name/>
        <Text style={styles.body}>
        Brandeis University is a private research university in Waltham, Massachusetts that was founded in 1948.{"\n"}
        It has a total undergraduate enrollment of 3,688, its setting is suburban, and the campus size is 235 acres.{"\n"}{"\n"}

        </Text>
      </View>
      <Image
        source={{uri: "https://www.brandeis.edu/hiatt/employers/images-2017/brandeis-sign.jpg"}}
        style={{width: 550, height: 300}}
      />
      <Text style={styles.helloText}>
        Which part of Brandeis you want to explore?
      </Text>
      <Text style={styles.body}>
      Library? Cafeteria? Gym? Name what ever you are interested!
      </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,

        }}
        onChangeText={text => {setPlace(text);}}
      />

    </View>
  );
}
const Name = (props) => {
  const [text, setText] = useState(props.name);
  return (
    <View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        onChangeText={text => {setText(text);}}
      />
      <Text style={styles.helloText}>Hi {text}, welcome to Brandeis online!
      Here, you will have a chance to see every part of Brandeis!{"\n"} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      flexDirection:'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
   fontSize: 40,

 },
 body:{
   textAlign: 'center',
   fontSize: 20,
},
  rowContainer: {
    flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  helloText: {
    fontSize: 25,
  }
});
export default Brandeis;
