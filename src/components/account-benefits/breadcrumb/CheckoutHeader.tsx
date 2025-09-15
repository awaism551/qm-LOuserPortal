const checkoutHeader = () => {
  return (
    <div
      data-breakpoint="Desktop"
      data-color="Purple BG"
      className="self-stretch px-7 py-1 bg-white/10 border-b border-Stroke-White-20%/20 inline-flex flex-col justify-center items-start gap-2"
    >
      <div className="inline-flex justify-start items-center gap-1">
        <div
          data-type="Default"
          className="py-2 flex justify-center items-center gap-2.5"
        >
          <div className="justify-start text-Typography-White-64 text-base font-normal font-['GT_America'] leading-tight">
            Developing Your Vision: Documentary & Storytelling
          </div>
        </div>
        <div className="w-4 h-4 relative overflow-hidden">
          <div className="w-1 h-2 left-[6.75px] top-[4.50px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-Iconography-Grey-400" />
        </div>
        <div
          data-type="Selected"
          className="py-2 flex justify-center items-center gap-2.5"
        >
          <div className="justify-start text-Typography-White text-base font-normal font-['GT_America'] leading-tight">
            Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default checkoutHeader;
