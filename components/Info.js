import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default function Info({ weather, temp, city, humidity }) {
  return (
    <View style={styles.container}>
      <Text style={styles.city}>{city}</Text>
      <Text style={styles.text}>
        Weather : <Text style={styles.degrees}>{weather}</Text>{" "}
      </Text>
      <Text style={styles.text}>
        Temp : <Text style={styles.degrees}>{temp}°</Text>
      </Text>
      <Text style={styles.text}>
        Humidity : <Text style={styles.degrees}>{humidity}%</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(218, 242, 242, 0.5)",
    padding: 20,
    borderRadius: 12,
  },
  text: {
    fontSize: 32,
    fontWeight: "500",
    marginVertical: 6
  },
  degrees: {
    fontSize: 40,
    fontWeight: "bold",
    color: "teal"
  },
  city: {
    textAlign: "center",
    fontSize: 46,
    fontWeight: "bold",
    color: "black",
    marginTop: 20
  }
});
