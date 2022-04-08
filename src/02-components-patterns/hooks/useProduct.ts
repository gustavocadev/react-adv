import { useState } from "react"

const useProduct = () => {
  const [counter, setCounter] = useState(0)

  const increaseBy = (value: number) => {
    setCounter((currentCounter) => Math.max(currentCounter + value, 0))
  }

  return {
    counter,
    increaseBy,
  }
}
export { useProduct }
