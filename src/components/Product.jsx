import ProductImages from "./ProductImages.jsx"
import ProductInfo from "./ProductInfo.jsx"
import "./Product.css"
import { useState } from "react"
import { useDisclosure } from "@chakra-ui/react"


export default function Product({ itemAmount, increment, decrement }) {

    const [lightBoxOpen, setLightBoxOpen] = useState(false)

    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleOpenLightbox = () => {
        setLightBoxOpen(true)
    }

    const handleCloseLightbox = () => {
        setLightBoxOpen(false)
    }

    return (
        <div className="product">
            <ProductImages 
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            />
            <ProductInfo
                itemAmount={itemAmount}
                increment={increment}
                decrement={decrement} />
            
        </div>
    )
}