// "use client";
import { redirect } from "next/navigation";
import { Locale } from 'next-intl';
type Params = { params: { locale: Locale } };
export default function Page({params}: Params) {
    const { locale } = params || {} as { locale: Locale };
    if (!locale) {
      return redirect(`/en/designs/overview`);
    }
    return redirect(`/${locale}/designs/overview`);
}

export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}
