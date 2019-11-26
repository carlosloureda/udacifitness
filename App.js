import React from "react";
import { View } from "react-native";
import AddEntry from "./components/AddEntry";

import ScrollViewExample from "./components/RNComponents/ScrollViewExample/ScrollViewExample";
import FormExample from "./components/RNComponents/FormExample/FormExample";

// This constant is used because when false I want to show some other examples
//  shown on the course like "React Native Components" or "Native Features" that
// aren't used on this appp
const SHOW_UDACIFITNESS = false;
export default function App() {
  if (SHOW_UDACIFITNESS) {
    return (
      <View>
        <AddEntry />
        {/* Uncomment below code and comment */}
      </View>
    );
  } else {
    return (
      <FormExample />
      // <ScrollViewExample />
    );
  }
}
