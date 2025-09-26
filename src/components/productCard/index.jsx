import { useState } from "react";
import "./style.css";

function ProductCard({ product, deleteProduct, updateProduct}) {
  const [newProductInfo, setNewProductInfo] = useState({
    title: product.title,
    price: product.price,
    img: product.img,
    description: product.description,
  });
  const [isEditing, setIsEditing] = useState(false);

  function handLesSubmite(e) {
    e.preventDefault();
    updateProduct(product.id, newProductInfo);
    setIsEditing(false);
  }

  return (
    <>
      {isEditing && (
        <form onSubmit={handLesSubmite}>
          <input
            type="text"
            placeholder="Product Title"
            value={newProductInfo.title}
            onChange={(e) =>
              setNewProductInfo({ ...newProductInfo, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Prace"
            value={newProductInfo.price}
            onChange={(e) =>
              setNewProductInfo({ ...newProductInfo, price: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Product Image"
            value={newProductInfo.img}
            onChange={(e) =>
              setNewProductInfo({ ...newProductInfo, img: e.target.value })
            }
          />
          <textarea
            type="text"
            placeholder="Product Discription"
            value={newProductInfo.description}
            onChange={(e) =>
              setNewProductInfo({
                ...newProductInfo,
                description: e.target.value,
              })
            }
          />
          <button>Uppdate Product</button>
        </form>
      )}

      <div className="card">
        <h1>{product.title}</h1>
        <img src={product.img} alt="" />
        <h2>{product.price}</h2>
        <p>{product.description}</p>
        <h3>{product.id}</h3>
        <div>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
        </div>
      </div>
    </>
    
  );
}

export default ProductCard;
