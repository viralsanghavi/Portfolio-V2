import React from "react";
import Container from "../container";
import Heading from "../heading";
import Image from "next/image";
import MailComponent from "@/assets/icons/mail";
import LocationComponent from "@/assets/icons/location";
const ContactMedium = ({Icon, title, value, ...valueProps}) => {
  return (
    <div className="w-fit flex lg:flex-row flex-col justify-center items-center gap-5">
      <div className="shadow-lg rounded-full p-5">
        <Icon className="text-high" />
      </div>
      <div className="flex flex-col items-center lg:items-start gap-2">
        <h5 className="font-bold text-lg">{title}</h5>
        <a
          className="font-normal text-lg text-details cursor-pointer"
          {...valueProps}
        >
          {value}
        </a>
      </div>
    </div>
  );
};
const Contact = () => {
  return (
    <section className="py-40 bg-white" id="contact">
      <Container>
        <Heading
          title="CONTACT"
          subTitle="Don't be shy! Hit me up! 👇"
          containerCN="text-center lg:text-start"
        />
        <div className="flex flex-col lg:flex-row items-center lg:justify-start justify-center gap-5 lg:gap-32 flex-wrap">
          <ContactMedium
            Icon={LocationComponent}
            title="Location"
            value="Mumbai, Maharashtra"
          />
          <ContactMedium
            Icon={MailComponent}
            title="Mail"
            value="vsanghavi3@gmail.com"
            href="mailto:vsanghavi3@gmail.com"
            referrerPolicy="no-referrer"
            target="_blank"
          />
        </div>
      </Container>
    </section>
  );
};

export default Contact;
