import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Image, TextInput, Button, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import ExpenditureScreen from './ExpenditureScreen'
import ToDoList from './ToDoList'
import Brandeis from './Brandeis'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

  const BrandeisScreen = () => {
   return (
     <Tab.Navigator>
     <Stack.Screen name="BrandeisPage" component={BrandeisPage}
           options={{ title: 'BrandeisPage' }}/>
           <Stack.Screen name="Brandeis" component={Brandeis}
                 options={{ title: 'Brandeis' }}/>
        <Stack.Screen name="Expenditure" component={ExpenditureScreen}
           options={{ title: 'Expenditure' }}/>
        <Stack.Screen name="ToDoList" component={ToDoList}
           options={{title: 'ToDoList'}}/>

</Tab.Navigator>

   );
 };
 const BrandeisPage = ({ navigation }) => {
   return (
     <View style={styles.container}>
     <View style={styles.buttonIconSeparatorStyle}>

     <Image
       source={{
         uri:
           'https://cdn2.iconfinder.com/data/icons/user-interface-icons-bundle-4/32/228-512.png',
       }}
       style={styles.buttonImageIconStyle}
     />
          <View style={styles.buttonIconSeparatorStyle} />
           <Button
       title="Calculate expenditure"
       color='#b0c4de'
       onPress={() =>
         navigation.navigate('Expenditure')
       }
     />

       <Text>  {"\n"} </Text>
          <Image
            source={{
              uri:
                'https://www.brandeis.edu/brand/images/logo/seal.jpg',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
           <Button
       title="Go to Brandeis"
       color='#8fbc8f'
       onPress={() =>
         navigation.navigate('Brandeis')
       }
     />
         <Text>  {"\n"} </Text>
          <Image
            source={{
              uri:
                'https://www.pinclipart.com/picdir/middle/212-2127349_tour-travel-png-vectors-tours-and-travels-png.png',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
           <Button
       title="Make a tour list"
       color='#add8e6'
       onPress={() =>
         navigation.navigate('ToDoList')
       }
     />
         <Text>  {"\n"} </Text>
         </View>

     </View> //54 view
   );
 };

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     flexDirection:'column',
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',

   },
   headerText: {
     fontSize: 40,
     color: 'blue'
   },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
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
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
  },

 });

 export default BrandeisScreen;
