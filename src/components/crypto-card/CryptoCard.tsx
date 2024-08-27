import type { Crypto } from "@/types";
import bitcoinSVG from "/bitcoin.svg";
import ethereumSVG from "/ethereum.svg";
import tetherSVG from "/tether.svg";
import bnbSVG from "/bnb.svg";
import solanaSVG from "/solana.svg";
import usdcSVG from "/usdc.svg";
import xrpSVG from "/xrp.svg";
import toncoinSVG from "/toncoin.svg";
import troncoinSVG from "/tron-trx.svg";
import dogecoinSVG from "/dogecoin.svg";
import cardanoSVG from "/cardano.svg";
import USDFormatter from "../../lib/USDFormatter";
import DateFormatter from "../../lib/DateFormatter";
import {
  TriangleDownIcon,
  TriangleUpIcon,
  UpdateIcon,
} from "@radix-ui/react-icons";

// A mapping from symbol to the corresponding SVG component
const cryptoIcons: { [key: string]: string } = {
  BTC: bitcoinSVG,
  ETH: ethereumSVG,
  USDT: tetherSVG,
  BNB: bnbSVG,
  SOL: solanaSVG,
  USDC: usdcSVG,
  XRP: xrpSVG,
  TON: toncoinSVG,
  TRX: troncoinSVG,
  DOGE: dogecoinSVG,
  ADA: cardanoSVG,
};

// Function to get the icon URL based on the symbol
const getIconUrl = (symbol: string): string => {
  return cryptoIcons[symbol] || "path/to/default/icon.svg";
};

const CryptoCard: React.FC<Crypto> = (crypto) => {
  const iconUrl = getIconUrl(crypto.symbol);
  const percent_change_1h = crypto.quote.USD.percent_change_1h;

  return (
    <div
      role="article"
      data-testid={`crypto-card-${crypto.symbol}`}
      aria-label={`${crypto.name} (${crypto.symbol})`}
      className="flex h-[296px] w-[380px] flex-col gap-[12px] rounded-lg border border-border_color bg-transparent p-24 shadow-lg"
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-8">
          <img
            src={iconUrl}
            alt={`${crypto.name} logo`}
            className="h-32 w-32"
            data-testid={`${crypto.symbol}-logo`}
          />
          <div className="flex items-baseline gap-8">
            <h2 className="text-xl font-semibold">{crypto.name}</h2>
            <p className="text-sml font-bold text-muted">{crypto.symbol}</p>
          </div>
        </div>

        <div className="flex w-full justify-between">
          <div className="flex w-full flex-col">
            <div className="flex justify-between py-[24px]">
              <span className="text-3xl font-bold">
                <USDFormatter value={crypto.quote.USD.price} />
              </span>
              <div className="flex items-center text-base">
                {percent_change_1h < 0 ? (
                  <TriangleDownIcon
                    color="red"
                    data-testid="triangle-down-icon"
                  />
                ) : (
                  <TriangleUpIcon
                    color="#3ef05c"
                    data-testid="triangle-up-icon"
                  />
                )}
                <span
                  className={`${percent_change_1h < 0 ? "text-red-500" : "text-green-500"} `}
                >
                  {Math.abs(percent_change_1h).toFixed(2)}% (1h)
                </span>
              </div>
            </div>

            <div className="flex w-fit items-center gap-4 rounded-[10px] bg-neutral-12 px-[8px] py-[4px] text-neutral-50">
              <UpdateIcon />
              <span>
                Last update <DateFormatter dateStr={crypto.last_updated} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex w-full justify-between">
          <div className="">
            <p className="text-muted">Market Cap: </p>
          </div>
          <div className="flex items-center gap-8 font-bold">
            <span className="mr-2 rounded-sm bg-neutral-12 px-[0.3rem] py-[0.2rem] text-[0.7rem] font-normal text-foreground">
              #{crypto.cmc_rank}
            </span>
            <USDFormatter value={crypto.quote.USD.market_cap} />
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="">
            <p className="text-muted">Circulating supply: </p>
          </div>
          <div className="font-bold">
            <USDFormatter value={crypto.circulating_supply} />
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="">
            <p className="text-muted">Max Supply: </p>
          </div>
          <div className="font-bold">
            <USDFormatter value={crypto.max_supply} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
