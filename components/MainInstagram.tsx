"use client";

import { motion } from 'framer-motion'
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { Separator } from './ui/separator';

const MainInstagram = () => {
  return (
    <div className="px-4 lg:px-40 pt-10 pb-20">
        <h2 className="text-4xl sm:text-9xl font-lora text-chatal uppercase">
            Suivez nous sur instagram
        </h2>

        <motion.div 
              className='flex gap-2 mt-10'
              initial={{ opacity: 0, y: 100}}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.6,
                ease: [0, 0.71, 0.2, 1.01]
              }}
          >
            <Link 
                href="https://www.instagram.com/chateauchavagnac/" 
                target="_blank"
                className='text-xl transition'
                >
                <button className='flex items-center justify-center bg-chatal w-9 
                                    h-9 rounded-full hover:scale-[1.15] transition'>
                    <FaInstagram className='text-white hover:text-black transition' />
                </button>  
            </Link>
            <Link 
              href="https://www.instagram.com/chateauchavagnac/" 
              target="_blank"
              className='text-xl pt-1'
            >
                chateauchavagnac
            </Link>
        </motion.div>

          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 px-4 xl:px-20 mt-12'>
            <Link 
              href="https://www.instagram.com/chateauchavagnac/" 
              target="_blank"
            >
                <Image src="/image/Grid1.png" 
                    alt="image"
                    width={450}
                    height={90}
                    className="hover:opacity-70 transition"
                />
            </Link>
            <Link 
              href="https://www.instagram.com/chateauchavagnac/" 
              target="_blank"
            >
                <Image src="/image/Grid2.png" 
                    alt="image"
                    width={450}
                    height={90}
                    className="hover:opacity-70 transition"
                />
            </Link>
            <Link 
              href="https://www.instagram.com/chateauchavagnac/" 
              target="_blank"
            >
                <Image src="/image/Grid3.png" 
                    alt="image"
                    width={450}
                    height={90}
                    className="hover:opacity-70 transition"
                />
            </Link>
            <Link 
              href="https://www.instagram.com/chateauchavagnac/" 
              target="_blank"
            >
                <Image src="/image/Grid4.png" 
                    alt="image"
                    width={450}
                    height={90}
                    className="hover:opacity-70 transition"
                />
            </Link>
            <Link 
              href="https://www.instagram.com/chateauchavagnac/" 
              target="_blank"
            >
                <Image src="/image/Grid5.png" 
                    alt="image"
                    width={450}
                    height={90}
                    className="hover:opacity-70 transition"
                />
            </Link>
            <Link 
              href="https://www.instagram.com/chateauchavagnac/" 
              target="_blank"
            >
                <Image src="/image/Grid6.png" 
                    alt="image"
                    width={450}
                    height={90}
                    className="hover:opacity-70 transition"
                />
            </Link>
            <Link 
              href="https://www.instagram.com/chateauchavagnac/" 
              target="_blank"
            >
                <Image src="/image/Grid7.png" 
                    alt="image"
                    width={450}
                    height={90}
                    className="hover:opacity-70 transition"
                />
            </Link>
            <Link 
              href="https://www.instagram.com/chateauchavagnac/" 
              target="_blank"
            >
                <Image src="/image/Grid8.png" 
                    alt="image"
                    width={450}
                    height={90}
                    className="hover:opacity-70 transition"
                />
            </Link>
            <Link 
              href="https://www.instagram.com/chateauchavagnac/" 
              target="_blank"
            >
                <Image src="/image/Grid9.png" 
                    alt="image"
                    width={450}
                    height={90}
                    className="hover:opacity-70 transition"
                />
            </Link>
          </div>

          <div className="flex flex-col justify-center items-center pt-20">
                {/* <Separator className="bg-chatal w-full h-[2px]" /> */}
                <button className=' border-chatal p-8 border-2'>
                    <div className="flex hover:scale-105 transition duration-300 py-4">
                        <Link href='/contact'>
                            <span className="font-lora uppercase text-2xl sm:text-4xl text-chatal">
                                Contactez-nous
                            </span>
                        </Link>
                    </div>
                </button>
                {/* <Separator className="bg-chatal w-full h-[2px]" /> */}
            </div>
    </div>
  )
}
export default MainInstagram