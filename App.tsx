import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [count,setCount] = useState(10)
  const [text1, setText1] = useState("")
   
  const onpress1=()=>{
    setCount(count+10)
  }
  const student:string = "Aijaz";
  const onpress=(name1:string)=>{
    setText1(name1)
  }
  const setVal=()=>{
    onpress(student)

  }
  return (
    <View>
      <Text style={{fontSize:count}} >{text1}</Text>
      <Button title='press' onPress={onpress1}></Button>
      <Button title='press' onPress={setVal}></Button>
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({

})