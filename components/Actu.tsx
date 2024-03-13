"use client";

import Image from "next/image";
import { actuData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

type ActuProps = (typeof actuData)[number];

export default function Actu({ title, description, date, imageUrl}: ActuProps) {
  return (
    <div className="flex flex-col justify-center items-center px-6 xl:px-[20rem]">
        <Image 
            src={imageUrl}
            alt="actualites"
            className="object-cover rounded-xl"
        />
        <div className="py-10">
            <h4 className="font-lora text-2xl mb-2">
                {title}
            </h4>
            <p className="mb-2">
                {date}
            </p>
            <p>
                {description}
            </p>
        </div>
    </div>
  )
}
