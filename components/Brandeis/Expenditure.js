import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";



const Expenditure = (props) => {
  const [living, setLiving] = useState(0);
  const [rent, setRent] = React.useState(0);
  const [aid, setAid] = useState(0);
  const [expenditure, setExpenditure] = useState(0);
    return (
  <View style={styles.container}>
    <Text style={styles.header}>
       Brandeis yearly expenditure calculator{props.rent}
    </Text>
    <Text style={styles.textinput}>
    Enter your monthly cost of living(without rent):
    </Text>
    <TextInput
      style={{
        height: 30,
        borderColor: 'gray',
        borderWidth: 0.8,

      }}
          onChangeText={text => {setLiving(parseFloat(text))}}
      />

    <Text style={styles.textinput}>
      {"\n"}
      Do you expect/received any financial aid? Enter the amount of your finAid.
      {"\n"}
      </Text>
      <TextInput
        style={{
          height: 30,
          borderColor: 'gray',
          borderWidth: 0.8,
        }}
            onChangeText={text => {setAid(parseFloat(text))}}
        />
        <Text style={styles.textinput}>
        {"\n"}
        What is your expected rent in US dollars?
            </Text>
            <Text>
        If you are not sure, here are some helpful informations for reference:  {"\n"}
        1. Off campus high-end apartments in waltham: around $1600 per month  {"\n"}
        2. On campus housing: around $1100 per month/ $5500 per semester  {"\n"}
        3. Off campus houses: around $700 {"\n"}

        {"\n"}</Text>
        <TextInput
          style={{
            height: 30,
            borderColor: 'gray',
            borderWidth: 0.8,
          }}
              onChangeText={text => {setRent(parseFloat(text))}}
          />
    <Button
          color='#b0c4de' title='Calculate general expenditure'
          onPress = {() =>
               setExpenditure(55340+living*12-aid+12*rent)}
      />
    <Text>{"\n"} The approximate yearly expenditure is ${expenditure} </Text>
    
  </View>
      );
    }
  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textinput:{
      margin:20,
      fontSize:20
    },
    header: {
      fontSize:30,
      color:`#2f4f4f`
    },
  });

export default Expenditure;
