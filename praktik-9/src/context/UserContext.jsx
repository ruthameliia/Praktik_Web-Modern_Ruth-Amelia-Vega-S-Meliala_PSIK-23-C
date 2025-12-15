// File: src/context/UserContext.jsx
import React, { createContext, useState, useContext } from "react";

// Membuat User Context
const UserContext = createContext();

// Custom Hook untuk menggunakan User Context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

// User Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Login function
  const login = async (email, password) => {
    setIsLoading(true);
    // Simulasi API call
    setTimeout(() => {
      setUser({
        id: 1,
        name: "Ruth Amelia",
        email: email,
        avatar: "\u{1F464}",
      });
      setIsLoading(false);
    }, 1000);
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  // Update user profile
  const updateProfile = (updatedData) => {
    setUser((prev) => ({ ...prev, ...updatedData }));
  };

  const value = {
    user,
    isLoading,
    login,
    logout,
    updateProfile,
    isAuthenticated: !!user,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;
