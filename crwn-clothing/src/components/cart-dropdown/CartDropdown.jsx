import React from "react";

import CustomButton from "../form-components/CustomButton";

import './CartDropdown.scss';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items"/>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown;