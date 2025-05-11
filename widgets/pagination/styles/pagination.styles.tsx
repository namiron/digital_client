import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    gap: 15,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 5,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  pageIndicator: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    paddingHorizontal: 10,
  },
});
