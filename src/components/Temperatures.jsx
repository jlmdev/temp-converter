import React, { useEffect, useState } from 'react'

export function Temperatures() {
  const [fahrenheit, setfahrenheit] = useState(0)
  const [celsius, setcelsius] = useState(0)
  const [kelvin, setkelvin] = useState(0)

  // function changeTemps(value) {
  //   if (value === '') {
  //     setfahrenheit(0)
  //   }
  //   setfahrenheit(value)
  //   setcelsius(((fahrenheit - 32) * 5) / 9)
  //   setkelvin(celsius + 273.15)
  // }

  useEffect(() => {
    if (fahrenheit === NaN) {
      setfahrenheit(0)
      setcelsius(((fahrenheit - 32) * 5) / 9)
      setkelvin(celsius + 273.15)
    } else {
      setcelsius(((fahrenheit - 32) * 5) / 9)
      setkelvin(celsius + 273.15)
    }
  }, [fahrenheit])

  return (
    <>
      <input
        type="text"
        value={fahrenheit}
        onChange={(event) => setfahrenheit(parseFloat(event.target.value))}
      />
      <p>Celsius: {celsius.toFixed(2)}</p>
      <p>Kelvin: {kelvin.toFixed(2)}</p>
    </>
  )
}
