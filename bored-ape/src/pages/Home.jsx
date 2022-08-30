import React from "react";
import { Header } from "../widget/Header/Header.jsx";
import { Box, Divider, Flex } from "@chakra-ui/react";
import { SideBar } from "../widget/SideBar/SideBar.jsx";
import { SideIcon } from "../components/SideIcon/SideIcon.jsx";

import planet from "../dist/img/planet.svg"
import view from "../dist/img/view.svg"
import calendar from "../dist/img/calendar.svg"
import scope from "../dist/img/scope.svg"
import settingsIcon from "../dist/img/settings-icon.svg"
import { Main } from "../widget/Main/Main.jsx";


const icons = [
  {
    title: "Explore",
    icon: planet,
  },
  {
    title: "Live Events",
    icon: view,
  },
  {
    title: "Calendar",
    icon: calendar,
  },
  {
    title: "Auto Buy",
    icon: scope,
  },
  {
    title: "Settings",
    icon: settingsIcon,
  },
];

export const Home = () => {
  return (
    <Box>
      <Header gwei={71} user="Hi, 02a...2837" />
      <Flex>
        <SideBar>
          {icons.map((e, index) => {
            return (
              <Flex
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection=" column"
              >
                {index === 3 && <Divider orientation="horizontal" my="8" w="5" />
                }
                <SideIcon icon={e.icon} title={e.title} select={index === 0 ? true : false} />
              </Flex >
            )
          })}
        </SideBar>
        <Main />
      </Flex>
    </Box >
  );
};
