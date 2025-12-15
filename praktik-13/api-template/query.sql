-- buat db baru cth : toko_db
-- masukin kode sql dibawah ini -> GO

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);