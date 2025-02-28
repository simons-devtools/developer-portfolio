module.exports = {
  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
  profile: {
    email: "simonhemrom@hotmail.com",
    website: "https://simonhemrom.vercel.app",
    branch: "https://github.com/simons-devtools",
    source: "https://github.com/simons-devtools/developer-portfolio",
    resume:
      "https://drive.google.com/file/d/1EtChBkMMjxiWuXh6tUvM8lZ_EqVUy9Se/view?usp=sharing",
  },
  navbarLinks: [
    {
      name: "About",
      url: "/#about-section",
    },
    {
      name: "Experiences",
      url: "/#experiences-section",
    },
    {
      name: "Features",
      url: "/#features-section",
    },
    {
      name: "Projects",
      url: "/#projects-section",
    },
    {
      name: "Contact",
      url: "/#contact-section",
    },
  ],
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/mrsimonhemrom",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/mrsimonhemrom",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/mrsimonhemrom",
    },
    {
      name: "Linkedin",
      url: "https://linkedin.com/in/mrsimonhemrom",
    },
    {
      name: "Codepen",
      url: "https://codepen.io/mrsimonhemrom",
    },
  ],
  experiences: {
    tabPanelItems: [
      "Upstatement",
      "ProgrammingHero",
      "SEOClerks",
      "Fiverr",
      "HelloAcademy",
      "W3Schools",
    ],
    tabPanelContents: [
      {
        name: "@Upstatement Open Source",
        start: "July 2021",
        end: "Present",
        works: [
          "Write modern, performant, maintainable code for a diverse array of client and internal projects.",
          "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, React, WordPress, and Netlify.",
          "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis.",
        ],
      },
      {
        name: "@Programming Hero Teams",
        start: "January",
        end: "June 2021",
        works: [
          "Here I have got complete idea about html, css and javascript. I also have a lot of design layouts like portfolio, blogs and e-commerce.",
          "For front-end design, I have a good idea about React, Material UI and Bootstrap.",
          "For back-end I know Node.js, Express.js and cloud database MongoDB.",
        ],
      },
      {
        name: "@Search Engine Optimaization",
        start: "October",
        end: "Desember 2020",
        works: [
          "I got an idea about digital marketing, I got an idea about search engine optimization and I worked at 'seoclerk.com' for three months.",
          "Here are some limitations such as Google Chrome, Microsoft Edge, Mozilla Firefox etc to work on the first page of the search page in different ways.",
          "To SEO the website, different parts of the work are done, Local SEO, On-Page SEO, Off-Page SEO, Technical SEO, Profile Backlink, PDF Submission, Guest Post, Google Map Citation, Web 2.0 Backlink, Mixed Backlink, Infographic Submission, and Link Building etc.",
        ],
      },
      {
        name: "@Fiverr (Business Website)",
        start: "July",
        end: "September 2020",
        works: [
          "It served as the first online source of income in my life when I got a general idea about php web developers from 'Hello Academy' and also worked as a freelancer.",
          "I also got a good idea about WordPress theme customization and built and customized several portfolio and blog sites.",
        ],
      },
      {
        name: "@Hello Academy Teams",
        start: "January",
        end: "June 2020",
        works: [
          "Hello Academy taught me the web development part for the second time. Like html, css and javascript and with that I did basic web design already.",
          "Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with helloo academy.",
          "Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences web apps.",
        ],
      },
      {
        name: "@W3 School Learning Platform",
        start: "October",
        end: "Desember 2019",
        works: [
          "It was on the W3 School official web page that I first came across the idea of this web development. From then on my web development journey started",
          "I did some manual testing on different browsers and mobile devices to ensure cross-browser compatibility and responsiveness here.",
          "Initially I wanted to create and maintain code for in-house and client websites using HTML, CSS, SaaS, JavaScript, and jQuery.",
        ],
      },
    ],
  },
  features: [
    {
      role: "Featured Project",
      name: "Dandaz - Commerce (NEXT)",
      image: "/features/feature-01.png",
      website: "https://dandaz.vercel.app",
      technologies: ["Next.js", "MongoDB", "Node.js", "Vercel", "Express"],
      featureds: [
        {
          icon: "GitHub",
          root: "https://github.com/simons-devtools/dandaz-with-zone",
        },
        { icon: "External", root: "https://dandaz.vercel.app" },
      ],
      article:
        "Improve your business webpage and category statistics with your top programming language and e-commerce site data visualization. Sort by the shape of their data through your top customers.",
    },
    {
      role: "Featured Project",
      name: "Consult - Blogger (REACT)",
      image: "/features/feature-02.png",
      website: "https://consult.vercel.app",
      technologies: ["React.js", "MongoDB", "Node.js", "Vercel", "Express"],
      featureds: [
        {
          icon: "GitHub",
          root: "https://github.com/simons-devtools/consult-blogger",
        },
        { icon: "External", root: "https://consult.vercel.app" },
      ],
      article:
        "Improve your business webpage and category statistics with your top programming language and e-commerce site data visualization. Sort by the shape of their data through your top customers.",
    },
    {
      role: "Featured Project",
      name: "Themx - Template (HTML)",
      image: "/features/feature-03.png",
      website: "https://themx.vercel.app",
      technologies: ["React.js", "MongoDB", "Node.js", "Heroku", "Express"],
      featureds: [
        {
          icon: "GitHub",
          root: "https://github.com/simons-devtools/themx-template",
        },
        { icon: "External", root: "https://themx.vercel.app" },
      ],
      article:
        "Improve your business webpage and category statistics with your top programming language and e-commerce site data visualization. Sort by the shape of their data through your top customers.",
    },
  ],
  projects: [
    {
      name: "Food Recipe (search)",
      stream: "https://simons-food-recipe.herokuapp.com",
      source: "https://github.com/simons-devtools/food-recipe",
      technologies: ["React", "Express", "Node.js"],
      description:
        "If you want to make a special kind of food for a restaurant or home but you don't know what you have to do to make it, you can search for that item and find its live videos.",
    },
    {
      name: "Tourism Agency (travels)",
      stream: "https://simons-tourism-agency.herokuapp.com",
      source: "https://github.com/simons-devtools/tourism-agency",
      technologies: ["React", "Express", "Node.js"],
      description:
        "You just have to be more discriminating with the help you render toward other people. You just have to be more discriminating with the help you render toward other people. Then this website can work well for them for booking.",
    },
    {
      name: "Hotel Booking (realstate)",
      stream: "https://simons-hotel-booking.herokuapp.com",
      source: "https://github.com/simons-devtools/hotel-booking",
      technologies: ["React", "Express", "Node.js"],
      description:
        "You have left your city for work or travel to another city. You may need to rent a house to stay but of course you can't decide how to manage it. Then by logging in to this website you will be able to book the room as per your requirement",
    },
    {
      name: "Volunteer Network (team)",
      stream: "https://simons-volunteer-network.netlify.app",
      source: "https://github.com/simons-devtools/volunteer-network",
      technologies: ["React", "Express", "Node.js"],
      description:
        "If you want to manage some people for a party or event then you can easily manage the people as per your need by logging in to this web page.",
    },
    {
      name: "React Deshboard (cms)",
      stream: "https://simons-react-dashboard.netlify.app",
      source: "https://github.com/simons-devtools/react-dashboard",
      technologies: ["React", "Express", "Node.js"],
      description:
        "Imagine that you have a personal website and you can't manage where and how. In that case this dashboard can give you some great features. Such as users, products, create, update, delete.",
    },
    {
      name: "Upcomming Feature (chatbot)",
      stream: "https://simons-online-chatbot.netlify.app",
      source: "https://github.com/simons-devtools/online-chatbot",
      technologies: ["React", "Express", "Node.js"],
      description:
        "You want to have a conversation with one of your personal people or team but you do not want to share it with anyone but them. I am creating a simple chat application according to that feature. You can follow me to get updates.",
    },
  ],
};
