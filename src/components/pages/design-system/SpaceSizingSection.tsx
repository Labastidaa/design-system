const SpaceSizingSection = () => {
  return (
    <div className="flex w-full flex-col gap-24 rounded-[20px] border border-border_color p-40">
      <div className="flex w-full flex-col gap-[16px]">
        <h3 className="text-2xl font-semibold">Spacing / Sizing scale</h3>
        <p className="text-base font-normal text-muted">
          Values used in different copes, typography, spacing and sizing of
          elements, border radius, borders and more.
        </p>
      </div>
      <div className="flex flex-col gap-16">
        <h4>4pt increments</h4>
        <p className="font-medium">
          4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72,
          76, 80, 84, 88, 92, 96, 100 + ...
        </p>
      </div>
    </div>
  );
};

export default SpaceSizingSection;
