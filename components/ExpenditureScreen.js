import React, { useState } from "react";
import {View,StyleSheet} from 'react-native';
import Expenditure from './Expenditure';



const ExpenditureScreen= ({ navigation, route }) => {
  return (
    <View style={{margin:'25%',marginTop:10}}>
      <Expenditure/>
    </View>
  );
};


export default ExpenditureScreen;
