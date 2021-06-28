import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Image, TextInput, Button, StyleSheet, Text, View } from 'react-native';
import { Linking } from 'react-native';

import ExpenditureScreen from './components/Brandeis/ExpenditureScreen'
import TourList from './components/Brandeis/TourList'
import Intro from './components/Brandeis/Intro'

const Stack = createStackNavigator();

const Header = (props) => {
  return (
    <View>
      <Text style={styles.helloText}>
      {props.text}
      </Text>
    </View>
    )
}

export default function App () {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Welcome to Brandeis' }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="HELLO" component={HiSayer} />

        </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.colContainer}>
      <Text>  {"\n"} </Text>
      <Button
        title="Go to Siyu's profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Siyu Yang' })
        }/>
  <Text>  {"\n"} </Text>
      <Button
        title="Go to Brandeis University"
        color="#4169e1"
        onPress={() =>
          navigation.navigate('Intro')
        }
      />
      <Text>  {"\n"} </Text>
        <Text> {"\n"}Meet Brandeis Judge!</Text>

        <Button color='#4682b4' title="I can say hi"
        onPress={() =>
          navigation.navigate('HELLO')
        }/>
        <Text>  {"\n"} </Text>
        <Button
          title="Go to  About"
          onPress={() =>
            navigation.navigate('About')
          }
        />
        <Image
          source={{uri: "https://memegenerator.net/img/instances/66066040.jpg"}}
          style={{width: 400, height: 300}}
        />

    </View>

  );
};
const ProfileScreen = ({ navigation, route }) => {
  return(
  <View style={styles.container}>
    <Text style={styles.header}>
    This is {route.params.name}'s profile</Text>
         <Text>  {"\n"} </Text>
    <Text style={styles.body}>I am a rising junior in Brandeis University</Text>
         <Text>  {"\n"} </Text>
      <Text style={styles.body}>Brandeis has a very beautiful view...</Text>
           <Text>  {"\n"} </Text>
      <Text style={styles.body}> This is the overall view:</Text>
           <Text>  {"\n"} </Text>
      <Image
        source={{uri: "https://www.brandeis.edu/admissions/visit/images/visit.jpg"}}
        style={{width: 400, height: 200}}
      />
           <Text>  {"\n"} </Text>
      <Text style={styles.body}>This is a beautiful residence hall called skyline:</Text>
      <Image
        source={{uri: "http://schoolconstructionnews.com/wp-content/uploads/2017/12/CD.Brandeis.800.jpg"}}
        style={{width: 350, height: 200}}/>
      <Text style={styles.body}>Make yourself at home and explore Brandeis!</Text>
           <Text>  {"\n"} </Text>
    </View>
);
};



const HiSayer = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.body}>Welcome to Brandeis! Here is a list you might want to explore
        </Text>
        <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://www.brandeis.edu/')}>
        1. Explore Brandeis Main page
    </Text>

    <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://www.brandeis.edu/admissions/index.html')}>
        2. Explore Brandeis undergraduate admission page
          </Text>
          <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL('https://www.brandeis.edu/about/visiting/map.html')}>
          3. Brandeis Campus map
            </Text>
       <Image
         source={{uri: "https://www.brandeis.edu/images/judge.jpg"}}
         style={{width: 550, height: 300}}
       />
       <Button title="Go Home"
    onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const AboutScreen = ({ navigation, route }) => {
  return (
    <View>
       <Text>This was created by Siyu Yang</Text>
       <Text>contact: siyuyang@brandeis.edu</Text>
    </View>
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
  header: {
    textAlign: 'center',
   fontSize: 30,
   color:`skyblue`
 },
 body:{
   textAlign: 'center',
   fontSize: 20,
},
  colContainer: {
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  helloText: {
    fontSize: 48,
  }
});
