const ElevationSection = () => {
  return (
    <div className="w-full pb-52">
      <div className="flex flex-col gap-24 rounded-[20px] border border-border_color p-40">
        <h3>Elevation</h3>
        <p>
          Elevations consist of layered surfaces using Z-axis. They can guide
          focus or indicate a different UI element within the page.
        </p>
        <div className="flex flex-col gap-8 rounded-md">
          <h4>Dark</h4>
          <div className="flex overflow-clip rounded-md border">
            <div className="flex w-full justify-center border bg-neutral-0 p-16">
              lowest
            </div>
            <div className="flex w-full justify-center border bg-neutral-8 p-16">
              default 0
            </div>
            <div className="flex w-full justify-center border bg-neutral-12 p-16">
              raised +1
            </div>
            <div className="flex w-full justify-center border bg-neutral-16 p-16">
              raised +2
            </div>
            <div className="flex w-full justify-center border bg-neutral-20 p-16">
              raised +3
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 rounded-md">
          <h4>Light</h4>
          <div className="flex overflow-clip rounded-md border text-black">
            <div className="flex w-full justify-center border bg-neutral-100 p-16">
              lowest
            </div>
            <div className="flex w-full justify-center border bg-neutral-92 p-16">
              default 0
            </div>
            <div className="flex w-full justify-center border bg-neutral-88 p-16">
              raised +1
            </div>
            <div className="flex w-full justify-center border bg-neutral-84 p-16">
              raised +2
            </div>
            <div className="flex w-full justify-center border bg-neutral-70 p-16">
              raised +3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElevationSection;
