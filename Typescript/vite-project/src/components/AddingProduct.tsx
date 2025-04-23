import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import axios from "axios";

interface Product {
  title: string;
  description: string;
  price: string;
}

export const AddingProduct: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState<Product>({ 
    title: "", 
    description: "", 
    price: "" 
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/data");
        setProducts(response.data);
      } catch (error) {
        console.error("Ошибка при загрузке продуктов:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/data",
        newProduct
      );
      
      setProducts([...products, response.data]);
      setIsModalOpen(false);
      setNewProduct({ title: "", description: "", price: "" });
    } catch (error) {
      console.error("Ошибка при добавлении продукта:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full h-full items-center justify-center">
      <Button 
        size="medium" 
        color="primary" 
        title="Добавить товар" 
        onClick={() => setIsModalOpen(true)}
      />

      {isModalOpen && (
        <div className="modal">
          <input
            type="text"
            name="title"
            placeholder="Название"
            value={newProduct.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Описание"
            value={newProduct.description}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="price"
            placeholder="Цена"
            value={newProduct.price}
            onChange={handleInputChange}
          />
          <Button size="medium" color="primary" title="Добавить" onClick={handleAddProduct}/>
          <Button size="medium" color="primary" title="Закрыть" onClick={() => setIsModalOpen(false)}/>
        </div>
      )}

      <div>
        {products.map((product, index) => (
          <div key={index} className="product">
            <h3>Название: {product.title}</h3>
            <p>Описание: {product.description}</p>
            <p>Цена: {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};