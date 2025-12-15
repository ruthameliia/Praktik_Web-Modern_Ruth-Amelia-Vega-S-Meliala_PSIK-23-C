// src/components/UserProfile.jsx
import React from "react";
import "../App.css";

export default function UserProfile({ user }) {
  return (
    <div className="profile-details">
      <div className="profile-header">
        <img src={user.avatar} alt="avatar" className="avatar" />
        <h2>{user.name}</h2>
      </div>
      <p>Email: {user.email}</p>
      <p>Tanggal Bergabung: {user.joinDate}</p>
    </div>
  );
}
