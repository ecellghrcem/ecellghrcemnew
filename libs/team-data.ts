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
  Core: [
    {
      id: 1,
      name: "Tejas Musale",
      role: "Campus Ambassador",
      image: "img/team/Tejas Musale.jpg",
      bio: "Campus ambassador of E-Cell, fostering innovation and entrepreneurship across the campus.",
      linkedin: "", // Add LinkedIn profile URL if available
      mail: "", // Add email if available
    },
    {
      id: 2,
      name: "Sujal Gundale",
      role: "Campus Ambassador",
      image: "img/team/sujal gundale.jpg",
      bio: "Campus ambassador of E-Cell, connecting students with entrepreneurial opportunities.",
      linkedin: "", // Add LinkedIn profile URL if available
      mail: "", // Add email if available
    },
    {
      id: 3,
      name: "Sujal Wadkar",
      role: "Campus Ambassador",
      image: "img/team/sujal wadkar.jpg",
      bio: "Campus ambassador of E-Cell, promoting innovation and collaboration within the institution.",
      linkedin: "", // Add LinkedIn profile URL if available
      mail: "", // Add email if available
    },
    {
      id: 4,
      name: "Vaibhav Nalawade",
      role: "Campus Ambassador",
      image: "img/team/Vaibhav.png",
      bio: "Campus ambassador of E-Cell, driving awareness about entrepreneurship among students.",
      linkedin: "", // Add LinkedIn profile URL if available
      mail: "", // Add email if available
    },
  ],
  "Technical Team": [
    {
      id: 1,
      name: "Tousif Tamboli",
      role: "Lead",
      image: "img/team/Tousif Tamboli .jpg",
      bio: "Tousif is a passionate tech lead with expertise in software development and team management.",
      linkedin: "https://in.linkedin.com/in/tousif-tamboli",
      mail: "",
    },
    {
      id: 2,
      name: "Shubham Sahu",
      role: "Co-Lead",
      image: "img/team/shubham pro.png",
      bio: "Shubham is a tech enthusiast with a strong focus on backend development and system architecture.",
      linkedin: "https://www.linkedin.com/in/shubham-sahu-2548b4291",
      mail: "",
    },
    {
      id: 3,
      name: "Saish Mungase",
      role: "Member",
      image: "img/team/SaishMungase.jpg",
      bio: "Saish is a dedicated developer with a keen interest in AI and machine learning.",
      linkedin: "https://www.linkedin.com/in/saish-mungase-5259ab292",
      mail: "",
    },
    {
      id: 4,
      name: "Aman Yadav",
      role: "Member",
      image: "img/team/yadav.jpg",
      bio: "Aman specializes in front-end development and creating user-friendly interfaces.",
      linkedin: "https://www.linkedin.com/in/amanyadav3023",
      mail: "",
    },
    {
      id: 5,
      name: "Devanshu Patil",
      role: "Member",
      image: "img/team/Devanshu Patil.jpg",
      bio: "Devanshu is a full-stack developer with a passion for building scalable web applications.",
      linkedin: "https://linkedin.com/in/devanshu-patil",
      mail: "",
    },
    {
      id: 6,
      name: "Arya Mishra",
      role: "Member",
      image: "img/team/Arya.jpg",
      bio: "Arya is a tech enthusiast with a focus on mobile app development.",
      linkedin: "",
      mail: "",
    },
    {
      id: 7,
      name: "Chaitali Arya",
      role: "Member",
      image: "img/team/Chaitali.jpg",
      bio: "Chaitali is a skilled developer with expertise in data structures and algorithms.",
      linkedin: "https://www.linkedin.com/in/chaitali-arya-402252311",
      mail: "",
    },
  ],
  "Public Relational Team": [
    {
      id: 8,
      name: "Tejashvi Tiwari",
      role: "Lead",
      image: "img/team/Tejashvi.jpg",
      bio: "Tejashvi excels in building strong relationships and managing public relations for the team.",
      linkedin: "https://www.linkedin.com/in/tejashvi-tiwari-b68443297",
      mail: "",
    },
    {
      id: 9,
      name: "Raj Chintawar",
      role: "Member",
      image: "img/team/Raj Chintawar.png",
      bio: "Raj is a proactive member of the PR team, ensuring smooth communication and outreach.",
      linkedin: "https://www.linkedin.com/in/raj-chintawar-67130b285",
      mail: "",
    },
    {
      id: 10,
      name: "Vedika Dawani",
      role: "Member",
      image: "img/team/vedika f.jpg",
      bio: "Vedika is a creative communicator with a knack for engaging audiences.",
      linkedin: "https://www.linkedin.com/in/vedika-dawani-/",
      mail: "",
    },
    {
      id: 11,
      name: "Anand Tiwari",
      role: "Member",
      image: "img/team/Anand Tiwari.jpg",
      bio: "Anand is a dedicated PR member with a focus on community engagement.",
      linkedin: "",
      mail: "",
    },
    {
      id: 12,
      name: "Siddhika Jadhav",
      role: "Member",
      image: "img/team/siddhika Jadhav.jpg",
      bio: "Siddhika is a passionate PR member with excellent interpersonal skills.",
      linkedin: "https://www.linkedin.com/in/siddhika-jadhav-644117288",
      mail: "",
    },
    {
      id: 13,
      name: "Pratiksha Bhosale",
      role: "Member",
      image: "img/team/pratiksha Bhosle_.jpg",
      bio: "Pratiksha is a proactive member of the PR team, ensuring smooth communication and outreach.",
      linkedin: "https://www.linkedin.com/in/pratiksha-bhosle-b670152ba",
      mail: "",
    },
    {
      id: 14,
      name: "Shital Undalkar",
      role: "Member",
      image: "",
      bio: "Shital is a dedicated PR member with a focus on community engagement.",
      linkedin: "https://www.linkedin.com/in/shital-undalkar-873290289",
      mail: "",
    },
    {
      id: 15,
      name: "Kalash Singh",
      role: "Member",
      image: "img/team/Kalash Singh_.jpg",
      bio: "Kalash is a passionate PR member with excellent interpersonal skills.",
      linkedin: "https://www.linkedin.com/in/kalash-singh-b71a84262",
      mail: "",
    },
  ],
  "Event Management Team": [
    {
      id: 16,
      name: "Vrushali Chavan",
      role: "Lead",
      image: "img/team/Vrushali Chavan.jpg",
      bio: "Vrushali is a skilled event manager with a talent for organizing seamless events.",
      linkedin: "https://www.linkedin.com/in/vrushali-chavan-056747203",
      mail: "",
    },
    {
      id: 17,
      name: "Saksham Sharma",
      role: "Member",
      image: "img/team/Saksham Sharma .jpg",
      bio: "Saksham is a proactive event organizer with a focus on logistics and planning.",
      linkedin: "https://www.linkedin.com/in/capable-sharma",
      mail: "",
    },
    {
      id: 18,
      name: "Gaurav Nath",
      role: "Member",
      image: "img/team/Gaurav. Nath.jpg",
      bio: "Gaurav is a dedicated event management member with a passion for creating memorable experiences.",
      linkedin: "https://www.linkedin.com/in/gaurav-nath-58438828b",
      mail: "",
    },
    {
      id: 19,
      name: "Anurag Jadhav",
      role: "Member",
      image: "img/team/Anurag Jadhav..JPG",
      bio: "Anurag is a creative event planner with a knack for innovative ideas.",
      linkedin: "https://www.linkedin.com/in/anurag-jadhav-4287a5281",
      mail: "",
    },
    {
      id: 20,
      name: "Keshari Sakharkar",
      role: "Member",
      image: "img/team/Keshari Sakharkar.JPG",
      bio: "Keshari is a detail-oriented event manager with a focus on execution.",
      linkedin: "https://www.linkedin.com/in/kesharisakharkar",
      mail: "",
    },
    {
      id: 21,
      name: "Payal Kakad",
      role: "Member",
      image: "img/team/Payal kakad_.jpg",
      bio: "Payal is a passionate event organizer with a focus on attendee engagement.",
      linkedin: "https://www.linkedin.com/in/payal-kakad-635a97263",
      mail: "",
    },
    {
      id: 22,
      name: "Aman Sayyad",
      role: "Member",
      image: "img/team/Aman Sayyad.jpg",
      bio: "Aman is a dedicated event management member with a focus on logistics.",
      linkedin: "https://www.linkedin.com/in/aman-sayyad-ab7ba0250",
      mail: "",
    },
    {
      id: 23,
      name: "Tejas Dabhade",
      role: "Member",
      image: "img/team/Tejas Dabhade(1).jpg",
      bio: "Tejas is a creative event planner with a knack for innovative ideas.",
      linkedin: "https://www.linkedin.com/in/tejasdabhade1",
      mail: "",
    },
  ],
  "Social Media Team": [
    {
      id: 24,
      name: "Tanmay Pagare",
      role: "Lead",
      image: "img/team/Tanmay pagare  (2).jpg",
      bio: "Tanmay is a social media expert with a passion for creating engaging content.",
      linkedin: "https://www.linkedin.com/in/tanmay-pagare-956a45297/",
      mail: "",
    },
    {
      id: 25,
      name: "Suraj Patil",
      role: "Member",
      image: "img/team/Suraj_Patil.jpg",
      bio: "Suraj is a creative social media manager with a focus on brand building.",
      linkedin: "https://www.linkedin.com/in/suraj-patil-9623b2261",
      mail: "",
    },
    {
      id: 26,
      name: "Anushree Damahe",
      role: "Member",
      image: "img/team/",
      bio: "Anushree is a dedicated social media member with a focus on content creation.",
      linkedin: "",
      mail: "",
    },
    {
      id: 27,
      name: "Sahil Kewat",
      role: "Member",
      image: "img/team/sahil",
      bio: "Sahil is a passionate social media manager with a focus on analytics.",
      linkedin: "",
      mail: "",
    },
  ],
  "Videography & Content Team": [
    {
      id: 28,
      name: "Samyak Ingle",
      role: "Lead",
      image: "img/team/Samyak ingle.jpg",
      bio: "Samyak is a creative videographer with a passion for storytelling through visuals.",
      linkedin: "https://www.linkedin.com/in/samyak-ingle-b0b323287",
      mail: "",
    },
    {
      id: 29,
      name: "Armaan Suri",
      role: "Member",
      image: "img/team/Armaan.png",
      bio: "Armaan is a skilled content creator with a focus on video production.",
      linkedin: "https://www.linkedin.com/in/armaan-suri-a3344528b",
      mail: "",
    },
    {
      id: 30,
      name: "Vishal Yadav",
      role: "Member",
      image: "img/team/vishal pro.png",
      bio: "Vishal is a passionate videographer with a focus on editing and post-production.",
      linkedin: "",
      mail: "",
    },
    {
      id: 31,
      name: "Gaurav Khandelwal",
      role: "Member",
      image: "img/team/gourav-khandelwal.jpg",
      bio: "Gaurav is a creative content creator with a focus on visual storytelling.",
      linkedin: "https://www.linkedin.com/in/gaurav-khandelwal-15881828a",
      mail: "",
    },
  ],
  "Finance Team": [
    {
      id: 32,
      name: "Pruthviraj Chavan",
      role: "Lead",
      image: "img/team/Pruthviraj Chavan.jpg",
      bio: "Pruthviraj is a finance expert with a focus on budgeting and financial planning.",
      linkedin: "",
      mail: "",
    },
    {
      id: 33,
      name: "Vaishnavi Gaikwad",
      role: "Co-Lead",
      image: "img/team/Vaishnavi Vikas Gaikwad .jpg",
      bio: "Vaishnavi is a dedicated finance manager with a focus on financial reporting.",
      linkedin: "www.linkedin.com/in/vaishnavi-gaikwad",
      mail: "",
    },
  ],
  "Documentation Team": [
    {
      id: 34,
      name: "Raj Chintawar",
      role: "Lead",
      image: "img/team/Raj Chintawar.png",
      bio: "Raj is a meticulous documentation lead with a focus on maintaining accurate records.",
      linkedin: "https://www.linkedin.com/in/raj-chintawar-67130b285",
      mail: "",
    },
    {
      id: 35,
      name: "Saksham Sharma",
      role: "Member",
      image: "img/team/Saksham Sharma .jpg",
      bio: "Saksham is a proactive documentation member with a focus on organizing information.",
      linkedin: "https://www.linkedin.com/in/capable-sharma",
      mail: "",
    },
    {
      id: 36,
      name: "Gaurav Nath",
      role: "Member",
      image: "img/team/Gaurav. Nath.jpg",
      bio: "Gaurav is a dedicated documentation member with a focus on data management.",
      linkedin: "https://www.linkedin.com/in/gaurav-nath-58438828b",
      mail: "",
    },
    {
      id: 37,
      name: "Pradnya Patil",
      role: "Member",
      image: "img/team/Pradnya.jpg",
      bio: "Pradnya is a meticulous documentation member with a focus on maintaining records.",
      linkedin: "https://www.linkedin.com/in/pradnya-patil-15700b27a",
      mail: "",
    },
  ],
  "Outreach Team": [
    {
      id: 38,
      name: "Ghananshu Mali",
      role: "Lead",
      image: "img/team/",
      bio: "Ghananshu is a proactive outreach lead with a focus on building partnerships.",
      linkedin: "",
      mail: "",
    },
    {
      id: 39,
      name: "Abhishek Bhavsar",
      role: "Member",
      image: "img/team/",
      bio: "Abhishek is a dedicated outreach member with a focus on community engagement.",
      linkedin: "https://www.linkedin.com/in/abhishek-bhavsar-0b9977288",
      mail: "",
    },
    {
      id: 40,
      name: "Mansi Dubey",
      role: "Member",
      image: "img/team/mansi.jpg",
      bio: "Mansi is a passionate outreach member with excellent communication skills.",
      linkedin: "https://www.linkedin.com/in/mansi-dubey-705a19256",
      mail: "",
    },
    {
      id: 41,
      name: "Vivek Singh",
      role: "Member",
      image: "img/team/",
      bio: "Vivek is a dedicated outreach member with a focus on networking.",
      linkedin: "",
      mail: "",
    },
  ],
  "Design Team": [
    {
      id: 42,
      name: "Shubham Singh",
      role: "Lead",
      image: "img/team/Shubham singh .jpg",
      bio: "Shubham is a creative design lead with a passion for visual storytelling.",
      linkedin: "https://www.linkedin.com/in/shubham-singh-034263286",
      mail: "",
    },
    {
      id: 43,
      name: "Sanika Bavaskar",
      role: "Member",
      image: "img/team/sanika .png",
      bio: "Sanika is a talented designer with a focus on creating user-friendly interfaces.",
      linkedin: "https://www.linkedin.com/in/sanika-bavaskar-473810325",
      mail: "",
    },
    {
      id: 44,
      name: "Naman Kadam",
      role: "Member",
      image: "img/team/Naman Kadam.jpg",
      bio: "Naman is a creative designer with a focus on branding and visual identity.",
      linkedin: "",
      mail: "",
    },
    {
      id: 45,
      name: "Soham Jawlekar",
      role: "Member",
      image: "img/team/SohamJawlekar.jpg",
      bio: "Soham is a passionate designer with a focus on graphic design and illustration.",
      linkedin: "",
      mail: "",
    },
    {
      id: 46,
      name: "Yamini Prasad",
      role: "Member",
      image: "img/team/Yamini Prasad.jpg",
      bio: "Yamini is a creative designer with a focus on UI/UX design and prototyping.",
      linkedin: "https://www.linkedin.com/in/yamini-prasad-51a942293",
      mail: "",
    },
  ],
};
