/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_URL_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}