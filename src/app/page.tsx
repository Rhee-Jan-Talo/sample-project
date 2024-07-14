'use client';
import { VStack, Heading, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Home() {
  const [ loading, setLoading ] = useState<boolean>(false)
  const router = useRouter()

  const handleClick = () => {
    setLoading(true)
    router.push("/users")
  }

  return (
    <VStack gap="10" textAlign="center">
      <Heading as="h1" size="xl">
        Welcome to Users
      </Heading>
      <Heading as="h2" size="md">
        A Web Application that fetches Users data from reqres API
      </Heading>
      <Button colorScheme='teal' onClick={handleClick} w="120px" 
        isLoading={loading}
        loadingText='Loading'>
        Click Here
      </Button>
    </VStack>
  );
}
