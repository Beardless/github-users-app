import {Flex, Heading, Icon, Switch, useColorMode} from '@chakra-ui/react';
import React from 'react';
import { HiLightBulb, HiOutlineLightBulb } from "react-icons/hi";

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1.5rem"
            bg="blue.600"
            color="white"
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
                    Github Users App
                </Heading>
                <Icon ml={2} mr={2} as={HiLightBulb} />
                <Switch  isChecked={colorMode === 'dark'} onChange={() => toggleColorMode()} id="toggle-color" />
                <Icon ml={2} as={HiOutlineLightBulb} />
            </Flex>
        </Flex>
    );
};

export default Header;
