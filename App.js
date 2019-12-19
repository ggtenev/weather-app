import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Button,
  ActivityIndicator
} from "react-native";

import Header from "./components/Header";
import Info from "./components/Info";

class App extends Component {
  state = {
    input: "",
    temp: null,
    humidity:null,
    weather: "start",
    city: "",
    data: null,
    searching: false,
    code: ""
  };

  updateCity = city => {
    this.setState({ input: city });
  };
  updateCode = code => {
    this.setState({ code });
  };
  getData = () => {
    this.setState({ searching: true });
    let city = this.state.input.split("");
    city[0] = city[0].toUpperCase();
    city = city.join("");
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=752245ae335753cf03903f6f83e882c4`
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          city: city,
          input: "",
          code: "",
          temp: (res.main.temp - 273.15).toFixed(1),
          weather: res.weather[0].main,
          humidity:res.main.humidity,
          searching: false
        });
      });
    Keyboard.dismiss();
  };

  render() {
    let w = require("./assets/start.jpg");
    if (this.state.weather.includes("Clear")) w = require("./assets/sunny.jpg");
    else if (this.state.weather.includes("Rain"))
      w = require("./assets/rainy.jpg");
    else if (this.state.weather.includes("Snow"))
      w = require("./assets/snow.jpg");
    else if (this.state.weather.includes("Drizzle"))
      w = require("./assets/drizzle.jpg");
    else if (this.state.weather.includes("Thunderstorm"))
      w = require("./assets/thunder.jpg");
    else if (this.state.weather.includes("Clouds"))
      w = require("./assets/cloudy.jpg");
    else if (this.state.weather.includes("Fog"))
      w = require("./assets/fog.jpg");

    let info = null;
    if (this.state.searching) {
      info = <ActivityIndicator size="large" color="white" />;
    } else if (this.state.temp){
      info = (
        <Info
          weather={this.state.weather}
          temp={this.state.temp}
          city={this.state.city}
          humidity={this.state.humidity}
        />
      );
      }
    return (
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        accessible={false}
      >
        <ImageBackground
          source={w}
          style={styles.background}
          resizeMode="cover"
        >
          <Header />
          {info}
          <KeyboardAvoidingView behavior="padding" style={{ width: "100%" }}>
            <View style={styles.inner}>
              <TextInput
                style={styles.input}
                placeholder="City.."
                onChangeText={this.updateCity}
                value={this.state.input}
              />
              <View style={styles.btn}>
                <Button title="search" color="teal" onPress={this.getData} />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center"
  },
  input: {
    padding: 6,
    width: "80%",
    backgroundColor: "white",
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18
  },

  inner: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    textAlign: "center",
    fontSize: 20
  },
  btn: {
    width: "50%",
    padding: 10
  },

  inputFields: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-around",
    alignItems: "center"
  }
});
