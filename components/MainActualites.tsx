import Image from "next/image";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";

const MainActualites = () => {
  return (
    <div className="px-4 lg:px-40 pb-10">
        <h2 className="text-4xl sm:text-8xl font-lora text-chatal uppercase">
            Actualités
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 pt-8">
            <div className="border border-gray-200 rounded-xl">
                <div>
                    <Image src="/image/Shooting1.jpg" 
                        alt="image"
                        width={300}
                        height={90}
                        className="rounded-xl w-full"
                            />
                </div>
                <div className="flex flex-col gap-2 p-4">
                    <h4 className="font-bold text-md">
                    La table d’hôtes de Chavagnac, la vie de château à la Française
                    </h4>
                    <span>
                    16 Oct, 2023
                    </span>
                    <span>
                    Que serait une maison d'hôtes sans sa...
                    </span>
                </div>               
            </div>
            <div>
            <div>
                    <Image src="/image/Shooting2.jpg" 
                        alt="image"
                        width={300}
                        height={90}
                        className="rounded-xl w-full"
                            />
                </div>
                <div className="flex flex-col gap-2 p-4">
                    <h4 className="font-bold text-md">
                    « Le château de mes rêves » Saison 2 tous les jours sur M6 !
                    </h4>
                    <span>
                    3 Jan, 2023
                    </span>
                    <span>
                    Le lundi 2 janvier 2023 à 17h30, M6 a...
                    </span>
                </div>               
            </div>
            <div>
                <div>
                    <Image src="/image/Shooting3.jpg" 
                        alt="image"
                        width={300}
                        height={90}
                        className="rounded-xl w-full"
                            />
                </div>
                <div className="flex flex-col gap-2 p-4">
                    <h4 className="font-bold text-md">
                    « Le Château de mes Rêves » sur M6 avec le Chateau Chavagnac!
                    </h4>
                    <span>
                    16 Juil, 2022
                    </span>
                    <span>
                    Le lundi 25 juillet 2022 à 17h30, M6...
                    </span>
                </div>               
            </div>
        </div>
        <div className="flex justify-end hover:translate-x-2 transition mt-16">
            <Link href='/actualites'>
                <span className="font-lora text-2xl text-chatal">
                    Toutes les actualités
                </span>
            </Link>
                <SlArrowRight className="text-chatal ml-2 mt-[0.6rem]" />
        </div>
    </div>
  )
}
export default MainActualites