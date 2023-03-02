import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Button from "../components/Button";
import { validateEmail } from "../utils";

const OnboardingScreen = ({ navigation }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const isEmailValid = validateEmail(email);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/Logo.png")} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Let us get to know you</Text>
          <View style={styles.form}>
            <View>
              <Text style={styles.label}>First name</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
              />
            </View>
            <View>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                textContentType="emailAddress"
              />
            </View>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Button
            onPress={() => {
              navigation.navigate("Profile");
            }}
            disabled={!isEmailValid || !name}
          >
            Next
          </Button>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingTop: 26,
  },
  logoContainer: {
    backgroundColor: "#DEE3E9",
    padding: 12,
    alignItems: "center",
  },
  logo: {
    resizeMode: "contain",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#CBD2D9",
    paddingVertical: 24,
    paddingHorizontal: 48,
  },
  title: {
    marginTop: 30,
    paddingVertical: 10,
    color: "#485B6A",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  label: {
    color: "#485B6A",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  form: {
    justifyContent: "flex-end",
    width: "100%",
  },
  btnContainer: {
    backgroundColor: "#F1F4F7",
    padding: 24,
    display: "flex",
    alignItems: "flex-end",
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#485B6A",
  },
});

export default OnboardingScreen;
