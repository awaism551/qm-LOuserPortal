import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  return {
    locale: locale as string,
    messages: (await import(`./src/app/locales/${locale}.json`)).default
  };
});
