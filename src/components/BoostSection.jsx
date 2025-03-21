import GetStartedButton from "./GetStartedButton";

function BoostSection() {
  return (
    <section
      id="boost"
      className="px-9 py-[90px] flex flex-col bg-[url(/images/bg-boost-mobile.svg)] bg-no-repeat bg-right-top bg-app-very-dark-violet 2xl:bg-[url(/images/bg-boost-desktop.svg)] 2xl:bg-cover 2xl:items-center"
    >
      <h3 className="font-bold text-[28px]/[48px] tracking-[-0.7px] text-white text-center mb-4 2xl:text-[40px] 2xl:tracking-[-1px] 2xl:mb-8">
        Boost your links today
      </h3>
      <GetStartedButton />
    </section>
  );
}

export default BoostSection;
