import React from "react";
import {View, SafeAreaView, Text, StyleSheet} from "react-native";

const App = () => {

  const clickButton = () => {
    console.log("Kullanıcı butona tıkladı")
  }

  return(
    <SafeAreaView>
      <View style = {styles.container}>
         <Text>Hello World!</Text>
       </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "skyblue",
    margin: 10,
    padding: 10,
    borderRadius: 15
  }, 

})


export default App;