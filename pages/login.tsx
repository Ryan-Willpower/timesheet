import Head from "next/head";
import {
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Flex w="100vw" h="100vh" align="center" justify="center" bg="gray.50">
        <Flex
          direction="column"
          boxShadow="md"
          rounded="md"
          bg="white"
          w={[300, 400, 560]}
          p="10"
        >
          <h1>
            <Text fontWeight="bold" fontSize="2xl" mb="2" align="center">
              Login
            </Text>
          </h1>
          <FormControl id="username" isRequired my="1">
            <FormLabel>Username</FormLabel>
            <Input placeholder="Username" />
          </FormControl>
          <FormControl id="password" isRequired my="1">
            <FormLabel>Password</FormLabel>
            <Input placeholder="Password" type="password" />
          </FormControl>
          <Button colorScheme="teal" size="md" mt="5">
            Login
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default Login;
