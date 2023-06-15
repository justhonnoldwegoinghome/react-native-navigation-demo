import { SafeAreaView } from "react-native";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "./screens/HomeScreen";
import { TeamScreen } from "./screens/TeamScreen";
import { PlayerScreen } from "./screens/PlayerScreen";

export type StackParamList = {
  Home: undefined;
  Team: { id: string };
  Player: { teamId: string; playerId: string };
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.safeAreaContainer}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#cbd5e1" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#e2e8f0" },
            }}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "HOME",
              }}
            />
            <Stack.Screen name="Team" component={TeamScreen} />
            <Stack.Screen name="Player" component={PlayerScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#94a3b8",
    justifyContent: "center",
  },
  safeAreaContainer: {
    flex: 1,
  },
});
