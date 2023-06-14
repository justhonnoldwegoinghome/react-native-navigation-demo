import { View, Text, StyleSheet } from "react-native";

export function ScreenTwo() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen Two</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 32,
    color: "white",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 15,
    padding: 16,
  },
});
