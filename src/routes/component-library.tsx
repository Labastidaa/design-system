import { createFileRoute } from "@tanstack/react-router";
import PageContainerWrapper from "@/layouts/PageContainerWrapper";
import SectionStorybookAccess from "@/components/pages/component-library/SectionStorybookAccess";
import SectionComponents from "@/components/pages/component-library/SectionComponents";

export const Route = createFileRoute("/component-library")({
  component: componentLibrary,
});

function componentLibrary() {
  return (
    <PageContainerWrapper>
      <div className="flex h-fit w-full flex-col">
        <SectionStorybookAccess />
        <SectionComponents />
      </div>
    </PageContainerWrapper>
  );
}
