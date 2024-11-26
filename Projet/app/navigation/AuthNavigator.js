import React from "react";
import RegisterScreen from "../screens/RegisterScreen";
const {
  createNativeStackNavigator,
} = require("@react-navigation/native-stack");
const { default: WelcomeScreen } = require("../screens/WelcomeScreen");
const { default: LoginScreen } = require("../screens/LoginScreen");

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
