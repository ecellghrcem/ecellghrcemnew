export type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: 'past' | 'future';
  imageUrl?: string;
  registrationLink?: string;
};

export const events: Event[] = [
  {
    id: '1',
    title: 'Way to Mood Indigo 2K24',
    date: 'December 10, 2024', // Assuming date
    time: '5:00 PM - 8:00 PM', // Assuming time
    location: 'IIT Bombay', // Assuming location
    description: 'An exciting event leading up to Mood Indigo 2024, filled with activities and entertainment.',
    type: 'past',
    imageUrl: 'img/events/images (23).jpeg.jpg',
    registrationLink: 'https://forms.gle/MFPN8sV4WqeMk3be7'
  },
  {
    id: '2',
    title: 'Pitching Competition 💡',
    date: 'February 15, 2025', // Assuming date
    time: '2:00 PM - 5:00 PM', // Assuming time
    location: 'Innovation Hub', // Assuming location
    description: 'Showcase your startup idea and win exciting prizes in this pitching competition.',
    type: 'future',
    imageUrl: 'img/events/pitchingCompetition.jpg'
  },
  {
    id: '3',
    title: 'NEC Team',
    date: 'February 20, 2025', // Assuming date
    time: '10:00 AM - 1:00 PM', // Assuming time
    location: 'Main Auditorium', // Assuming location
    description: 'Join the NEC Team event and explore entrepreneurial opportunities and collaborations.',
    type: 'future',
    imageUrl: 'img/NEC.jpg'
  },
  {
    id: '4',
    title: 'IPL Auction 2025 🏏',
    date: 'January 27, 2025', // Assuming date
    time: '3:00 PM - 7:00 PM', // Assuming time
    location: 'E-216 , E-318', // Assuming location
    description: 'Experience the excitement of IPL Auction 2023 with live bidding and strategy discussions.',
    type: 'past',
    imageUrl: 'img/events/past/iplAuction.jpg'
  }
];
