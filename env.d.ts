// env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    NEXT_PUBLIC_API_URL?: string;
    // Add any other environment variables your application uses
  }
}
