import Link from "next/link";

import { Separator } from "./ui/separator"
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
      <footer>
          <Separator className='w-full bg-chatal' />
          <div className="px-4 lg:px-40 xl:px-64 pt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col">
                    <h4 className="uppercase text-xl text-chatal font-bold">
                        Contact
                    </h4>
                    <span className="pt-2">Silvère et Franck Goudard-Peyrolon</span>
                    <span>Château Chavagnac</span>
                    <span>Route de Tournon</span>
                    <span>07610 LEMPS</span>
                    <span className="pt-2">Tél. : 09 82 26 89 76</span>
                    <span>Port : 06 71 99 18 29</span>
                </div>
                <div className="flex flex-col pt-4 sm:pt-0">
                    <h4 className="uppercase text-xl text-chatal font-bold">
                        Liens
                    </h4>
                    <span className="pt-2">Mentions légales</span>
                    <span>Politique de confidentialité</span>
                    <div className="flex flex-row pt-4 gap-1">
                        <Link href="https://www.instagram.com/chateauchavagnac/">
                            <FaInstagram className="text-chatal text-3xl hover:opacity-80 transition duration-300" />
                        </Link>
                        <Link href="https://www.facebook.com/chateauchavagnac/">
                            <FaFacebookF className="text-chatal text-3xl hover:opacity-80 transition duration-300" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mx-auto py-10 flex flex-col sm:flex-row justify-center items-center gap-2">
                <p className="text-xs pb-4 sm:pb-2">
                    &copy; Château Chavagnac. All rights reserved.
                </p>
            </div>
          </div>
      </footer>
    )
  }
  export default Footer