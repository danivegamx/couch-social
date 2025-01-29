export const fetchPosts = async () => {
  const res = await fetch("/api/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

export const fetchUsers = async () => {
  const res = await fetch("/api/users");
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json();
};

export const fetchCurrentUser = async () => {
  const res = await fetch("/api/current-user");
  if (!res.ok) {
    throw new Error("Failed to fetch current user");
  }
  return res.json();
};