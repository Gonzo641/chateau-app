import Link from "next/link";

import { SlArrowRight } from "react-icons/sl"

import { Separator } from "@/components/ui/separator"
import ContactButton from "@/components/ContactButton";

const SuiteHermitagePage = () => {
  return (
    <div className="mt-[123px]">
      <div className="w-full h-[36rem] flex justify-center items-center">
        <h2 className="absolute uppercase text-3xl md:text-7xl text-white 
                        font-lora text-center drop-shadow-md">
        SUITE<br/> « HERMITAGE »
        </h2>
        <img src="/image/SuiteHermitage/SuiteHermitage1.jpg" 
              alt="image" 
              className="w-full h-[37rem] object-cover" />
      </div>

      <div className="flex flex-col 2xl:flex-row px-4 xl:px-64 gap-8 mb-8 xl:mb-0">
        <div className="w-full 2xl:w-[136rem] h-[26rem] xl:h-[45rem] mt-28 xl:mt-0">
          <img src="/image/SuiteHermitage/SuiteHermitage2.jpg" 
              alt="image" 
              className="w-full xl:w-[136rem] h-[26rem] xl:h-[45rem] -mt-10 rounded-xl object-cover" />
        </div>
        <div className="flex flex-col xl:p-20 gap-4">
          <h4 className="font-bold text-xl">
            BIENVENUE DANS LA SUITE HERMITAGE
          </h4>
          <p>
            Pour profiter de la vue sur le parc et les monts du Vercors, il faut monter jusqu’au 
            deuxième étage et pousser la porte de la suite Hermitage. Vous y découvrirez une 
            très spacieuse suite qui ne vous laissera pas indifférent par ses tonalités chaleureuses. 
            Le plus beau spectacle qu’offre la suite Hermitage a lieu le matin, avec le lever du soleil face au lit…
            <br/><br/>
            Vous profiterez également d’une grande salle de bains au charme résolument rétro et d’un 
            large dressing. Aux beaux jours, profitez de la piscine pour un pur moment de détente.
            <br/><br/>
            Tarif de la chambre : 260 euros, petit déjeuner compris<br/>
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
        <img src="/image/SuiteHermitage/SuiteHermitage3.jpg" alt="image" className="w-full h-64 xl:h-80 rounded-xl object-cover" />
        <img src="/image/SuiteHermitage/SuiteHermitage5.jpg" alt="image" className="w-full h-64 xl:h-80 rounded-xl object-cover" />
        <img src="/image/SuiteHermitage/SuiteHermitage4.jpg" alt="image" className="w-full h-64 xl:h-80 rounded-xl object-cover" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-2 px-4 xl:px-64 pt-4 sm:pt-2">
        <img src="/image/ChambreSaintJoseph/SaintJoseph5.jpg" alt="image" className="w-full h-64 xl:h-80 rounded-xl object-cover" />
        <img src="/image/ChambreSaintJoseph/SaintJoseph6.jpg" alt="image" className="w-full h-64 xl:h-80 rounded-xl object-cover" />
      </div>

      {/* <div>
        <img src="/image/SuiteHermitage/SuiteHermitage4.jpg" alt="image" className="w-full h-40 xl:h-80 mt-12 object-cover" />
      </div> */}
      <ContactButton />
    </div>
  )
}
export default SuiteHermitagePage