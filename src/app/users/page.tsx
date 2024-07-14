"use client";
import { Text, Button, Spinner, Grid, VStack, Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { UserInterface } from "@/app/lib/interfaces";
import UserCard from "@/app/components/UserCard";

export default function Users() {
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [pageNum, setPageNum] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUsers = async () => {
    const url = `https://reqres.in/api/users?page=${pageNum}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setTotalPages(data.total_pages);
      setUsers((prevUsers: UserInterface[]) => [...prevUsers, ...data.data]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (pageNum !== null) {
      // Check if pageNum is not null before fetching
      fetchUsers();
    } else {
      setPageNum(1); // Set pageNum to initially 1
    }
  }, [pageNum]);

  return (
    <VStack gap="4">
      <Heading as="h1">Users Page</Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap="4">
        {users.map((item: UserInterface) => (
          <UserCard {...item} key={item.id} />
        ))}
      </Grid>
      <Box>
      <Button
        isDisabled={totalPages === pageNum}
        onClick={() => setPageNum(2)}
      >
        {loading ? <Spinner /> : "Load More"}
      </Button>
      </Box>
    </VStack>
  );
}
