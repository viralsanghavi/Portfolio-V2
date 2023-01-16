import {Anchor, Box, Button, Flex, UnstyledButton} from "@mantine/core";
import React from "react";

const LeftContent = () => {
  return (
    <div>
      <h1 style={{color: "white"}}>Get in Touch ✨</h1>
      <p>
        Are you looking for a UX/UI designer to help with your next project?
      </p>
      <p>
        I&apos;d love to hear from you! Whether it&apos;s for a charity event,
        conceptual project or anything in relation to UX and UI I can help! Just
        contact me on this form or email below and let&apos;s start
        collaborating!
      </p>
      <Flex direction="column" justify="flex-start" align="flex-start">
        <span>WANT TO CALL ME?</span>

        <Anchor
          component="a"
          type="button"
          variant="text"
          target="_blank"
          referrerPolicy="no-referrer"
          href="https://google.com"
        >
          Schedule a call with me
        </Anchor>
      </Flex>
      <Flex direction="column" justify="flex-start" align="flex-start">
        <span>JUST WANT TO EMAIL ME?</span>

        <Anchor
          component="a"
          type="button"
          variant="text"
          target="_blank"
          referrerPolicy="no-referrer"
          href="mailto:vsanghavi3@gmail.com"
        >
          vsanghavi3@gmail.com?
        </Anchor>
      </Flex>
    </div>
  );
};

export default LeftContent;
