import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { StackParamList } from "../App";

type HomeScreenProps = NativeStackScreenProps<StackParamList, "Home">;

export function HomeScreen() {
  const navigation = useNavigation<HomeScreenProps["navigation"]>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select Team</Text>
      <View>
        <Button
          title="Golden State Warriors"
          onPress={() =>
            navigation.navigate("Team", { id: "golden-state-warriors" })
          }
        />
        <Button
          title="Boston Celtics"
          onPress={() => navigation.navigate("Team", { id: "boston-celtics" })}
        />
      </View>
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
    color: "black",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 15,
    padding: 16,
  },
});
