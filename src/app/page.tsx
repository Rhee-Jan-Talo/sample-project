import Image from "next/image";
import { Box, Text, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Heading as="h1">Welcome to Sample </Heading>
    <Link href="/users">Go to Users</Link>
    </>
  );
}
