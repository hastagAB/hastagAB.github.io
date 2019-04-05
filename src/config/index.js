module.exports = {
  siteTitle: 'Ayush Bhardwaj | Developer',
  siteDescription:
    'Ayush Bhardwaj is a Data Science Enthisiast and a Developer based in Noida, India who is Currently an undergrad at Amity University, Noida',
  siteKeywords:
    'Ayush Bhardwaj, Ayush, Bhardwaj, HastagAB, Developer, hastagab, Amity, Amity University, Amity University Noida',
  siteUrl: 'ayushbhardwaj.me',
  siteLanguage: 'en_US',

  googleVerification: '#',

  name: 'Ayush Bhardwaj',
  location: 'Noida, India',
  email: 'classicayush@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/hastagAB/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/hastagab/',
    },
    {
      name: 'Codepen',
      url: '#',
    },
    {
      name: 'Instagram',
      url: '#',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/hastagab',
    },
  ],

  nav: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@hastagab',
  googleAnalyticsID: '#',

  headerHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};
