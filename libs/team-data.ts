
export type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
  github?: string;
  mail?: string;
};

export type Teams = {
  [key: string]: TeamMember[];
};

export const teams: Teams = {
  'Core': [
    {
      id: 1,
      name: "John Doe",
      role: "Team Lead",
      image: 'https://picsum.photos/200/300?random=1',
      bio: "John is a passionate leader, eager to push the limits of innovation and teamwork.",
      linkedin: "https://www.linkedin.com/in/johndoe",
      mail: "johndoe@example.com"
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Tech Lead",
      image: 'https://picsum.photos/200/300?random=1',
      bio: "Jane is a tech enthusiast with a deep interest in AI and full-stack development.",
      linkedin: "https://www.linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
      mail: "janesmith@example.com"
    },
    {
      id: 3,
      name: "Alice Johnson",
      role: "Design Lead",
      image: 'https://picsum.photos/200/300?random=1',
      bio: "Alice has a keen eye for design and brings creativity to every project she works on.",
      linkedin: "https://www.linkedin.com/in/alicejohnson",
      mail: "alicejohnson@example.com"
    },
    {
      id: 4,
      name: "Bob Brown",
      role: "Finance Lead",
      image: 'https://picsum.photos/200/300?random=1',
      bio: "Bob combines his finance expertise with a passion for technology to drive team success.",
      linkedin: "https://www.linkedin.com/in/bobbrown",
      mail: "bobbrown@example.com"
    }
  ],
  'Tech': [
    {
      id: 5,
      name: "David White",
      role: "Tech Lead",
      image: 'https://picsum.photos/200/300?random=1',
      bio: "David is an expert in AI and machine learning, working tirelessly to improve the tech ecosystem.",
      linkedin: "https://www.linkedin.com/in/davidwhite",
      github: "https://github.com/davidwhite",
      mail: "davidwhite@example.com"
    },
    {
      id: 6,
      name: "Eve Green",
      role: "Tech Member",
      image: 'https://picsum.photos/200/300?random=1',
      bio: "Eve specializes in building scalable web applications, focusing on performance and user experience.",
      linkedin: "https://www.linkedin.com/in/evegreen",
      github: "https://github.com/evegreen",
      mail: "evegreen@example.com"
    }
  ],
  'Design': [
    {
      id: 7,
      name: "Chris Black",
      role: "Design Lead",
      image: 'https://picsum.photos/200/300?random=1',
      bio: "Chris brings artistic flair and a deep understanding of user-centered design principles.",
      linkedin: "https://www.linkedin.com/in/chrisblack",
      mail: "chrisblack@example.com"
    },
    {
      id: 8,
      name: "Grace Blue",
      role: "Design Member",
      image: 'https://picsum.photos/200/300?random=1',
      bio: "Grace is a talented designer focused on creating seamless and intuitive user interfaces.",
      linkedin: "https://www.linkedin.com/in/graceblue",
      mail: "graceblue@example.com"
    }
  ],
  'Finance': [
    {
      id: 9,
      name: "Henry Purple",
      role: "Finance Lead",
      image:'https://picsum.photos/200/300?random=1',
      bio: "Henry ensures that all financial operations run smoothly, maintaining budget efficiency.",
      linkedin: "https://www.linkedin.com/in/henrypurple",
      mail: "henrypurple@example.com"
    }
  ],
  'Public Relations': [
    {
      id: 10,
      name: "Laura Red",
      role: "PR Lead",
      image: 'https://picsum.photos/200/300?random=1',
      bio: "Laura excels at building strong relationships with the community and maintaining positive public relations.",
      linkedin: "https://www.linkedin.com/in/laurared",
      mail: "laurared@example.com"
    }
  ],
  'Event Management': [
    {
      id: 11,
      name: "Michael Grey",
      role: "Event Lead",
      image: 'https://picsum.photos/200/300?random=1',
      bio: "Michael coordinates events with precision, ensuring everything runs smoothly and on time.",
      linkedin: "https://www.linkedin.com/in/michaelgrey",
      mail: "michaelgrey@example.com"
    }
  ],
  'Content': [
    {
      id: 12,
      name: "Olivia Yellow",
      role: "Content Lead",
      image: 'https://picsum.photos/200/300?random=1',
      bio: "Olivia is responsible for creating engaging content that resonates with audiences and drives engagement.",
      linkedin: "https://www.linkedin.com/in/oliviayellow",
      mail: "oliviayellow@example.com"
    }
  ]
};
