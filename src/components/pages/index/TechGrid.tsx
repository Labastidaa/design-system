const TechGrid = () => {
  const components = [
    { bgColor: "#3178C6", label: "TS", txtColor: "white" },
    { bgColor: "#F7DF1E", label: "JS", txtColor: "black" },
    { bgColor: "#00ADD8", imgSrc: "/go.svg" },
    { bgColor: "bg-neutral-12", imgSrc: "/react.svg" },
    { bgColor: "bg-neutral-100", imgSrc: "/storybook.svg" },
    { bgColor: "bg-neutral-12", imgSrc: "/Figma-Icon.svg" },
    { bgColor: "bg-neutral-100", imgSrc: "/github.svg" },
    { bgColor: "bg-neutral-100", imgSrc: "/docker.svg" },
    { bgColor: "#06B6D4", imgSrc: "/tailwindcss.svg" },
    { bgColor: "#C21325", imgSrc: "/jest.svg" },
    { bgColor: "bg-neutral-100", imgSrc: "/testinglibrary.svg" },
    { bgColor: "bg-neutral-100", imgSrc: "/msw.svg" },
    { bgColor: "bg-neutral-12", imgSrc: "/vitejs.svg" },
    { bgColor: "bg-neutral-100", imgSrc: "/eslint.svg" },
    { bgColor: "bg-neutral-100", imgSrc: "/css3.svg" },
    { bgColor: "bg-neutral-100", imgSrc: "/html5.svg" },
  ];

  return (
    <div className="grid min-w-[480px] grid-cols-4 justify-center gap-24">
      {components.map((component, index) => (
        <div
          key={index}
          className={`flex h-100 items-center justify-center rounded-[20px] ${component.bgColor.startsWith("#") ? "" : component.bgColor}`}
          style={{ backgroundColor: component.bgColor }}
        >
          {component.imgSrc ? (
            <div className="flex h-72 w-72 justify-center">
              <img src={component.imgSrc} alt={`Component ${index + 1}`} />
            </div>
          ) : (
            <div className="grid-template grid-rows-auto grid h-full items-center justify-center rounded-[20px] text-3xl font-bold text-white">
              <div
                style={{ color: component.txtColor }}
                className="col-start-1 flex h-full items-end justify-end p-12"
              >
                {component.label}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TechGrid;
