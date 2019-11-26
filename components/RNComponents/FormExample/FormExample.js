import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TextInput,
  KeyboardAvoidingView,
  Image
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 25,
    backgroundColor: "#ecf0f1"
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: "#757575",
    margin: 50
  },
  img: {
    width: 200,
    height: 200,
    margin: 50
  }
});

export default class FormExample extends Component {
  state = {
    input: "@carlosloureda",
    showInput: false
  };
  handleToggleSwitch = () => {
    this.setState(state => ({
      showInput: !state.showInput
    }));
  };
  handlerTextChange = input => {
    this.setState(state => ({
      input
    }));
  };
  render() {
    const { input, showInput } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Image
          source={{
            uri:
              "https://res.cloudinary.com/teepublic/image/private/s--FEDG90wp--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1455959068/production/designs/425881_1.jpg"
          }}
          style={styles.img}
        />
        <Switch value={showInput} onValueChange={this.handleToggleSwitch} />
        {showInput && (
          <TextInput
            value={input}
            style={styles.input}
            onChange={this.handlerTextChange}
          />
        )}
      </KeyboardAvoidingView>
    );
  }
}
