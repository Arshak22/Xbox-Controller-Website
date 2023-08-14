import React from "react";
import './style.css';

export default function ListProduct(product) {
    return(
        <div className="list_product">
            <div className="product_image_block">
                <img src={product.product.image} loading="lazy" alt={product.product.image} className="productImage"/>
            </div>
            <div className="product_hover_image_block">
                <img src={product.product.hover_image} loading="lazy" alt={product.product.hover_image} className="productImage"/>
            </div>
            <div className="productInfo">
                <h3 className="product_name">{product.product.name}</h3>
                <div>
                    <h3 className="product_new_price">{product.product.new_price}</h3>
                    <h3 className="product_old_price">{product.product.old_price}</h3>
                </div>
            </div>
            <button className="addToCart">Add To Cart +</button>
        </div>
    );
}