import { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import teams from "../data/teams.json";
import { StackParamList } from "../App";

type PlayerScreenProps = NativeStackScreenProps<StackParamList, "Player">;

export function PlayerScreen() {
  const navigation = useNavigation<PlayerScreenProps["navigation"]>();

  const {
    params: { teamId, playerId },
  } = useRoute<PlayerScreenProps["route"]>();

  const team = teams.filter((t) => t.id === teamId)[0];
  const { name, number } = team.players.filter((p) => p.id === playerId)[0];

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, [name, navigation]);

  navigation.setOptions({ title: name });

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{number}</Text>
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
