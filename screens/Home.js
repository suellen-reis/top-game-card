import { React, useState, useEffect } from "react";
import { Text, View, Button, ImageBackground } from "react-native";
import { styles } from "../Styles";
import greenBackground from "../assets/greenBackground.png";

export default function Home({ navigation }) {
  return (
    <ImageBackground source={greenBackground} style={styles.container}>
      <Text style={styles.headerText}>Welcome to Top Card Game!</Text>
      <Text style={styles.mainText}>Let's Play Together!</Text>
      <Button
        color={"#000000"}
        title="START"
        onPress={() => navigation.navigate("CardGame")}
      ></Button>
    </ImageBackground>
  );
}
