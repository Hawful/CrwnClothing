export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = findExistingItem(cartItems, cartItemToAdd);

    if(existingCartItem){
        return cartItems.map(
            cartItem => cartItem.id === cartItemToAdd.id
             ? { ...cartItem, quantity: cartItem.quantity + 1 }
             : cartItem
        );
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = findExistingItem(cartItems, cartItemToRemove);

    if(existingCartItem.quantity == 1){
        return cartItems.filter( cartItem => cartItem.id !== cartItemToRemove.id )
    }
    
    return cartItems.map(
        cartItem => cartItem.id === cartItemToRemove.id ? 
        { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
}

const findExistingItem = (cartItems, findTarget) => {
    return cartItems.find(
        cartItem => cartItem.id === findTarget.id
    );
}