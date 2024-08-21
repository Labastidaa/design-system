import {
  BlendingModeIcon,
  DimensionsIcon,
  FontSizeIcon,
  LayersIcon,
} from "@radix-ui/react-icons";

const FoundationsSection = () => {
  return (
    <div className="flex w-full flex-col gap-24">
      <h3>Foundations</h3>
      <ul className="flex flex-col gap-8 md:flex-row lg:flex-row xl:flex-row">
        <li className="flex h-120 w-full flex-col items-center justify-center gap-8 rounded-[12px] border font-semibold text-muted">
          <BlendingModeIcon width={32} height={32} color="white" />
          Colors
        </li>
        <li className="flex h-120 w-full flex-col items-center justify-center gap-8 rounded-[12px] border font-semibold text-muted">
          <DimensionsIcon width={32} height={32} color="white" />
          Spacing/Sizing
        </li>
        <li className="flex h-120 w-full flex-col items-center justify-center gap-8 rounded-[12px] border font-semibold text-muted">
          <FontSizeIcon width={32} height={32} color="white" />
          Typography
        </li>
        <li className="flex h-120 w-full flex-col items-center justify-center gap-8 rounded-[12px] border font-semibold text-muted">
          <LayersIcon width={32} height={32} color="white" />
          Elevation
        </li>
      </ul>
    </div>
  );
};

export default FoundationsSection;
