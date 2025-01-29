"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Post } from "../types";
import { fetchPosts } from "../lib";

type PostContextType = {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  likePost: (postId: number) => void;
  addComment: (postId: number, comment: string, userId: number) => void;
};

const PostContext = createContext<PostContextType | undefined>(undefined);

export const PostProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function loadPosts() {
      const data = await fetchPosts();
      setPosts(data);
    }
    loadPosts();
  }, []);

  const likePost = (postId: number) => {
    setPosts((prev) => prev.map(post => post.id === postId ? { ...post, likes: post.likes + 1 } : post));
  };

  const addComment = (postId: number, comment: string, userId: number) => {
    setPosts((prev) => prev.map(post =>
      post.id === postId ? { ...post, comments: [...post.comments, { userId, text: comment, timestamp: new Date().toISOString(), likes: 0 }] } : post
    ));
  };

  return (
    <PostContext.Provider value={{ posts, setPosts, likePost, addComment }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = (): PostContextType => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePosts must be used within a PostProvider");
  }
  return context;
};