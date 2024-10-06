import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import '../css/Home.css';
import CustomCarousel from './Carousel';
import TeamCarousel from './TeamCarousel';
import { Container, Row, Col, Card, Spinner, Alert, Button } from 'react-bootstrap';
import climat from "../assets/climat.png";
import Footer from '../components/Footer';
import introduction from "../assets/introduction.mp4";
import intro from "../assets/intro.mp4";
import { useTranslation } from 'react-i18next';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  const fetchData = async () => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const response = await axios.get(`https://images-api.nasa.gov?api_key=${apiKey}`);
      setData(response.data);
    } catch (error) {
      if (error.response) {
        setError(`Erreur: ${error.response.status} - ${error.response.data.message}`);
      } else if (error.request) {
        setError('Aucune réponse du serveur.');
      } else {
        setError('Erreur: ' + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error) return (
    <Alert variant="danger">
      <Alert.Heading>Erreur de chargement</Alert.Heading>
      <p>{error}</p>
      <Button onClick={fetchData} variant="outline-danger">Réessayer</Button>
    </Alert>
  );

  return (
    <Container fluid className="home mt-1">
      <CustomCarousel />

      <Row className="text-center mt-5">
  <Col>
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="home-title mt-5" // Ajoutez une marge supérieure ici
    >
      Bienvenue sur notre plateforme d'apprentissage des notions sur le changement climatique.
    </motion.h1>
  </Col>
</Row>

<Row className="text-center mt-2 f-2">
  <Col>
    <motion.p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="home-description mt-5" // Ajoutez une marge supérieure ici aussi
    >
      <p className='f-1'>Présentation et contexte</p>
    </motion.p>
  </Col>
</Row>

{introduction && (
  <div className="video-wrapper mt-2">
    <video controls className="video-player">
      <source src={intro} type="video/mp4" />
      Votre navigateur ne prend pas en charge la lecture de vidéos.
    </video>
  </div>
)}




      <Row className="card-section mt-5">
        <Col md={6} className="mb-4 d-flex">
          <motion.div initial="hidden" animate="visible" variants={cardVariants}>
            <Card className="card-uniform h-100">
              <div className="video-container">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/T4LVXCCmIKA" // Utilisez l'URL correcte pour l'embed
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Vidéo sur le changement climatique"
                ></iframe>
              </div>
              <Card.Body>
                <Card.Title>Observation de la Terre</Card.Title>
                <Card.Text>
                  Suivi des impacts du changement climatique sur les écosystèmes : effets de serre.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>

        <Col md={6} className="mb-4 d-flex">
          <motion.div initial="hidden" animate="visible" variants={cardVariants} transition={{ delay: 0.4 }}>
            <Card className="card-uniform h-100">
              <div className="video-container">
                <iframe
                  width="100%"
                  height="200"
                  src={introduction} // Assurez-vous que l'URL est également correcte pour l'embed
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Vidéo sur le changement climatique"
                ></iframe>
              </div>
              <Card.Body>
                <Card.Title>Suivi des sols</Card.Title>
                <Card.Text>
                  Conséquence de l'effet de serre sur l'environnement et la biodiversité.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>


      <Footer />
    </Container>
  );
};

export default Home;
