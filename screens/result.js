import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Title from "../components/title";
import { useNavigation } from "@react-navigation/core";
import { auth, colRef } from "../firebase";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { onSnapshot, where, query, orderBy } from "firebase/firestore";
const Result = ({ route }) => {
  const { email, score } = route.params;
  // console.log(email);
  // console.log(score);
  global.highscore;
  const q = query(
    colRef,
    where("email", "==", email),
    orderBy("score", "desc")
  );

  onSnapshot(q, (snapshot) => {
    let scores = [];
    snapshot.docs.forEach((doc) => {
      scores.push({ ...doc.data(), id: doc.id });
    });
    highscore = scores[0].score;

    // console.log(scores[0].score);
    console.log(highscore);
  });
  console.log(highscore);

  const navigation = useNavigation();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => console.log(error.message));
  };

  const resultBanner =
    score > 10
      ? "https://cdni.iconscout.com/illustration/premium/thumb/men-celebrating-victory-4587301-3856211.png"
      : "https://cdni.iconscout.com/illustration/free/thumb/concept-about-business-failure-1862195-1580189.png";
  return (
    <View style={styles.container}>
      <View style={styles.containerSign}>
        <TouchableOpacity onPress={handleSignOut} style={styles.buttonSign}>
          <Text style={styles.buttonTextSign}>Log out</Text>
        </TouchableOpacity>
      </View>
      {/* <Title titleText="RESULTS" /> */}
      <Text style={styles.score}>Score</Text>
      <Text style={styles.scoreValue}>{score}</Text>
      <Text style={styles.highscore}>Your High Score</Text>
      <Text style={styles.highscoreValue}>{highscore}</Text>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: resultBanner,
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.replace("Login")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>TRY AGAIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  score: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "600",
  },
  highscore: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "600",
  },
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginBottom: 50,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  button: {
    width: "100%",
    backgroundColor: "#1A759F",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 100,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  scoreValue: {
    fontSize: 50,
    fontWeight: "800",
    alignSelf: "center",
    marginBottom: 100,
  },
  highscoreValue: {
    fontSize: 50,
    fontWeight: "800",
    alignSelf: "center",
    marginBottom: 100,
  },
  containerSign: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  buttonSign: {
    backgroundColor: "white",
    width: "40%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonTextSign: {
    color: "#1A759F",
    fontWeight: "700",
    alignItems: "center",
    fontSize: 16,
  },
});
