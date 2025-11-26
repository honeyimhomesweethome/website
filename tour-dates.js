// Tour dates data - easily update this file to add/modify tour dates
const tourDates = [
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
