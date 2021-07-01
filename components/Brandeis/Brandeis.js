import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Image, TextInput, StyleSheet, Text, View,SafeAreaView ,ScrollView } from 'react-native';


const Brandeis = ({navigation,route}) => {
  return (
      <ScrollView>
    <SafeAreaView style={styles.container}>
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
      <View style={{flex: 5, flexDirection: 'row'}}>
      <Card>
              <Card.Content>
                        <Title style={{fontSize: 30, fontWeight: "bold",marginTop:10}}>Goldfarb and Farber Libriaries</Title>
                        <Paragraph>  Goldfarb and Farber Libraries are joined buildings comprising the{'\n'} main library of Brandeis University. {'\n'}The Library houses borrowing services, equipment loan, research help, {'\n'}library collections, Sound and Image Media Studios,etc. </Paragraph>
                        </Card.Content>
                        <Card.Cover source={ {uri:'https://www.brandeis.edu/library/about/visit/images/outdoor-sculpture-entrance.jpg'}} />
                    </Card>

            <Card>
              <Card.Content>
                <Title style={{fontSize: 30, fontWeight: "bold",marginTop:10}}>Brandeis Dining Halls</Title>
                <Paragraph> A well-fed Brandeis student is a happy Brandeis student!{'\n'}  We have Usdan Student Center, Sherman Dining Hall, The Stein..</Paragraph>
                </Card.Content>
                <Card.Cover source={{uri:'https://media-cdn.tripadvisor.com/media/photo-s/03/73/1c/8b/salad-bar.jpg'}}  />
            </Card>
</View>
<View style={{flex: 5, flexDirection: 'row'}}>
<Card>
        <Card.Content>
                  <Title style={{fontSize: 30, fontWeight: "bold",marginTop:10}}>Shapiro Campus Center</Title>
                  <Paragraph> The Shapiro Campus Center (SCC) is accessible by ID card 24 hours a day.  {'\n'}There are many resources housed within the building, including the info booth.  {'\n'}Students are often in their club spaces throughout the day and evening hours;  {'\n'}please check individual websites for office hours. </Paragraph>
                  </Card.Content>
                  <Card.Cover source={ {uri:'https://www.brandeis.edu/student-activities/images/shapiro-campus-center.jpg'}} />
              </Card>

      <Card>
        <Card.Content>
          <Title style={{fontSize: 30, fontWeight: "bold",marginTop:10}}>Brandeis Residence Halls</Title>
          <Paragraph> Brandeis’ beautiful 235-acre campus offers the best of both worlds — {'\n'}safety and security, as well as quick and easy access to Boston. {'\n'}The majority of Brandeis’ 3,700 undergraduate students live on {'\n'}campus each year.
</Paragraph>
          </Card.Content>
          <Card.Cover source={{uri:'https://www.brandeis.edu/dcl/images/skylinefromquad.jpg'}}  />
      </Card>
</View>

      </SafeAreaView>
      </ScrollView>
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
