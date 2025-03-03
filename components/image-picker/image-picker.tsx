import React from "react";
import { Controller, ControllerProps } from "react-hook-form";
import { StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MenufyTheme, useTheme } from "react-native-paper";
import UiView from "../view/view";
import UiText from "../text/text";
import { Color } from "@/constants/Colors";
import uploadImg from '@/assets/images/upload-image.png'

export interface ImagePickerProps extends Omit<ControllerProps<any>, "render"> {
  errorMessage?: string | null;
  type?: "image" | "logo";
  placeholder?: string;
}

function UiImagePicker({
  control,
  name,
  rules,
  errorMessage,
  type = "image",
  placeholder,
  ...props
}: ImagePickerProps) {
  const { colors } = useTheme<MenufyTheme>();

  const handleImagePick = async (onChange: (value: string) => void) => {
    // Request permissions
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Required",
        "We need access to your photo library to select images."
      );
      return;
    }

    // Open the image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      onChange(imageUri); // Update the form value with the selected image URI
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <UiView style={style.fieldContainer}>
          <TouchableOpacity
            onPress={() => handleImagePick(onChange)}
            style={[
              type === "image" ? style.imageContainer : style.logoContainer,
              { backgroundColor: colors.textFieldPrimary },
            ]}
          >
            {value ? (
              <Image source={{ uri: value }} style={style.image} />
            ) : (
              <>
                {type === "image" ? (
                  <UiView customStyle={{display: 'flex', flexDirection: 'column', alignItems:'center', gap: 10}}>
                    <Image source={uploadImg} style={{height: 100, width: 100}}/>
                    <UiText
                      customStyle={{
                        color: colors.textPrimary,
                        textAlign: "center",
                        borderWidth: 0.5,
                        padding: 10,
                        borderRadius: 30,
                        borderColor: colors.border
                      }}
                    >
                      Upload Image
                    </UiText>
                  </UiView>
                ) : (
                  <UiText>{placeholder}</UiText>
                )}
              </>
            )}
          </TouchableOpacity>
          {errorMessage && (
            <UiText
              customStyle={{ color: Color.dark.buttonPrimary, paddingLeft: 30 }}
            >
              {errorMessage}
            </UiText>
          )}
        </UiView>
      )}
    />
  );
}

const style = StyleSheet.create({
  fieldContainer: {
    marginBottom: 5,
  },
  imageContainer: {
    width: "100%",
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  logoContainer: {
    width: 120,
    height: 80,
    borderWidth: 1,
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
  },
});

export default UiImagePicker;
