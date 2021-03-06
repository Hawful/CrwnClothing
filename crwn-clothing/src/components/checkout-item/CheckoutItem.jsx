import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { addItem, clearItemFromCart, removeItem } from "../../redux/cart/cart-actions";

import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    return(
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={imageUrl} />
            </div>
            <span className="name">{name}</span>     
            <span className="price">{price}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                    <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    );
}



const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

const mapStateToProps = createStructuredSelector(
    {}
);

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);