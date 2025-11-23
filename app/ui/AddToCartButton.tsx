'use client'
import { Product } from "../models/product.model";
import { useCart } from "../providers/CartProvider";

export default function AddToCartButton({product}: {product: Product}) {
    const {addToCart} = useCart()
    return (
        <button className="btn btn-primary" onClick={() => {addToCart(product)}}>В корзину</button>
    )
}