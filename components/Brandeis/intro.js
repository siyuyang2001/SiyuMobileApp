import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Image, TextInput, Button, StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import ExpenditureScreen from './ExpenditureScreen'
import TourList from './TourList'
import Brandeis from './Brandeis'
import Cam from './Cam'
import Video from './Video'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const image = { uri: "https://i.pinimg.com/736x/45/ce/29/45ce2986d79fc7cd05014bd522a88834.jpg" };
  const BrandeisScreen = () => {
   return (
     <Tab.Navigator>
     <Stack.Screen name="BrandeisPage" component={BrandeisPage}
           options={{ title: 'BrandeisPage' }}/>
           <Stack.Screen name="Brandeis" component={Brandeis}
                 options={{ title: 'Brandeis' }}/>
        <Stack.Screen name="Expenditure" component={ExpenditureScreen}
           options={{ title: 'Expenditure' }}/>
        <Stack.Screen name="TourList" component={TourList}
           options={{title: 'TourList'}}/>
           <Stack.Screen name="Video" component={Video}
              options={{title: 'Video'}}/>
           <Stack.Screen name="Cam" component={Cam}
              options={{title: 'Cam'}}/>

</Tab.Navigator>

   );
 };
 const BrandeisPage = ({ navigation }) => {
   return (
       <SafeAreaView style={styles.container}>
     <View style={styles.buttonIconSeparatorStyle}>
      <Text>  {"\n"} </Text>
     <Image
       source={{
         uri:
           'https://www.iconpacks.net/icons/1/free-video-icon-818-thumb.png',
       }}
       style={styles.buttonImageIconStyle}
     />

     <View style={styles.buttonIconSeparatorStyle} />
      <Button
   title="See a Video about Brandeis"
   color='#8fbc8f'
   onPress={() =>
    navigation.navigate('Video')
   }
   />
    <Text>  {"\n"} </Text>
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
         navigation.navigate('TourList')
       }
     />
         <Text>  {"\n"} </Text>
         <Image
           source={{
             uri:
               'http://simpleicon.com/wp-content/uploads/camera.png',
           }}
           style={styles.buttonImageIconStyle}
         />

         <Button
        title="Upload your favorite picture"
        color='#add8e6'
        onPress={() =>
        navigation.navigate('Cam')
        }/>
         <Text>  {"\n"} </Text>
        <Button title="Go Home"
    onPress={() => navigation.navigate('Home')} />
         </View>

    </SafeAreaView>
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
