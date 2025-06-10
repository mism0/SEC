// import { Button, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'

// const App = () => {

//   const [totalExpenses, setTotalExpenses] = useState(0)
//   return (
//     <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
//       <Text style={{fontSize: 20}}>Expenses App</Text>
//       <Text style={{fontSize: 30}}>Total Expenses =  {totalExpenses}</Text>
//       <Button title="Increase Expenses by 10" onPress={() => setTotalExpenses(totalExpenses + 10)}/>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})




import { ActivityIndicator, StyleSheet } from "react-native";
import FlashMessage from "react-native-flash-message";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MainAppStack from "./src/navigation/MainAppStack";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import i18n from "./src/localization/i18n";
import { I18nextProvider } from "react-i18next";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Nunito-Bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Medium": require("./src/assets/fonts/Nunito-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size={"large"} />;
  }

  return (
    <>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <NavigationContainer>
            <FlashMessage position={"top"} />
            <MainAppStack />
          </NavigationContainer>
        </I18nextProvider>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
