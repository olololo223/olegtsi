import React, { useState } from "react";
import { Button } from "./Button";

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    setProducts([...products, newProduct]);
    setIsModalOpen(false);
    setNewProduct({ title: "", description: "", price: "" });
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