"use client";

import Link from 'next/link'
import React, { useState } from 'react';
// import { FaInstagram } from "react-icons/fa6";
// import { FaFacebook } from "react-icons/fa";

// import { ThemeToggle } from './ThemeToogle'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';
  
export default function Navbar() {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };

  return (
    <header className='gap-4 z-[999] relative px-0'>
      <div className='bg-white top-0 fixed flex justify-center w-full gap-[4.6rem]'>  
        <Image src="/image/logo.jpg" 
                alt="logo"
                width={90}
                height={70}
        />
        <nav className='pt-4 pb- xl:flex flex-col z-50 text-chatal ml-2 hidden'>
            <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <span className='text-lg'>Accueil</span>    
                        </NavigationMenuLink>
                    </Link>
                    <Link href="/le-chateau" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <span className='text-lg'>Le chateau</span>
                        </NavigationMenuLink>
                    </Link>
                    <Link href="/mariages-receptions" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <span className='text-lg'>Mariages & réceptions</span>
                        </NavigationMenuLink>
                    </Link>

                    <NavigationMenuTrigger>
                    <span className='text-lg'>Chambres d'hôtes</span>
                    </NavigationMenuTrigger>
                    
                    <NavigationMenuContent>
                        <Link href="/chambre-saint-joseph" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Chambre Saint-Joseph
                            </NavigationMenuLink>
                        </Link>
                        <Link href="/chambre-condrieu" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Chambre Condrieu
                            </NavigationMenuLink>
                        </Link>
                        <Link href="/suite-cote-rotie" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Suite Côte-Rôtie
                            </NavigationMenuLink>
                        </Link>
                        <Link href="/suite-hermitage" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Suite Hermitage
                            </NavigationMenuLink>
                        </Link>
                        <Link href="/suite-la-chapelle" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Suite La Chapelle
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuContent>
                    
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                <NavigationMenuTrigger>
                    <span className='text-lg'>Gites</span>
                </NavigationMenuTrigger>

                    <NavigationMenuContent>
                        <Link href="/gite-syrah" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Gite Syrah
                            </NavigationMenuLink>
                        </Link>
                        <Link href="/gite-viognier" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Gite Viognier
                            </NavigationMenuLink>
                        </Link>
                        <Link href="/gite-marsanne" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Gite Marsanne
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuContent>

                    </NavigationMenuItem>

                    <NavigationMenuItem>
                    <Link href="/actualites" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <span className='text-lg'>Actualités</span>
                        </NavigationMenuLink>
                    </Link>
                    <Link href="/contact" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <span className='text-lg'>Contact</span>
                        </NavigationMenuLink>
                    </Link>
                    </NavigationMenuItem>
                    {/* <div onClick={handleNav}
                        className='md:hidden ml-auto'>
                        <AiOutlineMenu size={25} />
                    </div>
                    <div
                className={
                nav ? 'md:hidden fixed right-0 top-0 w-full h-full bg-black/70' : ''
                }
            >
                Side Drawer Menu
                <div
                className={
                    nav
                    ? ' fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-full bg-[#ecf0f3] p-6 ease-in duration-500'
                    : 'fixed right-[-100%] top-0 p-6 ease-in duration-500'
                }
                >
                <div>
                </div>
                </div>
                </div> */}
            </NavigationMenuList>
            </NavigationMenu>
        </nav>
      </div>     
    </header>
  )
}

