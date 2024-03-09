import Image from "next/image";
import Link from "next/link";

import ButtonMain from "./ButtonMain";


const MainChateau = () => {
  return (
    <div className="px-4 sm:px-20 xl:px-40 grid grid-cols-1 xl:grid-cols-3 pb-20">
        <div className="">
            <h2 className="absolute text-5xl sm:text-8xl font-lora text-chatal uppercase">
                Le<br/> château
            </h2>

            <p className="pt-[11rem] sm:pt-[17rem] px-4">
            <span className="font-bold text-lg sm:text-xl">BIENVENUE AU CHÂTEAU CHAVAGNAC</span><br/><br/>
                Nous vous accueillons dans notre château du XIXème siècle de style Directoire. Entouré de bois, 
                de prés et de vignes, comme une invitation à la promenade, le château se niche sur les collines de 
                la Vallée de Rhône, non loin de Tournon. Dans un cadre authentique, vous aurez le privilège de gouter 
                au calme d’un vaste parc ombragé faisant face au Vercors.
            </p>
            <div className="px-4 pt-16 flex transition-all hover:translate-x-1 text-chatal">
                {/* <a href="/le-chateau">
                    En savoir plus
                </a>
                <SlArrowRight className="pt-2 pl-2"/> */}
                <Link href='/le-chateau'>
                    <ButtonMain/>
                </Link>
            </div>
        </div>
        <div className="pt-8 xl:pt-[9rem] xl:col-span-2 flex justify-center items-center">
            <Image src="/image/chateau-section1.jpg" 
                    alt="image"
                    width={720}
                    height={90}
                    className="rounded-xl"
            />
        </div>
    </div>
  )
}
export default MainChateau