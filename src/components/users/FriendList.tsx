import React from "react";
import Image from "next/image";
import { User } from "../../types";

import "./styles.sass";

type FriendListProps = {
  friends: User[];
};

const PostList: React.FC<FriendListProps> = ({ friends }) => {
  return (
    <div className="friend-list flex gap-4 p-4 my-4 rounded-full">
      {friends.map((friend: User) => (
        <figure key={friend.id} className="rounded-full">
          <Image
            src={`/avatars/${friend.photo}`}
            alt={friend.name}
            width={64}
            height={64}
            className="text-center"
          />
        </figure>
      ))}
    </div>
  );
};

export default PostList;