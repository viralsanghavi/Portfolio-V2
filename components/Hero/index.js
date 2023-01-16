import {Box} from "@mantine/core";
import {useRouter} from "next/router";
import React from "react";

const Hero = () => {
  const {pathname} = useRouter();
  const titleList = {
    "/": "All Work",
    "/about": "About Me",
  };
  if (!titleList[pathname]) return <></>;

  return (
    <Box>
      <Box
        as="h1"
        sx={{
          fontSize: "clamp(0px, 20vw, 320px)",
          fontStyle: "normal",
          fontWeight: 600,
          textAlign: "center",
          letterSpacing: "-0.05em",
          lineHeight: 1,
          opacity: 0.3,
          transform:
            "perspective(1200px) translateX(0px) translateY(0px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px)",
        }}
      >
        {titleList[pathname]}
      </Box>
    </Box>
  );
};

export default Hero;
