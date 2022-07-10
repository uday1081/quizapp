import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lets play Quiz</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "600",
    color: "black",
    fontStyle: "italic",
  },
  container: {
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
