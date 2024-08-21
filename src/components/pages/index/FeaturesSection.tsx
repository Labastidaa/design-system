import {
  BlendingModeIcon,
  CubeIcon,
  DimensionsIcon,
  FontSizeIcon,
  LayersIcon,
} from "@radix-ui/react-icons";

const FeaturesSection = () => {
  return (
    <div className="flex h-fit min-h-[180px] flex-col gap-24 lg:flex-row xl:flex-row">
      <div className="h-fill flex min-h-[180px] w-full gap-16 rounded-[12px] bg-neutral-12 p-16">
        <div className="flex w-[200px] flex-col">
          <div className="flex h-1/2 w-full">
            <div className="flex w-1/2 items-center justify-center rounded-tl-[12px] bg-primary-50 text-neutral-0">
              <BlendingModeIcon width={32} height={32} color="white" />
            </div>
            <div className="flex w-1/2 items-center justify-center rounded-tr-[12px] bg-secondary-50 text-neutral-0">
              <FontSizeIcon width={32} height={32} color="white" />
            </div>
          </div>
          <div className="flex h-1/2 w-full">
            <div className="flex w-1/2 items-center justify-center rounded-bl-[12px] bg-secondary-70 text-neutral-0">
              <DimensionsIcon width={32} height={32} color="white" />
            </div>
            <div className="flex w-1/2 items-center justify-center rounded-br-[12px] bg-neutral-84 text-neutral-8">
              <LayersIcon width={32} height={32} />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-8">
          <h4>Foundations</h4>

          <div className="font-base text-muted">
            Building block styles essential for consistent design, user
            interfaces and products. Guidelines for color, typography, spacing,
            elevations and icons in design and development.
          </div>
        </div>
      </div>

      <div className="h-fill flex min-h-[180px] w-full gap-16 rounded-[12px] bg-neutral-12 p-16">
        <div className="flex w-[200px] items-center justify-center rounded-[12px] bg-neutral-70">
          <CubeIcon width={40} height={40} color="black" />
        </div>
        <div className="flex w-full flex-col gap-8">
          <h4>UI Component Library</h4>

          <div className="font-base text-muted">
            Reusable and prebuilt components to create composed user interfaces,
            layouts and pages. Built using design tokens for component states
            and variations.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
