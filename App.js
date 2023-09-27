import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import setting from "./src/component/setting/setting";
import play from "./src/component/play/play";
import { AntDesign,Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator(); 
const screenOptions = {
  tabBarShowLabel: true,
  headerShown: true,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff",
  },
};
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator style={{}} screenOptions={screenOptions}>
        <Tab.Screen
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
          name="Played"
          component={play}
          options={{
            tabBarIcon: ({ focused }) => {
              return(
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                <AntDesign name="play" size={20} color={focused? "#EA4559":"#EA4559"} />
                  
              </View>
              )
             
            },
          }}
        />
        <Tab.Screen style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
          name="Setting"
          component={setting}
          options={{
            tabBarIcon: ({ focused }) => {
              return(
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Ionicons name="settings" size={20} color={focused? "#EA4559":"#EA4559"} />
                 
              </View>
              )
             
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  play: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
export default App;
