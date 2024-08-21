import React from "react";

const CryptoCardSkeleton: React.FC = () => {
  return (
    <div className="flex h-[296px] w-[380px] animate-pulse flex-col gap-[12px] rounded-[20px] border-muted/50 bg-neutral-12 p-24 shadow-lg">
      <div className="flex flex-col">
        <div className="flex w-full items-center gap-8">
          <div className="flex h-32 w-32 flex-shrink-0 rounded-full bg-neutral-20" />
          <div className="h-28 w-full rounded bg-neutral-20" />
        </div>

        <div className="mt-6 flex w-full justify-between">
          <div className="flex w-full flex-col">
            <div className="flex py-[24px]">
              <div className="h-48 w-full rounded bg-neutral-20" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex h-full flex-col items-center justify-center gap-4">
        <div className="flex w-full flex-col gap-4">
          <div className="h-24 w-full rounded bg-neutral-20"></div>
          <div className="h-24 w-full rounded bg-neutral-20"></div>
          <div className="h-24 w-full rounded bg-neutral-20"></div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCardSkeleton;
