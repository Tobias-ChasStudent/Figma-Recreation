import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
} from '@chakra-ui/react'
import { useState } from 'react'
import "./Lightbox.css"

const imgSources = ["Shoe1.svg", "Shoe2.svg", "Shoe3.svg", "Shoe4.svg"]

export default function Lightbox({ isOpen, onOpen, onClose }) {

    const [active, setActive] = useState("Shoe1.svg")

    const handlePrev = () => {
        console.log("prev");
        if (active[4] > 1) {
            const prevImage = active.replace(/[0-9]/g, parseInt(active[4]) - 1)
            setActive(prevImage)
        } else {
            console.log("Min reached");
        }
    }
    const handleNext = () => {
        console.log("next");
        if (active[4] <= 3) {
            const nextImage = active.replace(/[0-9]/g, parseInt(active[4]) + 1)
            console.log(nextImage);
            setActive(nextImage)
        } else {
            console.log("Max reached");
        }
    }

    return (
        <div className='lightbox'>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <img
                        className='prev'
                        src="arrow_left.svg"
                        alt=""
                        onClick={() => handlePrev()}
                        key="prev"
                    />

                    <img src={active} alt="" key="activeImage" />

                    <img
                        className='next'
                        src="arrow_right.png"
                        alt=""
                        onClick={() => handleNext()}
                        key="next"
                    />
                    <ModalFooter>
                        <div className="thumbnails">
                            {
                                imgSources.map((source) => {
                                    return <img
                                        src={source}
                                        className={active === source ? "active" : "notActive"}
                                        alt=""
                                        key={source}
                                        onClick={() => setActive(source)}

                                    />
                                })
                            }
                        </div>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}
