import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { isTablet } from "@/src/utility-functions/responsive";
import { useRouter } from "expo-router";

const isTabletDevice = isTablet();

export default function EmptyTrip() {
  const colors = Colors.light;
  const router = useRouter();
  return (
    <View style={styles.emptyContainer}>
      <MaterialCommunityIcons
        name="robot-excited"
        size={isTabletDevice ? 120 : 80}
        color={colors.primary}
      />
      <Text style={[styles.emptyText, { color: colors.text }]}>
        No trips planned yet!
      </Text>
      <Text style={[styles.emptySubtext, { color: colors.text }]}>
        Start your first adventure with AI-powered trip planning
      </Text>
      <TouchableOpacity
        style={[styles.addButton, { backgroundColor: colors.primary }]}
        onPress={() => router.push("/create-trip/search-place")}
      >
        <Ionicons name="add" size={24} color={colors.background} />
        <Text style={[styles.addButtonText, { color: colors.background }]}>
          Plan New Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: isTabletDevice ? 28 : 22,
    fontWeight: "bold",
    marginTop: 20,
  },
  emptySubtext: {
    fontSize: isTabletDevice ? 20 : 16,
    textAlign: "center",
    marginTop: 10,
    marginHorizontal: 20,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: isTabletDevice ? 30 : 20,
    paddingVertical: isTabletDevice ? 15 : 10,
    borderRadius: 25,
    marginTop: 30,
  },
  addButtonText: {
    fontSize: isTabletDevice ? 20 : 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  floatingButton: {
    position: "absolute",
    right: isTabletDevice ? 40 : 20,
    bottom: isTabletDevice ? 40 : 20,
    width: isTabletDevice ? 70 : 60,
    height: isTabletDevice ? 70 : 60,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
