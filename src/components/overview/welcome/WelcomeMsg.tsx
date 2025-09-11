export default function WelcomeMsg() {
  return (
    <div className="w-full h-24 flex flex-col justify-start items-start gap-2">
    <div className="self-stretch justify-start text-white text-4xl font-medium font-['Lyon_Arabic_Display'] capitalize leading-10">
      Welcome To Your Memberships Portal
    </div>
    
    <div className="w-[517px] justify-start text-typography-white-64 text-base font-normal font-['GT_America'] leading-tight">
      You don't yet have an active membership. Click on "Account & Benefits"
      to purchase your membership.
    </div>
  </div>
  );
}