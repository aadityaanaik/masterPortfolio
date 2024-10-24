/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Aditya's Portfolio",
  og: {
    title: "Aditya Naik Portfolio",
    type: "website",
    url: "http://aadityaanaik.github.io/masterPortfolio//",
  },
};

//Home Page
const greeting = {
  title: "Aditya Naik",
  subTitle:
    "I'm on the prowl for roles that make data come to life – from crafting pipelines to diving into analysis. I'm the Sherlock Holmes of data, seeking out hidden stories. If you've got a challenge, I've got the skills!",
  resumeLink:
    "https://drive.google.com/file/d/1S3_2QCKUUo1S9LwWQxpBrxOcIvMkrEIY/view?usp=sharing"
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/naikvaditya",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aadityaanaik/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:theadityanaik@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
    data1: [
    {
      title: "ETL/ELT Data Pipelines",
    //      fileName: "DesignImg",
      skills: [
        "Design, implement, and maintain robust data pipelines to efficiently and reliably move data from various sources to its destination, ensuring data quality, timeliness, and scalability"
      ],
      softwareSkills: [
                            {
                                    skillName: "Databricks",
                                    imageSrc: "databricks.png",
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
                ],
    },
    {
              title: "Database Management",
            //      fileName: "DesignImg",
              skills: [
                "Design, implement, and optimize databases to ensure efficient data storage, retrieval, and management, considering factors such as performance, scalability, security, and integrity"
              ],
              softwareSkills: [
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
              title: "Data Visualization & Reporting",
        //      fileName: "DesignImg",
              skills: [
                "Develop visually compelling and interactive data visualizations and dashboards to communicate insights effectively to stakeholders"
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
                            skillName: "Microsoft Excel",
                            imageSrc: "excel.png",
                            style: {
                              color: "#CC6699",
                            },
                          },
                        ],
            },
    {
      title: "Programming Languages",
    //      fileName: "DesignImg",
      skills: [
        "Crafting clean, maintainable, and efficient code across a diverse array of platforms and programming languages, ensuring the seamless development of robust and scalable software applications and systems"
      ],
      softwareSkills: [
        {
            skillName: "Java",
            imageSrc: "java.png",
            style: {
              color: "#E34F26",
            },
          },
          {
            skillName: "Python",
            imageSrc: "python.png",
            style: {
              color: "#1572B6",
            },
          },
          {
            skillName: "C++",
            imageSrc: "cpp.png",
            style: {
              color: "#CC6699",
            },
          },
          {
            skillName: "JavaScript",
            imageSrc: "javascript.png",
            style: {
              color: "#CC6699",
            },
          },
          {
            skillName: "R",
            imageSrc: "r.png",
            style: {
              color: "#CC6699",
            },
          },
      ],
    },
    ],
    data2: [
    {
          title: "CI/CD Pipeline Automation",
        //      fileName: "DataScienceImg",
          skills: [
            "Implement and automate CI/CD pipelines to streamline software delivery and deployment processes, ensuring rapid and reliable releases."
          ],
          softwareSkills: [
                                 {
                                    skillName: "TeamCity",
                                    imageSrc: "teamcity.png",
                                    style: {
                                      color: "#CC6699",
                                    }
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
                        ],
        },
    {
                      title: "DevOps Practices & Tooling",
                //      fileName: "designimg",
                      skills: [
                        "Implement and maintain DevOps practices and tools to automate SDLC, streamline collaboration between development and operations teams, and enhance deployment."
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
    {
      title: "Cloud Infrastructure Services",
    //      fileName: "FullStackImg",
      skills: [
        "Architect, deploy, and optimize cloud infrastructure solutions for scalability, performance, security, and cost-efficiency."
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
              skillName: "Microsoft Azure",
              imageSrc: "azure.png",
            },
        ],
    },
    {
                  title: "Machine Learning Models",
            //      fileName: "DesignImg",
                  skills: [
                    "Apply statistical analysis, machine learning, and predictive modeling techniques to extract actionable insights from data, addressing complex business problems and driving data-driven decision-making processes"
                  ],
                  softwareSkills: [
                    {
                      skillName: "Sci-Kit Learn",
                      imageSrc: "sci-kit.png",
                      style: {
                        color: "#1488C6",
                      },
                    },
                    {
                      skillName: "TensorFlow",
                      imageSrc: "tensorflow.png",
                      style: {
                        color: "#1488C6",
                      },
                    },
                    {
                      skillName: "PyTorch",
                      imageSrc: "pytorch.png",
                      style: {
                        color: "#1488C6",
                      },
                    },
                  ],
                },
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
            "Part of the programming team for the underwater robot submarine and organized workshops covering concepts of programming and robotics to raise funds for Singapore’s Autonomous Underwater Vehicle challenge",
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
  title: "Extra - Curricular",
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
      description: "All India Council of Technical Education",
      url: "https://www.aicte-india.org/",
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
      url: "https://hsbc.com/",
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
    link: "https://blogs.aadityaanaik.github.io/masterPortfolio//",
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
  degrees,
  certifications,
  experience,
  projectsHeader,
  involvementsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
