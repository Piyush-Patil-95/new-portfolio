import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "01/01/2024 - 15/02/2024",
    role: "Full Stack Development Internship",
    company: "Innovations Hub",
    description: `During a six-week internship at InnovationsHub Services, I delved into the dynamic realm of full-stack web development, gaining practical experience in HTML, CSS, Bootstrap, JavaScript, PHP, and SQL. The focal point of my internship was the "FoodNStay" project, an innovative online platform designed to ease the challenges faced by students seeking affordable and convenient mess and PG services in unfamiliar cities. Through meticulous design and development, I contributed to the creation of a user-friendly website that streamlines the process of finding suitable accommodations and meal services.`,
    technologies: ["HTML", "CSS","Boostrap", "Javascript", "PHP", "MYSQL"],
  },
];

export const PROJECTS = [
  {
    title: "AI Resume Builder with Video Integration",
    image: project1,
    description:
      "An innovative web applicaton that guides users in crafting proffesional resumes using AI generated text. The platform analyzes the resume and creates a set of related questions which the user needs to answer. A short video is created which is attached to the resume, which helps the student's resume to stand out by showing his technical skills as well as communication skills",
    technologies: ["React", "Node.js","Express.js", "MongoDB", "GEMINI AI API"],
  },
  {
    title: "Blogging Web Application",
    image: project2,
    description:
      "BlogSphere provides an immersive blogging experience, enabling users to easily share their thoughts, insights, and stories and allow them to create, update, and delete blogs effortlessly.",
    technologies: ["React", "Node.js","Express.js", "MongoDB"],
  },
  {
    title: "FoodNStay",
    image: project3,
    description:
      "FoodNStay is a dynamic full-stack project developed with HTML5, CSS3, JavaScript, Bootstrap, PHP, and MySQL, facilitating integrated food ordering and accommodation booking services. ",
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap","PHP","SQL"],
  },
  {
    title: "Read It Out Loud",
    image: project4,
    description:
      "The project aims to develop a PDF to audio converter using Python. The system utilizes the PyPDF2 library to extract text from PDF documents and the pyttsx3 library to convert the text into spoken audio. It allows users to provide a PDF file as input and generates an audio file containing the converted speech corresponding to the extracted text from the PDF",
    technologies: ["Python", "PyPDF2", "pyttsx3"],
  },
];


