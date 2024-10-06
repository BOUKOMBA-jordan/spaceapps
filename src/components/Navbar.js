import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import '../css/Navbar.css'; // Importez des styles si nécessaire

// Définir les traductions
const translations = {
  fr: {
    title: "Observations de la Terre",
    home: "Accueil",
    courses: "Cours",
  },
  en: {
    title: "Earth Observations",
    home: "Home",
    courses: "Courses",
  },
};

function CustomNavbar() {
  const [language, setLanguage] = useState('fr'); // État pour la langue

  useEffect(() => {
    // Récupérer la langue stockée dans localStorage si elle existe
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang); // Sauvegarder la langue dans localStorage
    console.log(`Langue sélectionnée : ${lang}`);
  };

  return (
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand className="navbar-brand nav-link" href="#home">
        {translations[language].title}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto navbar-nav">
          <Nav.Link className="nav-link" href="home">
            {translations[language].home}
          </Nav.Link>
          <Nav.Link className="nav-link" href="cours">
            {translations[language].courses}
          </Nav.Link>
          
          {/* Sélecteur de langue */}
          <Dropdown className="ml-3">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {language === 'fr' ? 'Français' : 'English'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleLanguageChange('fr')}>Français</Dropdown.Item>
              <Dropdown.Item onClick={() => handleLanguageChange('en')}>English</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
