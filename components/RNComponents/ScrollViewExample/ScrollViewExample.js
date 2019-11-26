import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList
} from "react-native";
import getReviews from "./reviews";

const styles = StyleSheet.create({
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  container: {
    flex: 1
  },
  review: {
    margin: 10,
    flexDirection: "row"
  }
});
const Review = ({ name, text, avatar }) => {
  return (
    <View style={styles.review}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={{ flex: 1, flexWrap: "wrap" }}>
        <Text style={{ fontSize: 20 }}>{name}</Text>
        <Text>{text}</Text>
      </View>
    </View>
  );
};

export default class ScrollViewExample extends Component {
  renderItem = ({ item }) => {
    return <Review {...item} />;
  };
  render() {
    const reviews = getReviews();
    return (
      <View styles={styles.container}>
        <FlatList data={reviews} renderItem={this.renderItem} />
      </View>
    );
  }
}
