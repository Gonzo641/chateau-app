import Image from "next/image";
import Link from "next/link";

import { SlArrowRight } from "react-icons/sl";
import ButtonMain from "./ButtonMain";
import { Separator } from "@/components/ui/separator"

const MainMariageReception = () => {
  return (
    <>
        <div className="grid grid-cols-1 xl:grid-cols-3 px-4 xl:px-40 pb-20">
            <div className="xl:flex hidden justify-center">
                <Image src="/image/mariage-reception.jpg" 
                    alt="image"
                    width={200}
                    height={200}
                />
            </div>
            <div className="xl:hidden flex justify-center pr-6">
                <Image src="/image/mariage-reception2.jpg" 
                    alt="image"
                    width={600}
                    height={200}
                    className=" rounded-xl"
                />
            </div>
            <div className="pt-8 xl:col-span-2">
                <p className="px-0 sm:px-20 lg:px-44 xl:px-28 pb-12">
                    <span className="font-bold">LA MAGIE D’UN LIEU UNIQUE</span><br /><br />
                    Mariage réussi des vieilles pierres et de la modernité, le Château Chavagnac sera l’écrin rêvé 
                    pour ce jour exceptionnel. Privatisez le domaine pour offrir à vos convives des souvenirs inoubliables, 
                    dans l’élégance d’un cadre champêtre et convivial.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-12">
                    <Image src="/image/badge-award.jpg" 
                        alt="image"
                        width={150}
                        height={90}
                        className="pb-8 sm:pb-0"
                    />
                    <Link href='/mariages-receptions'>
                        <ButtonMain/>
                    </Link>
                </div>
                <div className="pt-10 flex justify-center items-center">
                    <Image src="/image/mariee1.jpg" 
                        alt="image"
                        width={620}
                        height={500}
                        className="rounded-xl object-cover"
                    />
                </div>
            </div>
        </div>
        <div className="pb-20 flex flex-col justify-center items-center">
            <Separator className="bg-chatal w-[14rem] sm:w-[16.5rem] h-[2px]" />
            <div className="flex hover:translate-x-2 transition">
                <span className="font-lora text-2xl text-chatal">
                    Privatiser le château
                </span>
                <SlArrowRight className="text-chatal ml-2 mt-[0.6rem]" />
            </div>
            <Separator className="bg-chatal w-[14rem] sm:w-[16.5rem] h-[2px]" />
        </div>
    </>
  )
}
export default MainMariageReception