<?php
// api.php di dalam folder www/react-toko/ (kalo pake laragon ya wok)

// 1. Header untuk mengizinkan React (CORS) mengakses API ini
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight request (penting untuk React)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// 2. Koneksi ke Database
$host = 'localhost';
$db_name = 'toko_db'; // Sesuaikan dengan nama databasemu
$username = 'root';   // Default laragon biasanya root
$password = '';       // Default laragon biasanya kosong

try {
    $conn = new PDO("mysql:host=$host;dbname=$db_name", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo json_encode(["success" => false, "message" => "Connection failed: " . $e->getMessage()]);
    exit();
}

// 3. Baca Method Request
$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

switch ($method) {
    case 'GET':
        // Ambil semua data
        $stmt = $conn->prepare("SELECT * FROM products ORDER BY id DESC");
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(["success" => true, "data" => $result]);
        break;

    case 'POST':
        // Tambah data
        if (!empty($input['name']) && !empty($input['price'])) {
            $stmt = $conn->prepare("INSERT INTO products (name, price) VALUES (:name, :price)");
            $stmt->execute([':name' => $input['name'], ':price' => $input['price']]);
            echo json_encode(["success" => true, "message" => "Produk berhasil ditambahkan"]);
        } else {
            echo json_encode(["success" => false, "message" => "Data tidak lengkap"]);
        }
        break;

    case 'PUT':
        // Edit data (ID diambil dari URL param ?id=...)
        $id = isset($_GET['id']) ? $_GET['id'] : null;
        if ($id && !empty($input['name']) && !empty($input['price'])) {
            $stmt = $conn->prepare("UPDATE products SET name = :name, price = :price WHERE id = :id");
            $stmt->execute([':name' => $input['name'], ':price' => $input['price'], ':id' => $id]);
            echo json_encode(["success" => true, "message" => "Produk berhasil diupdate"]);
        } else {
            echo json_encode(["success" => false, "message" => "ID atau data invalid"]);
        }
        break;

    case 'DELETE':
        // Hapus data
        $id = isset($_GET['id']) ? $_GET['id'] : null;
        if ($id) {
            $stmt = $conn->prepare("DELETE FROM products WHERE id = :id");
            $stmt->execute([':id' => $id]);
            echo json_encode(["success" => true, "message" => "Produk berhasil dihapus"]);
        } else {
            echo json_encode(["success" => false, "message" => "ID tidak ditemukan"]);
        }
        break;
}
?>