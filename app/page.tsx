import Image from "next/image";

import MainChateau from "@/components/MainChateau";
import MainMariageReception from "@/components/MainMariageReception";
import SeparatorCastel from "@/components/SeparatorCastel";
import MainChambreHote from "@/components/MainChambreHote";
import MainGites from "@/components/MainGites";

export default function Home() {
  return (
    <section className="mt-[123px]">
      <div className="flex justify-center items-center">
        {/* <video src="/video/chateau-min.mp4"
              autoPlay 
              muted 
              loop 
              className="w-full"/> */}
        <Image src="/image/chateau-header.jpg" 
        alt="image"
        width={1090}
        height={90}
        className=" rounded-xl"
        />
      </div>


      <div className=" mt-16 gap-2 px-4 md:px-40">
        <div className="flex items-center justify-center">
          <p className="text-center text-lg px-2 xl:px-24">
          <span className="font-bold text-2xl text-chatal font-lora">Le Château de Chavagnac</span><br/><br/>
          « Niché dans un domaine de plus de 13 hectares, en plein coeur de l’Ardèche, 
          nous vous ouvrons les portes de notre maison, le Château Chavagnac qui vous accueillera
          à l’ombre de ses arbres centenaires. Découvrez ce lieu unique, idéal pour un mariage chic 
          et champêtre ou tout simplement pour un séjour romantique dans 
          l’une de nos chambres avec vue sur le jardin. »<br/>

          Nous sommes à votre disposition<br/> au 06.71.99.18.29
          <br/>
          ou sur
          <br/>
          contact@chateauchavagnac.com
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
          <div className="flex items-center justify-center pt-4 md:pt-0">
            <Image src="/image/trip-advisor.png" 
                  alt="image"
                  width={290}
                  height={90}
            />
          </div>
          <div className="flex items-center justify-center pt-4 md:pt-0">
            <Image src="/image/Digital-Award.png" 
                  alt="image"
                  width={290}
                  height={90}
            />
          </div>
        </div>
        
        <div className="flex items-center justify-center pt-20 mb-28">
        <Image src="/image/fontaine.jpg" 
              alt="image"
              width={1100}
              height={90}
              className="rounded-md"
            />
        </div>
      </div>
      <MainChateau />
      <SeparatorCastel />
      <MainMariageReception />
      <SeparatorCastel />
      <MainChambreHote />
      <SeparatorCastel />
      <MainGites />
      <SeparatorCastel />
    </section>
  );
}
