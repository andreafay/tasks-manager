import { UnlockIcon } from "@chakra-ui/icons"
import { Flex, Box, Heading, Text, Button, Spacer, HStack, useToast, Avatar, AvatarBadge } from "@chakra-ui/react"
import React from "react"

export default function Navbar() {
    const toast = useToast()

    const showToast = () => {
        toast({
            title: "Logged out",
            description: "Successfully logged out!",
            duration: 5000,
            isClosable: true,
            status: "success",
            position: "top",
            icon: <UnlockIcon />
        })
    }

    return (
        <Flex as="nav" p="10px" alignItems="center" marginBottom="40px">
            <Heading as="h1">Andre Tasks</Heading>
            <Spacer />
            <HStack spacing="20px">
                <Avatar src="/img/yoshi.png">
                    <AvatarBadge width="1.3em" bg="teal.500">
                        <Text fontSize="xs" color="white">3</Text>
                    </AvatarBadge>
                </Avatar>
                <Text>andre@chakra-ui.com</Text>
                <Button colorScheme="green" onClick={showToast}>Logout</Button>
            </HStack>
        </Flex>
    )
}