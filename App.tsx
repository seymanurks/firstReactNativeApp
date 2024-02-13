import React from "react";
import {View, SafeAreaView, Text, StyleSheet} from "react-native";

const App = () => {

  return(
    <SafeAreaView style = {styles.container}>
      <View style = {styles.blue_container}/>
      <View style = {styles.pink_container}/>
      <View style = {styles.blue_container}/>
      <View style = {styles.pink_container}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "lightyellow",
    justifyContent: "space-between",
    alignItems: "center"
  }, 
  blue_container: {
    backgroundColor: "skyblue",
    width: 100,
    height: 100

  }, 
  pink_container: {
    backgroundColor: "pink",
    width: 100,
    height: 100
  }

})


export default App;