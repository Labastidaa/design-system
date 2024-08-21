import { Button } from "@/components/ui/button/Button";
import TechGrid from "./TechGrid";
import { Link } from "@tanstack/react-router";
import { useAnimateImage, useAnimateInView } from "@/hooks/useAnimate";

const HeroSection = () => {
  const { scope } = useAnimateInView();
  const { scope: scopeImage } = useAnimateImage();

  return (
    <div className="min-h-[calc(screen - 48px)] flex h-[700px] flex-col items-center justify-center">
      <div className="flex h-full flex-col justify-between py-[100px] md:flex-row lg:flex-row lg:gap-40 xl:flex-row xl:gap-40">
        <div
          ref={scope}
          className="flex w-full flex-col justify-center gap-24 p-24 md:w-fit lg:w-fit xl:w-fit"
        >
          <h1 id="Title" className="text-5xl opacity-0">
            Design System
          </h1>
          <div className="flex flex-col gap-[16px]">
            <p
              data-animate
              className="text-lg font-medium text-neutral-60 opacity-0"
            >
              Collaborate using
              <span className="px-4 text-foreground">
                reusable UI components, styles and tokens
              </span>
              to allow consistency across teams and products. Design System that
              aligns design and code.
            </p>
            <Button
              variant="primary"
              data-animate
              className="opacity-0"
              size="large"
            >
              <Link to="/design-system">Get started</Link>
            </Button>
          </div>
        </div>

        <div
          ref={scopeImage}
          style={{ opacity: 0 }}
          className="relative hidden min-w-[480px] lg:flex xl:flex"
        >
          {/* Overlay Black Linear Gradient  */}
          <div className="container-gradient-to-b absolute h-[500px] w-full" />
          <TechGrid />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
