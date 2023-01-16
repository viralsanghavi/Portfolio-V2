import {Card, Flex, Grid} from "@mantine/core";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import MainLayout from "../../components/MainLayout";
import LeftContent from "../../components/PageComponents/Contact/LeftContent";
import RightContent from "../../components/PageComponents/Contact/RightContent";

const Contact = () => {
  const workList = [
    {
      title: "Website design  & development",
      description:
        "Experienced designer & visual developer. I love using tools like Figma and Illustrator.",
      source: "/instagram.svg",
    },
    {
      title: "App design  & development",
      description:
        "Eye for the visual side of things. I enjoy crafting beautiful illustrations and animations!",
      source: "/instagram.svg",
    },
    {
      title: "Architecture design on AWS",
      description:
        "Eye for the visual side of things. I enjoy crafting beautiful illustrations and animations!",
      source: "/instagram.svg",
    },
  ];
  return (
    <MainLayout>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Viral Sanghavi Contact" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/profile.webp" />
      </Head>

      {/* Left Part */}
      <Grid
        grow
        spacing="lg"
        breakpoints={[
          {maxWidth: 1020, cols: 2, spacing: "md"},
          {maxWidth: 780, cols: 1, spacing: "md"},
        ]}
      >
        <Grid.Col md={1} lg={1}>
          <LeftContent />
        </Grid.Col>
        {/* right Part */}
        <Grid.Col md={4} lg={4}>
          <RightContent />
        </Grid.Col>
      </Grid>
      <Grid justify="flex-start" py={20} align="center" grow>
        {workList.map(({title, description, source}) => (
          <Grid.Col md={1} lg={1} key={title}>
            <Card
              w="100%"
              radius={10}
              py={40}
              sx={{
                height: "320px",
              }}
            >
              <Image src={source} width={60} height={60} />
              <h2>{title}</h2>
              <p>{description}</p>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </MainLayout>
  );
};

export default Contact;
