import { useState, useEffect } from "react";
import { getProducts } from "../../services/products";
import ProductItem from "./ProductItem";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetchProducts();
  }, []);

  //const productContext = products.length === 0 ? 'No Product' : ;

  return (
    <>
      <div className="row mt-3">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
