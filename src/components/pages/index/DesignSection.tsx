import { useAnimateImage, useAnimateInView } from "@/hooks/useAnimate";

const DesignSection = () => {
  const image = "/Figma_design.webp";

  const { scope: scopeImage } = useAnimateImage();
  const { scope } = useAnimateInView();

  return (
    <div className="flex flex-col gap-24 py-100">
      <div
        ref={scope}
        className="flex w-full flex-col items-start justify-start gap-8"
      >
        <h3
          id="Title"
          style={{ opacity: 0 }}
          className="text-3xl font-semibold"
        >
          UI/UX Design
        </h3>
      </div>

      <div
        ref={scopeImage}
        style={{ opacity: 0 }}
        className="gradient aspect-video overflow-clip rounded-[24px]"
      >
        <img src={image} />
      </div>

      <div className="flex flex-col items-start">
        <p className="text-lg font-medium">
          Functional, semantic, minimalist and accesible design.
          <span className="pl-4 text-neutral-40">
            Create a structure to standarize styles, variables and components
          </span>
        </p>
      </div>
    </div>
  );
};

export default DesignSection;
