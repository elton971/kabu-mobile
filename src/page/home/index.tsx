import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../data/store/action/Post.action";
import { addPosts } from "../../data/store/slice/Post.slice";
import ImageCard from "../../components/Home/ImageCard";
import ListCard from "../../components/Home/ListCard";

const HomeScreen = () => {
  const post = useSelector((state: any) => state.posts.posts);
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);

  const fetchPost = async () => {
    const posts = await getPosts(pageNumber);
    return posts;
  };

  useEffect(() => {
    if (post.length === 0) {
      fetchPost().then((res) => {
        dispatch(addPosts(res));
      });
    }
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="py-3">
        {post.length > 0 ? (
          <View>
            <View>
              <View className="flex-row justify-between items-center px-4 ">
                <Text className="font-bold text-lg">Últimas notícias</Text>
                <TouchableOpacity onPress={() => {}}>
                  <Text className=" text-blue-500">Ver mais</Text>
                </TouchableOpacity>
              </View>
              <ImageCard post={post} />
            </View>
            <View>
              <View className="flex-row justify-between items-center px-4 ">
                <Text className="font-bold text-lg">Recomendação</Text>
                <TouchableOpacity onPress={() => {}}>
                  <Text className=" text-blue-500">Ver mais</Text>
                </TouchableOpacity>
              </View>
              <ListCard post={post} />
            </View>
          </View>
        ) : (
          <Text>Carregando...</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
