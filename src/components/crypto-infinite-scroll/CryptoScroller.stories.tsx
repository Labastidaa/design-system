import type { Decorator, Meta, StoryObj } from "@storybook/react";
import CryptoScroller from "./CryptoScroller";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { mockResponse } from "@/mocks/handlers";
import { delay, http } from "msw";
import CryptoScrollerSkeleton from "./CryptoScrollerSkeleton";
import CryptoScrollerError from "./CryptoScrollerError";

const mockQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // Disable retries to keep Storybook behavior predictable.
      refetchOnWindowFocus: false, // Avoid refetches on window focus for Storybook simplicity.
    },
  },
});

const withMock: Decorator = (Story) => {
  return (
    <QueryClientProvider client={mockQueryClient}>
      <Story />
    </QueryClientProvider>
  );
};

const mockData = mockResponse;

const meta = {
  title: "Components/CryptoScroller",
  component: CryptoScroller,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [withMock],
  args: {
    mockData,
  },
} satisfies Meta<typeof CryptoScroller>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Loading: StoryObj<typeof CryptoScrollerSkeleton> = {
  render: () => <CryptoScrollerSkeleton />,
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
export const Error: StoryObj<typeof CryptoScroller> = {
  render: () => (
    <CryptoScrollerError
      resetErrorBoundary={async () => {
        const result = await mockQueryClient.refetchQueries();
        return result;
      }}
    />
  ),
  parameters: {
    msw: {
      handlers: [
        http.get("/api/crypto", async () => {
          return new Response(
            JSON.stringify({ error: "Internal Server Error" }),
            { status: 500 },
          );
        }),
      ],
    },
  },
};
