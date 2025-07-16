import React, { useState } from "react";
import Template1 from "../templates/Template1";
import MockPortfolioData, { mockUser } from "../mock/MockPortfolioData";

const PortfolioPreview = () => {
  const [theme, setTheme] = useState("theme-1");
  const [font, setFont] = useState("font-1");
  const [sectionOptions, setSectionOptions] = useState({
    header: "variant1",
    about: "card",
    layout: "grid",
    variant: "variant1",
    style: "",
    border: "rounded-lg",
    shadow: "shadow-md",
    textSize: "text-base",
  });

  // You can use mockUser if you want to display user info somewhere
  // Example: mockUser.name, mockUser.email, mockUser.sector

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 justify-center items-center flex-wrap">
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
          value={sectionOptions.variant}
          onChange={(e) =>
            setSectionOptions({ ...sectionOptions, variant: e.target.value })
          }
        >
          <option value="variant1">Project Card Variant 1</option>
          <option value="variant2">Project Card Variant 2</option>
          <option value="variant3">Project Card Variant 3</option>
        </select>

        <select
          value={sectionOptions.style}
          onChange={(e) =>
            setSectionOptions({ ...sectionOptions, style: e.target.value })
          }
        >
          <option value="">Default Style</option>
          <option value="style1">Style 1</option>
          <option value="style2">Style 2 (Simple White)</option>
          <option value="style3">Style 3</option>
        </select>

        <select
          value={sectionOptions.border}
          onChange={(e) =>
            setSectionOptions({ ...sectionOptions, border: e.target.value })
          }
        >
          <option value="rounded-lg">Rounded</option>
          <option value="rounded-none">Square</option>
        </select>

        <select
          value={sectionOptions.shadow}
          onChange={(e) =>
            setSectionOptions({ ...sectionOptions, shadow: e.target.value })
          }
        >
          <option value="shadow-sm">Small Shadow</option>
          <option value="shadow-md">Medium Shadow</option>
          <option value="shadow-lg">Large Shadow</option>
        </select>

        <select
          value={sectionOptions.textSize}
          onChange={(e) =>
            setSectionOptions({ ...sectionOptions, textSize: e.target.value })
          }
        >
          <option value="text-sm">Small Text</option>
          <option value="text-base">Medium Text</option>
          <option value="text-lg">Large Text</option>
        </select>
      </div>

      {/* Example usage of mockUser (optional): */}
      {/* <div className="text-center text-gray-500 text-sm">{mockUser.name} &lt;{mockUser.email}&gt; - {mockUser.sector}</div> */}

      <Template1
        portfolio={MockPortfolioData}
        theme={theme}
        font={font}
        section_options={sectionOptions}
      />
    </div>
  );
};

export default PortfolioPreview;
