// Add my new skills to this skills array
const skills = [
  "JavaScript",
  "HTML & CSS",
  "Node. js",
  "TypeScript",
  "React. js",
  "MondoDB",
  "WordPress",
  "C#",
  "Unity3D",
];

// Add my working experiences to this working experiences object
const workingExperiences = [
  {
    companyName: "PH Green House",
    siteUrl: "https://www.phgreenhouse.com/",
    position: "WordPress Developer",
    workTime: "2020 - 2021 December",
    descriptions: [
      "Developed a WordPress website from a scratch with modern UI/UX design.",
      "Worked with elementor with a hello theme to build engaging and responsive pages across the whole website.",
      "Followed best WordPress security practices when developing the site and introduced a robust backup method to the client to keep the site's data safe.",
    ],
  },

  {
    companyName: "Trade Revenue Pro",
    siteUrl: "https://traderevenuepro.com/",
    position: "WordPress Developer",
    workTime: "2019 - 2021 October",
    descriptions: [
      "Designed and developed a WordPress site from scratch for content management and monetization purpose.",
      "Work on onsite SEO and developed a content management strategy to get more organic visitors from google",
      "Work with Elementor page builder to develop unique pages across the website.",
    ],
  },
];

const featuredProjects = [
  {
    projectName: "Full Stack Blog With Authentication",
    projectUrl: "http://blog-shamila.herokuapp.com/",
    repoUrl: "https://github.com/Shamilawa/full-stack-blog-with-authentication",
    category: "Personal Projects",
    imgUrl:
      "https://res.cloudinary.com/dyt0p43bi/image/upload/v1659427431/full_stack_blog_snsod0.png",
    skills: ["JavaScript", "Node. js", "EJS", "Express. js", "MondoDB"],
    description:
      "This is a full stack blog with user authentication where users can publish blog posts upon registration. Registered users have a separate dashboard for managing the articles. To store user data and the articles, I used MongoDB with a mongoose package  and all the user authentication is handled by the Passport package. ",
    flip: "false",
  },

  {
    projectName: "Rock Paper Scissor with UI",
    projectUrl: "https://shamilawa.github.io/rock-paper-scissors-with-ui/",
    repoUrl: "https://github.com/Shamilawa/rock-paper-scissors-with-ui",
    category: "Personal Projects",
    imgUrl:
      "https://res.cloudinary.com/dyt0p43bi/image/upload/v1659427430/Rock_paper_scissors_vygupw.png",
    skills: ["HTML & CSS", "JavaScript", "DOM Manipulation", "CSS Animation"],
    description:
      "This is a traditional rock, paper and scissors game with an elegant and highly engaging UI. This simple and fun game is built with HTML and CSS. For the login and interactive, I have worked a lot with JavaScript and DOM manipulation. This game is responsive across all devices but for the best experience, try it on a mobile device.",
    flip: "true",
  },

  {
    projectName: "Trade Revenue Pro",
    projectUrl: "https://traderevenuepro.com/",
    repoUrl: "https://traderevenuepro.com/",
    category: "Commercial Projects",
    imgUrl:
      "https://res.cloudinary.com/dyt0p43bi/image/upload/v1659428440/trade_revenue_pro_wordpress_website_bahwzp.png",
    skills: ["HTML & CSS", "JavaScript", "PHP", "WordPress", "Elementor"],
    description:
      "This is a WordPress site that was created from the ground up using the Elementor page builder. This website's primary goal is content marketing and monetization. I used to own the site, so I was in charge of all of the content and SEO, and I was able to generate a significant amount of organic traffic from Google as well as revenue from Ezoic.",
    flip: "false",
  },

  {
    projectName: "PH Green House",
    projectUrl: "https://www.phgreenhouse.com/",
    repoUrl: "https://www.phgreenhouse.com/",
    category: "Commercial Projects",
    imgUrl:
      "https://res.cloudinary.com/dyt0p43bi/image/upload/v1659428440/ph_green_house_wordpress_website_s7dtu7.png",
    skills: ["HTML & CSS", "JavaScript", "PHP", "WordPress", "Elementor"],
    description:
      "This is yet another WordPress site that I created. This was created for PH Green House, a company that provides greenhouse solutions throughout the country. Because this is a greenhouse solution company, I built this website with commercial farmers in mind. Since the PH Green House already had a strong social media presence, I was able to carefully pull the information I needed from the social media, making my design process easier.",
    flip: "true",
  },
];

const olderProjets = [
  {
    year: "2019",
    projectName: "Forex.com Clone UI",
    url: "https://shamilawa.github.io/FOREX.COM_clone/",
    repoUrl: "https://github.com/Shamilawa/FOREX.COM_clone",
    projectCategory: "Personal Project",
    skills: ["HTML ", "CSS"],
  },

  {
    year: "2019",
    projectName: "Google Result Page UI",
    url: "https://shamilawa.github.io/google_result-page",
    repoUrl: "https://github.com/Shamilawa/google_result-page",
    projectCategory: "Personal Project",
    skills: ["HTML ", "CSS"],
  },

  {
    year: "2019",
    projectName: "Simple Car Renting Home Page UI",
    url: "https://shamilawa.github.io/car-renting/",
    repoUrl: "https://github.com/Shamilawa/car-renting",
    projectCategory: "Personal Project",
    skills: ["HTML ", "CSS"],
  },

];

export { skills, workingExperiences, featuredProjects, olderProjets };
