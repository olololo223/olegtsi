import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors()); 
app.use(express.json()); 

// Массив для хранения продуктов
let products = [];

// Метод GET для получения всех продуктов
app.get("/api/data", (req, res) => {
  res.json(products);
});

// Метод POST для добавления нового продукта
app.post('/api/data', (req, res) => {
  const newProduct = req.body;
  products.push(newProduct); // Сохраняем продукт в массив
  res.status(201).json(newProduct); // Отправляем ответ с новым продуктом
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});