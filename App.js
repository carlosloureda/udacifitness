import React from "react";
import { View, Platform, StatusBar } from "react-native";
import AddEntry from "./components/AddEntry";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import History from "./components/History";

import { purple, white } from "./utils/colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

import ScrollViewExample from "./components/RNComponents/ScrollViewExample/ScrollViewExample";
import FormExample from "./components/RNComponents/FormExample/FormExample";

import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from 'react-navigation-stack'
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation-tabs";

import Constants from "expo-constants";

function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const _TabNavigator =
  Platform.OS === "ios"
    ? createBottomTabNavigator
    : createMaterialTopTabNavigator;

const TabNavigator = _TabNavigator(
  {
    History: {
      screen: History
    },

    AddEntry: {
      screen: AddEntry
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === "ios" ? purple : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === "ios" ? white : purple,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);

const Navigation = createAppContainer(TabNavigator); //

// This constant is used because when false I want to show some other examples
//  shown on the course like "React Native Components" or "Native Features" that
// aren't used on this appp

const SHOW_UDACIFITNESS = true;
function App() {
  if (SHOW_UDACIFITNESS) {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <Navigation />
        </View>
      </Provider>
    );
  } else {
    return (
      // <ScrollViewExample />
      <FormExample />
    );
  }
}

export default App;
