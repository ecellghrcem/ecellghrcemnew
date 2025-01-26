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
      title: 'Entrepreneurship Bootcamp',
      date: 'March 15, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'College Auditorium',
      description: 'Intensive day-long workshop on startup fundamentals and business strategy.',
      type: 'past',
      imageUrl: 'https://picsum.photos/200/300?random=1',
      registrationLink: 'https://example.com/workshop-registration'
    },
    {
      id: '2',
      title: 'AI in Business Innovation',
      date: 'May 22, 2024',
      time: '2:00 PM - 5:00 PM',
      location: 'Tech Lab',
      description: 'Exploring how artificial intelligence is transforming modern business landscapes.',
      type: 'future',
      imageUrl: 'https://picsum.photos/200/300?random=2'
    },
    {
      id: '3',
      title: 'E-CELL Startup Hackathon',
      date: 'February 10, 2024',
      time: '9:00 AM - 6:00 PM',
      location: 'Innovation Center',
      description: 'A 12-hour hackathon challenging students to develop innovative startup concepts.',
      type: 'past',
      imageUrl: 'https://picsum.photos/200/300?random=3'
    },
    {
      id: '4',
      title: 'Tech Solutions Hackathon',
      date: 'June 15, 2024',
      time: '10:00 AM - 8:00 PM',
      location: 'College Campus',
      description: 'Collaborative event for solving real-world technological challenges.',
      type: 'future',
      imageUrl: 'https://picsum.photos/200/300?random=4'
    },
    {
      id: '5',
      title: 'Startup Founders Meet',
      date: 'January 20, 2024',
      time: '6:00 PM - 9:00 PM',
      location: 'Conference Hall',
      description: 'Networking event connecting aspiring entrepreneurs with industry leaders.',
      type: 'past',
      imageUrl: 'https://picsum.photos/200/300?random=5'
    },
    {
      id: '6',
      title: 'Investor Connect',
      date: 'July 10, 2024',
      time: '4:00 PM - 7:00 PM',
      location: 'Business Lounge',
      description: 'Exclusive networking session with potential investors and venture capitalists.',
      type: 'future',
      imageUrl: 'https://picsum.photos/200/300?random=6'
    }
  ];