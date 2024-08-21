/**
 * @vitest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi, test, expect } from "vitest";
import CarouselCard from "./CryptoCard";
import { Crypto } from "@/types";

// Mock imported SVG files, USDFormatter and DateFormatter
vi.mock("/bitcoin.svg", () => ({ default: "bitcoin.svg" }));
vi.mock("/src/lib/USDFormatter.tsx", () => ({
  default: ({ value }: { value: number }) => `$${value.toFixed(2)}`,
}));
vi.mock("/src/lib/DateFormatter.tsx", () => ({
  default: ({ dateStr }: { dateStr: string }) => dateStr,
}));

const mockCrypto: Crypto = {
  id: 1,
  name: "Bitcoin",
  symbol: "BTC",
  slug: "bitcoin",
  cmc_rank: 1,
  num_market_pairs: 500,
  circulating_supply: 18500000,
  total_supply: 21000000,
  max_supply: 21000000,
  infinite_supply: false,
  last_updated: "2024-01-01T12:00:00Z",
  date_added: "2013-04-28T00:00:00Z",
  tags: ["mineable"],
  platform: null,
  self_reported_circulating_supply: null,
  self_reported_market_cap: null,
  quote: {
    USD: {
      price: 50000,
      volume_24h: 20000000000,
      volume_change_24h: 1.5,
      percent_change_1h: 0.1,
      percent_change_24h: -0.2,
      percent_change_7d: 3.5,
      market_cap: 900000000000,
      market_cap_dominance: 60,
      fully_diluted_market_cap: 1050000000000,
      last_updated: "2024-01-01T12:00:00Z",
    },
  },
};

describe("CryptoCard basic rendering", () => {
  beforeEach(() => {
    render(<CarouselCard {...mockCrypto} />);
  });

  test("Renders correct crypto name and symbol", () => {
    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    expect(screen.getByText("BTC")).toBeInTheDocument();
  });

  test("Displays correct price and percentage change", () => {
    // Check for price
    const priceElement = screen.getByText(/\$50000/);
    expect(priceElement).toBeInTheDocument();

    // Check for percentage change more flexibly
    const percentageRegex = /0\.1.*%.*\(1h\)/;
    const percentageElement = screen.getByText(percentageRegex);
    expect(percentageElement).toBeInTheDocument();
  });

  test("Shows market cap and rank", () => {
    expect(screen.getByText("Market Cap:")).toBeInTheDocument();
    expect(screen.getByText("#1")).toBeInTheDocument();
    expect(screen.getByText("$900000000000.00")).toBeInTheDocument();
  });

  test("Displays circulating and max supply", () => {
    expect(screen.getByText("Circulating supply:")).toBeInTheDocument();
    expect(screen.getByText("$18500000.00")).toBeInTheDocument();
    expect(screen.getByText("Max Supply:")).toBeInTheDocument();
    expect(screen.getByText("$21000000.00")).toBeInTheDocument();
  });

  test("Renders crypto icon", () => {
    const icon = screen.getByAltText("Bitcoin logo");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("src", "bitcoin.svg");
  });

  test("Displays last updated time", () => {
    expect(screen.getByText(/Last update/i)).toBeInTheDocument();
    // Find all text nodes and check if any of them contain a date-like string
    const allTextNodes = screen.getAllByText(/./);
    const dateNode = allTextNodes.find((node) =>
      /\d{4}[-/]\d{2}[-/]\d{2}/.test(node.textContent || ""),
    );
    expect(dateNode).toBeInTheDocument();
  });

  test("Applies correct CSS classes", () => {
    const card = screen.getByTestId("crypto-card-BTC");
    expect(card).toHaveClass("rounded-lg bg-transparent p-24");
  });
});

test("Renders green elements for positive change", () => {
  render(<CarouselCard {...mockCrypto} />);

  const changeElement = screen.getByText("0.10% (1h)", { exact: false });
  expect(changeElement).toHaveClass("text-green-500");

  // Check for the presence of the up arrow
  const upArrow = screen.getByTestId("triangle-up-icon");
  expect(upArrow).toBeInTheDocument();
});

test("Renders red elements for negative change", () => {
  const negativeCrypto = {
    ...mockCrypto,
    quote: { USD: { ...mockCrypto.quote.USD, percent_change_1h: -1.5 } },
  };
  render(<CarouselCard {...negativeCrypto} />);

  const changeElement = screen.getByText("1.50% (1h)", { exact: false });
  expect(changeElement).toHaveClass("text-red-500");

  // Check for the presence of the down arrow
  const downArrow = screen.getByTestId("triangle-down-icon");
  expect(downArrow).toBeInTheDocument();
});
