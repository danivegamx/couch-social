"use client";

import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import moment from "moment";
import {
  FaThumbsUp,
  FaRegThumbsUp,
  FaRegComment,
  FaShare,
  FaRegBookmark
} from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import { useUser } from "../../context/userContext";
import { usePosts } from "../../context/postContext";

import { Post } from "../../types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./styles.sass";
import { currentUser } from "@/data/users";

type PostCardProps = {
  post: Post;
};

const getContentFromPost = (post: Post) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  if (post.images.length > 0) {
    return (
      <div className="post-content-wrapper">
        <p className="post-content-parragraph">{post.content}</p>
        <Slider {...settings}>
          {
            post.images.map((image, index) => (
              <figure key={index} className="rounded-lg overflow-hidden">
                <img
                  src={`/posts/${image}`}
                  alt={image}
                  style={{ width: '100%' }}
                />
              </figure>
            ))
          }
        </Slider>
      </div>
    );
  }
  return <p>{post.content}</p>;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { users } = useUser();
  const { likePost, addComment } = usePosts();
  const user = users.find((user) => user.id === post.userId);
  const [openCommentSection, setOpenCommentSection] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [hasLikedThePost, setHasLikedThePost] = useState(false);

  const handleNewComment = () => {
    addComment(post.id, newComment, currentUser.id);
    setNewComment('');
  };

  const handleLikePost = () => {
    if (!hasLikedThePost) {
      likePost(post.id);
      setHasLikedThePost(true);
    }
  };

  return (
    <>
      <div key={post.id} className="post rounded-lg p-4 my-4 md:px-8">
        <div className="post-header flex gap-4">
          <figure>
            <Image
              src={`/avatars/${user?.photo}`}
              alt="CouchSocial Logo"
              width={42}
              height={42}
              className="text-center"
            />
          </figure>
          <div>
            <h2 className="post-user">{user?.name}</h2>
            <p className="post-moment mb-4">{moment(post.timestamp).fromNow()}</p>
          </div>
        </div>
        {getContentFromPost(post)}
        <div className="post-data mt-4 flex gap-4">
          <span className="post-likes rounded-lg" onClick={handleLikePost}>{hasLikedThePost ? <FaThumbsUp /> : <FaRegThumbsUp />}{post.likes}</span>
          <span className="post-comments rounded-lg" onClick={() => setOpenCommentSection(!openCommentSection)}><FaRegComment />{post.comments.length}</span>
          <span className="post-shared rounded-lg"><FaShare />{post.shared}</span>
          <span className="post-shared rounded-lg ml-[auto]"><FaRegBookmark /></span>
        </div>
      </div>
      <div className="comment-wrapper mt-4 px-6">
        {
          openCommentSection && post.comments.length > 0 ? (
            <>
              <h3 className="font-semibold">COMMENTS</h3>
              {
                post.comments.map((comment) => {
                  const commentUser = users.find((user) => user.id === comment.userId);
                  return (
                    <div key={`${post.id}-${comment.userId}`} className="comment rounded-lg p-4 my-2 md:px-8">
                      <figure>
                        <Image
                          src={`/avatars/${commentUser?.photo}`}
                          alt="CouchSocial Logo"
                          width={32}
                          height={32}
                          className="text-center"
                        />
                      </figure>
                      <div>
                        <h2 className="comment-user">{commentUser?.name}</h2>
                        <p className="my-2">{comment.text}</p>
                        <p className="comment-moment">{moment(post.timestamp).fromNow()} · <span>{comment.likes} like{comment.likes > 1 ? 's' : '' }</span></p>
                      </div>
                      <button className="ml-[auto]"><FaRegThumbsUp /></button>
                    </div>
                  )
                })
              }
              <div className="comment-input-wrapper flex mt-4">
                <div className="comment-input rounded-lg p-2 w-full">
                  <input
                    type="text"
                    className="comment-create"
                    placeholder="Type your comment here..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                </div>
                <button className="p-5" onClick={handleNewComment}><BsSend /></button>
              </div>
            </>
          ) : ''
        }
      </div>
    </>
  );
};

export default PostCard;