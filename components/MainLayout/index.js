import {Container} from "@mantine/core";
import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Hero from "../Hero";

const MainLayout = ({children}) => {
  return (
    <div>
      <Container
        sx={{maxWidth: "1200px", margin: "0 auto", width: "100%"}}
        px={40}
      >
        <Header />
        <Hero />
        <>{children}</>
        <Footer />
      </Container>
    </div>
  );
};

export default MainLayout;
