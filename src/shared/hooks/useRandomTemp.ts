import { useEffect, useState } from 'react'

export const useRandomTemp = (): number => {
  const [temp, setTemp] = useState<number>(0)

  useEffect(() => {
    const maxTemp = 30
    const minTemp = 18

    const id = setInterval(() => {
      setTemp(Number((Math.random() * (maxTemp - minTemp) + minTemp).toFixed(1)))
    }, 1000)

    return () => clearInterval(id)
  }, [temp])

  return temp
}
