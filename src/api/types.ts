export type Homepage = {
  id: number;
  splash_title: string;
  splash_text: string;
  splash_image: string;
  intro_text: string;
  intro_image: string;
  intro_text_2: string;
  wartime_image: string;
  wartime_items: {
    id: number;
    icon: string;
    title: string;
    text: string;
  }[];
  peacetime_image: string;
  peacetime_items: {
    id: number;
    icon: string;
    title: string;
    text: string;
  }[];
  cta: string;
  partners: {
    id: number;
    image: string;
    title: string;
  }[];
  who_we_help: { id: number; text: string }[];
  outro_text: string;
}

export type SocialLink = {
  id: number;
  social_type: 'facebook' | 'instagram' | 'telegram' | 'twitter';
  link: string;
}

export type Meta = {
  title: string;
  description: string;
  address: string;
  email: string;
  phone_numbers: { id: number; phone_number: string }[];
  logo: string;
  logo_inverted: string;
  social_links: SocialLink[];
  copyright: string;
  posts_exists: boolean;
  files_exists: boolean;
  privacy_policy_enabled: boolean;
  terms_of_use_enabled: boolean;
}

export type PostShort = {
  id: number;
  title: string;
  slug: string;
  main_image_thumb: string;
}

export type PostFull = {
  id: number;
  title: string;
  text: string;
  main_image: string;
  main_image_thumb: string;
  images: { id: number; src: string; thumb: string; }[]
}

export type PostResponse = {
  post: PostFull;
  other_posts: PostShort[];
}

export type PaymentDetail = {
  id: number;
  title: string;
  text: string;
}

export type CryptoType = 'btc' | 'eth' | 'bch' | 'ltc' | 'usdt'

export type CryptoPaymentDetail = {
  id: number;
  crypto_type: CryptoType;
  wallet: string;
}

export type Payment = {
  liqpay_link?: string;
  payment_details: PaymentDetail[];
  crypto_payment_details: CryptoPaymentDetail[];
}

export type File = {
  id: number;
  src: string;
  title: string;
}

export type Legal = {
  terms_of_use?: string;
  privacy_policy?: string;
}
