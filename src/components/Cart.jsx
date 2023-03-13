import { useRef } from "react"
import "./Cart.css"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
} from '@chakra-ui/react'

export default function Cart({ itemAmount }) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()


    return (
        <div className="cartClass">
            <img src="Cart.svg" alt="" onClick={onOpen}/>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Your Cart</DrawerHeader>

                    <DrawerBody>
                        {itemAmount > 0 &&
                        <div className="product">
                        <img src="Shoe1.svg" alt="" />
                        <p>
                            Fall Limited Edition Sneakers <br />
                            <span>$125.00 x {itemAmount} <strong>${itemAmount * 125}</strong></span>
                        </p>
                    </div>
                    }
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>

    )
}