function AdvancedStatsItem({ item, i }) {
  return (
    <div
      className={`mt-[92px] relative flex justify-center 2xl:justify-start ${
        i === 0
          ? "2xl:mt-[100px]"
          : i === 1
          ? "2xl:mt-[144px]"
          : "2xl:mt-[188px]"
      } 2xl:h-fit`}
    >
      <div className="h-[88px] w-[88px] absolute -top-[44px] mx-auto rounded-full bg-app-very-dark-violet 2xl:ml-8">
        <img className="mx-auto py-6" src={item.image} alt={item.title} />
      </div>
      <div className="bg-white px-8 pb-10 pt-[77px] text-center 2xl:px-8 2xl:text-left ">
        <h3 className="font-bold text-[22px] text-app-very-dark-blue mb-3">
          {item.title}
        </h3>
        <p className="font-medium text-[15px]/[26px] text-app-grayish-violet">
          {item.text}
        </p>
      </div>
    </div>
  );
}

export default AdvancedStatsItem;
