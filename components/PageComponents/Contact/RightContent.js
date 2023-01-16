import {Button, Card, Flex, Textarea, TextInput} from "@mantine/core";
import {useForm} from "@mantine/form";
import React from "react";
import {primaryColor} from "../../../constants";

const RightContent = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  return (
    <Card radius="lg">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Flex direction="column" gap={20}>
          <TextInput
            radius={10}
            placeholder="Name"
            {...form.getInputProps("name")}
          />
          <TextInput
            radius={10}
            placeholder="Email"
            {...form.getInputProps("email")}
          />
          <Textarea
            radius={10}
            placeholder="Description"
            minRows={4}
            {...form.getInputProps("message")}
          />

          <Button radius={10} type="submit" w="100%" bg={primaryColor}>
            Submit
          </Button>
        </Flex>
      </form>
    </Card>
  );
};

export default RightContent;
