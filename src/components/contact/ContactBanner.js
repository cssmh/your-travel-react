import React from 'react';
import ContactCard from '../snippets/ContactCard';
import { MdOutlineAttachEmail } from "react-icons/md";
import { TbPhonePlus } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
const ContactBanner = () => {
    const cardData = [
        {
          id: 1,
          icon:CiHeart,
          title: "We worry",
          paragraph1: "Your experience is very important to us.",
          paragraph2: " Please share your thoughts with us.",
        },
        {
          id: 1,
          icon: MdOutlineAttachEmail,
          title: "Email us",
          paragraph1: "We are available to assist.",
          paragraph2: "yourtrip24@info.com",
        },
        {
          id: 1,
          icon: TbPhonePlus,
          title: "Contact us",
          paragraph1: "We are available to assist you. 24/7",
          paragraph2: "Toll Free +(44) 123 456 7890",
         
        },
        {
          id: 1,
          icon: SlLocationPin,
          title: "Visit us",
          paragraph1: "Our crew is available to assist you.",
          paragraph2: "Falkenstrasse 28A, 8008 Zürich, Switzerland",
        },
      ];
  return (
    <>
    <div className="text-center mt-16 mb-8">
    <h1 className=" text-red-600 text-2xl font-semibold">Contact us </h1>
    <h3 className="text-black sm:text-4xl text:lg font-semibold mt-2">We would love hearing from you </h3>
    <p className="mt-1">We are always here to assist you with any questions.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 md:px-36 px:4">
  {cardData.map((card) => (
    <ContactCard
      key={card.id}
      icon={card.icon}
      title={card.title}
      paragraph1={card.paragraph1}
      paragraph2={card.paragraph2}
    />
  ))}
</div>
</>
  )
}

export default ContactBanner;