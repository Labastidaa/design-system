import PageContainerWrapper from "@/layouts/PageContainerWrapper";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button/Button";
import HeroDsSection from "@/components/pages/design-system/HeroDsSection";
import FoundationsSection from "@/components/pages/design-system/FoundationsSection";
import ColorsSection from "@/components/pages/design-system/ColorsSection";
import SpaceSizingSection from "@/components/pages/design-system/SpaceSizingSection";
import TypographySection from "@/components/pages/design-system/TypographySection";
import ElevationSection from "@/components/pages/design-system/ElevationSection";

export const Route = createFileRoute("/design-system")({
  component: designSystem,
});

function designSystem() {
  return (
    <PageContainerWrapper>
      <div className="bg-background">
        <HeroDsSection />

        <div className="flex h-fit w-full flex-col items-start gap-52">
          <FoundationsSection />
          <ColorsSection />
          <SpaceSizingSection />
          <TypographySection />
          <ElevationSection />
        </div>

        <div className="flex h-[100px] justify-end p-8">
          <Button
            variant="ghost"
            className="font-semibold hover:text-primary-80"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Go back up
          </Button>
        </div>
      </div>
    </PageContainerWrapper>
  );
}
