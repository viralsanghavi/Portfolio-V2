import {
  BackgroundImage,
  Card,
  Flex,
  Grid,
  Image,
  Space,
  Title,
} from "@mantine/core";
import Head from "next/head";
import React from "react";
import MainLayout from "../../components/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <Head>
        <title>About</title>
        <meta name="description" content="Viral Sanghavi About me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/profile.webp" />
      </Head>
      <Flex direction="column" gap={20}>
        <Grid grow>
          <Grid.Col md={1} lg={7}>
            <BackgroundImage
              src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
              radius="lg"
              sx={{height: "100%"}}
              mih="230px"
            />
          </Grid.Col>
          <Grid.Col md={1} lg={1}>
            <Card radius="lg" mih="230px">
              <Title size="h1">Hi, I&apos;m</Title>
              <Title size="h1">Viral</Title>
              <Title>👋</Title>
              <Space h="xs" />
              <Title size="h4">Software Developer</Title>
            </Card>
          </Grid.Col>
        </Grid>
        <Card radius="lg">
          <Title size="h4" color="white">
            About me
          </Title>
          <Space h="lg" />
          <Title size="span">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            quidem quos tempora harum fugiat quaerat. Corporis reiciendis error
            neque exercitationem incidunt similique molestias quaerat ipsa
            nostrum. Neque, ab laborum. Quo. Assumenda debitis voluptatum quis
            reprehenderit, delectus accusantium sequi, ullam suscipit vel
            recusandae sit quam doloremque obcaecati similique. Eum, reiciendis
            mollitia laborum, suscipit, nesciunt inventore culpa blanditiis
            ullam ex quidem eligendi. Vitae repudiandae, culpa optio in esse
            quod eveniet repellendus magni placeat fuga deleniti, asperiores
            nihil eum voluptate. Officiis odio vel laboriosam sequi itaque
            consectetur ab libero, aperiam ex veritatis architecto! Aperiam
            asperiores molestiae dolore similique fugit exercitationem
            quibusdam, blanditiis delectus? Earum expedita necessitatibus et
            dolor esse neque perferendis vitae eum impedit ab sapiente
            voluptatum omnis consequatur, quasi est voluptatem. Eveniet. Ipsum,
            reiciendis nobis minus molestias corporis adipisci animi veniam id,
            totam dolorem qui! Hic aut modi quasi ut praesentium alias, odio
            distinctio cum neque quia corporis autem at eveniet iusto. Voluptas
            neque consequatur laudantium incidunt ea, dignissimos vitae aliquam
            repellendus quasi provident dolores non dolor velit repellat? Et,
            ullam. Exercitationem nesciunt repellendus sit maiores expedita.
            Cupiditate perspiciatis soluta recusandae ea. Voluptatum iste quae
            neque delectus eum ea blanditiis aspernatur impedit, nihil, suscipit
            sed quisquam, distinctio illum hic laudantium. Maxime reiciendis
            aliquid voluptate saepe, quibusdam laudantium soluta amet
            perferendis qui ab. Modi aspernatur facere praesentium ad omnis
            aperiam odit, odio voluptatibus numquam! Atque velit voluptatibus
            minus iusto laborum perspiciatis. Consequatur, soluta! Repellendus
            et itaque accusamus rerum eius perferendis suscipit dolorum
            quibusdam. Distinctio, error? Mollitia ipsum dolores delectus
            repellendus. Nisi magnam, ullam, quas maiores libero nostrum dolores
            excepturi temporibus in fugit dolore cupiditate molestiae et culpa
            odio corporis? Adipisci accusantium unde iste! Aspernatur sequi
            iusto odit, laboriosam ut ducimus, et autem voluptate dolor fugiat
            quae accusamus veritatis. Voluptas exercitationem aperiam, tempora
            ipsam repellendus iusto in deserunt sit, numquam sequi alias
            expedita quaerat.
          </Title>
        </Card>
        <Grid grow>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((a, i) => (
            <Grid.Col span={3} key={a}>
              <Image
                radius="lg"
                src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
                // width={200}
                height={400}
              />
            </Grid.Col>
          ))}{" "}
        </Grid>
      </Flex>
    </MainLayout>
  );
};

export default About;
