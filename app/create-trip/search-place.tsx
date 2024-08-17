import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Colors } from "@/constants/Colors";

export default function SearchPlace() {
  const navigation = useNavigation();
  const router = useRouter();
  const colors = Colors.light;

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Search Place",
    });
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <GooglePlacesAutocomplete
        placeholder="Search Location"
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: "",
          language: "en",
        }}
        styles={{
          textInputContainer: styles.textInputContainer,
          textInput: [
            styles.textInput,
            { borderColor: colors.inputBorder, color: colors.text },
          ],
          predefinedPlacesDescription: {
            color: colors.text,
          },
        }}
      />
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: colors.primary,
          padding: 10,
          borderRadius: 8,
          alignItems: "center",
        }}
        onPress={() => router.push("/create-trip/select-traveler")}
      >
        <Text style={{ color: colors.background }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 100,
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  textInputContainer: {
    width: "100%",
    marginTop: 20,
  },
  textInput: {
    height: 44,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
  },
});
