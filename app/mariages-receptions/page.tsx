import Image from "next/image";
import Link from "next/link";

import ButtonMain from "@/components/ButtonMain";
import { Separator } from "@/components/ui/separator";
import { SlArrowRight } from "react-icons/sl";
import SeparatorCastel from "@/components/SeparatorCastel";
import ContactButton from "@/components/ContactButton";

const MariageEtReceptionPage = () => {
    return (
      <div className="mt-[123px]">
        <div className="w-full h-[36rem] flex justify-center items-center">
          <h2 className="absolute uppercase text-4xl xl:text-7xl text-chatal font-lora text-center">
            Mariages & réceptions
          </h2>
          <img src="/image/Mariage/Mariage1.jpg" alt="image" className="w-full h-[37rem] object-cover" />
        </div>

        <div className="px-4 sm:px-20 xl:px-64 grid grid-cols-1 xl:grid-cols-2 py-20">
          <div className="">
            <h2 className="absolute text-4xl sm:text-8xl font-lora text-chatal uppercase">
              Mariages
            </h2>

            <p className="pt-14 sm:pt-[9rem] px-2">
            <span className="font-bold text-lg sm:text-xl">LA MAGIE D’UN LIEU UNIQUE</span><br/><br/>
            Mariage réussi des vieilles pierres et de la modernité, le Château Chavagnac sera l’écrin rêvé 
            pour ce jour exceptionnel. Privatisez le domaine pour offrir à vos convives des souvenirs 
            inoubliables, dans l’élégance d’un cadre champêtre et convivial.
            <br/><br/>
            Dans la salle de réception aménagée dans une ancienne grange aux murs de pierres apparentes et 
            charpente massive, vous profiterez d’un espace lumineux et climatisé pour votre confort.
            <br/><br/>
            Tables rondes et chaises Napoléon blanches sont fournies pour une capacité pouvant aller 
            jusqu’à 120 convives au diner.De larges baies vitrées vous offrent une vue imprenable sur 
            la piscine ainsi que sur la façade du château qui s’illumine la nuit venue… Un cadre 
            idyllique pour un diner inoubliable.
            <br/><br/>
            40 couchages sur place s’offrent à vous pour parfaire cette parenthèse hors du temps.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center px-4 pt-16 gap-4 sm:gap-8">
              <Image src="/image/badge-award.jpg" 
                alt="image"
                width={150}
                height={90}
                className="pb-8 sm:pb-0"
              />
            <div className="flex flex-col justify-center items-center">
              <Separator className="bg-chatal w-[14rem] sm:w-[16.5rem] h-[2px]" />
              <div className="flex hover:translate-x-2 transition">
                  <span className="font-lora text-2xl text-chatal">
                      Privatiser le château
                  </span>
                  <SlArrowRight className="text-chatal ml-2 mt-[0.6rem]" />
              </div>
              <Separator className="bg-chatal w-[14rem] sm:w-[16.5rem] h-[2px]" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-8 xl:pt-0">
            <Image src="/image/Mariage/Mariage2.jpg" 
                    alt="image"
                    width={420}
                    height={90}
                    className="rounded-xl"
            />
        </div>
      </div>

      <div className="w-full h-[35rem] flex flex-col items-center justify-center 
                      mb-28 bg-fixed bg-center bg-cover bg-mariage text-center">
        <p className="sm:text-6xl text-4xl font-lora text-white drop-shadow-md">
          Visite virtuelle du domaine
        </p>
        <Link href="https://www.mariages.net/chateau-mariage/chateau-chavagnac--e192839">
          <span className="sm:text-3xl text-2xl text-chatal font-lora">
            cliquez ici pour commencer la visite
          </span>
        </Link> 
      </div>

      <SeparatorCastel />

      <div className="px-4 sm:px-20 xl:px-64 grid grid-cols-1 xl:grid-cols-2 pt-4 pb-20">
          <div>
            <h2 className="absolute text-4xl sm:text-8xl font-lora text-chatal uppercase xl:px-24">
              Réceptions
            </h2>

            <p className="sm:pt-[9rem] pt-16 px-2 sm:px-24">
            <span className="font-bold text-lg sm:text-xl">
              POUR VOS RÉCEPTIONS, MARIAGES, ANNIVERSAIRES, BAPTÊMES…
            </span>
            <br/><br/>
            Privatisez le château et offrez vous le charme d’un lieu chargé 
            d’histoire à quelques kilomètres de Valence. Un lieu magique pour toutes 
            vos réceptions en Drôme-Ardèche
            </p>
          </div>
        <div className="flex justify-center items-center mt-14">
            <Image src="/image/Mariage/Mariage4.jpg" 
                    alt="image"
                    width={420}
                    height={90}
                    className="rounded-xl"
            />
        </div>
      </div>
      <ContactButton />
    </div>
    )
  }
  export default MariageEtReceptionPage