// src/App.jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        {/* Bagian Icon Gerak-Gerak */}
        <div className="icon-container">
          <div className="floating-icon">🚀</div>
          <div className="floating-icon">⚛️</div>
          <div className="floating-icon">💻</div>
        </div>

        {/* Judul Keren */}
        <h1>Hello, I'm Ruthie!</h1>
        <p>Frontend Developer in The Making</p>

        {/* Kartu Interaktif */}
        <div className="card">
          <p>Selamat datang</p>
          <p>Klik tombol di bawah untuk melihat magic number!</p>
          <br />
          <button onClick={() => setCount((count) => count + 1)}>
            Sudah di-klik {count} kali 🔥
          </button>
        </div>

        {/* Footer sesuai request */}
        <div className="footer">Copyright &copy; 2025 Ruth amelia</div>
      </div>
    </>
  );
}

export default App;
