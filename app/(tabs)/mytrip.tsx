import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { isTablet } from "@/src/utility-functions/responsive";
import EmptyTrip from "@/src/components/mytrips/EmptyTrip";
import { useRouter } from "expo-router";

const isTabletDevice = isTablet();

interface Trip {
  id: string;
  destination: string;
  date: string;
}

const dummyTrips: Trip[] = [
  // { id: "2", destination: "Tokyo", date: "2023-09-20" },
  // { id: "1", destination: "Paris", date: "2023-08-15" },
];

export default function MyTrip() {
  const colors = Colors.light; // You can change this to Colors.dark for dark mode
  const router = useRouter();

  const renderTripItem = ({ item }: { item: Trip }) => (
    <TouchableOpacity
      style={[styles.tripItem, { backgroundColor: colors.primary }]}
    >
      <MaterialCommunityIcons
        name="airplane-takeoff"
        size={24}
        color={colors.background}
      />
      <View style={styles.tripInfo}>
        <Text style={[styles.tripDestination, { color: colors.background }]}>
          {item.destination}
        </Text>
        <Text style={[styles.tripDate, { color: colors.background }]}>
          {item.date}
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color={colors.background} />
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>My Trips</Text>
      {dummyTrips.length > 0 ? (
        <FlatList
          data={dummyTrips}
          renderItem={renderTripItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <EmptyTrip />
      )}
      {dummyTrips.length > 0 && (
        <TouchableOpacity
          style={[styles.floatingButton, { backgroundColor: colors.text }]}
          onPress={() => router.push("/create-trip/search-place")}
        >
          <Ionicons name="add" size={24} color={colors.background} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: isTabletDevice ? 30 : 20,
    paddingTop: 50,
  },
  title: {
    fontSize: isTabletDevice ? 36 : 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  listContainer: {
    flexGrow: 1,
  },
  tripItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: isTabletDevice ? 20 : 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  tripInfo: {
    flex: 1,
    marginLeft: 15,
  },
  tripDestination: {
    fontSize: isTabletDevice ? 22 : 18,
    fontWeight: "bold",
  },
  tripDate: {
    fontSize: isTabletDevice ? 18 : 14,
    marginTop: 5,
  },
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
