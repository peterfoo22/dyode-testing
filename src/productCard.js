import PRODUCT1 from "./images/Product-Image-1.jpeg";

import "./product-card.css";


const ProductCard = () => {
  return (
    <>
      <div className="product-card">
        <img src={PRODUCT1} alt="shopify alt tag" />
        <div className="product-card__info-holder">
          <h4 className="product-card__title" > Product Title </h4>
          <p className="product-card__subtitle"> Women's T Shirt </p>
          <p className="product-card__price">$19.99</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
