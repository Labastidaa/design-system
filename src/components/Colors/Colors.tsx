import ColorSection from "./ColorSection";

const Colors = () => {
  return (
    <div className="flex w-full gap-8 overflow-x-scroll py-24">
      <div className="flex w-full flex-col items-center">
        <h3 className="text-neutral-80 text-xl font-medium">Primary</h3>
        <ColorSection
          colors={[
            {
              title: "100",
              hex: "#E6EFF5",
              text: "black",
            },
            {
              title: "90",
              hex: "#BCCBE1",
              text: "black",
            },
            {
              title: "80",
              hex: "#8AB2D2",
              text: "black",
            },
            {
              title: "70",
              hex: "#548EBE",
              text: "black",
            },
            {
              title: "60",
              hex: "#3379B1",
              text: "white",
            },
            {
              title: "50",
              hex: "#00579E",
              text: "white",
            },
            {
              title: "40",
              hex: "#004F90",
              text: "white",
            },
            {
              title: "30",
              hex: "#003E70",
              text: "white",
            },
            {
              title: "20",
              hex: "#003057",
              text: "white",
            },
            {
              title: "10",
              hex: "#002442",
              text: "white",
            },
            {
              title: "05",
              hex: "#001323",
              text: "white",
            },
            {
              title: "03",
              hex: "#000910",
              text: "white",
            },
          ]}
        />
      </div>
      <div className="flex w-full flex-col items-center">
        <h3 className="text-neutral-80 text-xl font-medium">Secondary</h3>
        <ColorSection
          colors={[
            {
              title: "100",
              hex: "#EBEEF0",
              text: "black",
            },
            {
              title: "90",
              hex: "#C1C9D0",
              text: "black",
            },
            {
              title: "80",
              hex: "#A3AFB9",
              text: "black",
            },
            {
              title: "70",
              hex: "#798A99",
              text: "black",
            },
            {
              title: "60",
              hex: "#5F7485",
              text: "white",
            },
            {
              title: "50",
              hex: "#375167",
              text: "white",
            },
            {
              title: "40",
              hex: "#324A5E",
              text: "white",
            },
            {
              title: "30",
              hex: "#273A49",
              text: "white",
            },
            {
              title: "20",
              hex: "#1E2D39",
              text: "white",
            },
            {
              title: "10",
              hex: "#17222B",
              text: "white",
            },
            {
              title: "05",
              hex: "#090d11",
              text: "white",
            },
          ]}
        />
      </div>
      <div className="flex w-full flex-col items-center">
        <h3 className="text-neutral-80 text-xl font-medium">Red</h3>
        <ColorSection
          colors={[
            {
              title: "100",
              hex: "#F5E6E6",
              text: "black",
            },
            {
              title: "90",
              hex: "#F1B0B0",
              text: "black",
            },
            {
              title: "80",
              hex: "#D28A8A",
              text: "black",
            },
            {
              title: "70",
              hex: "#BE5454",
              text: "white",
            },
            {
              title: "60",
              hex: "#B13333",
              text: "white",
            },
            {
              title: "50",
              hex: "#9E0000",
              text: "white",
            },
            {
              title: "40",
              hex: "#900000",
              text: "white",
            },
            {
              title: "30",
              hex: "#700000",
              text: "white",
            },
            {
              title: "20",
              hex: "#570000",
              text: "white",
            },
            {
              title: "10",
              hex: "#420000",
              text: "white",
            },
            {
              title: "05",
              hex: "#1a0000",
              text: "white",
            },
          ]}
        />
      </div>
      <div className="flex w-full flex-col items-center">
        <h3 className="text-neutral-80 text-xl font-medium">Yellow</h3>
        <ColorSection
          colors={[
            {
              title: "100",
              hex: "#F7F3E6",
              text: "black",
            },
            {
              title: "90",
              hex: "#E7D9B0",
              text: "black",
            },
            {
              title: "80",
              hex: "#DCC68A",
              text: "black",
            },
            {
              title: "70",
              hex: "#CCAC54",
              text: "black",
            },
            {
              title: "60",
              hex: "#C29C33",
              text: "black",
            },
            {
              title: "50",
              hex: "#B38300",
              text: "black",
            },
            {
              title: "40",
              hex: "#A37700",
              text: "white",
            },
            {
              title: "30",
              hex: "#7F5D00",
              text: "white",
            },
            {
              title: "20",
              hex: "#624800",
              text: "white",
            },
            {
              title: "10",
              hex: "#4B3700",
              text: "white",
            },
            {
              title: "05",
              hex: "#1a1300",
              text: "white",
            },
          ]}
        />
      </div>
      <div className="flex w-full flex-col items-center">
        <h3 className="text-neutral-80 text-xl font-medium">Green</h3>
        <ColorSection
          colors={[
            {
              title: "100",
              hex: "#EAF5E6",
              text: "black",
            },
            {
              title: "90",
              hex: "#BDE1B0",
              text: "black",
            },
            {
              title: "80",
              hex: "#9DD28A",
              text: "black",
            },
            {
              title: "70",
              hex: "#70BE54",
              text: "black",
            },
            {
              title: "60",
              hex: "#55B133",
              text: "black",
            },
            {
              title: "50",
              hex: "#2A9E00",
              text: "black",
            },
            {
              title: "40",
              hex: "#269000",
              text: "white",
            },
            {
              title: "30",
              hex: "#1E7000",
              text: "white",
            },
            {
              title: "20",
              hex: "#175700",
              text: "white",
            },
            {
              title: "10",
              hex: "#124200",
              text: "white",
            },
            {
              title: "05",
              hex: "#071a00",
              text: "white",
            },
          ]}
        />
      </div>
      <div className="flex w-full flex-col items-center">
        <h3 className="text-xl font-medium">Neutro</h3>
        <ColorSection
          colors={[
            {
              title: "100",
              hex: "#FFFFFF",
              text: "black",
            },
            { title: "96", hex: "#F5F5F5", text: "black" },
            { title: "92", hex: "#EBEBEB", text: "black" },
            { title: "88", hex: "#E0E0E0", text: "black" },
            { title: "84", hex: "#D6D6D6", text: "black" },
            { title: "70", hex: "#C2C2C2", text: "black" },
            { title: "60", hex: "#A6A6A6", text: "white" },
            { title: "50", hex: "#949494", text: "white" },
            { title: "40", hex: "#666666", text: "white" },
            { title: "30", hex: "#4D4D4D", text: "white" },
            { title: "24", hex: "#3d3d3d", text: "white" },
            { title: "20", hex: "#333333", text: "white" },
            { title: "16", hex: "#292929", text: "white" },
            { title: "12", hex: "#1F1F1F", text: "white" },
            { title: "00", hex: "#000000", text: "white" },
          ]}
        />
      </div>
    </div>
  );
};

export default Colors;
