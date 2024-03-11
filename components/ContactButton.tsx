import Link from "next/link"

const ContactButton = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 px-4 sm:px-0">
        <button className=' border-chatal p-8 border-2'>
            <div className="flex hover:scale-105 transition duration-300 py-4">
                <Link href='/contact'>
                    <span className="font-lora uppercase text-2xl sm:text-4xl text-chatal">
                        Contactez-nous
                    </span>
                </Link>
            </div>
        </button>
    </div>
  )
}
export default ContactButton