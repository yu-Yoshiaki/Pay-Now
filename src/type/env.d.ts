declare namespace NodeJS {
  interface ProcessEnv {
    readonly STRIPE_SECRET_KEY: string;
    readonly NEXT_PUBLIC_STRIPE_PUBLIC_KEY: string;
    readonly MICROCMS_API_KEY: string;
  }
}
