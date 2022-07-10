import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import Title from "../components/title";
const HomeScreen = ({ route }) => {
  const navigation = useNavigation();
  const { email } = route.params;
  console.log(email);
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: "https://thumbs.dreamstime.com/b/quiz-time-card-colorful-confetti-quiz-time-card-colorful-paper-confetti-vector-background-125413603.jpg",
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.replace("quiz", {
            email: email,
          })
        }
        style={styles.button}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  banner: {
    height: 500,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
    backgroundColor: "white",
  },
  button: {
    width: "100%",
    backgroundColor: "#1A759F",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
});
