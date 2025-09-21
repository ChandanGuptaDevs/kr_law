declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_TINA_CLIENT_ID: string;
    TINA_TOKEN: string;
    NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF?: string;
    NEXT_PUBLIC_TINA_BRANCH?: string;
  }
}