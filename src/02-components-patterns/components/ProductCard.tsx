import styles from "../styles/styles.module.css"
import { useProduct } from "../hooks/useProduct"
import { createContext, CSSProperties, ReactNode } from "react"
import { Product, ProductContextType } from "../types/types"

export const ProductContext = createContext({} as ProductContextType)
const { Provider } = ProductContext

export type Props = {
  product: Product
  children?: ReactNode
  className?: string
  style?: CSSProperties
}

const ProductCard = ({ product, children, className, style }: Props) => {
  const { counter, increaseBy } = useProduct()

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  )
}

export default ProductCard
