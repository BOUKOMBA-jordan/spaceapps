// TeamCarousel.js
import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import '../css/TeamCarousel.css'; // Assurez-vous que ce fichier CSS existe
import observation1 from "../assets/observation1.png"; 
import Image from "../assets/image.png"; 
import climat from "../assets/climat.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const TeamCarousel = () => {
  const teamMembers = [
    {
      name: 'Membre 1',
      role: 'Rôle 1',
      image: Image, // Remplacez par l'URL de l'image
    },
    {
      name: 'Membre 2',
      role: 'Rôle 2',
      image: climat, // Remplacez par l'URL de l'image
    },
    {
      name: 'Membre 3',
      role: 'Rôle 3',
      image: Image, // Remplacez par l'URL de l'image
    },
    {
      name: 'Membre 4',
      role: 'Rôle 4',
      image: climat // Remplacez par l'URL de l'image
    },
    {
      name: 'Membre 5',
      role: 'Rôle 5',
      image: Image, // Remplacez par l'URL de l'image
    },
  ];

  return (
    <Container className="team-carousel-container">
      <Carousel interval={3000} indicators={true} controls={true}>
        {teamMembers.map((member, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={member.image}
              alt={member.name}
            />
            <Carousel.Caption>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default TeamCarousel;
