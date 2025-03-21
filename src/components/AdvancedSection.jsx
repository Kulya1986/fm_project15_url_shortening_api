import AdvancedStatsIntro from "./AdvancedStatsIntro";
import AdvancedStatsItem from "./AdvancedStatsItem";

const advancedStats = [
  {
    title: "Brand Recognition",
    text: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    image: "/images/icon-brand-recognition.svg",
  },
  {
    title: "Detailed Records",
    text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    image: "/images/icon-detailed-records.svg",
  },
  {
    title: "Fully Customizable",
    text: " Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    image: "/images/icon-fully-customizable.svg",
  },
];

function AdvancedSection() {
  return (
    <section
      id="advanced-stats"
      className="px-6 pb-20 flex flex-col bg-app-gray 2xl:px-[165px] 2xl:pt-10"
    >
      <AdvancedStatsIntro />
      <div className="flex flex-col justify-center relative 2xl:flex-row">
        <div className="bg-app-cyan w-2 absolute h-(--rect-height) left-(--rect-center) 2xl:w-full 2xl:h-2 2xl:left-0 2xl:top-(--rect-center-desk)"></div>
        <div className="flex flex-col 2xl:flex-row 2xl:gap-[30px]">
          {advancedStats.map((item, ind) => (
            <AdvancedStatsItem item={item} key={item.title} i={ind} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdvancedSection;
