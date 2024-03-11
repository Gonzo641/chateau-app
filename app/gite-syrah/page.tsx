import Link from "next/link";

import { SlArrowRight } from "react-icons/sl"

import { Separator } from "@/components/ui/separator"
import ContactButton from "@/components/ContactButton";

const GiteSyrahPage = () => {
  return (
    <div className="mt-[123px]">
      <div className="w-full h-[36rem] flex justify-center items-center">
        <h2 className="absolute uppercase text-5xl md:text-7xl text-white 
                        font-lora text-center drop-shadow-md">
        GITE<br/> « SYRAH »
        </h2>
        <img src="/image/GiteSyrah/GiteSyrah2.jpg" 
              alt="image" 
              className="w-full h-[37rem] object-cover" />
      </div>

      <div className="flex flex-col 2xl:flex-row px-4 xl:px-64 gap-8 mb-8 xl:mb-0">
        {/* <div className="w-full 2xl:w-[136rem] h-[26rem] xl:h-[45rem] mt-28 xl:mt-0">
          <img src="/image/GiteSyrah/GiteSyrah1.jpg" 
              alt="image" 
              className="w-full xl:w-[136rem] h-[26rem] xl:h-[45rem] -mt-10 rounded-xl object-cover" />
        </div> */}
        <div className="flex flex-col xl:p-20 gap-4 mt-8">
          <h4 className="font-bold text-xl">
            BIENVENUE DANS LE GITE SYRAH
          </h4>
          <p>
            Un gite avec vue sur la piscine et le jardin à la française… Une bulle d’authenticité 
            pour des vacances pas comme les autres. Le gite dispose d’une cuisne entièrement 
            équipée ouverte sur le salon, et de deux grandes chambres : une chambre à grand 
            lit et une chambre à deux petits lits.
            <br/><br/>
            Tarif : 200 € la nuit pour 4 personnes.
            <br/><br/>
            Taxe de séjour : 0,70 euros par personne.
            <br/><br/>
            Durée minimum de séjour en gîte : 3 nuits.
          </p>
          {/* <div className="flex flex-col justify-center items-center mt-10">
            <Separator className="bg-chatal w-[14rem] sm:w-[16.5rem] h-[2px]" />
            <div className="flex hover:translate-x-2 transition">
              <Link href='/contact'>
                  <span className="font-lora text-xl sm:text-2xl text-chatal">
                      Réserver votre gîte
                  </span>
              </Link>
                  <SlArrowRight className="text-chatal ml-2 mt-[0.5rem]" />
            </div>
            <Separator className="bg-chatal w-[14rem] sm:w-[16.5rem] h-[2px]" />
          </div> */}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 xl:gap-2 px-4 xl:px-40">
        <img src="/image/GiteSyrah/GiteSyrah4.jpg" alt="image" className="w-full h-64 xl:h-80 rounded-xl object-cover" />
        <img src="/image/GiteSyrah/GiteSyrah3.jpg" alt="image" className="w-full h-64 xl:h-80 rounded-xl object-cover" />
        <img src="/image/GiteSyrah/GiteSyrah5.jpg" alt="image" className="w-full h-64 xl:h-80 rounded-xl object-cover" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-2 px-4 xl:px-64 pt-8">
      <div className="flex flex-col xl:p-10 2xl:p-20 gap-4">
          <h4 className="font-bold text-xl">
            EN FAMILLE OU ENTRE AMIS
          </h4>
          <p>
            Profitez d’un séjour en Ardèche pour faire une pause et apprécier la douceur de vivre dans 
            un havre de verdure… Aux beaux jours, vous disposerez de la piscine et du parc ombragé 
            pour vous rafraichir. Nous serons heureux de vous conseiller de nombreuses activités 
            culturelles, sportives ou familiales à faire dans la région!
          </p>
          <div className="flex flex-col justify-center items-center mt-4">
            <Separator className="bg-chatal w-[14rem] sm:w-[16.5rem] h-[2px]" />
            <div className="flex hover:translate-x-2 transition">
              <Link href='/contact'>
                  <span className="font-lora text-xl sm:text-2xl text-chatal">
                      Réserver votre gîte
                  </span>
              </Link>
                  <SlArrowRight className="text-chatal ml-2 mt-[0.5rem]" />
            </div>
            <Separator className="bg-chatal w-[14rem] sm:w-[16.5rem] h-[2px]" />
          </div>
        </div>
        <img src="/image/GiteSyrah/GiteSyrah6.jpg" alt="image" className="w-full h-64 xl:h-80 rounded-xl object-cover" />
      </div>

      {/* <div>
        <img src="/image/SuiteHermitage/SuiteHermitage4.jpg" alt="image" className="w-full h-40 xl:h-80 mt-12 object-cover" />
      </div> */}
      <ContactButton />
    </div>
  )
}
export default GiteSyrahPage