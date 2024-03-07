import Image from "next/image";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";

import { Separator } from "@/components/ui/separator"

const MainGites = () => {
  return (
    <div className="pb-20">
        <div className="grid grid-cols-1 xl:grid-cols-3 px-4 xl:px-40">
            <div className="xl:flex hidden items-center justify-center">
            <Image src="/image/gites.jpg" 
                        alt="image"
                        width={130}
                        height={90}
                    />
            </div>
            <div className="flex xl:hidden items-center justify-center">
            <Image src="/image/gites2.jpg" 
                        alt="image"
                        width={180}
                        height={90}
                    />
            </div>
            <div className="flex justify-center items-center col-span-2 mt-12">
            <Image src="/image/gites-chateau.jpg" 
                alt="image"
                width={800}
                height={200}
                className=" rounded-xl"
            />
            </div>
        </div>
        <div className="flex xl:flex-row flex-col justify-center items-center mt-20 xl:px-[16rem] 2xl:px-[24rem] gap-10">
            <div className="flex flex-col justify-center items-center">
                <Separator className="bg-chatal w-[12rem] sm:w-[16.5rem] h-[2px]" />
                <div className="flex hover:translate-x-2 transition">
                    <Link href='/contact'>
                        <span className="font-lora text-2xl text-chatal">
                            Réserver un gîte
                        </span>
                    </Link>
                        <SlArrowRight className="text-chatal ml-2 mt-[0.6rem]" />
                </div>
                <Separator className="bg-chatal w-[12rem] sm:w-[16.5rem] h-[2px]" />
            </div>
            <div className="sm:px-20 px-12 pt-8">
                <h4 className="font-bold text-xl">
                    UNE PARENTHÈSE ENTRE AMIS OU EN FAMILLE
                </h4>
                <p className="pt-4">
                   Dans un cocon d’authenticité, réunissez-vous pour partager avec vos proches un séjour
                   au Château Chavagnac. Nous vous proposons un lieu de choix pour une pause à la campagne, 
                   en toute indépendance.
                </p>
            </div>
        </div>
    </div>
  )
}
export default MainGites