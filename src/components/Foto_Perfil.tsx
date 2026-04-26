import React from 'react'
import { TouchableOpacity, Image, View, StyleSheet, Text } from 'react-native'
import * as ImagePicker from "expo-image-picker";

export const pickImage = async (setImage: (uri: string) => void) => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });
  if (!result.canceled) {
    setImage(result.assets[0].uri);
  }
};

export const takePhoto = async (setImage: (uri: string) => void) => {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();
  if (status !== "granted") {
    alert("Permissão de câmera necessária");
    return;
  }
  let result = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
    quality: 1,
  });
  if (!result.canceled) {
    setImage(result.assets[0].uri);
  }
};

type ProfileProps = {
  image: string | null;
  setImage: (uri: string) => void;
};

export const Profile = ({ image, setImage }: ProfileProps) => {
  return (
    <ImageProfile
      image={image}
      pickImage={() => pickImage(setImage)}
      takePhoto={() => takePhoto(setImage)}
    />
  );
};

type ImageProfileProps = {
  image: string | null;
  pickImage: () => void;
  takePhoto: () => void;
};

export const ImageProfile = ({ image, pickImage, takePhoto }: ImageProfileProps) => {
  return (
    <View style={style.container}>
      {image && <Image source={{ uri: image }} style={style.image} />}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 12,
    marginTop: 40,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginTop: 16,
    top: 100
  },
});