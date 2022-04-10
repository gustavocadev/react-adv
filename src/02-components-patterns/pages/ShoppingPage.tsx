import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components"
import "../styles/custom-styles.css"
import { products } from "../data/products"

const product = products[0]

const ShoppingPage = () => {
  return (
    <main>
      <h1>ShoppingPage</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, increaseBy, count, isMaxCountReached }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white font-bold" />
            <ProductButtons className="custom-buttons" />
            <button type="reset" onClick={reset}>
              Reset
            </button>
            {count !== 0 && <button onClick={() => increaseBy(-2)}>-2</button>}
            {!isMaxCountReached && (
              <button onClick={() => increaseBy(2)}>+2</button>
            )}
            <span>{count}</span>
          </>
        )}
      </ProductCard>
    </main>
  )
}
export default ShoppingPage
