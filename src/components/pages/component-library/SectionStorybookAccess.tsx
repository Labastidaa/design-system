import { Button } from "@/components/ui/button/Button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const SectionStorybookAccess = () => {
  return (
    <div className="flex w-full flex-col-reverse gap-24 py-100 md:flex-row lg:flex-row xl:flex-row">
      <div className="flex w-full flex-col items-start gap-24 md:items-center lg:items-start xl:items-start">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl">UI Component Library</h1>
          <p className="text-lg font-medium text-neutral-60">
            Access Storybook workshop, optimize product development using
            components for different use cases, variants and create your UI
            patterns.
          </p>
        </div>

        <ul className="flex w-full flex-col gap-8 rounded-md border p-24">
          <li className="flex flex-col gap-12">
            1. Clone Design System Github Repository
            <div className="pl-16">
              <Button variant="white">
                <a
                  href="https://github.com/Labastidaa/design_system"
                  className="flex gap-8"
                >
                  <GitHubLogoIcon width={24} height={24} color="black" />
                  Design System
                </a>
              </Button>
            </div>
          </li>
          <li>2. Open the project in your code editor /ds-ui-lib </li>
          <li className="flex flex-col gap-12">
            <p>
              3. Open the terminal and run command to start a local development
              server at <span className="font-medium">localhost:6006</span>
            </p>
            <div className="pl-16">
              <div className="flex min-h-[40px] w-fit items-center rounded-[8px] border bg-neutral-92 px-24 py-4 text-base font-medium text-neutral-0">
                npm run storybook
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionStorybookAccess;
