import styles from "../styles/styles.module.css"
import { useProduct } from "../hooks/useProduct"
import { createContext, CSSProperties, ReactNode } from "react"
import {
  InitialValues,
  onChangeArgs,
  Product,
  ProductCardHandlers,
  ProductContextType,
} from "../types/types"

export const ProductContext = createContext({} as ProductContextType)
const { Provider } = ProductContext

export type Props = {
  product: Product
  // children?: ReactNode
  children: (args: ProductCardHandlers) => ReactNode
  className?: string
  style?: CSSProperties
  onChange?: (args: onChangeArgs) => void
  value?: number
  initialValues?: InitialValues
  maxCount?: number
}

const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
    useProduct({
      onChange,
      product,
      value,
      initialValues,
    })

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,

          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  )
}

export default ProductCard
