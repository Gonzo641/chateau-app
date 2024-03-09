import Link from "next/link";

import { SlArrowRight } from "react-icons/sl"

import { Separator } from "@/components/ui/separator"

const SuiteLaChapellePage = () => {
  return (
    <div className="mt-[123px]">
      <div className="w-full h-[36rem] flex justify-center items-center">
        <h2 className="absolute uppercase text-3xl xl:text-7xl text-white 
                        font-lora text-center drop-shadow-md">
          SUITE<br/> « LA CHAPELLE »
        </h2>
        <img src="/image/SuiteLaChapelle/SuiteLaChapelle1.jpg" 
              alt="image" 
              className="w-full h-[37rem] object-cover" />
      </div>

      <div className="flex flex-col 2xl:flex-row px-4 xl:px-64 gap-8 mb-8 xl:mb-0">
        <div className="w-full 2xl:w-[136rem] h-[26rem] xl:h-[45rem] mt-28 xl:mt-0">
          <img src="/image/SuiteLaChapelle/SuiteLaChapelle2.jpg" 
              alt="image" 
              className="w-full xl:w-[136rem] h-[26rem] xl:h-[45rem] -mt-10 rounded-xl object-cover" />
        </div>
        <div className="flex flex-col xl:p-20 gap-4">
          <h4 className="font-bold text-xl">
            BIENVENUE DANS LA SUITE LA CHAPELLE
          </h4>
          <p>
            Nichée dans l’ancienne chapelle du château, cette Suite cosy 
            et confortable a naturellement été baptisée « La Chapelle ».
            <br/><br/>
            Avec son acces indépendant par l’extérieur, « La Chapelle » vous accueille dans une atmosphère 
            incomparable, vous enveloppe de son calme absolu et ses couleurs chaleureuses. 
            Au petit matin, le soleil levant vous caressera en douceur.
            <br/><br/>
            Savourez un bel espace salon pour vous relaxer ainsi qu’un charmant 
            petit boudoir rond, situé dans la tour Sud.
            <br/><br/>
            La salle d’eau avec sa grande douche à l’italienne ne vous laissera pas indiférent… 
            Venez vous imerger dans un décors inoubliable, la vie de château…
            <br/><br/>
            Tarif de la chambre : 305 euros, petit déjeuner compris<br/>
            Taxe de séjour : 0,70 euros par personne.
            <br/><br/>
            Table d’hôtes tous les soirs sur réservation au plus tard la veille de votre 
            arrivée :<br/> menu unique à 64 euros par personne incluant l’apéritif au Champagne, 
            le menu en quatre temps et la dégustation du vin blanc produit sur la propriété.
            <br/><br/>
            Les séjours sont possibles pour un minimum de deux nuits. 
          </p>
          <div className="flex flex-col justify-center items-center mt-10">
            <Separator className="bg-chatal w-[14rem] sm:w-[16.5rem] h-[2px]" />
            <div className="flex hover:translate-x-2 transition">
              <Link href='/contact'>
                  <span className="font-lora text-xl sm:text-2xl text-chatal">
                      Réserver votre chambre
                  </span>
              </Link>
                  <SlArrowRight className="text-chatal ml-2 mt-[0.5rem]" />
            </div>
            <Separator className="bg-chatal w-[14rem] sm:w-[16.5rem] h-[2px]" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 xl:gap-2 px-4 xl:px-40">
        <img src="/image/ChambreSaintJoseph/SaintJoseph5.jpg" alt="image" className="w-full h-64 xl:h-80 rounded-xl object-cover" />
        <img src="/image/SuiteLaChapelle/SuiteLaChapelle4.jpg" alt="image" className="w-full h-64 xl:h-80 rounded-xl object-cover" />
        <img src="/image/ChambreSaintJoseph/SaintJoseph6.jpg" alt="image" className="w-full h-64 xl:h-80 rounded-xl object-cover" />
      </div>

      <div>
        <img src="/image/SuiteLaChapelle/SuiteLaChapelle3.jpg" alt="image" className="w-full h-40 xl:h-80 mt-12 object-cover" />
      </div>
    </div>
  )
}
export default SuiteLaChapellePage