const Ai =
  "https://res.cloudinary.com/dyeomcmin/image/upload/v1740683728/ai_iebouv.png";
const Figma =
  "https://res.cloudinary.com/dyeomcmin/image/upload/v1740683730/figma_2_ymruuw.png";
const Sql =
  "https://res.cloudinary.com/dyeomcmin/image/upload/v1740683734/sql_rwlo6r.png";
const Flask =
  "https://res.cloudinary.com/dyeomcmin/image/upload/v1740683729/flask_jmh6my.svg";
const Html =
  "https://res.cloudinary.com/dyeomcmin/image/upload/v1740683733/html_mwkjfx.png";
const Css =
  "https://res.cloudinary.com/dyeomcmin/image/upload/v1740687662/css_agq4jo.png";
const Tailwind =
  "https://res.cloudinary.com/dyeomcmin/image/upload/v1740687664/Tailwind_CSS_icbxd";

const MockPortfolioData = {
  name: "John Smith",
  sector: "Software Engineer",
  header_image:
    "https://images.squarespace-cdn.com/content/v1/631ba8eed2196a6795698665/3690ca61-6a9d-4c93-a2a5-83a5f2aa1648/2022-08-16-Trinet-0540-Martinez-Juan.jpg?format=1000w",
  header_quote: "Innovating the future, one line of code at a time.",
  resume_url:
    "https://writing.colostate.edu/guides/documents/resume/functionalsample.pdf",
  about_text:
    "Hi there! I'm a software engineer passionate about building innovative applications that make a difference.",
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "An online store featuring payment integration, user authentication, and real-time notifications.",
      github_link: "https://github.com/mockuser/ecommerce-platform",
      preview_image: "https://i.imgur.com/joMYPLt.jpeg",
    },
    {
      id: 2,
      title: "Fitness Tracker App",
      description:
        "A web app for tracking workouts, calories, and fitness progress.",
      github_link: "https://github.com/mockuser/fitness-tracker",
      preview_image: "https://i.imgur.com/OWtXqLC.png",
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description:
        "A social media dashboard with analytics and engagement tracking features.",
      github_link: "https://github.com/mockuser/social-dashboard",
      preview_image: "https://i.imgur.com/8j2zHrg.jpeg",
    },
    {
      id: 4,
      title: "Portfolio Builder",
      description:
        "An online portfolio generator for developers and designers.",
      github_link: "https://github.com/mockuser/portfolio-builder",
      preview_image: "https://i.imgur.com/TkPp9sQ.png",
    },
    {
      id: 5,
      title: "Chat Application",
      description:
        "A real-time chat application with private and public chat rooms.",
      github_link: "https://github.com/mockuser/chat-app",
      preview_image: "https://i.imgur.com/5lnO0jm.jpeg",
    },
  ],
  skills: [
    { icon: Ai, name: "Ai" },
    { icon: Sql, name: "sql" },
    { icon: Figma, name: "figma" },
    { icon: Html, name: "Html" },
    { icon: Flask, name: "Flask" },
    { icon: Css, name: "CSS" },
  ],
};

export default MockPortfolioData;

export const mockUser = {
  name: "John Smith",
  email: "JSmith@gmail.com",
  sector: "Software Engineer",
};
