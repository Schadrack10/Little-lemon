import * as React from "react";
import {
  View,
  Image,
  Pressable,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      <Image
        style={styles.Logo}
        source={require("../assets/little-lemon-logo.png")}
      />
      <Text style={{ fontSize: 18, marginTop: 20 }}>
        Litttle lemon your local shop
      </Text>
      <Text style={{ fontSize: 18, marginTop: 20 }}>
        meditarean bistro
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Subscribe")}
        style={styles.subscribeBtn}
      >
        <Text style={{ color: "#fff", fontSize: 18  }}>Newsletter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subscribeBtn: {
    backgroundColor: "green",
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 100,
    borderColor:"rgba(0,0,0 .4)",
    borderWidth:0.2
  },
  Logo: {
    height: 200,
    width: 100,
    resizeMode: "contain",
  },
});
