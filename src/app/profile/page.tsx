"use client";

import Image from "next/image";
import PostCard from "../../components/posts/PostCard";
// import {
//   FiMessageCircle,
//   FiUsers,
//   FiUser,
//   FiHome,
//   FiBell,
//   FiLogOut,
//   FiSettings
// } from "react-icons/fi";
import { usePosts } from "../../context/postContext";
import { useUser } from "../../context/userContext";

import "./styles.sass";

export default function Home() {
  const { currentUser } = useUser();
  console.log(currentUser)
  const { posts } = usePosts();
  const userPosts = posts.filter(post => post.userId === currentUser?.id);

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div style={{ background: `url('/cover/${currentUser?.coverPhoto}') no-repeat center center` }} className="profile-cover flex items-center py-3 w-full"></div>
      <div className="profile-details-top flex gap-7 my-5 flex-col md:flex-row">
        <figure className="profile-picture mt-[-4rem] ml-[35%] md:mt-4 md:ml-4">
          <Image
            src={`/avatars/${currentUser?.photo}`}
            alt="CouchSocial Logo"
            width={100}
            height={100}
            className="text-center"
          />
        </figure>
        <div className="profile-details md:mt-4 text-center md:text-left">
          <h3 className="font-bold text-2xl">{currentUser?.name}</h3>
          <p className="text-gray-500">{currentUser?.location}</p>
          <p className="profile-bio"><span>" </span>{currentUser?.bio}</p>
        </div>
        <div className="profile-stats grid grid-cols-3 gap-2 pt-5 md:ml-[auto]">
          <div className="profile-stats-item rounded-2xl"><span>{userPosts.length}</span> post{userPosts.length > 1 ? 's' : ''}</div>
          <div className="profile-stats-item rounded-2xl"><span>{currentUser?.friends?.length ?? 0}</span> friend{(currentUser?.friends?.length ?? 0) > 1 ? 's' : ''}</div>
          <div className="profile-stats-item dark rounded-2xl font-semibold">Edit Profile</div>
        </div>
      </div>
      <h3 className="my-7">POSTS</h3>
      <div className="post-list mt-7 mb-12">
        {userPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
