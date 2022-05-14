import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <AntDesign
            style={styles.icon}
            name="plussquareo"
            size={30}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign
            style={styles.icon}
            name="hearto"
            size={30}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <FontAwesome5
            style={styles.icon}
            name="facebook-messenger"
            size={30}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },

  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },

  iconsContainer: {
    flexDirection: "row",
  },

  icon: {
    marginLeft: 10,
  },

  unreadBadge: {
    backgroundColor: "#ff3250",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
  },
});

export default Header;
