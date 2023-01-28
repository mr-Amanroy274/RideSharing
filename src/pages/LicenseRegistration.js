import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const LicenseRegistration = ({ navigation }) => {
  const submit = () => {
    navigation.navigate("MapScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "90%" }}>
        <View>
          <Text style={{ fontSize: 20 }}>License Number</Text>
          <TextInput
            placeholder='License Number'
            keyboardType='numeric'
            style={styles.input}
          />
        </View>
        <View style={{ marginTop: 40 }}>
          <Text style={{ fontSize: 20 }}>Vehicle Type</Text>
          <TextInput
            placeholder='Vehicle Type'
            keyboardType='numeric'
            style={styles.input}
          />
        </View>
        <View style={{ marginTop: 40 }}>
          <Text style={{ fontSize: 20 }}>Upload Photo</Text>
          <TextInput
            placeholder='Upload Photo'
            keyboardType='numeric'
            style={styles.input}
          />
        </View>
        <TouchableOpacity onPress={submit}>
          <View
            style={{
              alignSelf: "center",
              marginTop: 40,
              backgroundColor: "#5E5BFF",
              width: "40%",
              height: 50,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}> Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LicenseRegistration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "center",
    paddingTop: "15%",
  },
  input: {
    marginTop: 10,
    backgroundColor: "white",
    fontSize: 18,
    height: 50,
  },
});
