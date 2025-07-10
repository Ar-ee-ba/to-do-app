import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // 🔷 Header Section
  header: {
    marginTop: 50,
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  headerSubText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  headerSubIconContainer: {
    flexDirection: "row",
    gap: 10,
  },

  // 🔷 Status Listing
  statusListing: {},
  statusListingHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  // 🔷 Individual Status Item
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginVertical: 10,
    marginTop: 40,
    marginRight: 10,
    height: 150,
    width: 100,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
});
