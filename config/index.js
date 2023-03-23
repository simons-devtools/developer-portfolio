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
    website: "https://simonhemrom.netlify.app",
    branch: "https://github.com/simons-devtools",
    source: "https://github.com/simons-devtools/simonhemrom",
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
      url: "https://github.com/simonhemrom",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/devsh_insta",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/devsh_tweet",
    },
    {
      name: "Linkedin",
      url: "https://linkedin.com/in/devsh_link",
    },
    {
      name: "Codepen",
      url: "https://codepen.io/simonhemrom",
    },
  ],
  experiences: {
    tabPanelItems: [
      "Upstatement",
      "ProHero",
      "SeoClerk",
      "Fiverr",
      "HAcademy",
      "W3School",
    ],
    tabPanelContents: [
      {
        name: "@Upstatement open source",
        start: "April 2021",
        end: "Present",
        works: [
          "Write modern, performant, maintainable code for a diverse array of client and internal projects.",
          "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, React, WordPress, and Netlify.",
          "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis.",
        ],
      },
      {
        name: "@Programming hero teams",
        start: "January",
        end: "March 2021",
        works: [
          "Here I have got complete idea about html, css and javascript. I also have a lot of design layouts like portfolio, blogs and e-commerce.",
          "For front-end design, I have a good idea about React, Material Wee and Bootstrap.",
          "For back-end I know Node.js, Express and Cloud Database MongoDB.",
        ],
      },
      {
        name: "@Search engine optimaization",
        start: "October",
        end: "Desember 2020",
        works: [
          "I got an idea about digital marketing, I got an idea about search engine optimization and I worked at seoclerk .com for three months.",
          "Here are some limitations such as Google Chrome, Microsoft Edge, Mozilla Firefox etc to work on the first page of the search page in different ways.",
          "To seo the website, different parts of the work are done, profile-backlinks, pdf-submission, guest-post, google-map-citation, web-2.0-backlink, mixed-backlink, and infographic-submission, etc.",
        ],
      },
      {
        name: "@Fiverr (business website)",
        start: "July",
        end: "September 2020",
        works: [
          "It served as the first online source of income in my life when I got a general idea about php web developers from Hello Academy and also worked as a freelancer.",
          "I also got a good idea about WordPress theme customization and built and customized several portfolio and blog sites.",
        ],
      },
      {
        name: "@Hello academy teams",
        start: "January",
        end: "June 2020",
        works: [
          "Hello Academy taught me the web development part for the second time. Like html, css and javascript and with that I did basic web design already.",
          "Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with helloo academy.",
          "Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences web apps.",
        ],
      },
      {
        name: "@W3 school learning platform",
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
      name: "Dandaz Ecom (next)",
      image: "/images/dandaz-ecom.png",
      website: "https://dandaz.com.bd",
      technologies: ["Next.js", "MongoDB", "Node.js", "Vercel", "Express"],
      featureds: [
        {
          icon: "GitHub",
          root: "https://github.com/simons-devtools/dandaz-ecom",
        },
        { icon: "External", root: "https://dandaz.com.bd" },
      ],
      article:
        "Improve your GitHub profile and repository statistics with your top programming language and e-commerce site data visualization. Sort by the shape of their data through your top customers.",
    },
    {
      role: "Featured Project",
      name: "Child Care (react)",
      image: "/images/child-care.png",
      website: "https://simons-childcare.herokuapp.com",
      technologies: ["React.js", "MongoDB", "Node.js", "Heroku", "Express"],
      featureds: [
        {
          icon: "GitHub",
          root: "https://github.com/simons-devtools/child-care",
        },
        { icon: "External", root: "https://simons-childcare.herokuapp.com" },
      ],
      article:
        "Improve your GitHub profile and repository statistics with your top programming language and e-commerce site data visualization. Sort by the shape of their data through your top customers.",
    },
    {
      role: "Featured Project",
      name: "Service Info (react)",
      image: "/images/service-info.png",
      website: "https://simons-serviceinfo.herokuapp.com",
      technologies: ["React.js", "MongoDB", "Node.js", "Heroku", "Express"],
      featureds: [
        {
          icon: "GitHub",
          root: "https://github.com/simons-devtools/service-info",
        },
        { icon: "External", root: "https://simons-serviceinfo.herokuapp.com" },
      ],
      article:
        "Improve your GitHub profile and repository statistics with your top programming language and e-commerce site data visualization. Sort by the shape of their data through your top customers",
    },
  ],
  projects: [
    {
      name: "Food Recipe (search)",
      stream: "https://simons-food-recipe.netlify.app",
      source: "https://github.com/simons-devtools/food-recipe",
      technologies: ["React", "Express", "Node.js"],
      description:
        "If you want to make a special kind of food for a restaurant or home but you don't know what you have to do to make it, you can search for that item and find its live videos.",
    },
    {
      name: "Tourism Agency (travels)",
      stream: "https://simons-tourism-agency.netlify.app",
      source: "https://github.com/simons-devtools/tourism-agency",
      technologies: ["React", "Express", "Node.js"],
      description:
        "You just have to be more discriminating with the help you render toward other people. You just have to be more discriminating with the help you render toward other people. Then this website can work well for them for booking.",
    },
    {
      name: "Hotel Booking (realstate)",
      stream: "https://simons-hotel-booking.netlify.app",
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
