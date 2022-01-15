import { StyleSheet, View, Text } from "react-native";

export default function Results() {
  return (
    <View style={styles.container}>
      <Text>Results Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});