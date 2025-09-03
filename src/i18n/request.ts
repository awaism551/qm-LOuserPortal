import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Since we're loading messages directly in the layout,
  // this configuration is mainly for next-intl to recognize the setup
  return {
    locale: locale || 'en',
    messages: {}
  };
});
