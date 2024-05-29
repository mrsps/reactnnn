import React from 'react'
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  useColorScheme
} from 'react-native'

function App(): JSX.Element{
  const isDarkMode=useColorScheme()==='dark'
  return(
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container} >
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Hello!</Text>
        <Text>This is my first app </Text>
        <Text>This is a button below</Text>
        <Button title="Click me!"></Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
   },
  whiteText:{
    color:'#FFFFFF'
  },
  darkText:{
    color:'#000000'
  },
  safeArea:{
    flex:1
  }
})

export default App;