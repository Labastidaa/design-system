import { Button } from "@/components/ui/button/Button";

const HeroDsSection = () => {
  return (
    <div className="flex flex-col gap-24 py-200">
      <div className="flex items-center gap-24">
        <img src="/Figma-Icon.svg" alt="" className="h-52 w-52" />
        <h1 className="">Design system </h1>
      </div>
      <div className="flex flex-col gap-16">
        <p className="text-lg font-medium text-neutral-60">
          A system that allows consistency and innovation. Optimize product
          development processes with a Design system that adapts and scales with
          your products for different use cases, themes, languages and more.
        </p>

        <Button variant="primary" size="large">
          <a
            target="_blank"
            href="https://www.figma.com/design/BH9MEJLxx06oaENGpqkfwK/Design-System?node-id=0-1&t=c0snvjdh0EpwdAqk-1"
          >
            Access Figma
          </a>
        </Button>
      </div>
    </div>
  );
};

export default HeroDsSection;
