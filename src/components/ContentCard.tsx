import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import * as Linking from "expo-linking";

const ContentCard = ({ item }) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        className="flex-col space-y-2 border-b-2 border-b-zinc-100 py-2"
      >
        <Image
          source={{ uri: item.image }}
          resizeMode="contain"
          className="w-full h-48 rounded-2xl "
        />

        <View className="flex-col">
          <Text className="text-sm font-bold">{item.title}</Text>
          <Text className="text-sm mt-2 text-zinc-500">{item.description}</Text>
        </View>
        <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
          <Text className="text-sm mt-2 text-zinc-500"> Link orginal</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </>
  );
};

export default ContentCard;
