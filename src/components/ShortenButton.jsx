function ShortenButton({ buttonCopy, handleOnClick, isConverted = false }) {
  return (
    <>
      <input
        type="submit"
        value={isConverted ? "Converting..." : buttonCopy}
        className={`h-12  rounded-[5px]  text-white  disabled:bg-app-cyan-hover disabled:cursor-not-allowed ${
          buttonCopy === "Copied!"
            ? "bg-app-very-dark-violet hover:cursor-auto "
            : " bg-app-cyan hover:bg-app-cyan-hover hover:cursor-pointer "
        } px-2.5 py-1.5 font-bold text-lg ${
          buttonCopy === "Copy" || buttonCopy === "Copied!"
            ? "w-full 2xl:h-10 2xl:text-[15px] 2xl:py-2 2xl:w-[103px]"
            : "2xl:h-16 2xl:text-xl 2xl:py-4 2xl:px-10"
        }   `}
        onClick={handleOnClick}
        disabled={isConverted}
      />
    </>
  );
}

export default ShortenButton;
