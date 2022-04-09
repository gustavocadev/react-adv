import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components"
import "../styles/custom-styles.css"
import { useShoppingCart } from "../hooks/useShoppingCart"
import { products } from "../data/products"

const ShoppingPage = () => {
  const { handleProductCountChange, shoppingCart } = useShoppingCart()

  return (
    <main>
      <h1>ShoppingPage</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={handleProductCountChange}
            value={shoppingCart[product.id]?.count ?? 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white font-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <section className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark text-white"
            style={{ width: "150px" }}
            value={product.count}
            onChange={handleProductCountChange}
          >
            <ProductImage className="custom-image" />
            <ProductButtons
              className="custom-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            />
          </ProductCard>
        ))}
      </section>
    </main>
  )
}
export default ShoppingPage
