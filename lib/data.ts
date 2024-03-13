import React from "react";

import actualite1 from "@/public/image/actualite/actualite1.jpg";
import actualite2 from "@/public/image/actualite/actualite2.jpg";
import actualite3 from "@/public/image/actualite/actualite3.jpg";
import actualite4 from "@/public/image/actualite/actualite4.jpg";
import actualite5 from "@/public/image/actualite/actualite5.jpg";
import actualite6 from "@/public/image/actualite/actualite6.jpg";
import actualite7 from "@/public/image/actualite/actualite7.jpg";
import actualite8 from "@/public/image/actualite/actualite8.jpg";
import actualite9 from "@/public/image/actualite/actualite9.jpg";
import actualite10 from "@/public/image/actualite/actualite10.jpg";

export const actuData = [
    {
        title: "La table d’hôtes de Chavagnac, la vie de château à la Française",
        date: "16 Oct 2023",
        description: "Que serait une maison d’hôtes sans sa table d’hôtes? A Chavagnac nous avons a coeur de vous faire vivre une expérience unique, hors du temps, loin du quotidien d’un monde à cent à l’heure. Séjourner au château c’est avant tout venir se...",
        imageUrl: actualite1,
    },
    {
        title: "« Le château de mes rêves » Saison 2 tous les jours sur M6!",
        date: "3 Jan 2023",
        description: "Le lundi 2 janvier 2023 à 17h30, M6 a lancé le programme quotidien « Le château de mes rêves » saison 2 ! Qui n’a jamais rêvé de la vie de château ? 12 familles sans fortune personnelle ont sauté le pas et sont devenus châtelains ! Mais ce rêve a un prix, et ces...",
        imageUrl: actualite2,
    },
    {
        title: "« Le Château de mes Rêves » sur M6 avec le Chateau Chavagnac!",
        date: "16 Juil 2022",
        description: "Le lundi 25 juillet 2022 à 17h30, M6 lancera le programme quotidien « Le château de mes rêves ». Qui n’a jamais rêvé de la vie de château ? 7 familles sans fortune personnelle ont sauté le pas et sont devenus châtelains !Mais ce rêve a un prix, et ces châtelains d’un...",
        imageUrl: actualite3,
    },
    {
        title: "Une belle saison de mariages à Chavagnac",
        date: "25 Juin 2022",
        description: "La saison des mariages bat son plein au Château Chavagnac, riche de belles rencontres, de partages, de beaucoup beaucoup d’émotions et surtout de magnifiques réceptions! Quelle chance pour nous de partager avec vous ces moments si précieux et si intenses! A tous...",
        imageUrl: actualite4,
    },
    {
        title: "L’esprit de Mistinguett au château le temps d’une nuit!",
        date: "18 Juin 2022",
        description: "Un clin d’oeil à la divine Mistinguett, star du music hall des années folles, les plus belles jambes de Paris! Au volant de sa sublime Peugeot 401, on l’imagine se rendre aux soirées de gala, traverser la capitale pour rejoindre les Folies Bergères ou le...",
        imageUrl: actualite5,
    },
    {
        title: "Chavagnac chante Barbara, jeudi 30 juin 2022",
        date: "14 Mai 2022",
        description: "Réservez votre soirée! Le Château Chavagnac rend hommage à une icône de la chanson française, Barbara, grâce à l’interprétation de Delphine Mailland. A partir de 19h30, possibilité de restauration sur place avec le restaurant « Du Jardin à l’Assiette »...",
        imageUrl: actualite6,
    },
    {
        title: "Se dire « Oui » au Château Chavagnac et vivre des instants inoubliables !",
        date: "14 Oct 2021",
        description: "Le chateau Chavagnac est un lieu unique, où tout a été pensé et amménagé pour vous faire vivre des instants magiques à l’occasion de ce grand jour! Vous disposez de nombreux espaces pour imaginer le mariage de vos reves. N’hésitez pas à nous contacter pour...",
        imageUrl: actualite7,
    },
    {
        title: "Prenons de la hauteur !",
        date: "14 Oct 2021",
        description: "Nous adorons ces vues aériennes du château et les formes géométriques des jardins qui se dessinent !...",
        imageUrl: actualite8,
    },
    {
        title: "Une soirée magique au Château Chavagnac !",
        date: "17 Juil 2021",
        description: "Retour en images sur une soirée magique dans le parc du château Chavagnac! Dame Nature nous a épargné l’orage pour faire de cette soirée un moment suspendu, hors du temps, enchanteur… Un soir d’été comme on les aime, un moment de partage et de...",
        imageUrl: actualite9,
    },
    {
        title: "La bougie parfumée Chavagnac, toute l’ambiance du château à offrir ou à s’offrir!",
        date: "19 Juin 2021",
        description: "Nouveauté au Chateau! Retrouvez désormais une bougie au délicat et envoutant parfum de fleur d’oranger… un véritable voyage olfactif pour vous replonger dans l’ambiance du château, un souvenir ou une idée cadeau parfaite pour les amoureux des belles...",
        imageUrl: actualite10,
    },
] as const;

export const links = [
    {
      name: "Accueil",
      hash: "#Accueil",
    },
    {
      name: "Le chateau",
      hash: "#le-chateau",
    },
    {
      name: "Mariages & réceptions",
      hash: "#mariages-receptions",
    },
    {
      name: "Chambres d'hôtes",
    //   hash: "#map",
    },
    {
      name: "Chambre Saint-Joseph",
      hash: "#chambre-saint-joseph",
    },
    {
      name: "Chambre Condrieu",
      hash: "#chambre-condrieu",
    },
    {
      name: "Suite Côte-Rôtie",
      hash: "#suite-cote-rotie",
    },
    {
      name: "Suite Hermitage",
      hash: "#suite-hermitage",
    },
    {
      name: "Suite La Chapelle",
      hash: "#suite-la-chapelle",
    },
    {
      name: "Gites",
    //   hash: "#contact",
    },
    {
      name: "Gite Syrah",
      hash: "#gite-syrah",
    },
    {
      name: "Gite Viognier",
      hash: "#gite-viognier",
    },
    {
      name: "Gite Marsanne",
      hash: "#gite-marsanne",
    },
    {
      name: "Actualités",
      hash: "#actualites",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ] as const;