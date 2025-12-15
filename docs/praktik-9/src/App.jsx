import React from "react";
import "./App.css";
import UserProfile from "./components/UserProfile";
import ProductCard from "./components/ProductCard";

function App() {
  const userData = {
    name: "Ruthie",
    email: "Yuthieee@gmail.com",
    avatar: "/vite.svg",
    joinDate: "2023-01-15",
  };

  return (
    <div className="App">
      <h1>Demo JSX dan Rendering</h1>

      {/* Profil Pengguna */}
      <UserProfile user={userData} />

      <hr />

      {/* Daftar Produk */}
      <h2>Daftar Produk</h2>

      <ProductCard
        name="Risol Mayo"
        price={2000}
        isAvailable={true}
        image="/risol.jpg"
      />

      <ProductCard
        name="Beng-Beng"
        price={5000}
        isAvailable={false}
        image="/bengbeng.jpg"
      />

      <ProductCard
        name="Aqua"
        price={5000}
        isAvailable={true}
        image="aqua.jpg"
      />
    </div>
  );
}

export default App;
