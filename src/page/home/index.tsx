import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../data/store/action/Post.action";
import { addPosts } from "../../data/store/slice/Post.slice";
import ImageCard from "../../components/Home/ImageCard";

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
    <SafeAreaView className="flex-1 justify-center items-center ">
      <ScrollView>
        <View>
          {post.length > 0 ? <ImageCard post={post} /> : <Text>Aguarde</Text>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
