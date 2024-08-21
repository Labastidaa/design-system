import type { Meta, StoryObj } from "@storybook/react";
import CryptoCard from "./CryptoCard";
import { http, delay } from "msw";
import CryptoCardSkeleton from "./CryptoCardSkeleton";

const meta = {
  title: "Components/CryptoCard",
  component: CryptoCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    slug: "bitcoin",
    cmc_rank: 1,
    num_market_pairs: 11005,
    circulating_supply: 19683037,
    total_supply: 19683037,
    max_supply: 21000000,
    infinite_supply: false,
    last_updated: "2024-04-15T06:55:00.000Z",
    date_added: "2010-07-13T00:00:00.000Z",
    tags: ["mineable", "pow"],
    platform: null,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    quote: {
      USD: {
        price: 66393.58810196306,
        volume_24h: 43132551003.018776,
        volume_change_24h: -27.0537,
        percent_change_1h: 1.41417657,
        percent_change_24h: 2.6936672,
        percent_change_7d: -4.83460246,
        market_cap: 1306827451173.6987,
        market_cap_dominance: 53.8849,
        fully_diluted_market_cap: 1394265350141.22,
        last_updated: "2024-04-15T06:55:00.000Z",
      },
    },
  },
} satisfies Meta<typeof CryptoCard>;

export default meta;

export const Default: StoryObj<typeof CryptoCard> = {};

export const Loading: StoryObj<typeof CryptoCardSkeleton> = {
  render: () => <CryptoCardSkeleton />,
  parameters: {
    msw: {
      handlers: [
        http.get("/api/crypto", async () => {
          await delay("infinite");
          return;
        }),
      ],
    },
  },
};
