import { UserInterface } from "@/app/lib/interfaces";
import { Text, Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
export default function UserCard({
  avatar,
  email,
  first_name,
  id,
  last_name,
}: UserInterface) {
  const UserDetails = (label: string, data: string) => {
    return (
      <Flex gap="2">
        <Text fontWeight="bold">{label}: </Text>
        <Text>{data}</Text>
      </Flex>
    );
  };

  return (
    <Flex flexDir="column" gap="4" border="1px" w={"324px"} p="4">
      <Image
        src={avatar}
        alt="user profile"
        width={110}
        height={110}
        className="bg-red-500 m-auto"
      />
      <Flex flexDir="column" gap="1">
        {UserDetails("Last Name", last_name)}
        {UserDetails("First Name", first_name)}
        {UserDetails("Email", email)}
      </Flex>
    </Flex>
  );
}
