import React from "react";
import { Text } from "@rneui/themed";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import * as ImagePickerExpo from "expo-image-picker";
import { StyleSheet } from "react-native";

const ImagePicker = ({ setImage, image, title, color }) => {
  const pickImage = async () => {
    let result = await ImagePickerExpo.launchImageLibraryAsync({
      mediaTypes: ImagePickerExpo.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <>
      <Text style={styles.ImageLabel}>{title}</Text>
      <TouchableOpacity onPress={() => pickImage()}  >
        {!image && (
          <Text style={[styles.button,{backgroundColor:color || "#1c8994" }]}>Pick an image</Text>
        )}
        {image && (
          <Image
            source={{ uri: image }}
            style={{ alignSelf: "center", width: 150, height: 150 }}
          />
        )}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    borderRadius: 25,
    elevation: 2,
    marginHorizontal: 3,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  ImageLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
    opacity: 0.5,
  },
});

export default ImagePicker;

ImageLabel:{
  
}
