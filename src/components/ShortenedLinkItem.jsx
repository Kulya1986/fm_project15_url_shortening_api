import ShortenButton from "./ShortenButton";

function ShortenedLinkItem({ item, copyLink, copied, copyError }) {
  return (
    <div className="flex flex-col  rounded-[5px] w-(--mobile-menu-width) bg-white mt-6 2xl:w-auto 2xl:mt-4 2xl:flex-row 2xl:items-baseline 2xl:py-4 2xl:h-[72px] ">
      <div className="flex flex-col grow 2xl:justify-between 2xl:flex-row 2xl:items-center ">
        <div className=" px-4 py-1.5 border-b-[1px] h-12 w-auto border-app-grayish-violet 2xl:border-none 2xl:py-0 2xl:px-8 overflow-hidden truncate">
          <p className="text-base/[36px]  truncate  font-medium tracking-[0.12px] text-app-very-dark-blue 2xl:text-xl 2xl:max-w-[700px]">
            {item.url}
          </p>
        </div>
        <div className="text-base/[36px] 2xl:text-right grow h-12 w-auto font-medium tracking-[0.12px] text-app-cyan py-1.5 px-4 2xl:py-0 2xl:px-0 2xl:text-xl">
          {item.short_url}
        </div>
      </div>
      <div className="grow flex flex-col pb-4 px-4 items-center justify-center 2xl:grow-0 2xl:pb-0 2xl:px-6 ">
        <ShortenButton
          buttonCopy={copied ? "Copied!" : "Copy"}
          handleOnClick={copyLink}
        />
        {copyError.length > 0 && (
          <p className="mt-2 text-app-red font-medium text-xs/[18px] italic tracking-[0.08px]">
            {copyError}
          </p>
        )}
      </div>
    </div>
  );
}

export default ShortenedLinkItem;
