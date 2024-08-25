// mocks/handlers.ts
import { ApiResponse } from '@/types';
import { http, HttpResponse } from 'msw';

export const mockResponse: ApiResponse = {
  status: {
    timestamp: new Date().toISOString(),
    error_code: 0,
    error_message: null,
    elapsed: 10,
    credit_count: 1,
    notice: null
  },
  data: [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      slug: 'bitcoin',
      cmc_rank: 1,
      num_market_pairs: 5000,
      circulating_supply: 18500000,
      total_supply: 21000000,
      max_supply: 21000000,
      infinite_supply: false,
      last_updated: new Date().toISOString(),
      date_added: '2013-04-28T00:00:00.000Z',
      tags: ['mineable'],
      platform: null,
      self_reported_circulating_supply: null,
      self_reported_market_cap: null,
      quote: {
        USD: {
          price: 50000,
          volume_24h: 2000000000,
          volume_change_24h: 1.5,
          percent_change_1h: 0.1,
          percent_change_24h: -0.2,
          percent_change_7d: 3.5,
          market_cap: 900000000000,
          market_cap_dominance: 60,
          fully_diluted_market_cap: 1050000000000,
          last_updated: new Date().toISOString()
        }
      }
    },
    {
      id: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      slug: 'ethereum',
      cmc_rank: 2,
      num_market_pairs: 4000,
      circulating_supply: 115000000,
      total_supply: 0,
      max_supply: 0,
      infinite_supply: false,
      last_updated: new Date().toISOString(),
      date_added: '2015-08-07T00:00:00.000Z',
      tags: ['smart-contract', 'pos'],
      platform: null,
      self_reported_circulating_supply: null,
      self_reported_market_cap: null,
      quote: {
        USD: {
          price: 4000,
          volume_24h: 1500000000,
          volume_change_24h: 1.2,
          percent_change_1h: 0.2,
          percent_change_24h: 0.4,
          percent_change_7d: 2.5,
          market_cap: 460000000000,
          market_cap_dominance: 10,
          fully_diluted_market_cap: 460000000000,
          last_updated: new Date().toISOString()
        }
      }
    },
    {
      id: 3,
      name: 'Solana',
      symbol: 'SOL',
      slug: 'ethereum',
      cmc_rank: 2,
      num_market_pairs: 4000,
      circulating_supply: 115000000,
      total_supply: 0,
      max_supply: 0,
      infinite_supply: false,
      last_updated: new Date().toISOString(),
      date_added: '2015-08-07T00:00:00.000Z',
      tags: ['smart-contract', 'pos'],
      platform: null,
      self_reported_circulating_supply: null,
      self_reported_market_cap: null,
      quote: {
        USD: {
          price: 4000,
          volume_24h: 1500000000,
          volume_change_24h: 1.2,
          percent_change_1h: 0.2,
          percent_change_24h: 0.4,
          percent_change_7d: 2.5,
          market_cap: 460000000000,
          market_cap_dominance: 10,
          fully_diluted_market_cap: 460000000000,
          last_updated: new Date().toISOString()
        }
      }
    },
    {
      id: 4,
      name: 'Cardano',
      symbol: 'ADA',
      slug: 'cardano',
      cmc_rank: 2,
      num_market_pairs: 4000,
      circulating_supply: 115000000,
      total_supply: 0,
      max_supply: 0,
      infinite_supply: false,
      last_updated: new Date().toISOString(),
      date_added: '2015-08-07T00:00:00.000Z',
      tags: ['smart-contract', 'pos'],
      platform: null,
      self_reported_circulating_supply: null,
      self_reported_market_cap: null,
      quote: {
        USD: {
          price: 4000,
          volume_24h: 1500000000,
          volume_change_24h: 1.2,
          percent_change_1h: 0.2,
          percent_change_24h: 0.4,
          percent_change_7d: 2.5,
          market_cap: 460000000000,
          market_cap_dominance: 10,
          fully_diluted_market_cap: 460000000000,
          last_updated: new Date().toISOString()
        }
      }
    },
    {
      id: 5,
      name: 'Dogecoin',
      symbol: 'DOGE',
      slug: 'dogecoin',
      cmc_rank: 2,
      num_market_pairs: 4000,
      circulating_supply: 115000000,
      total_supply: 0,
      max_supply: 0,
      infinite_supply: false,
      last_updated: new Date().toISOString(),
      date_added: '2015-08-07T00:00:00.000Z',
      tags: ['smart-contract', 'pos'],
      platform: null,
      self_reported_circulating_supply: null,
      self_reported_market_cap: null,
      quote: {
        USD: {
          price: 4000,
          volume_24h: 1500000000,
          volume_change_24h: 1.2,
          percent_change_1h: 0.2,
          percent_change_24h: 0.4,
          percent_change_7d: 2.5,
          market_cap: 460000000000,
          market_cap_dominance: 10,
          fully_diluted_market_cap: 460000000000,
          last_updated: new Date().toISOString()
        }
      }
    }
  ]
};

export const handlers = [
  http.get("http://localhost:8081/api/crypto", async () => {
    return HttpResponse.json(mockResponse);
  }),
];
