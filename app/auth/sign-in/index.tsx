import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { isTablet } from "@/src/utility-functions/responsive";
import { Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";
import { baseValidationSchema } from "@/schemas/validationSchema";
import { NavigationProp } from "@react-navigation/native";
import { auth } from "@/configs/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const isTabletView = isTablet();
const initialValues = {
  email: "",
  password: "",
};

interface SignInProps {
  navigation?: NavigationProp<any>;
}

export default function SignIn({ navigation: propNavigation }: SignInProps) {
  const navigation = propNavigation || useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation?.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleSubmit = (values: typeof initialValues) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user signed in sucessfully");
        router.replace("/mytrip");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
        testID="back-button"
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>You've been missed!</Text>
      <Text style={styles.heading}>Let's Sign You In</Text>

      <Formik
        initialValues={initialValues}
        validationSchema={baseValidationSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <>
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
              {errors.email && touched.email && (
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
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>

      <View style={styles.info}>
        <Text>New to this app?</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("auth/sign-up")}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
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
    borderColor: Colors.light.inputBorder,
    padding: isTabletView ? 12 : 8,
    borderRadius: 5,
    width: "100%",
    fontSize: isTabletView ? 18 : 14,
    fontFamily: "outfit",
  },
  button: {
    backgroundColor: Colors.light.primary,
    borderRadius: 30,
    paddingVertical: isTabletView ? 20 : 15,
    paddingHorizontal: isTabletView ? 40 : 30,
    alignItems: "center",
    width: isTabletView ? 300 : "80%",
    marginTop: 20,
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
