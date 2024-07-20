import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import { isTablet } from "@/utility-functions/responsive";
import { useRouter } from "expo-router";

const isTabletView = isTablet();

export default function Login() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor={Colors.white} hidden />
      <Image
        source={require("../assets/images/login-image.jpeg")}
        style={styles.image}
      />
      <View style={styles.bottomSheet}>
        <Text style={styles.title}>AI Travel Planner</Text>
        <Text style={styles.subtitle}>
          Discover your next adventure effortlessly. Personalized itinerary
          plans created by AI.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/auth/sign-in")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    width: "100%",
  },
  image: {
    width: "100%",
    height: "70%",
    resizeMode: "cover", // or 'contain', depending on your design
  },
  bottomSheet: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    elevation: 5, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: -2 }, // Shadow for iOS
    shadowOpacity: 0.1, // Shadow for iOS
    shadowRadius: 10, // Shadow for iOS
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    marginTop: -10,
  },
  title: {
    fontSize: isTabletView ? 30 : 20,
    fontFamily: "outfit-bold",
    textAlign: "center",
    marginBottom: isTabletView ? 20 : 10,
  },
  subtitle: {
    fontSize: isTabletView ? 20 : 15,
    fontFamily: "outfit",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: "center",
    width: isTabletView ? 300 : "100%",
  },
  buttonText: {
    color: Colors.white,
    fontSize: isTabletView ? 20 : 15,
    fontFamily: "outfit",
  },
});
