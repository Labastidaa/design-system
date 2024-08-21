import React from "react";

interface USDFormatterProps {
  value: number;
}

const USDFormatter: React.FC<USDFormatterProps> = ({ value }) => {
  const formattedValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

  return <>{formattedValue}</>;
};

export default USDFormatter;
