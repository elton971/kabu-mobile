import React from "react";
import { View, TouchableOpacity, FlatList, Text, Image } from "react-native";
import { IPost } from "../../data/@types/post";

interface IImageCardProps {
  post: IPost[];
}
const ImageCard = ({ post }: IImageCardProps) => {
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <FlatList
        style={{
          flexGrow: 0,
          paddingVertical: 20,
        }}
        initialScrollIndex={3}
        keyExtractor={(item) => item.title}
        contentContainerStyle={{
          paddingHorizontal: 15,
          gap: 20,
          alignItems: "center",
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={post}
        renderItem={({ item, index: renderIndex }) => (
          <TouchableOpacity className="w-64 h-40" onPress={() => {}}>
            <View className="">
              <Image
                source={{ uri: item.image }}
                resizeMode="contain"
                className="w-64 h-40 rounded-3xl "
              />

              <Text className="-mt-20 p-5 text-white font-semibold bg-black/20 rounded-b-3xl ">
                {item.title.substring(0, 90)}...
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

export default ImageCard;
