import { createContext, useEffect, useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import "./App.css"
import {
  ChakraProvider,
} from '@chakra-ui/react'
import Lightbox from './components/Lightbox'
import Nav from './components/Nav'
import Product from './components/Product'

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [itemAmount, setItemAmount] = useState(0)

  const increment = () => {
    setItemAmount(prevCount => (prevCount + 1))
  }

  const decrement = () => {
    setItemAmount(prevCount => (prevCount == 0 ? prevCount : prevCount - 1))
  }

  const navLinks = [
    {
      link: "#",
      name: "sneakers"
    },
    {
      link: "#",
      name: "collections"
    },
    {
      link: "#",
      name: "men"
    },
    {
      link: "#",
      name: "women"
    },
    {
      link: "#",
      name: "about"
    },
    {
      link: "#",
      name: "contact"
    },
  ]

  /*  */

  return (
    <ChakraProvider>
      <div className="container">

      <Nav links={navLinks} itemAmount={itemAmount} />
        
        <hr />
        <Product 
        itemAmount={itemAmount} 
        increment={increment} 
        decrement={decrement} />

      </div>


    </ChakraProvider>
  )
}

export default App
