import { Product } from "../types/types"

const product1ID = crypto.randomUUID()
const product2ID = crypto.randomUUID()

const product1: Product = {
  id: product1ID,
  title: "Cofee Mug - Card",
  img: "/coffee-mug.png",
}

const product2: Product = {
  id: product2ID,
  title: "Cofee Mug - Meme",
  img: "/coffee-mug2.png",
}

export const products: Product[] = [product1, product2]
