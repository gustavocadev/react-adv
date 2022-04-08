import ProductCardComponent from "./ProductCard"

import ProductButtons from "./ProductButtons"
import ProductTitle from "./ProductTitle"
import ProductImage from "./ProductImage"
import { ProductCardCurrentProps } from "../types/types"

export { default as ProductButtons } from "./ProductButtons"
export { default as ProductTitle } from "./ProductTitle"
export { default as ProductImage } from "./ProductImage"

const ProductCard: ProductCardCurrentProps = Object.assign(
  ProductCardComponent,
  {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
  }
)

export default ProductCard
