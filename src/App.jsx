import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import ProductCard from "./components/productCard";

const API = "https://68d269b6cc7017eec543c2c4.mockapi.io/api/v1/products";

function App() {
  const [product, setProduct] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    img: "",
    description: "",
  });

  async function addProduct() {
    if (
      newProduct.title.trim() &&
      newProduct.price &&
      newProduct.img.trim() &&
      newProduct.description.trim()
    ) {
      const res = await axios.post(API, newProduct);
      if (res.status == 201) {
        setNewProduct({
          title: "",
          price: "",
          img: "",
          description: "",
        });
        getProducts();
      }
    }
  }

  async function getProducts() {
    const { data } = await axios.get(
      "https://68d269b6cc7017eec543c2c4.mockapi.io/api/v1/products"
    );
    setProduct(data);
    console.log(data);
  }

  async function deleteProduct(id) {
    const cofirmChek = confirm("Are you sure want to delete this product?");
    console.log(cofirmChek);
    if (cofirmChek) {
      const response = await axios.delete(`${API}/${id}`);
      console.log(response);
      if (response.status == 200) {
        getProducts();
      }
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <div className="form">
        <h1>Add new Product</h1>
        <input
          type="text"
          placeholder="Product Title"
          value={newProduct.title}
          onChange={(e) =>
            setNewProduct({ ...newProduct, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Prace"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Product Image"
          value={newProduct.img}
          onChange={(e) =>
            setNewProduct({ ...newProduct, img: e.target.value })
          }
        />
        <textarea
          type="text"
          placeholder="Product Discription"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
        />
        <button onClick={addProduct}>Add Product</button>
      </div>
      <div className="products">
        {product.map((obj, index) => (
          <ProductCard
            product={obj}
            key={index}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
