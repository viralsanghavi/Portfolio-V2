import React from "react";
import Container from "../container";
import Heading from "../heading";
import Image from "next/image";
import MailComponent from "@/assets/icons/mail";
import LocationComponent from "@/assets/icons/location";
const ContactMedium = ({Icon, title, value}) => {
  return (
    <div className="w-fit flex items-center gap-5 ">
      <div className="shadow-lg rounded-full p-5">
        <Icon className="text-high" />
      </div>
      <div className="flex flex-col gap-2">
        <h5 className="font-bold text-lg">{title}</h5>
        <p className="font-normal text-lg text-details">{value}</p>
      </div>
    </div>
  );
};
const Contact = () => {
  return (
    <section className="py-40 bg-white" id="contact">
      <Container>
        <Heading title="CONTACT" subTitle="Don't be shy! Hit me up! 👇" />
        <div className="flex gap-32 flex-wrap">
          <ContactMedium
            Icon={LocationComponent}
            title="Mail"
            value="vsanghavi3@gmail.com"
          />
          <ContactMedium
            Icon={MailComponent}
            title="Mail"
            value="vsanghavi3@gmail.com"
          />
        </div>
      </Container>
    </section>
  );
};

export default Contact;
