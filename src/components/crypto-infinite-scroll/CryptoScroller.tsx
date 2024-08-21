import CryptoCard from "@/components/crypto-card/CryptoCard";
import { useGetCrypto } from "@/hooks/useGetCrypto";
import { useEffect, useState } from "react";

const CryptoScroller = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Check if the user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!prefersReducedMotion) {
      setAnimated(true);
    }
  }, []);

  const { data } = useGetCrypto();

  const originalData = [...data.data];
  const duplicatedData = [...data.data, ...data.data];

  return (
    <div className="flex w-full flex-col p-4" role="region">
      <div
        className={`scroller ${animated ? "animated" : ""}`}
        data-speed="slow"
        data-direction={"right"}
        data-testid="scroller"
        role="list"
        aria-label="Scrolling list of cryptocurrencies"
      >
        <div
          className="scroller__inner"
          data-testid="scroller-inner"
          role="presentation"
        >
          {duplicatedData.map((crypto, index) => (
            <div
              key={`${crypto.id}-${index}`}
              data-testid={`crypto-card-wrapper-${index}`}
              role="listitem"
              aria-hidden={index >= originalData.length ? true : false}
            >
              <CryptoCard {...crypto} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoScroller;
