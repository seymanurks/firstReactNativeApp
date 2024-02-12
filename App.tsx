import React from "react";
import {View, SafeAreaView, Text, StyleSheet} from "react-native";

const App = () => {

  return(
    <SafeAreaView style = {styles.container}>
      <View style = {styles.top_view_container}>
         <Text>First part</Text>
       </View>
       <View style = {styles.bottom_view_container}>
         <Text>Second part</Text>
       </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  top_view_container: {
    flex: 1,
    backgroundColor: "skyblue"

  }, 
  bottom_view_container: {
    flex: 1,
    backgroundColor: "pink"
  }

})


export default App;