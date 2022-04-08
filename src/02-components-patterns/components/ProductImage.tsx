import { useContext } from "react"
import { ProductContext } from "./ProductCard"
import noImage from "../assets/no-image.jpg"
import styles from "../styles/styles.module.css"

const ProductImage = ({ img = "" }) => {
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
      className={styles.productImg}
    />
  )
}

export default ProductImage
