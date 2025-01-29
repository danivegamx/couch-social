"use client";

import { FiBell } from "react-icons/fi";
import PostList from "../components/posts/PostList";
import FriendList from "../components/users/FriendList";
import { usePosts } from "../context/postContext";
import { useUser } from "../context/userContext";

export default function Home() {
  const { users } = useUser();
  const { posts } = usePosts();
  return (
    <>
      <header>
        <h1 className="text-xl md:text-2xl">Welcome, {users[0]?.name}!</h1>
        <div className="notification hidden md:flex"><span className=" active rounded-full"><FiBell /></span></div>
      </header>
      <div className="friend-carousel w-full">
        <FriendList friends={users} />
      </div>
      <PostList posts={posts} />
    </>
  );
}
