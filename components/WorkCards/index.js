import {ActionIcon, Box, Flex, Grid, Paper, Text, Title} from "@mantine/core";
import Image from "next/image";
import React from "react";
import {primaryColor} from "../../constants";

const WorkCards = () => {
  const cardList = [1, 2, 3, 4];
  return (
    <Grid gap="sm" grow>
      {cardList.map((item) => (
        <Grid.Col span={4} key={item}>
          <Paper
            shadow="xl"
            radius="lg"
            p="lg"
            sx={{
              cursor: "pointer",

              ":hover": {
                background: primaryColor,
              },
            }}
          >
            <Box
              as="h4"
              sx={{
                textTransform: "uppercase",
              }}
            >
              IOS APP DESsGN
            </Box>
            <Flex align="center" justify="space-between">
              <Title>Paper is the most</Title>
              <ActionIcon
                sx={{height: "100%"}}
                title="open project"
                variant="transparent"
                width={40}
                ml={12}
              >
                <Image src="/navigate.svg" width={40} height={40} />
              </ActionIcon>
            </Flex>
            <Text>
              Use it to create cards, dropdowns, modals and other components
              that require background with shadow
            </Text>
          </Paper>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default WorkCards;
