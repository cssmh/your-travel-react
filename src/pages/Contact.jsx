import React from "react";
import ContactForm from "../components/contact/ContantForm";
import MapCard from "../components/contact/MapCard";
import ContactBanner from "../components/contact/ContactBanner";
const Contact = () => {
  return (
    <>
      <div>
        <ContactBanner />
      </div>
      <div className="flex flex-col lg:flex-row gap-1 my-10   md:px-36 px:4">
        <ContactForm />
        <MapCard />
      </div>
    </>
  );
};

export default Contact;
