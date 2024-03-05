import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Box, Text, Card, CardBody, CardFooter, CardHeader, SimpleGrid, Flex, Heading, HStack, Button, Divider, Avatar } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/andreafay/tasks-manager/tasks')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTasks(data);
      });
  }, []);
  
  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {tasks && tasks.length > 0 && tasks.map(task => (
          <Card key={task.id} borderTop="8px" borderColor="green.400" bgColor="white">
            <CardHeader>
              <Flex gap={5}>
                <Box w="50px" h="50px">
                  <Avatar size='md' src={task.img} />
                </Box>
                <Box>
                  <Heading as="h3" size="sm">{task.title}</Heading>
                  <Text>{task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody color="gray.500">
              <Text>{task.description}</Text>
            </CardBody>

            <Divider color="gray.200" />

            <CardFooter>
              <HStack>
                <Button variant="ghost" leftIcon={<ViewIcon />}>Watch</Button>
                <Button variant="ghost" leftIcon={<EditIcon />}>Comment</Button>
              </HStack> 
            </CardFooter> 
          </Card>
        ))
      }
    </SimpleGrid>
  );
}
