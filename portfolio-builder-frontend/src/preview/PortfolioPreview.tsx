import React, { useState } from "react";
import Template1 from "../templates/Template1";

const PortfolioPreview = () => {
  const [theme, setTheme] = useState("theme-1");
  const [font, setFont] = useState("font-1");
  const [sectionOptions, setSectionOptions] = useState({
    header: "variant1",
    about: "card",
    layout: "grid",
    cardStyle: "style1",
  });

  const portfolio = {
    name: "John Doe",
    title: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    about:
      "Passionate developer with experience in React and modern web technologies. I specialize in building scalable web applications and have a strong foundation in both frontend and backend development.",
    skills: [
      "React",
      "JavaScript",
      "Node.js",
      "TypeScript",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "Docker",
    ],
    projects: [
      {
        title: "E-Commerce Platform",
        description:
          "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
        image:
          "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        url: "https://github.com/example/ecommerce",
      },
      {
        title: "Task Management App",
        description:
          "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        image:
          "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so",
        technologies: ["React", "Firebase", "Material-UI"],
        url: "https://github.com/example/taskapp",
      },
      {
        title: "Portfolio Builder",
        description:
          "A dynamic portfolio builder that allows users to create and customize their professional portfolios with various templates and themes.",
        image:
          "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so",
        technologies: ["React", "Tailwind CSS", "DaisyUI"],
        url: "https://github.com/example/portfoliobuilder",
      },
    ],
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 justify-center items-center">
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="theme-1">Theme 1</option>
          <option value="theme-2">Theme 2</option>
          <option value="theme-3">Theme 3</option>
        </select>

        <select value={font} onChange={(e) => setFont(e.target.value)}>
          <option value="font-1">Sans</option>
          <option value="font-2">Poppins</option>
          <option value="font-3">Mono</option>
          <option value="font-4">Serif</option>
          <option value="font-5">Lora</option>
        </select>

        <select
          value={sectionOptions.header}
          onChange={(e) =>
            setSectionOptions({ ...sectionOptions, header: e.target.value })
          }
        >
          <option value="variant1">Classic Header</option>
          <option value="variant2">Minimal Header</option>
          <option value="variant3">Image Left Header</option>
        </select>

        <select
          value={sectionOptions.about}
          onChange={(e) =>
            setSectionOptions({ ...sectionOptions, about: e.target.value })
          }
        >
          <option value="card">Card About</option>
          <option value="grid">Grid About</option>
          <option value="split">Split About</option>
        </select>

        <select
          value={sectionOptions.layout}
          onChange={(e) =>
            setSectionOptions({ ...sectionOptions, layout: e.target.value })
          }
        >
          <option value="grid">Grid Layout</option>
          <option value="stack">Stack Layout</option>
          <option value="flex">Flex Layout</option>
        </select>

        <select
          value={sectionOptions.cardStyle}
          onChange={(e) =>
            setSectionOptions({
              ...sectionOptions,
              cardStyle: e.target.value,
            })
          }
        >
          <option value="style1">Style 1</option>
          <option value="style2">Style 2</option>
          <option value="style3">Style 3</option>
        </select>
      </div>

      <Template1
        portfolio={portfolio}
        theme={theme}
        font={font}
        section_options={sectionOptions}
      />
    </div>
  );
};

export default PortfolioPreview;
