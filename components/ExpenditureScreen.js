import React, { useState } from "react";
import {View,StyleSheet} from 'react-native';
import Expenditure from './Expenditure';



const ExpenditureScreen= ({ navigation, route }) => {
  return (
    <View style={{margin:'25%',marginTop:10}}>

<Expenditure rent= {800}/>
<Expenditure rent= {1200}/>
          </View>
  );
};


export default ExpenditureScreen;
