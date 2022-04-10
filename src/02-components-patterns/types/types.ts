import type { Props as PCardProps } from "../components/ProductCard"
import type { Props as ProductButtonsProps } from "../components/ProductButtons"
import type { Props as ProductImageProps } from "../components/ProductImage"
import type { Props as ProductTitleProps } from "../components/ProductTitle"

export type Product = {
  id: string
  img?: string
  title: string
}

export type ProductContextType = {
  counter: number
  product: Product
  increaseBy: (value: number) => void
  initialValues?: InitialValues
  maxCount?: number
}

export type ProductCardCurrentProps = {
  Buttons: (props: ProductButtonsProps) => JSX.Element
  Image: (props: ProductImageProps) => JSX.Element
  Title: (props: ProductTitleProps) => JSX.Element
  (props: PCardProps): JSX.Element
}

export type onChangeArgs = {
  product: Product
  count: number
}

export type ProductInCart = Product & {
  count: number
}

export type InitialValues = {
  count?: number
  maxCount?: number
}

export type ProductCardHandlers = {
  count: number
  isMaxCountReached: boolean
  maxCount?: number
  product: Product
  increaseBy: (value: number) => void
  reset: () => void
}
