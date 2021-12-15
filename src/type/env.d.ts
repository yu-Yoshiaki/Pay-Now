declare namespace NodeJS {
  interface ProcessEnv {
    readonly STRIPE_SECRET_KEY: string;
    readonly NEXT_PUBLIC_STRIPE_PUBLIC_KEY: string;
    readonly MICROCMS_API_KEY: string;
    readonly NEXT_PUBLIC_FIREBASE_API_KEY: string;
    readonly NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: string;
    readonly NEXT_PUBLIC_FIREBASE_DATABASE_URL: string;
    readonly NEXT_PUBLIC_FIREBASE_PROJECT_ID: string;
    readonly NEXT_PUBLIC_FIREBASE_STORAGE_BAKET: string;
    readonly NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID: string;
    readonly NEXT_PUBLIC_FIREBASE_APP_ID: string;
    readonly NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: string;
    readonly NEXT_PUBLIC_DEFAULT_FIREBASE_AUTH_EMAIL: string;
    readonly NEXT_PUBLIC_DEFAULT_FIREBASE_AUTH_PASSWORD: string;
  }
}
