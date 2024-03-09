import ButtonMain from "@/components/ButtonMain"
import SeparatorCastel from "@/components/SeparatorCastel"
import Link from "next/link"
import Image from "next/image";


const ChateauPage = () => {
    return (
      <div className="mt-[123px]">
        <div className="w-full h-[36rem] flex justify-center items-center">
          <h2 className="absolute uppercase text-4xl xl:text-7xl text-white font-lora text-center">
            Chateau chavagnac
          </h2>
          <img src="/image/Lechateau/Lechateau.jpg" alt="image" className="w-full h-[37rem] object-cover" />
        </div>

        <div className="flex flex-col xl:flex-row px-4 xl:px-64 gap-8 mb-8 xl:mb-0">
          <img src="/image/Lechateau/Lechateau2.jpg" alt="image" className="w-full h-[40rem] -mt-10 rounded-xl object-cover" />
          <div className="flex flex-col p-4 xl:p-20 gap-4">
            <h4 className="font-bold text-xl">
              BIENVENUE AU CHÂTEAU CHAVAGNAC
            </h4>
            <p>
              Nous vous accueillons dans notre château du XIXème siècle de style Directoire. 
              Entouré de bois, de prés et de vignes, comme une invitation à la promenade, 
              le château se niche sur les collines de la Vallée de Rhône, non loin de Tournon. 
              Dans un cadre authentique, vous aurez le privilège de gouter au calme d’un vaste 
              parc ombragé faisant face au Vercors.
            </p>
            <div className="pt-16 flex transition-all hover:translate-x-1 text-chatal">
              <Link href='/le-chateau'>
                <ButtonMain/>
              </Link>
            </div>
            <img src="/image/Lechateau/Lechateau3.jpg" alt="image" className="w-full h-[20rem] mt-12 rounded-xl object-cover" />
          </div>
        </div>

        <SeparatorCastel />

        <div className="px-4 xl:px-[17rem]">
          <h2 className="absolute text-5xl sm:text-9xl font-lora text-chatal uppercase">
                  Les<br/> jardins
          </h2>
        </div>
        <div className="px-4 sm:px-20 xl:px-64 grid grid-cols-1 xl:grid-cols-3 pb-10 mt-0 xl:mt-12">
          <p className="pt-32 sm:pt-[17rem] px-0 xl:px-4">
          <span className="font-bold text-lg sm:text-xl">UN HAVRE DE VERDURE POUR UNE PARENTHESE ENCHANTEE</span><br/><br/>
          A l’ombre des marronniers, le jardin à la française et ses topiaires de buis vous accueillent et vous invitent à 
          flâner jusqu’au parc planté d’arbres centenaires. De là partent plusieurs chemins de promenade abrités sous
          les tilleuls et les chênes… mais pourquoi ne pas plutôt s’installer avec un bon livre ou apprécier le plaisir de 
          boire un petit café dans un cadre hors du temps ?
          </p>
          <div className="pt-8 xl:pt-[9rem] xl:col-span-2 flex justify-center items-center">
              {/* <Image src="/image/Lechateau4.jpg" 
                      alt="image"
                      width={720}
                      height={90}
                      className="rounded-xl"
              /> */}
              <img src="/image/Lechateau/Lechateau4.jpg" alt="image" className="w-full h-80 lg:h-[30rem] xl:h-[35rem] object-cover rounded-xl"/>
          </div>
        </div>
        <div className="px-4 sm:px-20 xl:px-64">
          <img src="/image/Lechateau/Lechateau5.jpg" alt="image" className="w-full h-40 lg:h-[30rem] xl:h-[35rem] object-cover rounded-xl"/>
        </div>
      </div>
    )
  }
  export default ChateauPage