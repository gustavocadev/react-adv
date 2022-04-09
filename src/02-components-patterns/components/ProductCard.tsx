import styles from "../styles/styles.module.css"
import { useProduct } from "../hooks/useProduct"
import { createContext, CSSProperties, ReactNode } from "react"
import { onChangeArgs, Product, ProductContextType } from "../types/types"

export const ProductContext = createContext({} as ProductContextType)
const { Provider } = ProductContext

export type Props = {
  product: Product
  children?: ReactNode
  className?: string
  style?: CSSProperties
  onChange?: (args: onChangeArgs) => void
  value?: number
}

const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
}: Props) => {
  const { counter, increaseBy } = useProduct({ onChange, product, value })

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
