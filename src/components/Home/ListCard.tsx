import { FlatList } from "react-native";
import React from "react";
import ContentCard from "../ContentCard";

export default function ListCard({ post }) {
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
        }}
        showsHorizontalScrollIndicator={false}
        data={post}
        renderItem={({ item, index: renderIndex }) => (
          <ContentCard item={item} />
        )}
      />
    </>
  );
}
