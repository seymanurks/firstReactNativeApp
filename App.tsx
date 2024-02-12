import React from "react";
import {View, SafeAreaView, Text, Button} from "react-native";

const App = () => {

  const clickButton = () => {
    console.log("Kullanıcı butona tıkladı")
  }

  return(
    <SafeAreaView>
      <View style= {{backgroundColor: "deepskyblue"}}>
         <Text>Hello World!</Text>
         <Button 
          title="Click" 
          onPress={clickButton}
          color = "crimson">
         </Button>
       </View>
    </SafeAreaView>
  )
}

export default App;