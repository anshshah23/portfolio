import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Client Collaboration",
    description: "I prioritize",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60v h]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Embracing new challenges",
    description: "Learn & grow!",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech Stack",
    description: "Latest",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Specializing in Frontend Development",
    description: "Tech Entusiast",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on a Mental Healthcare Website",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Lets Collaborate",
    description: "Keen to work",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    des: "`Personal Portfolio` is a project I developed to showcase my skills and projects. I designed and developed this website using React.js, Tailwind CSS, and Framer Motion. The site features a clean, modern design with smooth animations and transitions. I created this project to demonstrate my frontend development skills and provide a platform to share my work with the world.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg",],
    link: "https://anshshah2303.vercel.app/",
  },
  {
    id: 2,
    title: "Noteng - Notes Sharing Wesbite",
    des: "'Noteng' was a collaborative college project where I served as a frontend web developer, collaborating with classmates to integrate Django backend functionalities. Using technologies like Bootstrap and Tailwind, we developed a centralized platform for sharing study-related materials such as notes, job opportunities, posts, and educational videos.",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/c.svg"],
    link: "https://noteng.vercel.app/",
  },
  {
    id: 3,
    title: "Recipe Generator - Using OpenAI API",
    des: "Recipe Generator is a fun project I worked on to practice my React skills. This app generates random recipes using the Edamam API, allowing users to explore new dishes and ingredients. I developed this project to enhance my knowledge of API integration, state management, and React component lifecycle methods. Feel free to check it out!",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg",],
    link: "https://recipegeneratorreactapp.onrender.com/",
  },
  {
    id: 4,
    title: "Weather App",
    des: "Created using the Rapid API's Visual Crossing Weather, this app provides real-time weather updates for any location worldwide. I developed this project to enhance my skills in API integration, asynchronous JavaScript, and data visualization. The app features a clean, user-friendly interface with detailed weather information, including temperature, humidity, and wind speed.",
    img: "/p4.svg",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg",],
    link: "https://weather-app-byansh.vercel.app/",
  },
  {
    id: 5,
    title: "Neo Travels - Future of Space Travel",
    des: " Won the `Best Design` award in the `TechNext` hackathon. `Neo Travels` is a futuristic travel website I developed to showcase my design and development skills. I designed the site using Figma and developed it using React.js, Tailwind CSS, and Framer Motion. The site features a sleek, modern design with smooth animations and transitions. I created this project to demonstrate my frontend development skills and provide a platform to share my work with the world.",
    img: "/p5.svg",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg",],
    link: "https://neo-travels.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Ansh was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ansh's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ansh is the ideal partner.",
    name: "Dr. Komal",
    title: "Founder, Dr. Komal's Wellness",
  },{
    quote:
      "Collaborating with Ansh was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ansh's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ansh is the ideal partner.",
    name: "Dr. Komal",
    title: "Founder, Dr. Komal's Wellness",
  },{
    quote:
      "Collaborating with Ansh was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ansh's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ansh is the ideal partner.",
    name: "Dr. Komal",
    title: "Founder, Dr. Komal's Wellness",
  },{
    quote:
      "Collaborating with Ansh was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ansh's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ansh is the ideal partner.",
    name: "Dr. Komal",
    title: "Founder, Dr. Komal's Wellness",
  },{
    quote:
      "Collaborating with Ansh was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ansh's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ansh is the ideal partner.",
    name: "Dr. Komal",
    title: "Founder, Dr. Komal's Wellness",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Fullstack Django Intern",
    company: "Brainvire Infotech",
    desc: "@Brainvire Infotech - Assisted in the development of a web-based platform GemFind using React.js, enhancing interactivity. Researched on integration of Django with IBM Cognos for data visualization.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
   },
  {
    id: 2,
    title: "Web Developer",
    company: "Freelancer",
    desc: "Developed and maintained Dr. Komal's Wellness, a web-based platform for a wellness clinic, using Wix Studio, a no code platform. Integrated payment gateways and appointment scheduling features.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/anshshah23",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/anshshah23/",
  },
];
