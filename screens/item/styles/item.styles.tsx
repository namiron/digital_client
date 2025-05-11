import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f9f9f9",
    flexGrow: 1,
  },
  name: {
    fontSize: 30,
    fontWeight: "700",
    color: "#007bff",
    marginBottom: 12,
    textAlign: "center",
    letterSpacing: 1.5,
    shadowRadius: 5,
  },
  info: {
    fontSize: 18,
    marginBottom: 12,
    color: "#333",
    lineHeight: 26,
  },
  highlight: {
    color: "#007bff",
    fontWeight: "600",
  },
  box: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  section: {
    marginBottom: 15,
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: "#f0f8ff",
    borderRadius: 10,
    elevation: 3,
  },
});
