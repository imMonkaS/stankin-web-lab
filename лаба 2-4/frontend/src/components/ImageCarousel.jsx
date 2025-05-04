import React from "react";
import { Modal, Carousel } from "react-bootstrap";

const ImageCarousel = ({ show, onHide, images, startIndex = 0 }) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
            keyboard={true}
        >
            <Modal.Body style={{ padding: 0, backgroundColor: 'rgb(81, 0, 0)' }}>
                <Carousel
                    interval={null}
                    defaultActiveIndex={startIndex}
                    fade={false}
                    slide={true}
                    indicators={false}
                    controls={images.length > 1}
                >
                    {images.map((src, idx) => (
                        <Carousel.Item key={idx}>
                            <img
                                className="d-block w-100"
                                src={src}
                                alt={`Slide ${idx + 1}`}
                                style={{ height: "80vh", objectFit: "contain" }}
                            />
                            <div
                                className="position-absolute bottom-0 start-0 w-100 text-center"
                                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '5px 0' }}
                            >
                                {idx + 1}
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Modal.Body>
        </Modal>
    );
};

export default ImageCarousel;
