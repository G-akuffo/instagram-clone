import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/home/Header";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: "black",
  },
});

export default HomeScreen;
