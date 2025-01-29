"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User } from "../types";
import { fetchUsers, fetchCurrentUser } from "../lib";

type UserContextType = {
  currentUser: User | null;
  users: User[];
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function loadUsers() {
      const data = await fetchUsers();
      setUsers(data);
    }
    async function loadCurrentUser() {
      const data = await fetchCurrentUser();
      setCurrentUser(data);
    }
    loadUsers();
    loadCurrentUser();
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, users, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};