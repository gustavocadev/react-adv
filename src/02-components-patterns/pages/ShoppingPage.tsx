import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components"
import "../styles/custom-styles.css"

const product = {
  id: crypto.randomUUID(),
  title: "Cofee Mug - Card",
  img: "/coffee-mug.png",
}

const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-white font-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white font-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            backgroundColor: "#61DAFB",
          }}
        >
          <ProductImage
            style={{ boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.2)" }}
          />
          <ProductTitle style={{ fontWeight: "bold" }} />
          <ProductButtons
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          />
        </ProductCard>
      </div>
    </div>
  )
}
export default ShoppingPage