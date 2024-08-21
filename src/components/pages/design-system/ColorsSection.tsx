import Colors from "@/components/Colors/Colors";

const ColorsSection = () => {
  return (
    <div className="flex w-full flex-col gap-16">
      <div className="rounded-[20px] border border-border_color p-40">
        <div className="flex w-full flex-col gap-[16px]">
          <h3 className="text-2xl font-semibold">Colors</h3>
          <p className="text-base font-normal text-muted">
            Tonal pallete set of harmonious values which are obtained from a
            base value and increasing according to the same ratio. Legible and
            harmonious text.
          </p>
        </div>
        <Colors />
      </div>
    </div>
  );
};

export default ColorsSection;
