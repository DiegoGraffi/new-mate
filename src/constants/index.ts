import { StaticImageData } from "next/image";

type Project = {
  id: string;
  imgUrl: StaticImageData;
  title: string;
  text: string;
  link: string;
  technologies: {
    next?: boolean;
    react?: boolean;
    tailwind?: boolean;
    sanity?: boolean;
    figma?: boolean;
    framerMotion?: boolean;
  };
};

export const projects: Array<Project> = [
  {
    id: "project-1",
    imgUrl: require("@/images/projects/montemurropablo.png"),
    title: "Pablo Montemurro",
    text: "Pablo Montemurro and his team work with companies giving talks and helping them work better as a team. They reached us because they needed a website to communicate their work and be able to expand to new clients. They had a vision for what their website would be, so from that we started designing and prototyping what the final result would be.\nThey needed the possibility to add new talks to their website so we implemented a CMS to achieve that. We built templates for the existing talks so they could have as many pages as needed. The result was a modern website with a focus on responsive design to help them reach more clients.",
    link: "https://www.pablomontemurro.com.ar/",
    technologies: {
      next: true,
      react: true,
      tailwind: true,
      sanity: true,
      figma: true,
      framerMotion: true,
    },
  },
  {
    id: "project-2",
    imgUrl: require("@/images/projects/02.png"),
    title: "Plan Sonrisas",
    text: "We redesigned a landing page for a client who owns a dental center. By developing a responsive design we ensure the users have the best user experience through mobile to desktop. We also boosted that experience by giving the user the possibility to communicate easily with our client - using a form, Whatsapp and social media -. Additionally, the client has a CMS access to update the website content in real time.",
    link: "https://www.plansonrisas.com/",
    technologies: {
      next: true,
      react: true,
      tailwind: true,
      sanity: true,
      figma: true,
      framerMotion: true,
    },
  },
  {
    id: "project-3",
    imgUrl: require("@/images/projects/03.png"),
    title: "Parque Nacional 'Quebrada del Condorito'",
    text: "Mauris ornare, lorem hendrerit venenatis dictum, magna lorem imperdiet eros, vel aliquet mi orci quis tellus. Cras sagittis nisi a nibh facilisis ornare.",
    link: "https://condorito.netlify.app/",
    technologies: {
      next: true,
      react: true,
      tailwind: true,
      sanity: false,
      figma: true,
      framerMotion: true,
    },
  },
  {
    id: "project-4",
    imgUrl: require("../../public/work4.png"),
    title: "Tiny Houses",
    text: "Praesent non nulla scelerisque, ultricies nunc non, condimentum eros. Curabitur euismod enim ultricies, vulputate ex sed, sagittis purus.",
    link: "https://google.com",
    technologies: {
      next: true,
      react: true,
      tailwind: true,
      sanity: true,
      figma: true,
      framerMotion: true,
    },
  },
];

export const about = [
  {
    id: "about-1",
    imgUrl: require("../../public/manos-mujer-escribiendo-oficina.jpg"),
    title: "creatives",
    text: "In a crowded online marketplace, we create unique and engaging designs that allows our client's brand to stand out from the competition and leave a memorable impression on their users. MateStudio builds user-centric interfaces that are easy to navigate, intuitive to use, and provide a delightful overall experience.",
  },
  {
    id: "about-2",
    imgUrl: require("../../public/about-learners.jpg"),
    title: "learners",
    text: "We know it's a cliché, but we love what we do - we always do our best to improve -. We like staying updated with new technologies, web development trends, and develop flexible web solutions that can easily adapt to changing client needs and industry developments.",
  },
  {
    id: "about-3",
    imgUrl: require("../../public/vista-lateral-mujeres-trabajando-juntas.jpg"),
    title: "communicators",
    text: "Open and transparent communication is crucial for the successful execution of any project, and our commitment is to ensure that our clients are kept informed and involved at every stage of the journey - we encourage teamwork with our clients! -. We start every new project understanding our client's requirements and objectives. We take the time to listen, analyze, and strategize in order to develop tailored solutions that align with your brand identity and business goals. Our client-centric approach ensures that your website or web application reflects your values, engages your target audience, and helps you stand out in a competitive digital landscape.",
  },
];

export const services = [
  {
    id: "services-01",
    title: "design",
    imgUrl: require("../../public/services-design.jpg"),
    text: "With so many websites available online, it's crucial your website stands out. We design visually appealing, user-friendly, and optimized websites for both desktop and mobile devices. Our carefully crafted websites can help you attract visitors, increase engagement, and achieve your business goals.",
  },
  {
    id: "services-02",
    title: "prototyping",
    imgUrl: require("../../public/services-prototyping.jpg"),
    text: "We use Figma to create a preliminary version of your business's website. This web prototype serves as a working model of the final product and allows developers, designers and clients to test the functionality, layout and user experience of your site before it is launched.",
  },
  {
    id: "services-01",
    title: "development",
    imgUrl: require("../../public/services-development.jpg"),
    text: "We create websites combining eye-catching design, legible code to bring a website to life. We seek for your web page to deliver functional, user-friendly and visually appealing online experiences.",
  },
];
