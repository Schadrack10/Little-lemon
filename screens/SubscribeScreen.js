import * as React from "react";
import { validateEmail, ValidateEmail } from "../utils";
import { useState } from "react";
import {
  View,
  Image,
  Pressable,
  TextInput,
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const SubscribeScreen = ({ navigation }) => {
  // Add subscribe screen code here
  const [text, setText] = useState("");
  const [isValid , setIsValid] = useState(false)

  const handleSubmit = () => {
    //validation
    if (text.length > 3 && validateEmail(text)) {
      Alert.alert("thank you for subscribing stay stuned!");
      setText(" ");
    } else if (text.length <= 3 && !validateEmail(text)) {
      Alert.alert("email invalid or too short");
    }else{
      Alert.alert("email invalid");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.Logo}
        source={require("../assets/little-lemon-logo-grey.png")}
      />
      <Text
        style={{
          color: "#000",
          fontSize: 18,
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        subscribe to our newsletter for our latest delicious recipes!
      </Text>

      <TextInput
        onChangeText={(text) => setText(text)}
        value={text.trim()}
        style={styles.input}
        placeholder="enter your @email"
        keyboardType="email"
      />

      <TouchableOpacity
        onPress={() => handleSubmit()}
        style={{...styles.subscribeBtn,backgroundColor:text.length > 3  ? "green":"rgb(31,31,31)"}}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>subscribe</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subscribeBtn: {
    backgroundColor: "rgb(31,31,31)",
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 50,
    borderColor: "rgba(0,0,0 .4)",
    borderWidth: 0.2,
  },
  Logo: {
    height: 200,
    width: 100,
    resizeMode: "contain",
  },
  input: {
    background: "#ccc",
    width: 300,
    //  height:40,
    borderColor: "#333",
    borderWidth: 0.3,
    padding: 10,
    borderRadius: 5,
  },
});
