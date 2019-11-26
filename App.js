import React from "react";
import { View } from "react-native";
import AddEntry from "./components/AddEntry";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import History from "./components/History";

import ScrollViewExample from "./components/RNComponents/ScrollViewExample/ScrollViewExample";
import FormExample from "./components/RNComponents/FormExample/FormExample";

// This constant is used because when false I want to show some other examples
//  shown on the course like "React Native Components" or "Native Features" that
// aren't used on this appp
const SHOW_UDACIFITNESS = true;
export default function App() {
  if (SHOW_UDACIFITNESS) {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <History />
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
