import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const TomatoScreen = () => {

    const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tomato Screen</Text>
      <Button title="Go to Gold Screen" 
        onPress={() => navigation.navigate("GoldScreen")}
      />

      <Text onPress={() => navigation.navigate("GoldScreen", {name: "Ahmed"})}>Name: Ahmed</Text>
      <Text onPress={() => navigation.navigate("GoldScreen", {name: "Sawy"})}>Name: Sawy</Text>
    </View>
  );
};

export default TomatoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
});
