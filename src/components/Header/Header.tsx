import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
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
            </Flex>
        </Flex>
    );
};

export default Header;
