import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import { POSTS } from "./../../data/posts";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <Text style={{ color: "white" }}>{POSTS.user}</Text>
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentsSection post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={{ uri: post.profile_picture }} style={styles.post} />
        <Text style={{ color: "white", marginLeft: 5, fontWeight: "700" }}>
          {post.user}
        </Text>
      </View>
      <Text style={{ color: "white", fontWeight: "900" }}>...</Text>
    </View>
  );
};

const PostImage = ({ post }) => (
  <View
    style={{
      width: "100%",
      height: 450,
    }}
  >
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = () => (
  <View style={{ flexDirection: "row" }}>
    <View style={styles.leftFooterIconsView}>
      <TouchableOpacity>
        <AntDesign name="hearto" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.bubbleIcon}>
        <Ionicons name="chatbubble-outline" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.shareIcon}>
        <Octicons name="paper-airplane" size={30} color="white" />
      </TouchableOpacity>
    </View>
    <View style={{ flex: 1, alignItems: "flex-end" }}>
      <TouchableOpacity>
        <Feather name="bookmark" size={30} color="white" />
      </TouchableOpacity>
    </View>
  </View>
);

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes.toLocaleString("en")} likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "600" }}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

const CommentsSection = ({ post }) => (
  <Text style={{ color: "grey" }}>
    View{post.comments.length > 1 ? " all" : ""} {post.comments.length}
    {""}
    {post.comments.length > 1 ? "comments" : "comment"}
  </Text>
);

const styles = StyleSheet.create({
  post: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#ff8501",
    justifyContent: "space-evenly",
  },

  footerIcons: {
    width: 33,
    height: 33,
  },

  leftFooterIconsView: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },

  bubbleIcon: {
    transform: [{ rotate: "300deg" }],
  },

  shareIcon: {
    transform: [{ rotate: "320deg" }],
    marginLeft: 4,
  },
});

export default Post;
