import HeaderClassic from "./layoutParts/headers/HeaderClassic";
import HeaderMinimal from "./layoutParts/headers/HeaderMinimal";
import HeaderImageLeft from "./layoutParts/headers/HeaderImageLeft";

import AboutGrid from "./layoutParts/abouts/AboutGrid";
import AboutCard from "./layoutParts/abouts/AboutCard";
import AboutSplit from "./layoutParts/abouts/AboutSplit";

import ProjectsSection from "../components/ProjectsSection";

const themes = {
  theme1: {
    primary: "#1e3c72",
    secondary: "#2a5298",
    text1: "#ffffff",
    text2: "#ffffff",
    backgroundType: "gradient",
    backgroundValue: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
  },
  theme2: {
    primary: "#ff512f",
    secondary: "#dd2476",
    text1: "#ffffff",
    text2: "#ffffff",
    backgroundType: "gradient",
    backgroundValue: "linear-gradient(135deg, #ff512f 0%, #dd2476 100%)",
  },
  theme3: {
    primary: "#11998e",
    secondary: "#38ef7d",
    text1: "#ffffff",
    text2: "#ffffff",
    backgroundType: "gradient",
    backgroundValue: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
  },
  theme4: {
    primary: "#ffffff",
    secondary: "#1f2937",
    text1: "#ffffff",
    text2: "#ffffff",
    backgroundType: "image",
    backgroundValue:
      "https://images.unsplash.com/vector-1743791782324-d310c20f41e3?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  theme5: {
    primary: "#2a2a72",
    secondary: "#009ffd",
    text1: "#ffffff",
    text2: "#ffffff",
    backgroundType: "image",
    backgroundValue:
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
  theme = "theme1",
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
  const themeStyle = themes[theme] || themes.theme1;

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

  let backgroundStyle = {};
  if (themeStyle.backgroundType === "gradient") {
    backgroundStyle.background = themeStyle.backgroundValue;
  } else if (themeStyle.backgroundType === "image") {
    backgroundStyle.backgroundImage = `url(${themeStyle.backgroundValue})`;
    backgroundStyle.backgroundPosition = "center";
  }
  backgroundStyle.color = themeStyle.text2;

  return (
    <div
      className={`portfolio ${fontClasses[font]} p-6`}
      style={backgroundStyle}
    >
      {renderHeader()}
      {renderAbout()}
      {renderProjects()}
    </div>
  );
};

export default Template1;
