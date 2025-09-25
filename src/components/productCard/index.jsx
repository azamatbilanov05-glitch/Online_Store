    import "./style.css"



function ProductCard({product, deleteProduct }) {
    


  return (
    // <div className="container">
    //   <div className="products">
    //     {product.map((productt, index) => (
          <div  className="card">
            <h1>{product.title}</h1>
            <img src={product.img} alt="" />
            <h2>{product.price}</h2>
            <p>{product.description}</p>
            <h3>{product.id}</h3>
            <div>
                <button>Edit</button>
                <button onClick={() => deleteProduct(product.id)}>Delete</button>
            </div>
          </div>
    //     ))}
    //   </div>
    // </div>
  );
}
 
export default ProductCard
