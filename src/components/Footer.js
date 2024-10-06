// Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../css/Footer.css'; // Ajoutez un fichier CSS pour le style du footer

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <Container>
                <Row className="text-center text-md-left">
                    <Col md={4} className="mb-4">
                        <h5>Innovateurs de Moanda</h5>
                        <p>Liste des innovateurs et partenaires de la région.</p>
                    </Col>
                    <Col md={4} className="mb-4">
                        <h5>Liens Utiles</h5>
                        <ul className="footer-links">
                            <li><a href="accueil">Accueil</a></li>
                            <li><a href="cours">Cours</a></li>
                        </ul>
                    </Col>
                    <Col md={4} className="mb-4">
    <h5>Suivez-nous</h5>
    <div className="social-links"> {/* Conteneur ajouté ici */}
        <ul>
            <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
            </li>
            <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </li>
            <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </li>
        </ul>
    </div>
</Col>


                </Row>
                <Row>
                    <Col className="text-center">
                        <p>&copy; {currentYear} Votre Organisation. Tous droits réservés.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
