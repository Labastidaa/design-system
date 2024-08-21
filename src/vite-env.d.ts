/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_X_CMC_PRO_API_KEY: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}