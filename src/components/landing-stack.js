import { createStackNavigator } from "@react-navigation/stack";

import LandingPage from "../screens/landing-page.js";
import EnterID from "../screens/enter-id.js";
import Diagnosis from "../screens/diagnosis.js";
import Login from "../screens/login.js";

const Stack = createStackNavigator();

export default function LandingStack() {
  return (
    <Stack.Navigator
      initialRouteName="Landing Page"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Landing Page" component={LandingPage} />
      <Stack.Screen name="Enter Diagnosis ID" component={EnterID} />
      <Stack.Screen name="Diagnosis" component={Diagnosis} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
