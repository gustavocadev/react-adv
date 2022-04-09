import { useState } from "react"
import { onChangeArgs, ProductInCart } from "../types/types"

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart
  }>({})

  const handleProductCountChange = ({ count, product }: onChangeArgs) => {
    // console.log({ count, product })

    setShoppingCart((oldShoppingCart) => {
      const productInCart: ProductInCart = oldShoppingCart[product.id] ?? {
        ...product,
        count: 0,
      }
      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        }
      }
      // delete product

      const { [product.id]: toDelete, ...rest } = oldShoppingCart

      return { ...rest }
    })
  }

  return {
    shoppingCart,
    handleProductCountChange,
  }
}
