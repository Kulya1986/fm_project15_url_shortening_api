import GetStartedButton from "./GetStartedButton";

function TopBannerArea() {
  return (
    <section
      id="top"
      className="flex flex-col pl-6  2xl:pl-[165px] 2xl:flex-row-reverse 2xl:pb-[152px] 2xl:justify-between 2xl:items-center"
    >
      <div
        id="banner"
        className="grow h-[340px] bg-[url(/images/illustration-working.svg)] bg-no-repeat bg-cover left-6 2xl:h-[482px] 2xl:left-0 2xl:bg-auto 2xl:w-[610px] 2xl:grow-0"
      ></div>
      <div className="grow flex flex-col pr-6 mt-9 pb-[168px] 2xl:grow-0 2xl:w-[564px] 2xl:pr-0 2xl:mt-0 2xl:pb-0">
        <h2 className="text-[42px]/[48px] tracking-[-1.05px] font-bold text-center text-app-very-dark-blue  mb-4 2xl:text-[80px]/[90px] 2xl:tracking-[-2px] 2xl:text-left">
          More than just shorter links
        </h2>
        <p className="text-[18px]/[30px] tracking-[0.12px] font-medium text-center text-app-grayish-violet mb-8 2xl:text-[22px]/[36px] 2xl:tracking-[0.15px] 2xl:text-left 2xl:mb-9">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <GetStartedButton />
      </div>
    </section>
  );
}

export default TopBannerArea;
