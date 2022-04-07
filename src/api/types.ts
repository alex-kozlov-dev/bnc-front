export type TextPageSection = {
  id: number;
  section_type: 'text';
  title: string;
  text: string;
}

export type TextImagePageSection = {
  id: number;
  section_type: 'text_image';
  title: string;
  text: string;
  image: string;
}

export type DonateCtaPageSection = {
  id: number;
  section_type: 'donate_cta';
  cta: string;
}

export type TextListPageSection = {
  id: number;
  section_type: 'text_list';
  text_items: { id: number; text: string }[];
}

export type PartnersPageSection = {
  id: number;
  section_type: 'partners';
  partners: { id: number; title: string; image: string; }[];
}

export type QAPageSection = {
  id: number;
  section_type: 'qa';
  questions: { id: number; question: string; answer: string; }[];
}

export type IconTextListPageSection = {
  id: number;
  section_type: 'icon_text_list';
  icon_text_items: { id: number; icon: string; title: string; summary: string; details?: string; }[];
}

export type PageSection =
  TextPageSection |
  TextImagePageSection |
  DonateCtaPageSection |
  TextListPageSection |
  PartnersPageSection |
  QAPageSection |
  IconTextListPageSection

export type Homepage = {
  id: number;
  splash_title: string;
  splash_text: string;
  splash_image: string;
  page_sections: PageSection[];
}

export type Meta = {
  title: string;
  description: string;
  address: string;
  email: string;
  phone_number: string;
  social_links: {
    id: number;
    type: 'facebook' | 'instagram' | 'telegram' | 'twitter';
    link: string;
  }[];
}

export type PostShort = {
  id: number;
  title: string;
  text: string;
  main_image_thumb: string;
}

export type PostFull = PostShort & {
  main_image: string;
  images: { id: number; src: string; thumb: string; alt?: string; }[]
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

export type CryptoPaymentDetail = {
  id: number;
  crypto_type: 'btc' | 'etc' | 'bch' | 'ltc' | 'usdt';
  wallet: string;
}

export type PaymentDetailsResponse = {
  payment_details: PaymentDetail[];
  crypto_payment_details: CryptoPaymentDetail[];
}

export type File = {
  id: number;
  src: string;
  title: string;
}
