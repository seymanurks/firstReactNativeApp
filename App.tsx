import React from "react";
import {View, SafeAreaView, Text, Button} from "react-native";

const App = () => {
  return(
    <SafeAreaView>
      <View style= {{backgroundColor: "yellow"}}>
         <Text>Hello World!</Text>
         <Button title="Click" onPress={() => {}}></Button>
       </View>
    </SafeAreaView>
  )
}

export default App;