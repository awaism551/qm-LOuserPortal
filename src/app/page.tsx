import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

function detectPreferredLocale(acceptLanguage: string | null): 'en' | 'ar' {
  const source = acceptLanguage?.toLowerCase() || '';
  if (source.includes('ar')) return 'ar';
  return 'en';
}

export default async function RootPage() {
  const acceptLanguage = (await headers()).get('accept-language');
  const locale = detectPreferredLocale(acceptLanguage);
  redirect(`/${locale}`);
}
