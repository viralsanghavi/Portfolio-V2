import {ActionIcon, Container, Flex} from "@mantine/core";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const footerMenu = [
    {component: "a", href: "https://google.com", source: "/linkedin.svg"},
    {component: "a", href: "https://google.com", source: "/instagram.svg"},
  ];
  return (
    <Container p="xl" py={80}>
      <Flex justify="center" gap={20}>
        {footerMenu.map(({component, href, source}) => (
          <ActionIcon
            key={source}
            component={component}
            variant="transparent"
            href={href}
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <Image src={source} width={40} height={40} />
          </ActionIcon>
        ))}
      </Flex>
    </Container>
  );
};

export default Footer;
