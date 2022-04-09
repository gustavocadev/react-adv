import { useEffect, useState } from "react"
import { onChangeArgs, Product } from "../types/types"

type Props = {
  product: Product
  onChange?: (args: onChangeArgs) => void
  value?: number
}

const useProduct = ({ onChange, product, value = 0 }: Props) => {
  const [counter, setCounter] = useState(value)

  const increaseBy = (num: number) => {
    const newValue = Math.max(counter + num, 0)
    setCounter(newValue)
    onChange && onChange({ count: newValue, product })
  }

  useEffect(() => {
    setCounter(value)
  }, [value])

  return {
    counter,
    increaseBy,
  }
}
export { useProduct }
