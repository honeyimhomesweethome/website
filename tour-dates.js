// Tour dates data - easily update this file to add/modify tour dates
const tourDates = [
  {
    date: '2025-11-14',
    venue: 'Groene Engel',
    city: 'Oss',
    link: 'https://www.groene-engel.nl/programma/blaudzun/'
  },
  {
    date: '2025-11-16',
    venue: 'Grenswerk',
    city: 'Venlo',
    link: 'https://www.grenswerk.nl/agenda/blaudzun-2025/'
  },
  {
    date: '2025-11-17',
    venue: 'De Oosterpoort',
    city: 'Groningen',
    link: 'https://www.spotgroningen.nl/programma/blaudzun-4/'
  },
  {
    date: '2025-11-20',
    venue: 'Pont Ephemere',
    city: 'Paris',
    link: 'https://dice.fm/event/v3ra3d-hotline-tnt-20th-nov-point-ephmre-paris-tickets'
  },
  {
    date: '2025-11-21',
    venue: 'L\'Areronef',
    city: 'Lille',
    link: 'https://aeronef.fr/agenda/hotline-tnt_smudged-honey'
  },
  {
    date: '2025-11-22',
    venue: 'Botanique Rotonde',
    city: 'Brussels',
    link: 'https://botanique.be/nl/concert/hotline-tnt-honey-im-home-2025'
  },
  {
    date: '2026-02-21',
    venue: 'Paradiso',
    city: 'Amsterdam',
    link: 'https://www.paradiso.nl/programma/honey-im-home/2741539'
  },
];

// Format date for display
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  };
  return date.toLocaleDateString('en-US', options);
}

