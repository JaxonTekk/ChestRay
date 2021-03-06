import Constants from "expo-constants";
import { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import Item from "../components/item.js";

import { read } from "../functions/fb.js";

import Context from "../utils/context.js";

export default function PastScans({ navigation }) {
  const { userData, setScan } = useContext(Context);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    read(userData.uid, setData);
  }, []);

  const renderItem = ({ item }) => (
    <Item
      onPress={() => {
        setScan(item);
        navigation.navigate("View Scan");
      }}
      patient={item.patient}
      diagnosis={item.diagnosis}
      date={item.date}
    />
  );

  if (data) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="arrow-back-circle" size={50} style={styles.icons} />
        </TouchableOpacity>
        <View style={styles.topText1Container}>
          <Text style={styles.topText1}>Past</Text>
          <Text style={styles.topText2}>Scans</Text>
          <View style={styles.line} />
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator />
    </View>
  );
}

const styles = StyleSheet.create({
  icons: {
    marginTop: 15,
    color: "#5e83ba",
    marginBottom: 5,
  },
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  topText1Container: {
    marginTop: 0,
  },
  topText1: {
    textAlign: "center",
    fontFamily: "Avenir-Light",
    fontSize: 45,
  },
  topText2: {
    textAlign: "center",
    fontFamily: "Avenir-Heavy",
    fontSize: 45,
    color: "#091d36",
  },
  line: {
    marginTop: 15,
    backgroundColor: "#3a4e7a",
    height: 3,
    width: "50%",
    borderRadius: 10,
  },
});
