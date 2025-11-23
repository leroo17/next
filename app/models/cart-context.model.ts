import { CartItem } from "./cart-item.model"
import { Product } from "./product.model"

export interface CartContextType {
    isOpen: boolean
    deleteCartItem: (product: Product) => void
    setIsOpen: (value: boolean) => void
    addToCart: (product: Product) => void
    cartItems: CartItem[]
}