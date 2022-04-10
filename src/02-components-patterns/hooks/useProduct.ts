import { useEffect, useRef, useState } from "react"
import { unstable_renderSubtreeIntoContainer } from "react-dom"
import { onChangeArgs, Product, InitialValues } from "../types/types"

type Props = {
  product: Product
  onChange?: (args: onChangeArgs) => void
  value?: number
  initialValues?: InitialValues
}

const useProduct = ({ onChange, product, value = 0, initialValues }: Props) => {
  const [counter, setCounter] = useState<number>(initialValues?.count ?? value)
  const isMounted = useRef(false)

  console.log(initialValues?.count)

  const increaseBy = (num: number) => {
    let newValue = Math.max(counter + num, 0)

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount)
    }
    setCounter(newValue)
    onChange && onChange({ count: newValue, product })
  }

  const reset = () => {
    setCounter(initialValues?.count ?? value)
  }

  useEffect(() => {
    if (!isMounted.current) {
      return
    }
    // if (counter >= maxCount) return
    setCounter(value)
  }, [value])

  useEffect(() => {
    isMounted.current = true
  }, [])

  let existsInitalValues = initialValues?.count ? true : false

  return {
    counter,
    isMaxCountReached:
      existsInitalValues && initialValues?.maxCount === counter,
    maxCount: initialValues?.maxCount,

    increaseBy,
    reset,
  }
}
export { useProduct }
