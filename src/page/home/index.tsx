import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../data/store/action/Post.action";
import {
  IInitialStateProps,
  addPosts,
} from "../../data/store/slice/Post.slice";

const HomeScreen = () => {
  const post = useSelector((state: any) => state.post);
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);

  const fetchPost = async () => {
    const posts = await getPosts(pageNumber);
    return posts;
  };

  useEffect(() => {
    if (!post) {
      fetchPost().then((res) => {
        dispatch(addPosts(res));
      });
    }
  }, [post]);
  return (
    <SafeAreaView className="flex-1 ">
      <ScrollView>
        <Text>Elt on</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
