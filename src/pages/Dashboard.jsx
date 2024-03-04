import { Box, SimpleGrid } from "@chakra-ui/react";

export default function Dashboard() {

  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {tasks && tasks.length > 0 && tasks.map(task => (
          <div key={task.id}>{task.title}</div>
        ))
      }
    </SimpleGrid>
  );
}
