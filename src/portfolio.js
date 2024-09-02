/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "NeuronX²",
  description: "Kushagra Nehra's website",
  og: {
    title: "Kushagra Nehra's Website",
    type: "website",
    url: "https://neuronx2.github.io/portfolio",
  },
};

//Home Page
const greeting = {
  title: "Kushagra Nehra",
  logo_name: "KushagraNehra",
  nickname: "NeuronX²",
  subTitle:
    "Management professional with over 13 years of expertise in market expansion, financial and business analytics across industries like material tech, food tech, and ITES.",
  resumeLink:
    "https://drive.google.com/file/d/1LqBu0cKuUEXf2TCqv-3aoX7ZudF212gd/view?usp=sharing",
  portfolio_repository: "https://github.com/neuronx2/portfolio",
  githubProfile: "https://github.com/neuronx2",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "_text_",
  // linkedin: "_text_",
  // gmail: "_text_",
  // gitlab: "_text_",
  // facebook: "_text_",
  // twitter: "_text_",
  // instagram: "_text_"

  {
    name: "Github",
    link: "https://github.com/neuronx2",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "www.linkedin.com/in/kushagra-nehra",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Xing",
    link: "https://www.xing.com/profile/kushagra_nehra",
    fontAwesomeIcon: "fa-brands fa-square-xing", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#006567", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:nehra.kushagra@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  /* {
    name: "X-Twitter",
    link: "https://twitter.com/ashutosh_1919", //TODO: make a handle
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },*/
  /*{
    name: "Facebook",
    link: "https://www.facebook.com/laymanbrother.19/", //TODO: if i want to only then
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },*/
  /*{
    name: "Instagram",
    link: "https://www.instagram.com/layman_brother/", //TODO: do i want to
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },*/
];

const skills = {
  data: [
    {
      title: "Data Driven Strategy",
      fileName: "DataScienceImg", //TODO:change it totally
      skills: [
        "Post starting my career in data about 10 years back, as data generator I graduated towards data user roles.",
        "⚡ I work closely with senior management ofthen navigating my work through crossfunctional teams.",
        "⚡ Simplyfying and presenting the data interpretation for my stakeholders to turn them into actionable items.",
        "⚡ My role can be classified as in-house consultant who combines BI, Data Science, Analytics & Management together.",
        "My last projects have been about product innovation and market expansion in Semiconductors, Autonomous Driving, Renewable energy & Carbon Capture markets.",
      ],
      softwareSkills: [
        {
          skillName: "SharePoint",
          fontAwesomeClassname: "mdi:microsoft-sharepoint",
          style: {
            backgroundColor: "transparent",
            color: "#038186",
          },
        },
        {
          skillName: "Confluence",
          fontAwesomeClassname: "simple-icons:confluence",
          style: {
            backgroundColor: "transparent",
            color: "#2684ff",
          },
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:canva",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "MS Office",
          fontAwesomeClassname: "mdi:microsoft-office",
          style: {
            backgroundColor: "transparent",
            color: "#F65314",
          },
        },
        {
          skillName: "Google Suite",
          fontAwesomeClassname: "logos:google-360suite",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Crunchbase",
          fontAwesomeClassname: "simple-icons:crunchbase",
          style: {
            backgroundColor: "transparent",
            color: "#3358FF",
          },
        },
      ],
    },
    {
      title: "Analytics: Business, Data & Finance",
      fileName: "FullStackImg", //TODO:change it totally
      skills: [
        "This is where I bring my diverse education and expereince together by combining tech with management",
        "⚡ You can find me building business cases for organic or inorganic expansion for approval from senior management",
        "⚡ From data validation to data presentation using basic tools like excel to advanced BI tools you can always find something on my working screen",
        "⚡ Getting hands dirty with code, correction & little bit of programming, othen staring and interpreting badly written code as well :)",
        "⚡ Data processing & Developing basic data science models specially related to consumer economics",
        "Some of my last projects were into ERP implimentation, Market Research, Value prediction, Sample Classification, KPI definitons and Dashboards",
      ],
      softwareSkills: [
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos:tableau-icon",
        },
        {
          skillName: "Salesforce",
          fontAwesomeClassname: "logos:salesforce",
        },
        {
          skillName: "PowerBI",
          fontAwesomeClassname: "logos:microsoft-power-bi",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "mdi:sql-query",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "SPSS",
          fontAwesomeClassname: "devicon:spss",
        },
        {
          skillName: "GA",
          fontAwesomeClassname: "logos:google-analytics",
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
        },
      ],
    },
    {
      title: "Project & Product Management",
      fileName: "DesignImg", //TODO:change it totally
      skills: [
        "At various points in professional journey, I have lead various projects and seen development of products till the end.",
        "⚡ I often act as a bridge between Clients (internal & external) and technical experts donning the hat of Project Manager or sometimes as Product Manager.",
        "⚡ Documenting, validating the VOC, project requirements, avoiding scope creep , allocating resources & always shooting out emails.",
        "⚡ Implimenting process for New Product Development (Blueprinting). Engaging into questions and answers to explore the hidden key deliverables.",
        "From multiple digital products to market reseach projects, my latest deliverable was a development of a physical product capable of utilization in Hydrogen Production with help of R&D team.",
      ],
      softwareSkills: [
        //TODO:update it

        {
          skillName: "Jira",
          fontAwesomeClassname: "logos:jira",
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Blueprint",
          fontAwesomeClassname: "logos:blueprint",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    /*{
      title: "Marketing Research", //TODO: update
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },*/
  ],
};

// Education Page//TODO:check what this is later
const competitiveSites = {
  competitiveSites: [
    /*{
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },*/
  ],
};
const degrees = {
  degrees: [
    {
      title: "ESCP Business School",
      subtitle: "Specialized Maters in Big data and Business Analytics",
      logo_path: "escp_logo.png",
      alt_name: "escp",
      duration: "2018 - 2020",
      descriptions: [
        "⚡ A specialized course that covered all the important Data revolution related aspects from BI, ML, AI, Management, Programming and even classic tools like Excel.",
        "⚡ Constant immersion with industry byt working on real life problems and trying to find solution through data alongside studies was totally enriching.",
        "⚡ With respect to the various aspects of business and using data in daily operations, we covered almost all the aspects like where and how Bigdata is used in Finance, Marketing, Strategy etc.",
        "⚡ Direct training on tools like Tableau, SAP, Salesforce etc and various ML Algorithms.",
      ],
      website_link: "https://escp.eu/programmes/specialised-masters-MSc/",
    },
    {
      title: "Arun Jaitley National Institute of Financial Managment",
      subtitle: "Executive Certificate in Financial Markets",
      logo_path: "nifm_logo.png",
      alt_name: "nifm",
      duration: "2010 - 2011",
      descriptions: [
        "⚡ One year executive course aimed at strenthening the understanding of Finanical Instruments, treasury, investments, economics etc.",
        "⚡ Worked very closely with senior decision makers accross many financial insitutions including BSE and SGX.",
        "⚡ The curriculum also covered use of programming to catch trends and portfolio returns, further being involved in realtime trading and hedging was also a great exposure.",
        "⚡ The institue being at the centre of training Indian officers as part of Minisrty of Finance was specially intersting to observe how the decision making works at Govt. level.",
      ],
      website_link: "https://www.ajnifm.ac.in/",
    },
    {
      title: "Infinity Business School",
      subtitle: "PGDGM (Finance and Marketing)",
      logo_path: "inbuss_logo.png",
      alt_name: "Inbuss_citicorp",
      duration: "2006 - 2008",
      descriptions: [
        "⚡ Two year post graduate course equivalent to MBA",
        "⚡ An extensive industry immersed curriculum with deep focus on Fiance and Wealth Management. However, I majored in Finance and Marketing both.",
        "⚡ During my time at Infinty, I interned with ICICI asset management company and helped them do sales through Private Bank and Public Bank channels.",
        "⚡ The accumen developed in Marketing Research, how the marketing is implimented at grassroot level and their impact on Financials is something I still carry professionally.",
      ],
      website_link: "https://www.inbuss.com/",
    },
    {
      title: "CCS University",
      subtitle: "LLB (Bachelor of Laws)",
      logo_path: "ccs_logo.png",
      alt_name: "ccs_llb",
      duration: "2006 - 2009",
      descriptions: [
        "⚡ Three year post graduate course spanning over various laws that fall under the Indian Legal Ecosystem.",
        "⚡ Though there were varied courses but I always focused on Corporate Law & Legal Compliance.",
        "⚡ The deep understaning of law helped me liaise through the compliance challenges at various government offices.",
        "⚡ The ability ot interpret laws and drafting still helps me in putting words and communication in a precise method to convey exact meaning.",
      ],
      website_link: "https://www.ccsuniversity.ac.in/",
    },
    {
      title: "University of Delhi",
      subtitle: "B.Sc.(H) Biomedical Sciences",
      logo_path: "du_logo.png",
      alt_name: "DU BSc",
      duration: "2003 - 2006",
      descriptions: [
        "⚡ One of the top rankers to get through after the all india level entrance exams (10th Place).",
        "⚡ I studied various subjects that are studied in medical except human anatomy and some more.",
        "⚡ Very reseach intensive curriculum and covered subjects like Bioinformatics, Biochemistry, Biostatistics, Biophysics, Microbiology, Pharmacology etc.",
        "⚡ As a graduate student, I worked on DNA vaccines against prostate cancer using bioengineering to develop required vaccine protiens in recombinant plants.",
      ],
      website_link: "https://www.du.ac.in/",
    },
  ],
};

const certifications = {
  //TODO: cretifications
  certifications: [
    /*{
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },*/
  ],
};

// Experience Page
const experience = {
  //TODO:experience
  title: "Experience", //TODO:you can also change the name here to reflect the info
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with Startups and Global enterprises alike. I have been an enterpreneur myself. As a professional who acts as a mediator between the technical professional and management decision makers, I love love solving business strategy challenges that are identified based on data and their solution lies mostly in what data says or soemtimes outside it.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Manager New Market Development",
          company: "Morgan Advanced Materials Plc.",
          company_url: "https://www.morganadvancedmaterials.com/en-gb/",
          logo_path: "mam_logo.png",
          duration: "March 2022 - Present",
          location: "Berlin, Germany",
          description:
            "It started with an Interview for Head for Business Intelligence position at Performance Carbon SBU and ended in a Strategic role to assist Board members in Data Backed Innovation as New Market Development Manager",
          color: "#000000",
        },
        {
          title: "Senior Financial Analyst Marketing BI ",
          company: "Hellofresh SE",
          company_url: "https://www.hellofresh.de/",
          logo_path: "hf_logo.png",
          duration: "April 2020 - Feb 2022",
          location: "Berlin, Germany",
          description: "____",
          color: "#0879bf",
        },
        {
          title: "Manager Global Business Operation",
          company: "Toluna Inc.",
          company_url: "https://www.toluna.com/",
          logo_path: "toluna_logo.png",
          duration: "May 2015 - Aug 2018",
          location: "Gurugram,India",
          description: "____",
          color: "#9b1578",
        },
        {
          title: "Financial Analyst FP&A",
          company: "Dynata Inc.",
          company_url: "https://www.dynata.com/",
          logo_path: "dynata_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "New Delhi, India",
          description: "____",
          color: "#fc1f20",
        },
        {
          title: "Project Manager",
          company: "Dynata Inc.",
          company_url: "https://www.dynata.com/",
          logo_path: "dynata_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "New Delhi, India",
          description: "____",
          color: "#fc1f20",
        },
        {
          title: "Assistant Manager",
          company: "GE Capital",
          company_url: "https://www.gecapital.com/",
          logo_path: "ge_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Lucknow, India",
          description: "____",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships", //TODO: internships
      experiences: [
        {
          title: "Intern Vaccine Research",
          company: "Talwar Research Foundation",
          company_url:
            "https://www.indiascienceandtechnology.gov.in/allstinstitutions/talwar-research-foundation",
          logo_path: "trf_logo.png",
          duration: "May 2005 - Aug 2005",
          location: "New Delhi, India",
          description: "____",
          color: "#000000",
        },
        {
          title: "Mutual Funds Investment",
          company: "ICICI Prudential Asset Management Company",
          company_url: "https://www.icicipruamc.com/",
          logo_path: "icicipru_logo.png",
          duration: "May 2007 - Aug 2007",
          location: "New Delhi, India",
          description: "____",
          color: "#ee3c26",
        },
        {
          title: "Data Analytics Intern",
          company: "Ommax GmBH",
          company_url: "https://www.ommax-digital.com/en/",
          logo_path: "ommax_logo.png",
          duration: "Aug 2019 - Jan 2020",
          location: "Munich, Germany",
          description: "____",
          color: "#0071C5",
        },
      ],
    },
    /*{
      title: "Volunteerships", //TODO:social work
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },*/
  ],
};

// Projects Page
const projectsHeader = {
  //TODO:some projects that i did with specifics
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  //TODO:some blogs i want to write
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  //TODO:contact infromation
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png", //TODO: chnage image and names
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "_text_",
    locality: "_text_",
    country: "_text_",
    region: "_text_",
    postalCode: "_text_",
    streetAddress: "_text_",
    avatar_image_path: "address_image.svg",
    location_map_link: "_gps_maps_link_",
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
  publicationsHeader,
  publications,
  contactPageData,
};
