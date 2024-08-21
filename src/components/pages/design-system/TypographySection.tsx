import Typography from "./Typography";

const TypographySection = () => {
  return (
    <div className="flex w-full flex-col gap-12 rounded-[20px] border border-border_color p-40">
      <div className="flex flex-col gap-12">
        <h3 className="text-2xl font-semibold">Typography</h3>
        <p className="text-base font-normal text-muted">
          Modular scale set of harmonious values which are obtained from a base
          value and increasing according to the same ratio. Legible and
          harmonious text.
        </p>
      </div>
      <Typography />
    </div>
  );
};

export default TypographySection;
