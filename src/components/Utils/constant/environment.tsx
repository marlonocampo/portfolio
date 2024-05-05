const APP_ENVIRONMENT_DEVELOPMENT = 'development'
const APP_ENVIRONMENT_PRODUCTION = 'production'
const appEnvironment = import.meta.env.VITE_APP_ENVIRONMENT ?? APP_ENVIRONMENT_DEVELOPMENT

export function isProduction (): boolean {
  return appEnvironment !== APP_ENVIRONMENT_PRODUCTION
}
