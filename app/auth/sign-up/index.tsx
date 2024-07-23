import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { isTablet } from "@/src/utility-functions/responsive";
import { Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";
import { signUpValidationSchema } from "@/schemas/validationSchema";

const isTabletView = isTablet();

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleSubmit = (values: { email: string; password: string }) => {
    console.log("form values", values);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.heading}>Create New Account</Text>

      <Formik
        initialValues={initialValues}
        validationSchema={signUpValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            {/* Full Name */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your Full Name"
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                value={values.fullName}
              />
              {errors.fullName && (
                <Text style={styles.errorText}>{errors.fullName}</Text>
              )}
            </View>

            {/* Email */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>

            {/* Password */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              {errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSubmit}
            >
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: isTabletView ? 24 : 18,
    fontFamily: "outfit",
    marginTop: 20,
  },
  subtitle: {
    fontSize: isTabletView ? 24 : 18,
    fontFamily: "outfit",
    marginTop: 10,
  },
  heading: {
    fontSize: isTabletView ? 32 : 24,
    fontFamily: "outfit-bold",
    marginTop: 20,
    textAlign: "center",
  },
  inputContainer: {
    width: isTabletView ? "60%" : "100%",
    marginTop: 20,
    marginBottom: 10,
  },
  label: {
    fontSize: isTabletView ? 18 : 14,
    marginBottom: 5,
    fontFamily: "outfit-Medium",
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.light.inputBorderColor,
    padding: isTabletView ? 12 : 8,
    borderRadius: 5,
    width: "100%",
    fontSize: isTabletView ? 18 : 14,
    fontFamily: "outfit",
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 30,
    paddingVertical: isTabletView ? 20 : 15,
    paddingHorizontal: isTabletView ? 40 : 30,
    alignItems: "center",
    width: isTabletView ? 300 : "80%",
    marginTop: 50,
  },
  buttonText: {
    color: Colors.light.background,
    fontSize: isTabletView ? 18 : 16,
    fontFamily: "outfit",
  },
  info: {
    marginTop: 20,
    marginBottom: -10,
    fontFamily: "outfit",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
  errorText: {
    color: "red",
    fontSize: isTabletView ? 14 : 12,
    marginTop: 5,
    fontFamily: "outfit",
  },
});
