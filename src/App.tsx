import { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    (async () => {
      const response = await fetch('https://www.messianica.org.br/escrito-divino?d=07/03/2022');
      const text = await response.text();

      console.log(text)
    })()
  }, [])
  
  return (
    <h1>App Page</h1>
  )
}