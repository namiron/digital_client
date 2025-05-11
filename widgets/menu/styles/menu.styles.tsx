import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  menu: {
    backgroundColor: "#fff",
    width: "70%",
    height: "100%",
    paddingTop: 100,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    elevation: 10,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  menuItem: {
    fontSize: 18,
    color: "#007bff",
    fontWeight: "600",
    paddingVertical: 12,
    borderBottomColor: "#e0e0e0",
    borderBottomWidth: 1,
  },
  userText: {
    marginTop: 10,
    fontSize: 20,
    color: "#007bff",
  },
});
