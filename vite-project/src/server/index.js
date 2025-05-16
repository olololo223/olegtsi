import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors()); 
app.use(express.json()); 

let users = [];

app.post('/api/auth/login', (req, res) => {
  const { firstName, lastName, email, phone, role, password } = req.body;

  if (users.some(u => u.email === email)) {
    return res.status(400).json({ message: 'Пользователь с таким email уже существует' });
  }

  const newUser = {
    id: Date.now().toString(),
    firstName,
    lastName,
    email,
    phone,
    role: role || 'user',
    password 
  };

  users.push(newUser);
  
  const { password: _, ...userWithoutPassword } = newUser;
  res.status(201).json(userWithoutPassword);
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Неверный email или пароль' });
  }

  const token = `fake-token-${user.id}`;
  
  const { password: _, ...userWithoutPassword } = user;
  
  res.json({ token, user: userWithoutPassword });
});

app.get('/api/auth/login', (req, res) => {
  const usersWithoutPasswords = users.map(user => {
    const { password, ...rest } = user;
    return rest;
  });
  res.json(usersWithoutPasswords);
});


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