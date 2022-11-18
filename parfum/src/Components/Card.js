import React from "react";
import "./Card.css";
import productImageSrc from "./image/image-product-desktop.jpg";

const Card = (props) => {
    return (
        <div className="contenair">
            <img
                src={productImageSrc}
                className="product-img"
                alt={props.productImage}
            />
            <div className="content">
                <div className="category">{props.category}</div>
                <h2>{props.productTitle}</h2>
                <div className="description">{props.productContent}</div>
                <div className="price">
                    <div className="sale-price">{props.salePrice}</div>
                    <div className="original-price">{props.price}</div>
                </div>
                <button>
                    <img src="./image/icon-cart.svg" alt="" />
                    <p>Add to cart</p>
                </button>
            </div>
        </div>
    );
};

export default Card;