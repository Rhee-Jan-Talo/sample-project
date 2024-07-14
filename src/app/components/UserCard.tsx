import { UserInterface } from "@/app/lib/interfaces";
import { Text, Flex, Avatar, Card, CardBody } from "@chakra-ui/react";
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
    <Card w="325px" >
      <CardBody>
        <Flex flexDir="column" gap="4" p="4">
          <Avatar name={last_name} src={avatar} size="2xl" m="auto" />
          <Flex flexDir="column" gap="1">
            {UserDetails("Last Name", last_name)}
            {UserDetails("First Name", first_name)}
            {UserDetails("Email", email)}
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}
