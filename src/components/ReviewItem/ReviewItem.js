import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { remove } = props;
  const { name, img, price, quantity, shipping } = props.product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-item-detail-container">
        <div className="review-item-detail">
          <p className="product-name">{name}</p>
          <p>
            Price: <span className="orange-color">{price}</span>
          </p>
          <p>
            <small>Shipping: {shipping}</small>
          </p>
          <p>
            <small>Quantity: {quantity}</small>
          </p>
        </div>
        <div className="delete-container">
          <button
            className="delete-button"
            onClick={() => remove(props.product)}
          >
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
