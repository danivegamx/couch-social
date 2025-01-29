import React from "react";
import PostList from "../components/posts/PostList";
import { mockPosts } from "../data/posts";

const HomePage: React.FC = () => {
  return <PostList posts={mockPosts} />;
};

export default HomePage;
