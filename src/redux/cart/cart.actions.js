import CartActionsType from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionsType.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type: CartActionsType.addItem,
    payload: item 
})