import React from "react";
import "../App.css";

export default function ProductCard({ name, price, isAvailable, image }) {
  const formatHarga = (angka) => {
    return angka.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
  };

  return (
    <div
      className="product-card"
      style={{
        borderColor: isAvailable ? "#28a745" : "#ccc",
      }}
    >
      <img src={image} alt={name} className="product-image" />
      <h2>{name}</h2>
      {isAvailable ? (
        <p className="price">{formatHarga(price)}</p>
      ) : (
        <p className="sold-out">Stok Habis</p>
      )}
    </div>
  );
}
