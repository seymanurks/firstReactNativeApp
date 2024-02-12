import React from "react";
import {View, SafeAreaView, Text, Button} from "react-native";

const App = () => {

  const clickButton = () => {
    console.log("Kullanıcı butona tıkladı")
  }

  return(
    <SafeAreaView>
      <View style= {{backgroundColor: "yellow"}}>
         <Text>Hello World!</Text>
         <Button 
          title="Click" 
          onPress={clickButton}>
         </Button>
       </View>
    </SafeAreaView>
  )
}

export default App;