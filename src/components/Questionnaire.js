// Questionnaire.jsx
import React, { useState } from 'react';
import '../css/Questionnaire.css'; // Importez le fichier CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous que Bootstrap est importé

const Questionnaire = () => {
    const [responses, setResponses] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    // Questions adaptées au cours d'observation de la Terre
    const questions = [
        {
            id: 1,
            question: 'Quel satellite est principalement utilisé pour l\'observation de la déforestation ?',
            options: ['Landsat', 'Hubble', 'Voyager', 'Apollo'],
            correctAnswer: 'Landsat', // Réponse correcte
        },
        {
            id: 2,
            question: 'Quel impact le changement climatique a-t-il sur les glaciers ?',
            options: ['Ils grossissent', 'Ils fondent', 'Ils restent constants', 'Ils disparaissent'],
            correctAnswer: 'Ils fondent', // Réponse correcte
        },
        {
            id: 3,
            question: 'Pourquoi les données satellitaires sont-elles importantes pour les politiques environnementales ?',
            options: ['Elles sont moins coûteuses', 'Elles sont disponibles en temps réel', 'Elles ne sont pas fiables', 'Elles ne montrent que des tendances passées'],
            correctAnswer: 'Elles sont disponibles en temps réel', // Réponse correcte
        },
        {
            id: 4,
            question: 'Quel est l\'effet de la pollution de l\'air sur la santé humaine ?',
            options: ['Amélioration de la santé', 'Aucune influence', 'Maladies respiratoires', 'Renforcement du système immunitaire'],
            correctAnswer: 'Maladies respiratoires',
        },
        {
            id: 5,
            question: 'Quelle technique est utilisée pour surveiller la qualité de l\'eau ?',
            options: ['Sondage', 'Télédétection', 'Modélisation', 'Analyse chimique'],
            correctAnswer: 'Télédétection',
        },
        {
            id: 6,
            question: 'Quelle est la principale cause de l\'augmentation du niveau de la mer ?',
            options: ['Le dégel des glaciers', 'L\'érosion côtière', 'Les tempêtes', 'La pluie'],
            correctAnswer: 'Le dégel des glaciers',
        },
        {
            id: 7,
            question: 'Quel type de données est généralement collecté par les satellites météorologiques ?',
            options: ['Données financières', 'Données topographiques', 'Données climatiques', 'Données de transport'],
            correctAnswer: 'Données climatiques',
        },
        {
            id: 8,
            question: 'Quel est l\'impact de l\'urbanisation sur la biodiversité ?',
            options: ['Augmentation de la biodiversité', 'Aucune influence', 'Diminution de la biodiversité', 'Stabilité de la biodiversité'],
            correctAnswer: 'Diminution de la biodiversité',
        },
        {
            id: 9,
            question: 'Comment les satellites aident-ils à prévoir les catastrophes naturelles ?',
            options: ['En ne fournissant aucune donnée', 'En permettant une observation en temps réel', 'En analysant uniquement les données passées', 'En ne se concentrant que sur la météo'],
            correctAnswer: 'En permettant une observation en temps réel',
        },
        {
            id: 10,
            question: 'Quel est l\'objectif principal de l\'observation de la Terre ?',
            options: ['Divertissement', 'Recherche scientifique', 'Suivi des médias sociaux', 'Aucune des réponses ci-dessus'],
            correctAnswer: 'Recherche scientifique',
        },
    ];

    const handleChange = (e, questionId) => {
        setResponses({
            ...responses,
            [questionId]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let totalScore = 0;

        // Calculer le score
        questions.forEach((q) => {
            if (responses[q.id] === q.correctAnswer) {
                totalScore += 1; // Incrémenter le score si la réponse est correcte
            }
        });

        setScore(totalScore);
        setSubmitted(true);
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Questionnaire de compréhension</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                {questions.map((q) => (
                    <div key={q.id} className="mb-3">
                        <p>{q.question}</p>
                        {q.options.map((option, index) => (
                            <div key={index} className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name={`question-${q.id}`}
                                    value={option}
                                    onChange={(e) => handleChange(e, q.id)}
                                    checked={responses[q.id] === option}
                                />
                                <label className="form-check-label">{option}</label>
                            </div>
                        ))}
                    </div>
                ))}
                <button type="submit" className="btn btn-primary">Soumettre</button>
            </form>
            {submitted && (
                <div className="alert alert-info mt-4" role="alert">
                    <p>Merci d'avoir répondu au questionnaire !</p>
                    <p>Votre score : {score} sur {questions.length}</p>
                    <p>{((score / questions.length) * 100).toFixed(2)}% de réponses correctes</p>
                </div>
            )}
        </div>
    );
};

export default Questionnaire;
