import React, { Component,useEffect,useState} from 'react';
import {
  ActivityIndicator,
  Button,
  Clipboard,
  Image,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView} from 'react-native';
import { Constants } from 'expo';
import * as Permissions from 'expo-permissions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';


export default function App() {
  const [localImg,setlocalImg] = useState(null)
  const [status,setstatus]= useState([])
  useEffect(() => {getData()},[])

  const getData = async () => {
        try {
          // the '@profile_info' can be any string
          const jsonValue = await AsyncStorage.getItem('@URI')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setSelectedImage({ localUri: data });
            console.log('just set Info, Name and Email')
          } else {
            console.log('just read a null value from Storage')
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
          await AsyncStorage.setItem('@URI', jsonValue)
          console.log('just stored '+jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
          // saving error
        }
  }
  let [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {

    return (
      <View style={styles.container}>

        <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
         <ActivityIndicator size="small" color="#0000ff" />
        <Button style={styles.button}
           title={"Store the Photo"}
           color="blue"
           onPress = {() => {
             storeData(selectedImage.localUri)
           }}
           />
        <Button style={styles.button}
          title={"Select Another Photo"}
          color="blue"
          onPress = {() => {
            setSelectedImage(null)
            storeData(null)
          }}
          />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://www.brandeis.edu/brand/images/logo/brandeis-logo-stacked-seal-blue-digital.png' }} style={styles.logo} />
      <Text style={styles.instructions}>
        Pick your favorite photo of Brandeis by just click the button below!
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 700,
    height: 190,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});
