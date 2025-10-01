import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  try {
    const messages = (await import(`./src/app/locales/${locale}.json`)).default;
    return { locale: locale as string, messages };
  } catch (e) {
    return { locale: locale as string, messages: {} };
  }
});
