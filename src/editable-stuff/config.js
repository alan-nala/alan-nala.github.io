import React from "react";
import ReactDOM from "react-dom";

// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #3333ff, #00e600, #ecefef",
  firstName: "Alan",
  middleName: "",
  lastName: "Boette",
  message: " Quantum Hacker ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/quantumhack",
    },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/hashirshoaeb",
    // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/alan-boette-2815621a3/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/hashirshoaeb/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/foto-cuadrada.png"),
  imageSize: 375,
  message:
    "The spirit of hacking is exploiting features that were apparently invisible for breaking systems to discover new opportunities. Without knowing this spirit was always resonant with the activities in my life, that is probably why I have studied Physics but at the same time the philosophical aspect and the experience with my own “operating system” it was also important for me, that is probably the reason why I am a zen monk. Music it is another important component of my life and I enjoy jamming with friends, dancing or just listening. Last but not least, I have two kids that make me remember that the most important thing in life is to be happy.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "quantumhack", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/hashirshoaeb.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/hashirshoaeb.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Mathematica", value: 98 },
    { name: "Jupyter Notebook", value: 70 },
    { name: "LaTeX", value: 100 },
    { name: "Qiskit", value: 65 },
    { name: "PennyLane", value: 60 },
    { name: "Linux/Bash", value: 95 },
    { name: "HTML/CSS", value: 60 },
    { name: "Music/Video/Edition", value: 55 },
  ],
  softSkills: [
    // { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I obtained my PhD from the University of La Plata in 2018 (titled: Entanglement in spin systems and quantum models of time). During which we have developed a description of quantum time arising from the entanglement between the system and a clock. Now I am currently a Postdoctoral fellow working in extending this model of time from quantum entanglement between a system and a clock in a theoretical way and also exploring its simulation through optical setups. I am really intertested in quantum software development and recent quantum technology ecosystem expansion. Please feel free to email me at",
  email: "alan.boette@fisica.unlp.edu.ar",
};

const pub = {
  show: true,
  heading: "Publicactions",
};

// const publi = () => {
//   const id = cosas;
//   return (
//     <div>
//       <h1 id={id}>This is a heading</h1>
//       <h2 className="active">This is another heading</h2>
//     </div>
//   );
// };
//
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);



const publications = {
  show: true,
  heading: "Publications",
  data: [
    {
      role: 'Head TAs: Quantum Information and Quantum Computation',// Here Add Company Name
      companylogo: require('../assets/img/unlp.png'),
      date: '2019 – Present',
      url: "https://www.linkedin.com/in/alan-boette-2815621a3/",
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}


const experiences = {
  show: true,
  heading: "Experience:",
  subheading1: "Teaching",
  subheading2: "Research",
  data: [
    {
      role: 'Head TAs: Quantum Information and Quantum Computation',// Here Add Company Name
      companylogo: require('../assets/img/unlp.png'),
      date: '2019 – Present',
      url: 'https://github.com/cuanticalp/seminario',
      git: 'GitHub',
      role2: 'TA: General Physics and Mathematical Analysis',// Here Add Company Name
      date2: '2010 – 2019',
    },
    {
      role: 'Postdoctoral Researcher',
      companylogo: require('../assets/img/conicet.png'),
      date: '2019 – Present',
      role2: 'PhD Candidate',// Here Add Company Name
      date2: '2014 – 2019',
      url2: 'https://scholar.google.com/citations?hl=es&user=unhqoBcAAAAJ',
      google: 'Google Scholar',
    },
  ]
}




// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, experiences, publications, pub, leadership, getInTouch };
