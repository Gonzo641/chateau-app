"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import Logo from './Logo';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import { Separator } from './ui/separator';

const Header = () => {
  const [nav, setNav] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    setIsMounted(true);
}, []);

if (!isMounted) {
    return null;
}

  return (
    <header className='gap-4 z-[999] relative px-0'>
      <div className='bg-white top-0 fixed flex justify-center w-full md:gap-[4.6rem]'>  
        <Image src="/image/logo.jpg" 
                alt="logo"
                width={90}
                height={70}
                className='hidden xl:block'
        />
        <div className='xl:hidden w-full flex justify-between items-center'>
            <div className='px-4 pt-4'>
            <Logo />
            </div>
            <div
                onClick={handleNav}
                className='p-4 sm:p-0 text-chatal'
            >
                <AiOutlineMenu size={25} />
            </div>
        </div>
        <div className='pt-4 pb-2 xl:flex z-50 text-chatal ml-2 hidden'>
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

            </NavigationMenuList>
            </NavigationMenu>
                      {/* Hamburger Icon */}
        </div>


                {/* ============================================================ Mobile Menu =========================================================*/}
      {/* Overlay */}
            <div
                className={
                nav ? 'xl:hidden fixed right-0 top-0 w-full h-full bg-black/70' : ''
                }
            >
                {/* Side Drawer Menu */}
                <div
                className={
                    nav
                    ? ' fixed right-0 top-0 w-[100%] sm:w-[60%] md:w-[45%] h-full bg-[#ecf0f3] p-6 ease-in duration-500'
                    : 'fixed right-[-100%] top-0 p-6 ease-in duration-500'
                }
                >
                <div>
                    <div className='flex w-full items-center justify-between'>
                    <Link href="/">
                        <Logo />
                    </Link>
                    <div
                        onClick={handleNav}
                        className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
                    >
                        <AiOutlineClose />
                    </div>
                    </div>
                </div>
                <div className='py-4 flex flex-col text-chatal'>
                    <div className='flex flex-col gap-1 pb-4'>
                        <Link href="/">
                            <span className='text-lg'>Accueil</span>
                        </Link>
                        <Link href="/le-chateau">
                            <span className='text-lg'>Le chateau</span>
                        </Link>
                        <Link href="/mariages-receptions">
                            <span className='text-lg'>Mariages & réceptions</span>
                        </Link>
                    </div>

                    <div className='flex flex-col gap-1 pb-4'>
                        <span className='text-lg text-black'>Chambres d'hôtes</span>
                        <Separator className='bg-gray-400 w-40' />
                        <div className='flex flex-col gap-1 pl-6'>
                            <Link href="/chambre-saint-joseph">
                                <span className='text-lg'>Chambre Saint-Joseph</span>
                            </Link>
                            <Link href="/chambre-condrieu">
                                <span className='text-lg'>Chambre Condrieu</span>
                            </Link>
                            <Link href="/suite-cote-rotie">
                                <span className='text-lg'>Suite Côte-Rôtie</span>
                            </Link>
                            <Link href="/suite-hermitage">
                                <span className='text-lg'>Suite Hermitage</span>
                            </Link>
                            <Link href="/suite-la-chapelle">
                                <span className='text-lg'>Suite La Chapelle</span>
                            </Link>
                        </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <span className='text-lg text-black'>Gites</span>
                        <Separator className='bg-gray-400 w-40' />
                        <div className='flex flex-col gap-1 pl-6'>
                            <Link href="/gite-syrah">
                                <span className='text-lg'>Gite Syrah</span>
                            </Link>
                            <Link href="/gite-viognier">
                                <span className='text-lg'>Gite Viognier</span>
                            </Link>
                            <Link href="/gite-marsanne">
                                <span className='text-lg'>Gite Marsanne</span>
                            </Link>
                        </div>

                        <Link href="/actualites">
                            <span className='text-lg'>Actualités</span>
                        </Link>
                        <Link href="/contact">
                            <span className='text-lg'>Contact</span>
                        </Link>
                    </div>

                </div>
                </div>
            </div>
      </div>     
    </header>
  );
};

export default Header;