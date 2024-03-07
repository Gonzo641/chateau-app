import { SlArrowRight } from "react-icons/sl";

export default function ButtonMain() {


  return (
    <button
      type="submit"
      className="group flex items-center justify-center 
      gap-2 h-[3rem] w-[9rem] bg-chatal text-white 
      rounded-full outline-none transition-all focus:scale-110 
      hover:scale-110 hover:bg-chatalight active:scale-105 
      disabled:scale-100 disabled:bg-opacity-65"
    >
        <>
          En savoir plus{" "}
          <SlArrowRight className="text-xs opacity-70 transition-all 
          group-hover:translate-x-2" />{" "}
        </>

    </button>
  );
}