import Image from "next/image";

const ImageGrid = () => {
  return (
    <div className="hidden md:block px-10 sm:px-0 mt-20 space-y-2 ">
      <div className="flex justify-center space-x-2 w-full">
        <Image
          src="/image/chambre-hotes-condrieu-chavagnac.jpg"
          width={200}
          height={200}
          alt="image"
          className="object-cover rounded-lg"
        />
        <Image
          src="/image/chambre-hotes-saint-joseph-chavagnac.jpg"
          width={300}
          height={200}
          alt="image"
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex justify-center space-x-2">
        <Image
          src="/image/suite-hotes-cote-rotie-chavagnac.jpg"
          width={200}
          height={200}
          alt="image"
          className="object-cover rounded-lg"
        />
        <Image
          src="/image/suite-hotes-hermitage-chavagnac.jpg"
          width={300}
          height={200}
          alt="image"
          className="object-cover rounded-lg"
        />
      </div>
      {/* <Image
          src="/image/suite-la-chapelle.jpg"
          width={600}
          height={200}
          alt="image"
          className="object-cover rounded-lg"
        /> */}
    </div>
  )
}
export default ImageGrid