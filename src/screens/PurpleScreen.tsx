import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PurpleScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Purple Screen</Text>
    </View>
  );
};

export default PurpleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
});
