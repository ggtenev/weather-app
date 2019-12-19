import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Weather App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding:10,
    paddingTop: 35,
    width: "100%",
    height: 75,
    backgroundColor:'teal',
    marginBottom:10
  },
  header: {
      fontSize:24,
      textAlign:'center',
      color:'white',
      fontWeight:'bold'
  }
});
