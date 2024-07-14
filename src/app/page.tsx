import { VStack, Text, Heading, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <VStack gap="10">
      <Heading as="h1" size="xl">
        Welcome to Users
      </Heading>
      <Heading as="h2" size="md">
        A Web Application that fetches Users data from reqres API
      </Heading>
      
      <Button colorScheme='teal'>
      <Link href="/users">Click Here</Link>
      </Button>
    </VStack>
  );
}
