import { Flex, Box, Heading, Text, Button, Spacer, HStack } from "@chakra-ui/react"
import React from "react"

export default function Navbar() {
    return (
        <Flex as="nav" p="10px" alignItems="center" marginBottom="40px">
            <Heading as="h1">Andre Tasks</Heading>
            <Spacer />
            <HStack spacing="20px">
                <Box bg="gray.200" p="10px">A</Box>
                <Text>andre@chakra-ui.com</Text>
                <Button colorScheme="green">Logout</Button>
            </HStack>
        </Flex>
    )
}