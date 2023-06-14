import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ScreenOne } from "./screens/ScreenOne";
import { ScreenTwo } from "./screens/ScreenTwo";

const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.safeAreaContainer}>
        <NavigationContainer>
          <Tab.Navigator
            sceneContainerStyle={{ backgroundColor: "#94a3b8" }}
            screenOptions={{
              tabBarStyle: { backgroundColor: "#334155" },
              tabBarLabelStyle: { color: "white" },
            }}
          >
            <Tab.Screen name="Screen One" component={ScreenOne} />
            <Stack.Screen name="Screen Two" component={ScreenTwo} />
          </Tab.Navigator>
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
