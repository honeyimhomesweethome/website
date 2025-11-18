// Music releases data - easily update this file to add/modify music releases
const musicReleases = [
  {
    title: 'Wishful Thinking',
    artwork: 'images/wishful-thinking.jpg',
    spotifyLink: 'https://share.amuse.io/track/honey-im-home-wishful-thinking',
    releaseDate: '2025-03-27'
  },
  {
    title: 'Alive',
    artwork: 'images/alive.jpg',
    spotifyLink: 'https://found.ee/honeyimhome_alive',
    releaseDate: '2025-09-04'
  },
  {
    title: 'Insecure',
    artwork: 'images/insecure.jpg',
    spotifyLink: 'https://found.ee/honeyimhome_insecure',
    releaseDate: '2025-10-24'
  },
];

// Format date for display
function formatReleaseDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  const options = { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  };
  return date.toLocaleDateString('en-US', options);
}

