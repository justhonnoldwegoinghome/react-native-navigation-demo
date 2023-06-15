import { useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation, useRoute } from "@react-navigation/native";

import { StackParamList } from "../App";
import teams from "../data/teams.json";

type TeamScreenProps = NativeStackScreenProps<StackParamList, "Team">;

export function TeamScreen() {
  const navigation = useNavigation<TeamScreenProps["navigation"]>();
  const route = useRoute<TeamScreenProps["route"]>();
  const id = route.params.id;

  const { name, conference, players } = teams.filter((t) => t.id === id)[0];

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, [name, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{name}</Text>
      <Text style={styles.secondaryHeader}>{conference}</Text>
      <FlatList
        data={players}
        renderItem={(itemData) => (
          <View style={styles.playerChip}>
            <Pressable
              onPress={() =>
                navigation.navigate("Player", {
                  teamId: id,
                  playerId: itemData.item.id,
                })
              }
            >
              <Text style={styles.playerName}>{itemData.item.name}</Text>
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 32,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
  },
  secondaryHeader: {
    fontSize: 24,
    fontWeight: "500",
    color: "grey",
  },
  playerChip: {
    backgroundColor: "#818cf8",
    padding: 16,
    marginVertical: 16,
  },
  playerName: {
    color: "white",
  },
});
