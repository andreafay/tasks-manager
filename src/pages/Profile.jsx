import { ChatIcon, CheckCircleIcon, EmailIcon, StarIcon, WarningIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="green" variant="enclosed">
      <TabList>
        <Tab _selected={{ color: 'white', bg: 'green.400' }}>Account Info</Tab>
        <Tab _selected={{ color: 'white', bg: 'green.400' }}>Task History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: andre@chakra-ui.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Slide in my dms please
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Star at me :)
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.400" />
              Bunch of words lol
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.400" />
              Diss this Diss that
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Making diss tracks
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.400" />
              Hey!
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
