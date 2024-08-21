import { AnimationPlaybackControls, ValueAnimationTransition, MotionValue, DOMKeyframesDefinition, DynamicAnimationOptions, AnimationSequence, SequenceOptions, ElementOrSelector } from 'framer-motion';
type GenericKeyframesTarget<V> = [null, ...V[]] | V[];

export interface ApiResponse {
  status: Status;
  data: Crypto[];
}

export interface Status {
  timestamp: string;
  error_code: number;
  error_message: string | null;
  elapsed: number;
  credit_count: number;
  notice: string | null;
}

export interface Crypto {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  cmc_rank: number;
  num_market_pairs: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  infinite_supply: boolean;
  last_updated: string;
  date_added: string;
  tags: string[];
  platform: Platform | null;
  self_reported_circulating_supply: number | null;
  self_reported_market_cap: number | null;
  quote: Quote;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
  symbol: string;
  token_address: string;
}

export interface Quote {
  USD: CurrencyQuote;
}

export interface CurrencyQuote {
  price: number;
  volume_24h: number;
  volume_change_24h: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  market_cap: number;
  market_cap_dominance: number;
  fully_diluted_market_cap: number;
  last_updated: string;
}

export interface Color {
  title: string;
  hex: string;
  text: string;
}

export interface ColorSectionProps {
  colors: Color[];
}

export interface ColorBoxProps {
  title: string;
  hex: string;
  text: string;
}

export interface animate {
  <V>(from: V, to: V | GenericKeyframesTarget<V>, options?: ValueAnimationTransition<V> | undefined): AnimationPlaybackControls;
  <V_1>(value: MotionValue, keyframes: V_1 | GenericKeyframesTarget<V_1>, options?: ValueAnimationTransition | undefined): AnimationPlaybackControls;
  (value: ElementOrSelector, keyframes: DOMKeyframesDefinition, options?: DynamicAnimationOptions | undefined): AnimationPlaybackControls;
  (sequence: AnimationSequence, options?: SequenceOptions | undefined): AnimationPlaybackControls;
}