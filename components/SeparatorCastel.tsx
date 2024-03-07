import Image from "next/image";

const SeparatorCastel = () => {
  return (
    <div className="flex justify-center items-center pb-14">
        <Image src="/image/separateur-chateau.png" 
            alt="image"
            width={190}
            height={90}
            className=" rounded-xl"
        />
    </div>
  )
}
export default SeparatorCastel