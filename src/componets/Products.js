import React from "react";
import CardProduct from "./CardProduct";
import { useState } from "react";
import Product from "./ProductCard";
import '../styles/Product.css'
function Products() {
  const productDate = [
    {
      id: 1,
      img: "/lukas.jpg",
      title: "Эмаль Condor ПФ-115 жёлтая 1,8 кг ",
      desc: "Быстросохнущая, высокоукрывистая, защита от водорослей, мха, лишайника, защита от грибка",
      price: 500,
      count: 10,
      isLiked: false,
      isKorzina: false,
    },
    {
      id: 2,
      img: "/das.jpg",
      title: "Эмаль Condor ПФ-115 жёлтая 1,8 кг ",
      desc: "Быстросохнущая, высокоукрывистая, защита от водорослей, мха, лишайника, защита от грибка",
      price: 500,
      count: 0,
      isLiked: false,
      isKorzina: false,
    },
    {
      id: 3,
      img: "/s.jpg",
      title: "Эмаль Condor ПФ-115 жёлтая 1,8 кг ",
      desc: "Быстросохнущая, высокоукрывистая, защита от водорослей, мха, лишайника, защита от грибка",
      price: 500,
      count: 10,
      isLiked: false,
      isKorzina: false,
    },
  ];

  const [product, setProducts] = useState(productDate);
  const [status, setStatus] = useState("full");

  const handleLike = (productId) => {
    const newProducts = product.map((item) => {
      if (item.id === productId) {
        return { ...item, isLiked: !item.isLiked };
      }
      return item;
    });
    setProducts(newProducts);
  };

  const handleKorzina = (productId) => {
    const newProductK = product.map((item) => {
      if (item.id === productId) {
        return { ...item, isKorzina: !item.isKorzina };
      }
      return item;
    });
    setProducts(newProductK);
  };

  return (
    <div className="container">
      <div className="main">
        <h1>Садово-огородный инвентарь</h1>
        <header>
          <div className="header">
            <p>Сортировать: Сначала новые</p>
            <div className="vids">
              <h2>Вид:</h2>
              <button onClick={() => setStatus("card")}>
                <img src="/cub.png" alt="Card View" />
              </button>
              <button onClick={() => setStatus("full")}>
                <img src="/line.png" alt="Full View" />
              </button>
            </div>
          </div>
          <div className="main-card-section">
            <div
              className="product"
              style={{
                display: "flex",
                flexDirection: status === "full" ? "column" : "row",
              }}
            >
              {product.map((item) => {
                if (status === "card") {
                  return (
                    <CardProduct
                      key={item.id}
                      product={item}
                      handleLike={handleLike}
                      handleKorzina={handleKorzina}
                    />
                  );
                }
                return (
                  <Product
                    key={item.id}
                    product={item}
                    handleLike={handleLike}
                    handleKorzina={handleKorzina}
                  />
                );
              })}
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Products;
