import {Button, Flex, Title} from "@mantine/core";
import Image from "next/image";
import {useRouter} from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();
  return (
    <Flex align="center" gap={8} py={40} justify="space-between">
      <Flex align="center" gap={16}>
        <Title
          order={1}
          sx={{
            "&:hover": {color: "rgb(255 105 0)"},
            cursor: "pointer",
            fontFamily: "inherit",
          }}
          onClick={() => router.push("/")}
        >
          Viral Sanghavi
        </Title>
        <Image
          src="/profile.webp"
          alt="13"
          width={40}
          height={40}
          style={{
            borderRadius: 50,
          }}
          priority
        />
      </Flex>
      <Flex align="center" gap={50}>
        <Title
          order={2}
          sx={{
            "&:hover": {color: "rgb(255 105 0)"},
            cursor: "pointer",
            color: "rgb(255 105 0)",
            fontFamily: "inherit",
          }}
          onClick={() => router.push("/")}
        >
          Works
        </Title>
        <Title
          order={3}
          sx={{
            "&:hover": {color: "rgb(255 105 0)"},
            cursor: "pointer",
            fontFamily: "inherit",
          }}
          onClick={() => router.push("/about")}
        >
          About
        </Title>
        <Title
          order={3}
          sx={{
            "&:hover": {color: "rgb(255 105 0)"},
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Resume
        </Title>
        {/* Get In Touch */}
        <Button
          variant="outline"
          sx={{
            "&:hover": {
              backgroundColor: "rgb(255 105 0)",
              borderColor: "rgb(255 105 0)",
            },
            color: "white",
            fontWeight: "bold",
            borderColor: "white",
          }}
          radius={10}
          onClick={() => router.push("/contact")}
        >
          Get in touch
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
