// "use client";
import { redirect } from "next/navigation";
import { Locale } from 'next-intl';
type Params = { params: Promise<{ locale: string }> };
export default async function Page({params}: Params) {

    const { locale } = await params;
    if (!locale) {
      return redirect(`/en/designs/overview`);
    }
    return redirect(`/${locale}/designs/overview`);
}

export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}
