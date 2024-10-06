import React, { useState } from 'react';
import { Carousel, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Carousel.css";
import observation1 from "../assets/observation1.png";
import climat from "../assets/climat.png";
import courbe from "../assets/courbe.jpg";
import emission from "../assets/emission.jpg";
import graphe from "../assets/graphe.jpg";
import serre from "../assets/serre.jpg";
import zone from "../assets/zone.jpg";
import consequence from "../assets/consequence.jpg";

const ResponsiveCarousel = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleShowModal = (imageSrc) => {
    setModalImage(imageSrc);
    setShowModal(true);
  };

  const images = [
    { src: observation1, title: "Titre 1", description: "Description de l'image 1" },
    { src: climat, title: "Titre 2", description: "Description de l'image 2" },
    { src: courbe, title: "Titre 3", description: "Description de l'image 3" },
    { src: emission, title: "Titre 4", description: "Description de l'image 4" },
    { src: graphe, title: "Titre 5", description: "Description de l'image 5" },
    { src: serre, title: "Titre 6", description: "Description de l'image 6" },
    { src: zone, title: "Titre 7", description: "Description de l'image 7" },
    { src: consequence, title: "Titre 8", description: "Description de l'image 8" }
  ];

  return (
    <>
      <Carousel controls={true} indicators={true} interval={3000} pause="hover">
        {images.map((image, index) => (
          <Carousel.Item key={index} onClick={() => handleShowModal(image.src)}>
            <img src={image.src} className="d-block w-100" alt={`Description ${index + 1}`} />
            <Carousel.Caption>
              <h5>{image.title}</h5>
              <p>{image.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Modal for full image preview */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Aperçu global de l'image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={modalImage} className="img-fluid" alt="Aperçu" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ResponsiveCarousel;
