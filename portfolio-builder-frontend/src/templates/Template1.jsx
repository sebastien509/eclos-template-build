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
  },
};

const fontClasses = {
  "font-1": "font-sans",
  "font-2": "font-poppins",
  "font-3": "font-mono",
  "font-4": "font-serif",
  "font-5": "font-lora",
};

const cardStyleClasses = {
  style1: "bg-white/40 backdrop-blur-sm border border-white/40",
  style2: "bg-gray-900/60 backdrop-blur-lg border border-gray-700",
  style3: "bg-white/20 backdrop-blur-xl border border-white/20",
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
    variant = "variant1",
    style = "",
    border = "rounded-lg",
    shadow = "shadow-md",
    textSize = "text-base",
  } = section_options;
  const themeStyle = themes[theme] || themes["theme-1"];

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
        return <AboutCard data={portfolio} style={glassStyle} />;
      case "split":
        return <AboutSplit data={portfolio} style={glassStyle} />;
      default:
        return <AboutGrid data={portfolio} style={glassStyle} />;
    }
  };

  let resolvedStyle = cardStyleClasses.style1;
  switch (style) {
    case "style1":
      resolvedStyle = cardStyleClasses.style1;
      break;
    case "style2":
      resolvedStyle = cardStyleClasses.style2;
      break;
    case "style3":
      resolvedStyle = cardStyleClasses.style3;
      break;
    case "":
      resolvedStyle = cardStyleClasses[cardStyle] || cardStyleClasses.style1;
      break;
    default:
      resolvedStyle = style;
  }

  const renderProjects = () => {
    return (
      <ProjectsSection
        layout={layout}
        variant={variant}
        style={resolvedStyle}
        portfolio={portfolio}
        border={border}
        shadow={shadow}
        textSize={textSize}
      />
    );
  };

  return (
    <div
      className={`portfolio ${fontClasses[font]} p-6`}
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
