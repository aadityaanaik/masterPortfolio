/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Aditya's Portfolio",
  description:
    "I am a dedicated and driven professional with a passion for data and innovation. I can leverage my technical expertise and collaborative spirit to contribute to a dynamic team and help drive business growth.",
  og: {
    title: "Aditya Naik Portfolio",
    type: "website",
    url: "http://naikryder.github.io/masterPortfolio//",
  },
};

//Home Page
const greeting = {
  title: "Aditya Naik",
  logo_name: "AdityaNaik",
  subTitle:
    "I am a dedicated and driven professional with a passion for data and innovation. I can leverage my technical expertise and collaborative spirit to contribute to a dynamic team and help drive business growth.",
  resumeLink:
    "https://drive.google.com/file/d/1nB1L6fKjJ0eOWvowtoUg2xWibNJSa4JF/view?usp=sharing",
  githubProfile: "https://github.com/naikryder",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/naikryder",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/adityavn/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:theadityanaik@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/hey.aditya/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Engineering & Pipelines",
      fileName: "FullStackImg",
      skills: [
        "⚡ Designing robust pipelines that extract, load, and transform data",
        "⚡ Achieving lossless data transmission through techniques like micro-batching and watermark",
        "⚡ Patching data streaming services through migration of message brokers",
      ],
      softwareSkills: [
        {
          skillName: "Google Dataflow",
          imageSrc: "dataflow_logo.png",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Apache Spark",
          imageSrc: "spark.png",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Apache Hadoop",
          imageSrc: "hadoop.png",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Apache Kafka",
          imageSrc: "kafka.png",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Apache Zookeeper",
          imageSrc: "zookeeper.png",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Apache Flink",
          imageSrc: "flink.png",
          style: {
            color: "#CC6699",
          },
        },
      ],
    },
    {
      title: "Data Analytics & Visualization",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Working with dataframes to optimize data management for both Relational and NoSQL databases",
        "⚡ Creating comprehensive operational reporting dashboards with plots and graphs",
        "⚡ Generating visual representations of servers through parameters like health, memory and speed",
      ],
      softwareSkills: [
        {
          skillName: "Tableau",
          imageSrc: "tableau.png",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Microsoft PowerBi",
          imageSrc: "powerbi.png",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Grafana",
          imageSrc: "grafana.png",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Google Data Studio",
          imageSrc: "datastudio.png",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Microsoft Excel",
          imageSrc: "excel.png",
          style: {
            color: "#CC6699",
          },
        },
      ],
    },
    {
      title: "Database & Cloud Computing",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Defining intricate data models and devising advanced database designs",
        "⚡ Optimizing query performance through partitioning, bucketing, and indexing strategies",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on cloud platforms",
      ],
      softwareSkills: [
        {
          skillName: "Google Cloud Platform",
          imageSrc: "gcp.png",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Amazon Web Services",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Google Big Query",
          imageSrc: "bigquery.png",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "SAP Sybase",
          imageSrc: "sybase.png",
          style: {
            color: "#CC6699",
          },
        },
      ],
    },
    {
      title: "DevOps & CI-CD",
      fileName: "DesignImg",
      skills: [
        "⚡ Building a CI-CD architecture and streamlining deployment strategy",
        "⚡ Automating complex jobs through build scripts and APIs",
        "⚡ Releasing and maintaining processes on virtual machine instances through deployment pipelines",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Jenkins",
          imageSrc: "jenkins.png",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Terraform",
          imageSrc: "terraform.png",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Atlassian Bitbucket",
          imageSrc: "bitbucket.png",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Git",
          imageSrc: "git.png",
          style: {
            color: "#CC6699",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    //    {
    //      siteName: "LeetCode",
    //      iconifyClassname: "simple-icons:leetcode",
    //      style: {
    //        color: "#F79F1B",
    //      },
    //      profileLink: "https://leetcode.com/naik_ryder/",
    //    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Texas A&M University - College Station",
      subtitle: "M.S. in Management Information Systems",
      logo_path: "tamu_logo.png",
      alt_name: "TAMU",
      duration: "2022 - 2024",
      descriptions: [
        "-- Rewarded full tuition waiver for research in Technical Education",
        "-- Coursework:",
        "⚡ Data Warehousing",
        "⚡ Database Management",
        "⚡ Data Science",
        "⚡ System Analysis & Design",
      ],
      website_link: "https://www.tamu.edu/",
    },
    {
      title: "Vishwakarma Institute of Technology, Pune",
      subtitle: "B.Tech. in Electronics Engineering",
      logo_path: "vit_logo.png",
      alt_name: "VIT Pune",
      duration: "2015 - 2019",
      descriptions: [
        "-- Honors in Robotics and Embedded Systems",
        "-- Coursework:",
        "⚡ Data Structures",
        "⚡ Image Processing",
        "⚡ Machine Learning",
        "⚡ Statistics",
        "⚡ Microprocessors",
      ],
      website_link: "http://vit.edu",
    },
  ],
};

const certifications = {
  certifications: [
    //    {
    //      title: "Machine Learning",
    //      subtitle: "- Andrew Ng",
    //      logo_path: "stanford_logo.png",
    //      certificate_link:
    //        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //      alt_name: "Stanford University",
    //      color_code: "#8C151599",
    //    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  description:
    "I have contributed towards organizational success by streamlining data processes and enhancing reliability. I have also played a key role in optimizing data management and fostering revenue growth through operational reporting and cloud migration. I have honed my analytical skills, contributing to effective research and scalable database solutions while fostering teamwork and growth.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Graduate Research Assistant",
          company: "Texas A&M University",
          company_url:
            "https://teilab-static.arch.tamu.edu/quek/TITIL/index.html",
          logo_path: "tamu_logo.png",
          duration: "September 2022 - Present",
          location: "College Station, Texas",
          description: [
            "Conducted data-driven research, developed scalable database architectures, and applied analytical techniques to drive efficiency and innovation, enhancing data management and supporting the lab's objectives.",
          ],
          color: "#9b1578",
        },
        {
          title: "Senior Data Engineer",
          company: "HSBC Technology",
          company_url: "https://hsbc.com/",
          logo_path: "hsbc_logo.png",
          duration: "January 2021 - July 2022",
          location: "Pune, India",
          description:
            "Engineered efficient data pipelines, optimized query performance through advanced data modeling, indexing, and partitioning strategies, and pioneered operational reporting dashboards.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "HSBC Technology",
          company_url: "https://hsbc.com/",
          logo_path: "hsbc_logo.png",
          duration: "July 2019 - December 2020",
          location: "Pune, India",
          description:
            "Orchestrated the migration of databases from on-premise Linux servers to Google Cloud through shell scripts for automated VM creation and IAM modifications, and identified gaps in deployment strategy and streamlined CI-CD architecture",
          color: "#0879bf",
        },
        {
          title: "Research and Teaching Assistant",
          company: "Vishwakarma Institute of Technology",
          company_url: "https://vit.edu/",
          logo_path: "vit_logo.png",
          duration: "January 2019 - May 2019",
          location: "Pune, India",
          description:
            "Conducted lectures for final year students, designed quizzes, and prepared assignments on Machine Learning and designed a stock data prediction system using ML technique of Random Multi-Layer Perceptron.",
          color: "#0879bf",
        },
        {
          title: "Machine Learning Intern",
          company: "Tata Institute of Fundamental Research",
          company_url: "https://www.tifr.res.in/",
          logo_path: "tifr.png",
          duration: "June 2018 - August 2018",
          location: "Mumbai, India",
          description:
            "Created an Automatic Basement Parking Locator System using open CV (contours, kernels, LPF), SVM & MNIST database yielding 93% accuracy in identifying handwritten digits and allotting parking space",
          color: "#000000",
        },
        {
          title: "Technical Lead",
          company: "The Robotics Forum",
          company_url: "https://www.vitpunerobotics.com/#/",
          logo_path: "trf.png",
          duration: "August 2017 - May 2018",
          location: "Pune, India",
          description:
            "Worked on the programming of life-size robots for ABU Robocon challenge and arranged workshops covering concepts of Arduino, Raspberry Pi, C++ etc. for freshman and sophomore students",
          color: "#000000",
        },
        {
          title: "Robotics Engineer",
          company: "Trident Labs",
          company_url: "https://www.facebook.com/tridentlabs.vit/",
          logo_path: "tl.png",
          duration: "August 2016 - May 2017",
          location: "Pune, India",
          description:
            "Part of the programming team for the underwater robot submarine  and organized workshops covering concepts of programming and robotics to raise funds for Singapore’s Autonomous Underwater Vehicle challenge",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Achievements",
  description:
    "I have achieved significant milestones in my career, including leadership roles in robotics competitions, guest speaking engagements for technical education, and impactful research contributions, showcasing my dedication to innovation, leadership, and knowledge dissemination.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have authored research publications in leading conferences and journals that focus on a variety of topics, demonstrating a strong commitment to exploring diverse domains within computer science.",
  avatar_image_path: "projects_image.svg",
};

const involvementsHeader = {
  title: "Extra Curricular",
  description:
    "My extra curricular activities encompass leadership, public speaking, and other impactful contributions, reflecting a well-rounded commitment to technology and education.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Machine Learning Expert",
      createdAt: "2021-05-07T16:26:54Z",
      description: "All India Council of Technical Education (AICTE)",
      url: "https://www.ijcseonline.org/full_paper_view.php?paper_id=5183",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Winner",
      createdAt: "2016-11-19T16:26:54Z",
      description: "Ignited Innovators of India Hackathon",
      url: "https://bhau.org/i2i/register/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Emcee",
      createdAt: "2018-02-08T16:26:54Z",
      description: "HSBC Technologies, India",
      url: "https://ieeexplore.ieee.org/document/8529456",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzW=",
      name: "High Commendation",
      createdAt: "2017-03-28T16:26:54Z",
      description: "Model United Nations, VIT Pune",
      url: "https://vitpunemun.com/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNza=",
      name: "External Examiner",
      createdAt: "2020-03-22T16:26:54Z",
      description: "Department of Computer Engineering, VIT Pune",
      url: "https://www.vit.edu/Computer/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzz=",
      name: "Co-Ordinator",
      createdAt: "2018-08-20T16:26:54Z",
      description: "Vatchal - Official newsletter of VIT",
      url: "https://www.instagram.com/vit_vaatchal/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_aditya.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.naikryder.github.io/masterPortfolio//",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    locality: "Kanodar",
    country: "IN",
    region: "Gujarat",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
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
  involvementsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
