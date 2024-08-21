type WindowProps = {
  children: React.ReactNode;
};

const Window: React.FC<WindowProps> = ({ children }) => {
  return (
    <div className="flex w-full flex-col drop-shadow-xl">
      <div className="flex h-32 w-full rounded-t-[12px] bg-neutral-12">
        <div className="flex items-center justify-start gap-4 p-[12px]">
          <div className="h-8 w-8 rounded-full bg-[#EC6A5E]" />
          <div className="h-8 w-8 rounded-full bg-[#F4BF4F]" />
          <div className="h-8 w-8 rounded-full bg-[#61C554]" />
        </div>
      </div>
      {children}
    </div>
  );
};

export const WindowURL: React.FC<WindowProps> = ({ children }) => {
  return (
    <div className="flex flex-col" id="window">
      <div className="flex h-32 w-full rounded-t-[12px] bg-neutral-12">
        <div className="flex items-center justify-start gap-4 p-[12px]">
          <div className="h-8 w-8 rounded-full bg-[#EC6A5E]" />
          <div className="h-8 w-8 rounded-full bg-[#F4BF4F]" />
          <div className="h-8 w-8 rounded-full bg-[#61C554]" />
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex h-24 items-center rounded-[5px] bg-neutral-16 px-32 text-sm text-muted">
            http://localhost:3001
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Window;
