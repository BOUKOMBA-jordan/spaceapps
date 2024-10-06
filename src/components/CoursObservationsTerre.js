import React, { useState } from 'react';
import '../css/CoursObservationsTerre.css'; // Assure-toi d'avoir un fichier CSS pour le style
import { FaClock, FaBullhorn, FaClipboardList } from 'react-icons/fa'; // Import des icônes
import Questionnaire from '../components/Questionnaire';
import Strategie from "../assets/strategie.mp4";
import observation from "../assets/observation.png";
import observation3 from "../assets/observation3.png";
import 'bootstrap/dist/css/bootstrap.min.css';


const CoursObservationsTerre = () => {
  const [lectureTerminee, setLectureTerminee] = useState(false); // État pour suivre si la lecture est terminée

  return (
    <div className="cours-container">
      <h1 className="cours-title fs-1">Observation de la Terre et climat</h1>
      <h2 className="cours-subtitle fs-3">Suivi des impacts du changement climatique</h2>
      
      <div className="cours-introduction fs-1">
        <p className='fs-5'>
          Les observations de la Terre, via des satellites comme ceux des missions Copernicus ou Landsat, permettent de suivre en temps réel 
          l'impact du changement climatique sur notre planète. Ces outils fournissent des données précieuses sur l'état des écosystèmes 
          (forêts, zones humides, océans) et la santé des sols.
        </p>
        <p className='fs-5'>
          Les satellites capturent des changements sur de longues périodes, comme la fonte des glaciers, l’élévation des températures et la déforestation.
        </p>
      </div>

      {/* Vidéo introductive */}
      <div className="video-container">
        <h3 className="video-title fs-4">Vidéo Introductive</h3>
        <iframe
          title="Vidéo d'introduction"
          width="100%"
          height="400"
          src={Strategie} // Remplace par l'ID de ta vidéo
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="cours-details fs-5">
        <p className='fs-5'><FaBullhorn /> <strong>Objectif :</strong> Comprendre les concepts d’observation de la Terre et leur importance dans l'analyse des changements climatiques.</p>
      </div>

      {/* Section 1 */}
      <div className="cours-section">
        <h2 className="section-title fs-2">Séance 1 : Introduction aux observations de la Terre</h2>
        <p className="fs-4">
          Les observations de la Terre (OT) consistent en la collecte de données à l’aide de satellites pour surveiller l'environnement 
          et comprendre les processus globaux. Ces satellites, comme Landsat et Copernicus, permettent de suivre les changements climatiques 
          en observant des paramètres essentiels tels que les températures mondiales, les précipitations et la végétation.
        </p>
        
        {/* Cartes d'images pour la section 1 */}
        <div className="image-cards">
          <div className="image-card">
            <img src={observation} alt="Image 1 description" /> {/* Remplace par le chemin de ton image */}
            <p>Carte 1 : Description de l'image 1</p>
          </div>
          <div className="image-card">
            <img src={observation3} alt="Image 2 description" /> {/* Remplace par le chemin de ton image */}
            <p>Carte 2 : Description de l'image 2</p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="cours-section">
        <h2 className="section-title fs-2">Activité pratique : Analyse des données climatiques</h2>
        <p className="fs-4"><strong>Objectif :</strong> Visualiser les impacts concrets des changements climatiques à l’aide de données satellitaires.</p>
        <p className="fs-5">Outils nécessaires : Accès à des plateformes d'observation de la Terre comme EO4SDG, Google Earth Engine ou NASA Worldview.</p>
        <p className="fs-5">Exercice :</p>
        <ul className="fs-5">
          <li>Présenter une carte satellitaire de l'Amazonie, illustrant la déforestation sur une période de 10 ans.</li>
          <li>Montrer les données satellites sur la fonte des glaciers au Groenland ou en Antarctique, en comparant des images prises à 10 ans d’écart.</li>
        </ul>
        
        {/* Cartes d'images pour la section 2 */}
        <div className="image-cards">
          <div className="image-card">
            <img src={observation3} alt="Image 3 description" /> {/* Remplace par le chemin de ton image */}
            <p>Carte 1 : Description de l'image 3</p>
          </div>
          <div className="image-card">
            <img src={observation3} alt="Image 4 description" /> {/* Remplace par le chemin de ton image */}
            <p>Carte 2 : Description de l'image 4</p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="cours-section">
        <h2 className="section-title fs-2">Discussion de groupe</h2>
        <h3 className="section-subtitle fs-4">Le rôle des satellites dans le suivi climatique.</h3>
        <p className="fs-4"><strong>Questions à poser :</strong></p>
        <ul className="fs-5">
          <li>Pourquoi est-il crucial d’utiliser des satellites pour suivre les changements climatiques ?</li>
          <li>Comment les données satellites peuvent-elles informer les politiques environnementales ?</li>
          <li>Quels avantages les OT apportent-elles par rapport aux méthodes traditionnelles de mesure sur le terrain ?</li>
        </ul>
      </div>

      {/* Section 4 */}
      <div className="cours-section">
        <h2 className="section-title fs-2">Devoir à la maison</h2>
        <p className="fs-5">
          Devoir : Choisir une région du monde particulièrement affectée par le changement climatique (ex. : Arctique, Amazonie, Australie) 
          et utiliser des outils en ligne tels que EO4SDG pour analyser l’impact des changements climatiques sur cette région. 
          Les élèves devront rédiger un rapport en utilisant des données satellites pour appuyer leurs observations.
        </p>
        <p className="fs-5"><strong>Format du rapport :</strong></p>
        <ul className="fs-5">
          <li>Description de la région choisie.</li>
          <li>Analyse des données satellites illustrant les effets climatiques observés (fonte des glaces, sécheresse, déforestation).</li>
          <li>Proposition de solutions pour atténuer les effets du changement climatique dans cette région.</li>
        </ul>
      </div>

      {/* Ajout d'un bouton pour signaler que la lecture est terminée */}
<div className="completion-button">
  <button 
    className={`btn ${lectureTerminee ? 'btn-success' : 'btn-primary'} fs-5`} 
    onClick={() => setLectureTerminee(!lectureTerminee)}
  >
    {lectureTerminee ? "Lecture terminée" : "Marquer comme terminé"}
  </button>
</div>


      {/* Affichage du Questionnaire uniquement si la lecture est terminée */}
      {lectureTerminee && <Questionnaire />}

    </div>
  );
}

export default CoursObservationsTerre;
