"use client"

import SeparatorCastel from "@/components/SeparatorCastel"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { FaInstagram } from "react-icons/fa6"
import { FaFacebookF } from "react-icons/fa"
import {
Select,
SelectContent,
SelectItem,
SelectTrigger,
SelectValue,
} from "@/components/ui/select"
import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"



const ContactPage = () => {
  return (
    <div className="mt-[123px]">
      <div className="flex justify-center px-64">
        <div className="bg-white w-[74rem] h-[47rem] absolute z-20">
          <div className="flex flex-col justify-center items-center">
            <h2 className="uppercase font-lora text-chatal text-4xl xl:text-8xl pt-20">
              Contactez-nous
            </h2>
            <p className="py-14 font-bold text-xl">
              Vous recherchez un lieu privilégié pour votre évènement, vous êtes au bon endroit. 
            </p>
          </div>
          <SeparatorCastel />
          <p className="text-center px-32">
          Pour votre demande, contactez-nous à {" "}
          <a className="underline" href="mailto:contact@chateauchavagnac.com">
            contact@chateauchavagnac.com
          </a>  ou remplissez tout simplement le formulaire ci-dessous, 
          nous vous recontacterons dans les plus brefs délais. Vous pouvez bien entendu nous joindre par téléphone également.
          </p>

          <div className="flex flex-col z-20 pt-10 px-64">
            <div className="flex items-center gap-2">
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">Madame</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Monsieur</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex flex-col pt-8 gap-2">
              <div className="flex gap-2">
                <Input type="name" placeholder="Nom" />
                <Input type="last-name" placeholder="Prénom" />
              </div>
              <div className="flex gap-2">
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Téléphone" />
              </div>
              <p className="pt-4 text-md">
                Votre demande
              </p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Précisez votre choix" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="renseignement">Renseignement</SelectItem>
                  <SelectItem value="reservation">Réservation</SelectItem>
                  <SelectItem value="autre">Autre demande</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex justify-center flex-row pt-10 gap-8">
                  <Link href="https://www.instagram.com/chateauchavagnac/">
                    <FaFacebookF className="text-chatal text-3xl hover:opacity-80 transition duration-300" />
                  </Link>
                  <Link href="https://www.facebook.com/chateauchavagnac/">
                    <FaInstagram className="text-chatal text-3xl hover:opacity-80 transition duration-300" />
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[47rem]">
        <img src="/image/contact-header.jpg" alt="image" className="w-full h-[47rem] object-cover" />
      </div>

      <div className="flex flex-col xl:flex-row justify-center mt-40 gap-8 px-28">
        <div className="flex flex-col w-72 gap-2">
          <Separator className="bg-black w-full h-1 rounded-xl" />
          <p className="font-semibold">
            F A Q
          </p>
          <h4 className="font-semibold text-2xl mt-4">
            Questions fréquentes
          </h4>
        </div>
        <div className="flex flex-col gap-2">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Puis-je venir avec mon petit chien ?</AccordionTrigger>
              <AccordionContent>
                Nous adorons les animaux, nous partageons d’ailleurs<br /> notre quotidien avec un petit chien, des chats et des chèvres.<br /> 
                Afin d’éviter les contrariétés des maîtres et des animaux,<br /> nous sommes désolés de ne pouvoir accepter votre petit chien.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Les chambres sont elles climatisées ?</AccordionTrigger>
              <AccordionContent>
                Non, le château ne dispose pas de système de climatisation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Avez-vous des chambres pour 3 personnes ?</AccordionTrigger>
              <AccordionContent>
                Toutes les chambres du Chateau ont été conçues<br /> pour 2 personnes, sans couchage complémentaire. <br />
                Le château n’est pas adapté pour accueillir des enfants.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Est ce qu'il faut apporter nos serviettes de piscine ?</AccordionTrigger>
              <AccordionContent>
                Non, tout le linge de toilette est disponible<br /> dans chaque chambre du Château Chavagnac.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>En venant de Lyon, quelle est la sortie d'autoroute ?</AccordionTrigger>
              <AccordionContent>
                Le château se trouve à une quinzaine de minutes <br />de la sortie d’autoroute Tain l’Hermitage/ Tournon
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Quelles sont les heures d'arrivée et de départ pour notre chambre ?</AccordionTrigger>
              <AccordionContent>
                Le jour de votre arrivée, nous vous attendrons à partir de 15:00.<br />
                Veuillez nous prévenir si vous pensez arriver tardivement (après 19h30).<br />
                <br /><br />
                Le jour de votre départ, la limite du check out est fixée à 11:00.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>Faites-vous table d’hôtes ?</AccordionTrigger>
              <AccordionContent>
                Nous proposons la table d’hôtes au château sur réservation,<br /> au plus tard la veille de votre arrivée.<br />
                Le menu, unique, est à 49 € par personne, incluant<br /> pour l’apéritif la dégustation du vin produit par
                les vignes du château.<br /><br /> Si le temps le permet, nous vous servons<br /> dans le jardin à des tables individuelles… <br />
                en cas de météo capricieuse, la salle a manger<br /> prend le relais pour votre diner aux chandelles!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>Où peut-on garer notre voiture ?</AccordionTrigger>
              <AccordionContent>
                Le château dispose d’un très vaste parking situé dans l’enceinte du domaine.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>Acceptez-vous les cartes bancaires ?</AccordionTrigger>
              <AccordionContent>
                Oui, vous pouvez régler l’acompte et le solde de votre séjour<br /> en carte bancaire, en espèces ou en Chèques
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="flex justify-center items-center bg-contact w-full h-[43rem] bg-no-repeat bg-cover mt-10">
          <div className="flex items-center px-40 w-[68rem] h-[32rem] bg-white rounded-xl">
            <div className="flex flex-col gap-8">
              <p className="text-2xl">
                MARIAGES, RÉCEPTIONS, SÉMINAIRES, WEEK-ENDS EN AMOUREUX…
              </p>
              <p className="text-4xl">
                Le Château Chavagnac vous accueille toute l’année dans un cadre magnifique…
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}
export default ContactPage