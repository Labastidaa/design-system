import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button/Button";
import { WindowURL } from "@/components/ui/window/Window";
import { useAnimateImage, useAnimateInView } from "@/hooks/useAnimate";

const StorybookSection = () => {
  const image = <img src="/storybook.webp" alt="" />;

  // const { scope: scopeTitle } = useAnimateTitle();
  const { scope } = useAnimateInView();
  const { scope: scopeImage } = useAnimateImage();

  return (
    <div className="flex flex-col py-100 xl:flex-row">
      <div
        ref={scope}
        className="flex flex-col items-start justify-center gap-24 py-60 xl:w-1/2 xl:pr-60"
      >
        <div
          id="Title"
          style={{ opacity: 0 }}
          className="flex items-center gap-16"
        >
          <div className="h-fit w-fit">
            <img src="/storybook.svg" alt="" className="h-36 w-36" />
          </div>

          <h3 className="text text-3xl font-semibold">Storybook</h3>
        </div>

        <div className="flex flex-col gap-8">
          <p
            data-animate
            style={{ opacity: 0 }}
            className="text-base font-normal text-neutral-70"
          >
            Frontend Development, test and document without interference from
            app business logic, API or context.
          </p>
          <p
            data-animate
            style={{ opacity: 0 }}
            className="text-base font-normal text-neutral-70"
          >
            Build UI Components and pages in isolation rendering components in a
            workshop providing an iframe to render components in isolation.
          </p>
        </div>

        <Button
          data-animate
          style={{ opacity: 0 }}
          variant="outline"
          className=""
        >
          <Link to="/component-library">Access Storybook</Link>
        </Button>
      </div>

      <div
        ref={scopeImage}
        style={{ opacity: 0 }}
        className="image gradient-225 aspect-4/3 overflow-clip rounded-[24px] pl-40 pt-40"
      >
        <WindowURL children={image} />
      </div>
    </div>
  );
};

export default StorybookSection;
