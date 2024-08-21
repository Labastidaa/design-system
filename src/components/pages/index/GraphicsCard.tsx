import React from "react";

interface GraphicsCardProps {
  children: React.ReactNode;
}

const GraphicsCard: React.FC<GraphicsCardProps> = ({ children }) => {
  return (
    <div className="absolute inset-0 flex w-full items-center justify-center rounded-[20px] border border-primary-50 bg-gradient-to-br from-[#ffffff] to-[#00ADD8] p-40">
      {children}
    </div>
  );
};

export default GraphicsCard;
