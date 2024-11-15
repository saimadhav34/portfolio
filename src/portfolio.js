/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Roopa's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Roopa Portfolio",
    type: "website",
    url: "http://Roopa.com/",
  },
};

//Home Page
const greeting = {
  title: " Hi iam Roopa sri",
  logo_name: "Roopa", 
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1h0O8SmMGCtnaGW3ee_nCt66A-Z5MRU6c/view?usp=drivesdk",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/r00pasri1",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/r00pasri1",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "saimadhav3414@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/r00pasri1",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ashutosh1919/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  
  {
    name: "Gmail",
    link: "mailto:roopasri16082@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

];

const skills = {
  data: [

    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
      ],
    },
    {
     title:"android developer",
      fileName: "CloudInfraImg",
      skills: [
        "⚡  Developing Android apps using Java and cross-platform solutions with React Native",
        "⚡  Integrating real-time features and user authentication with Firebase",
        "⚡  Managing data storage and backend logic using Python and MySQL",
      ],
      softwareSkills: [
        {
          skillName: "FIREBASE",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Android studio",
          fontAwesomeClassname: "simple-icons:androidstudio",
          style: {
          
            color: "#00FF00",
          },
        },
        {
          skillName: "mysql",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#0000FF",
          },
        },
        
      ],
    },
    {
      title: "Data analytics",
      fileName: "DesignImg",
      skills: [
        "⚡  Analyzing complex data sets to drive insightful decisions and strategies for businesses",
        "⚡ Developing interactive dashboards and visualizations for clearer data storytelling",
        "⚡ Implementing data collection frameworks and automating processes to enhance efficiency",
      ],
      softwareSkills: [
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Mongo db",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "amazonwebservices",
          fontAwesomeClassname: "simple-icons:amazonwebservices",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#0000FF",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/r00pasri//",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/roopasri16082",
    },
    
  
  ],
};

const degrees = {
  degrees: [
    {
      title: "Vaagdevi college of engineering",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "vaagdevi.png",
      alt_name: "vaagdevi",
      duration: "2021 - 2025",
      descriptions: [
        "⚡Currently pursuing a B.Tech in CSE and have completed courses in Data Analytics.",
        "⚡ Proficient in programming languages like Python and Java, and experienced in web development.",
        "⚡I have strong problem-solving skills honed through projects and coursework",
      ],
      website_link: "https://www.vaagdevi.edu.in/",
      },
    {
      title: "Jawahar Navodaya vidyalaya",
      subtitle: "M.P.C. in Intermediate",
      logo_path: "Jawahar.png",
      alt_name: "Jawahar Navodaya vidyalaya",
      duration: "2019 - 2021",
      descriptions: [
        "⚡  I completed my Intermediate in M.P.C. at Jawahar Navodaya Vidyalaya with 86%.",
        "⚡  Studied core subjects including Mathematics, Physics, and Chemistry with a strong focus on problem-solving and analytical skills.",
        "⚡ Achieved consistent academic excellence and received recognition for outstanding performance in academics.",
      ],
      website_link: "https://navodaya.gov.in/nvs/en/Home1/",
    }, 
   
  ],
};

const certifications = {
  certifications: [
    {
      title: "web development",
      subtitle: "- free codecamp",
      logo_path: "free web.png",
      certificate_link:
        "https://freecodecamp.org/certification/Roopasri/responsive-web-design",
      alt_name: "free code camp",
      color_code: "#0a0a23",
    },
    {
      title: "AI ML",
      subtitle: "- google",
      logo_path: "code vipassana logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1XcRAIuVF1k91swkspCiwRm-vUdzjwSA_/view?usp=sharing",
      alt_name: "code vipasana",
      color_code: "#1b1a18",
    },
    {
      title: "CLOUD FOUNDATIONS",
      subtitle: "- Aws",
      logo_path: "AWS.png",
      certificate_link:
        "https://drive.google.com/file/d/1JcQCBZkumpXM57yd8AaHJpFdN_Ezf2Np/view?usp=drive_link",
      alt_name: "aws cloud foundation",
      color_code: "#FFF",
    },
    {
      title: "Cyber security",
      subtitle: "- cisco",
      logo_path: "cisco.png",
      certificate_link:
        "https://drive.google.com/file/d/1hB3_txEXI3goK9_CItcShLKIFnAuUbRP/view?usp=drive_link",
      alt_name: "cisco cyber security",
      color_code: "#f8f8f8",
    },
    {
      title: "Cyber security ",
      subtitle: "- cisco",
      logo_path: "cisco.png",
      certificate_link:
        "https://drive.google.com/file/d/1qCF-uvT72anu9kLUwhhSgqqkTPp_HqAb/view?usp=drive_link",
      alt_name: "cisco cyber security",
      color_code: "#f8f8f8",
    },
    {
      title: "Data science ",
      subtitle: "-IBM",
      logo_path: "courseera.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1VOp65jwpxKqTqVdC-85dMSz8tkR0r05n/view?usp=drive_link",
      alt_name: "data science",
      color_code: "#FFF",
    },
    {
      title: "Data science ",
      subtitle: "-IBM",
      logo_path: "courseera.jpg",
      certificate_link:
        "https://drive.google.com/file/d/121fBLg662ffgsQbCs2PUFQ9Hq2PAABpy/view?usp=drive_link",
      alt_name: "data science",
      color_code: "#FFF",
    },
    {
      title: "Data science ",
      subtitle: "-IBM",
      logo_path: "courseera.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1yuasl21ZVr6wQ3ygSdNXxxLySDhZcUL-/view?usp=drive_link",
      alt_name: "data science",
      color_code: "#FFF",
    },
    {
      title: "Data science(AI&ML) ",
      subtitle: "-AICTE",
      logo_path: "altair.png",
      certificate_link:
        "https://drive.google.com/file/d/1ckqV2clgjrjiFWOgV1cHOI6z-aYgfimy/view?usp=drive_link",
      alt_name: "data science",
      color_code: "#FFF",
    },
    {
      title: "Data science ",
      subtitle: "-IBM",
      logo_path: "ibm.png",
      certificate_link:
        "https://drive.google.com/file/d/1TvptLVRrxlISAshe5M0akCpLWjSMQimY/view?usp=drive_link",
      alt_name: "data science",
      color_code: "#FFF",
    },
    {
      title: "Data analytics ",
      subtitle: "-Forage",
      logo_path: "Accenture.png",
      certificate_link:
        "https://drive.google.com/file/d/1EhIDbO_XNmVIYb3_LlsIgeNLXXbGTd18/view?usp=drive_link",
      alt_name: "data analytics",
      color_code: "#FFF",
    },
    {
      title: "python ",
      subtitle: "-coding raja",
      logo_path: "coding.png",
      certificate_link:
        "https://drive.google.com/file/d/1-gU7kanaihKOaxaFSoeHuVeZcpQOS0qR/view?usp=drive_link",
      alt_name: "data analytics",
      color_code: "#FFF",
    },
    {
      title: "Python",
      subtitle: "- cisco",
      logo_path: "cisco.png",
      certificate_link:
        "https://drive.google.com/file/d/1bVUIqXPhKd5sxmzNzRQ8gCtg-LRFVqzl/view?usp=drive_link",
      alt_name: "python",
      color_code: "#f8f8f8",
    },
    {
      title: "React",
      subtitle: "-Let's upgrade",
      logo_path: "lets.png",
      certificate_link:
        "https://drive.google.com/file/d/1nowA4PJS2Uzr3bn05S6PBOQnYOpm8LtC/view?usp=drive_link",
      alt_name: " React",
      color_code: "#FFF",
    },
    {
      title: "AI ",
      subtitle: "-IBM",
      logo_path: "ibm.png",
      certificate_link:
        "https://drive.google.com/file/d/1HW9VvPhTK3obiBrssczVJD_cNc1nslMq/view?usp=drive_link",
      alt_name: "AI",
      color_code: "#FFF",
    },
    {
      title: "AI ",
      subtitle: "-IBM",
      logo_path: "ibm.png",
      certificate_link:
        "https://drive.google.com/file/d/1UJT2xXwC0WJrcLDNi3EBf7DdCeOEV7g0/view?usp=drive_link",
      alt_name: "AI",
      color_code: "#FFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description:
    "I am a Data Analyst and Full Stack Developer, with experience in freelance projects. As an ISTE member, I served as a joint secretary for one event and report writer. I am also a Vibha member, where I organized tech events, including registering 50+ teams for a 100-team freshmen ideathon. I participated in the freshmen ideathon 2022 and am an active NSS member. I lead the student cinematography club and have conducted multiple events for student clubs.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "volunter",
      work: true,
      experiences: [
        {
          title: "Iste club member",
          company: "ISTE",
          company_url: "http://isteonline.in/",
          logo_path: "iste.png",
          duration: "June 2021 - Present",
          location: "New delhi,INDIA",
          description:
            "I am an ISTE member, where I served as a joint secretary for an event and contributed as a report writer. My role showcased my leadership and organizational skills within the club.",
          color: "#000000",
        },
        {
          title: "viba member",
          company: "viba student club",
          company_url: "https://www.vaagdevi.edu.in/vibas-vision-mission/",
          logo_path: "new viba.png",
          duration: "June 2021 - present",
          location: "Hyderabad, Telangana",
          description:
            "I am a member of the Vibha club, where I have organized numerous tech events, including registering over 50 teams for the freshmen ideathon, which had 100 participating teams in total.",
          color: "#0879bf",
        },
        {
          title: "NSS member",
          company: "NSS",
          company_url: "https://nss.gov.in/",
          logo_path: "Nss1.png",
          duration: "May 2021 - PRESENT",
          location: "DELHI, INDIA",
          description:
            "I am an active member of NSS, where I have participated in various community service activities. Additionally, I have taken the lead in conducting and organizing multiple events aimed at student engagement and development.",
          color: "#9b1578",
        },
        {
          title: "Team lead",
          company: "cinema club",
      
          logo_path: "shortfilm.png",
          duration: "Nov 2021 - Dec 2024",
          location: "Warangal, Hyderabad",
          description:
            "As the leader of the student Cinematography Club, I have successfully organized various events and workshops, fostering creativity and collaboration among students passionate about filmmaking.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Full stack web  development virtual internship",
          company: "EY",
          company_url: "https://www.ey.com/en_in/careers/student-entry-level-programs",
          logo_path: "ey.png",
          duration: "Feb 2024 -April 2024",
          description:
            "Contributed to the development and enhancement of web applications, working on both backend and frontend modules to improve integration and functionality. Gained valuable experience in collaborative coding practices and code optimization techniques for robust web solutions.",
          color: "#000000",
        },
        {
          title: "Android devloper virtual internship",
          company: "Eduskills",
          company_url: "https://eduskillsfoundation.org/login/",
          logo_path: "eduskills.png",
          duration: "jan 2024 - march 2024",
          description:
            " Acquired hands-on experience in building Android applications, focusing on creating user-centric designs with smooth functionality. Enhanced skills in debugging, testing, and deploying apps while adhering to best development practices and design standards.",
          color: "#ee3c26",
        },
        {
          title: "AI&ML ",
          company: "Eduskills",
          company_url:
            "https://eduskillsfoundation.org/login/",
          logo_path: "eduskills.png",
          duration: "April 2024 - June 2024",
          description:
            "Applied various AI and ML techniques to develop predictive models, enhancing problem-solving abilities through real-world data sets. Successfully deployed projects using cloud infrastructure, improving both technical proficiency and understanding of scalable solutions.",
          color: "#0071C5",
        },
        {
          title: "AI Cloud virtual internship ",
          company: "Edunet",
          company_url:
            "https://nextgen.edunetworld.com/",
          logo_path: "eduskills.png",
          duration: "Nov 2024 - Dec 2024",
          description:
            " Developed and implemented AI solutions using cloud platforms, focusing on efficient cloud deployment and infrastructure management. Improved proficiency in integrating machine learning models with cloud services for seamless operations and scalability.",
          color: "#0071C5",
        },
        {
          title: " DATA ANALYTICS USING AI-LLMS",
          company: "Eduskills",
          company_url:
            "https://eduskillsfoundation.org/login/",
          logo_path: "eduskills.png",
          duration: "SEP 2024 - NOV 2024",
          description:
            "Gained expertise in applying AI-driven language models for data analysis, enhancing the ability to extract insights from complex datasets and support data-driven decision-making for analytics tasks.",
          color: "#0071C5",
        },
        {
          title: "ALTAIR DATA SCIENCE MASTER VIRTUAL INTERNSHIP ",
          company: "Eduskills",
          company_url:
            "https://eduskillsfoundation.org/login/",
          logo_path: "eduskills.png",
          duration: "April 2024 - June 2024",
          description:
            "Engaged in a comprehensive 4-week virtual internship focusing on data analytics using AI-LLMs. Developed skills in leveraging advanced language models for data processing and analysis, contributing to data-driven solutions for social impact projects.",
          color: "#0071C5",
        },
      ],
    },
   
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "my writtings",
      createdAt: "2024",
      description: "",
      url: "https://myrand0mthoughtz.blogspot.com/2022/01/eat-something-yummy.html",
    },
    
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "roopa1.jpg",
    description:
      "I am Roopa, a skilled data analytics and full-stack development professional experienced in Python, MySQL, Java, and machine learning.Connect with me for impactful data analysis and full-stack development expertise.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "",
    link: "https://myrand0mthoughtz.blogspot.com/2022/01/eat-something-yummy.html",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "phone",
    subtitle: "",
    locality: "WARGAL",
    country: "INDIA",
    region: "TELANGANA",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/S9kWGn9Lh6KcfpNt9",
  },
  phoneSection: {
    title: "7396362015",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
