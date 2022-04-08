import { ReactNode } from "react"
import { PCardProps } from "../components/ProductCard"

type ProductButtonsProps = {
  increaseBy: (value: number) => void
  counter: number
}

export type Product = {
  id: string
  title: string
  img?: string
}

export type ProductContextType = {
  counter: number
  increaseBy: (value: number) => void
  product: Product
}

export type ProductCardCurrentProps = {
  ({ product, children }: PCardProps): JSX.Element
  Title: ({ title }: { title?: string }) => JSX.Element
  Image: ({ img }: { img?: string }) => JSX.Element
  Buttons: () => JSX.Element
}
