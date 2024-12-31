import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import icedCoffeeImage from "@/assets/images/iced-coffee.png";
import { Link } from "expo-router";

const index = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeeImage}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>My Coffee Shop</Text>
        {/* buttons */}
        <Pressable style={{ marginHorizontal: "auto" }}>
          <Link href="/explore" asChild>
            <Text style={styles.link}>Explore</Text>
          </Link>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: "100%",
    width: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  link: {
    color: "black",
  },
});
