import styles from "../styles/styles.module.css"
import { useProduct } from "../hooks/useProduct"
import { createContext, ReactNode } from "react"
import { Product, ProductContextType } from "../types/types"

export const ProductContext = createContext({} as ProductContextType)
const { Provider } = ProductContext

export type PCardProps = {
  product: Product
  children?: ReactNode
}

const ProductCard = ({ product, children }: PCardProps) => {
  const { counter, increaseBy } = useProduct()

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  )
}

export default ProductCard
