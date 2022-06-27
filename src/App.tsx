import { useRef, useEffect } from 'react'

import { init, animate } from './lib/render'

import './App.css'

function App() {
  const ContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    init(ContainerRef.current as HTMLDivElement)
    animate()
  }, [])

  return <div ref={ContainerRef} />
}

export default App
