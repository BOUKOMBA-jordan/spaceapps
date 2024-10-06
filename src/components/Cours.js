import React from 'react';
import { motion } from 'framer-motion'; // Assurez-vous d'avoir installé framer-motion
import '../css/Cours.css'; // Importer le fichier CSS pour le style
import CoursObservationsTerre from "../components/CoursObservationsTerre";

const Cours = () => {
  return (
    <div className="cours">
      {/* Animation du titre de la séance */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }} // Animation initiale
        animate={{ opacity: 1, y: 0 }} // Animation d'entrée
        transition={{ duration: 0.5 }} // Durée de l'animation
        className="cours-title"
      >
        Séance 1 : Introduction aux observations de la Terre et au changement climatique
      </motion.h2>

      <div className="cours-details">
        {/* Intégration du composant des détails du cours */}
        <CoursObservationsTerre />
      </div>
    </div>
  );
};

export default Cours;
