"use client";

import React from "react";
import { actuData } from "@/lib/data";
import Actu from "@/components/Actu";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const ActualitesPage = () => {
  return (
    <section className="mb-10">
      <div className="mt-[123px]">
              {actuData.map((actu, index) => (
                  <React.Fragment key={index}>
                      <Actu {...actu} />
                  </React.Fragment>
              ))}
      </div>
      <div className="flex flex-col justify-center items-center px-6 xl:px-[20rem] gap-2">
        <Label className="font-semibold text-lg">Rechercher</Label>
        <Input type="search" placeholder="Rechercher" className="w-[15rem]" />
        <h4 className="font-semibold text-lg">Archives</h4>
        <ul>
          <li className="pb-1">octobre 2023</li>
          <li className="pb-1">janvier 2023</li>
          <li className="pb-1">juillet 2022</li>
          <li className="pb-1">juin 2022</li>
          <li className="pb-1">mai 2022</li>
          <li className="pb-1">octobre 2021</li>
          <li className="pb-1">juillet 2021</li>
          <li className="pb-1">juin 2021</li>
          <li className="pb-1">mai 2021</li>
          <li className="pb-1">mars 2021</li>
          <li className="pb-1">octobre 2020</li>
          <li className="pb-1">octobre 2020</li>
          <li className="pb-1">juillet 2020</li>
          <li>février 2020</li>
        </ul>
      </div>
    </section>
  )
}
export default ActualitesPage