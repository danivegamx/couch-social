"use client";

import React from "react";
import PostCard from "./PostCard";

import { Post } from "../../types";

import "./styles.sass";

type PostListProps = {
  posts: Post[];
};

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="post-list mt-7 mb-12">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;