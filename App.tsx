import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import math from 'mathjs'


export default function App() {

  const math = require('mathjs');

  var [displayValue, setDisplayValue] = useState('0');
  var [operand1, setOperand1] = useState(null);
  var [operator, setOperator] = useState(null);
  

  const handleClick = (value: string) =>{
    if (value === '='){
      //calculation function
      let result = calculate(displayValue)
      setDisplayValue(result)
    }

    else if (value === 'C'){
      setDisplayValue(displayValue = '0')
    }

    else if (value === 'del'){
      let trimmedValue = displayValue.trim();
      trimmedValue = trimmedValue.slice(0, -1)
      setDisplayValue(trimmedValue)
    }

    else{
      if (['+','-','*','/'].includes(value)){
        value = '  '+value+'  '
      }
      setDisplayValue(displayValue === '0' ? value : displayValue + value)
    }
  }

  const calculate = (expr : string) => {
    try {
      const result = math.evaluate(expr);
      return result.toString();
    } 
    catch (error) {
      return 'Error';
    }
  }

  const buttons = [
    '1', '2', '3', '+',
    '4', '5', '6', '-',
    '7', '8', '9', '*',
    '.', '0', '=', '/',
    'C', 'del'
  ];

  return (
    <SafeAreaView style= {styles.container}>
      <Text style= {styles.header}>CALCULATOR</Text>

      <View style= {styles.display}>
        <Text style={styles.answer}>{displayValue}</Text>
      </View>

      <View style= {styles.numpad}>
        {buttons.map((values, index ) => (
          <TouchableOpacity key={index} onPress={() => handleClick(values)}
          style = {[styles.button,['+','-','*','/'].includes(values)? styles.bg1: null,
          ['C','del'].includes(values)? styles.bg2:null,
           ['='].includes(values)? styles.bg3:null]}>
          <Text style= {styles.symbol}>{values}</Text></TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    borderColor : 'black',
    borderWidth : 2,
    margin : 3.5,
    flex: 1,
    backgroundColor : 'lightgray'
  },
  header : {
    color : 'black',
    fontSize : 25,
    textAlign : 'center',
    margin : 5
  },
  display : {
    borderColor : 'grey',
    borderWidth : 4,
    flex: 1,
    margin: 8,
    padding : 10,
    paddingRight : 25,
    backgroundColor : 'white'
  },
  numpad : {
    backgroundColor : 'white',
    borderColor : 'grey',
    borderWidth : 3,
    flex: 4,
    margin : 4,
    padding : 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  button : {
    width: '22%', 
    aspectRatio: 0.65, 
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor : 'black',
    borderWidth : 2,
    borderRadius : 12,
    padding : 6,
    margin : 3,
    marginBottom : 10
  },
  symbol : {
    fontSize : 32,
    color : 'black'
  },
  answer : {
    textAlign : 'right',
    fontSize : 30,
    color : 'red'
  },
  bg1 : {
    backgroundColor : '#79C75B'
  },
  bg2 : {
    backgroundColor : '#606F93'
  },
  bg3 : {
    backgroundColor : '#79273D'
  }
})



