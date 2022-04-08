import { CSSProperties, useContext } from "react"
import { ProductContext } from "./ProductCard"
import noImage from "../assets/no-image.jpg"
import styles from "../styles/styles.module.css"

export type Props = {
  className?: string
  img?: string
  style?: CSSProperties
}

const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext)
  let imgToShow = ""
  if (img) {
    imgToShow = img
  } else {
    imgToShow = product.img!
  }
  return (
    <img
      alt="Product image"
      src={imgToShow ?? noImage}
      className={`${styles.productImg} ${className}`}
      style={style}
    />
  )
}

export default ProductImage
