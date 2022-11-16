import React from "react";
import { Link } from "react-router-dom";
import "./productItem.css";

import { useCart } from "../../hooks/useCart";
import { formatNumber } from "../../helpers/utils";

const ProductItem = ({ product }) => {
  const { addProduct, cartItems, increase } = useCart();

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <div className="card card-body">
      <img
        class="card"
        style={{ display: "block", margin: "0 auto 10px", maxHeight: "200px" }}
        className="img-fluid"
        src={product.photo + "?v=" + product.id}
        alt=""
      />
      <p class="productName">{product.name}</p>
      <h3 className="text-left">{formatNumber(product.price)}</h3>
      <div className="text-right">
        <Link to="/" className="btn btn-link btn-sm mr-2">
          <h6>Detalles</h6>
        </Link>

        {isInCart(product) && (
          <button class="añadirMas" onClick={() => increase(product)}>
            Añadir más
          </button>
        )}

        {!isInCart(product) && (
          <button class="añadir" onClick={() => addProduct(product)}>
            Añadir a la cesta
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
