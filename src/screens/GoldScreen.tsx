import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const GoldScreen = () => {

    const navigation = useNavigation()
    const {name, params} = useRoute()
    
    console.log(name);
    console.log(params);
    


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gold Screen</Text>
      <Button title="Go to Purple Screen"
        onPress={() => navigation.navigate("PurpleScreen")}
      />

      <Text>Hello, {params?.name}</Text>
    </View>
  );
};

export default GoldScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gold",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
});
