import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components"

const product = {
  id: crypto.randomUUID(),
  title: "Cofee Mug - Card",
  img: "/coffee-mug.png",
}

const ShoppingPage = () => {
  return (
    <>
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
          <ProductCard.Image />
          <ProductCard.Title title="hello world" />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title="hello world" />
          <ProductButtons />
        </ProductCard>
      </div>
    </>
  )
}
export default ShoppingPage
