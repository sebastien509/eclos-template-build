import HeaderClassic from "./layoutParts/headers/HeaderClassic";
import HeaderMinimal from "./layoutParts/headers/HeaderMinimal";
import HeaderImageLeft from "./layoutParts/headers/HeaderImageLeft";

import AboutGrid from "./layoutParts/abouts/AboutGrid";
import AboutCard from "./layoutParts/abouts/AboutCard";
import AboutSplit from "./layoutParts/abouts/AboutSplit";

import ProjectsSection from "../components/ProjectsSection";

const themes = {
  "theme-1": {
    primary: "#212529",
    secondary: "#1f2937",
    neutral: "#0b9b8a",
    opps: "#d4f1f4",
    text1: "#189ab4",
    text2: "#ffffff",
    bg: "bg1",
    bgImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    glassStyle: {
      background: "rgba(255,255,255,0.4)",
      borderRadius: "10px",
      border: "1px solid rgba(255,255,255,0.4)",
      position: "relative",
      color: "white",
      zIndex: 1,
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    },
  },
  "theme-2": {
    primary: "#ffffff",
    secondary: "#ffffff",
    neutral: "#d0725e",
    opps: "#198A5B",
    text1: "#ffffff",
    text2: "#ffffff",
    bg: "bg2",
    bgImage:
      "https://images.unsplash.com/vector-1743791782324-d310c20f41e3?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    glassStyle: {
      background: "rgba(30,30,40,0.35)",
      backdropFilter: "blur(25px)",
      WebkitBackdropFilter: "blur(25px)",
      borderRadius: "20px",
      border: "1px solid rgba(255,255,255,0.12)",
      boxShadow:
        "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(255,255,255,0.05), inset 0 0 2px 1px rgba(255,255,255,0.08)",
      position: "relative",
      overflow: "hidden",
    },
  },
  "theme-3": {
    primary: "#2a2a72",
    secondary: "#009ffd",
    neutral: "#2a9d8f",
    opps: "#e9c46a",
    text1: "#f4a261",
    text2: "#ffffff",
    bg: "bg3",
    bgImage:
      "https://images.unsplash.com/vector-1747069104000-d096a1c61a88?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    glassStyle: {
      background: "rgba(255,255,255,0.08)",
      backdropFilter: "blur(24px)",
      WebkitBackdropFilter: "blur(24px)",
      borderRadius: "20px",
      border: "1px solid rgba(255,255,255,0.15)",
      boxShadow:
        "0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(255,255,255,0.05)",
      position: "relative",
      overflow: "hidden",
    },
  },
};

const textSizeClasses = {
  "text-1": "text-sm",
  "text-2": "text-base",
  "text-3": "text-lg",
  "text-4": "text-xl",
  "text-5": "text-2xl",
  "text-6": "text-3xl",
  "text-7": "text-4xl",
  "text-8": "text-5xl",
};

const shadowClasses = {
  "shadow-1": "shadow-sm",
  "shadow-2": "shadow",
  "shadow-3": "shadow-md",
  "shadow-4": "shadow-lg",
  "shadow-5": "shadow-xl",
  "shadow-6": "shadow-2xl",
  "shadow-none": "shadow-none",
};

const borderClasses = {
  "border-1": "rounded-sm",
  "border-2": "rounded",
  "border-3": "rounded-md",
  "border-4": "rounded-lg",
  "border-5": "rounded-xl",
  "border-6": "rounded-2xl",
  "border-full": "rounded-full",
};

const fontClasses = {
  "font-1": "font-sans",
  "font-2": "font-poppins",
  "font-3": "font-mono",
  "font-4": "font-serif",
  "font-5": "font-lora",
};

const Template1 = ({
  portfolio,
  theme = "theme-1",
  font = "font-1",
  section_options = {},
}) => {
  const {
    header = "variant1",
    about = "grid",
    layout = "grid",
    cardStyle = "style1",
    textSize = "text-6",    
    shadow = "shadow-5",      
    border = "border-5", 
  } = section_options;
  const themeStyle = themes[theme] || themes["theme-1"];
  
  const textSizeClass = textSizeClasses[textSize];
  const shadowClass = shadowClasses[shadow];
  const borderClass = borderClasses[border];

  const glassStyle = themeStyle.glassStyle;

  const renderHeader = () => {
    switch (header) {
      case "variant2":
        return <HeaderMinimal data={portfolio} />;
      case "variant3":
        return <HeaderImageLeft data={portfolio} />;
      default:
        return <HeaderClassic data={portfolio} />;
    }
  };

  const renderAbout = () => {
    switch (about) {
      case "card":
        return (
          <AboutCard
            data={portfolio}
            style={glassStyle}
            textSizeClass={textSizeClass}
            shadowClass={shadowClass}
            borderClass={borderClass}
          />
        );
      case "split":
        return (
          <AboutSplit
            data={portfolio}
            style={glassStyle}
            textSizeClass={textSizeClass}
            shadowClass={shadowClass}
            borderClass={borderClass}
          />
        );
      default:
        return (
          <AboutGrid
            data={portfolio}
            style={glassStyle}
            textSizeClass={textSizeClass}
            shadowClass={shadowClass}
            borderClass={borderClass}
          />
        );
    }
};

  const renderProjects = () => {

    return (
      <ProjectsSection
        layout={layout}
        cardStyle={cardStyle}
        portfolio={portfolio}
        textSizeClass={textSizeClass}
        shadowClass={shadowClass}
        borderClass={borderClass}
      />
    );
  };

  return (
    <div
      className={`portfolio ${fontClasses[font]} ${textSizeClass} ${shadowClass} ${borderClass} p-6`}
      style={{
        background: `url(${themeStyle.bgImage})`,
        color: themeStyle.text2,
      }}
    >
      {renderHeader()}
      {renderAbout()}
      {renderProjects()}
    </div>
  );
};

export default Template1;
