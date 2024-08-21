import CryptoCardSkeleton from "../crypto-card/CryptoCardSkeleton";

const CryptoScrollerSkeleton = () => {
  return (
    <div className="flex w-full p-4" role="region">
      <div
        className="scroller"
        data-speed="slow"
        data-direction={"right"}
        data-testid="skeleton-scroller"
        role="list"
        aria-label="Scrolling list of cards loading"
      >
        <div
          className="scroller__inner"
          data-testid="skeleton-scroller-inner"
          role="presentation"
        >
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              data-testid={`skeleton-crypto-card-wrapper-${index}`}
              role="listitem"
            >
              <CryptoCardSkeleton />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoScrollerSkeleton;
