"use client";

import Image from "next/image";
import Link from "next/link";

import ButtonMain from "./ButtonMain";
import ImageGrid from "./ImageGrid";
import { GridUi } from "./GridUi";
import { Separator } from "@/components/ui/separator"
import { SlArrowRight } from "react-icons/sl";
import MainCarousel from "./MainCarousel";

const MainChambreHote = () => {
  return (
    <>
        <div className="px-4 sm:px-20 lg:px-40 grid grid-cols-1 2xl:grid-cols-2 pb-20">
            <div className="pb-0">
                <h2 className="absolute text-4xl sm:text-8xl font-lora text-chatal uppercase">
                    Chambres<br/> d'hôtes
                </h2>
                <div className="pt-24 sm:pt-36 col-span-2 flex justify-center items-center">
                    <Image src="/image/chambre.jpg" 
                            alt="image"
                            width={640}
                            height={90}
                            className="rounded-xl"
                    />
                </div>
                {/* <div className="relative pt-8">
                    <Image
                    src="/image/suite-la-chapelle.jpg"
                    width={600}
                    height={200}
                    alt="image"
                    className="object-cover rounded-lg"
                    />
                    <div className="absolute flex justify-center items-center bottom-0 left-0 right-0 top-8 w-full
                                bg-black bg-fixed opacity-0 transition duration-300 ease-in-out overflow-hidden 
                                hover:opacity-70 rounded-lg">
                            <Link href="/suite-la-chapelle">
                                <span className="absolute text-chatal text-3xl">Suite La Chapelle</span>      
                            </Link>
                    </div>
                </div> */}
            </div>
            <div className="px-0 sm:px-12 pt-4 2xl:pt-36">
                <h4 className="font-bold text-lg">NOUS VOUS OUVRONS LES PORTES DE NOTRE MAISON</h4>
                <p className="pt-8">
                Séjournez dans un château ! Laissez-vous séduire par nos grandes chambres aux parquets anciens, 
                ayant chacune une vue imprenable sur les jardins. La décoration de ce lieu historique, empreint 
                de modernité, vous invitera à passer un séjour hors du temps dans notre maison.
                </p>
                <p className="pt-8">
                Votre chambre est disponible à partir de 15h le jour de votre arrivée et 
                nous vous demanderons de la libérer avant 11h le jour de votre départ.
                </p>
                <p className="pt-8">
                Pour parfaire votre séjour, nous vous proposons également le diner à notre table d’hôtes. 
                Il suffit de réserver votre table au plus tard la veille de votre arrivée. Diner aux 
                chandelles en tables individuelles, servi dans le jardin si le temps le permet… Une immersion 
                dans l’ambiance sereine et romantique du château incluant pour votre apéritif la dégustation du vin produit sur la propriété.
                </p>
                {/* <div className="px-4 pt-16 flex transition-all hover:translate-x-1 text-chatal">
                    <Link href='/'>
                        
                    </Link>
                </div> */}
                <ImageGrid />
                <MainCarousel />
                {/* <div className="mt-28 pb-20 flex flex-col justify-center items-center">
                    <Separator className="bg-chatal w-[16.5rem] h-[2px]" />
                    <div className="flex hover:translate-x-2 transition">
                        <Link href='/contact'>
                            <span className="font-lora text-2xl text-chatal">
                                Réserver 
                            </span>
                        </Link>
                        <SlArrowRight className="text-chatal ml-2 mt-[0.6rem]" />
                    </div>
                    <Separator className="bg-chatal w-[16.5rem] h-[2px]" />
                </div> */}
            </div>
                {/* <GridUi /> */}

        </div>
        <div className="pb-20 flex flex-col justify-center items-center">
            <Separator className="bg-chatal w-[15rem] sm:w-[16.5rem] h-[2px]" />
            <div className="flex hover:translate-x-2 transition">
                <Link href='/contact'>
                    <span className="font-lora text-2xl text-chatal">
                        Réserver une chambre
                    </span>
                </Link>
                <SlArrowRight className="text-chatal ml-2 mt-[0.6rem]" />
            </div>
            <Separator className="bg-chatal w-[15rem] sm:w-[16.5rem] h-[2px]" />
        </div>
    </>
  )
}
export default MainChambreHote