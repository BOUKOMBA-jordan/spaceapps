// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Passer i18n au module react-i18next
  .init({
    resources: {
      fr: {
        translation: {
          "Bienvenue sur notre plateforme d'apprentissage": "Bienvenue sur notre plateforme d'apprentissage",
          "Explorez des cours sur le changement climatique et l'observation de la Terre.": "Explorez des cours sur le changement climatique et l'observation de la Terre.",
          "Observation de la Terre": "Observation de la Terre",
          "Suivi des sols": "Suivi des sols",
          "Image: Observation de la Terre": "Image: Observation de la Terre",
          "Vidéo: Changement climatique": "Vidéo: Changement climatique",
          "Visualisation des images satellites montrant les changements climatiques à travers le monde.": "Visualisation des images satellites montrant les changements climatiques à travers le monde.",
          "Regardez cette vidéo pour comprendre l'impact du changement climatique sur les écosystèmes terrestres.": "Regardez cette vidéo pour comprendre l'impact du changement climatique sur les écosystèmes terrestres."
        }
      },
      en: {
        translation: {
          "Bienvenue sur notre plateforme d'apprentissage": "Welcome to our learning platform",
          "Explorez des cours sur le changement climatique et l'observation de la Terre.": "Explore courses on climate change and Earth observation.",
          "Observation de la Terre": "Earth Observation",
          "Suivi des sols": "Soil Monitoring",
          "Image: Observation de la Terre": "Image: Earth Observation",
          "Vidéo: Changement climatique": "Video: Climate Change",
          "Visualisation des images satellites montrant les changements climatiques à travers le monde.": "Visualization of satellite images showing climate changes around the world.",
          "Regardez cette vidéo pour comprendre l'impact du changement climatique sur les écosystèmes terrestres.": "Watch this video to understand the impact of climate change on terrestrial ecosystems."
        }
      }
    },
    lng: "fr", // langue par défaut
    fallbackLng: "fr", // langue de secours
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n;
