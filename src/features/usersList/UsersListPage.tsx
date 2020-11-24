import { Box, Heading, Divider } from '@chakra-ui/react';
import React from 'react';

const UsersListPage = () => {
    return (
        <Box borderWidth={"1px"} borderRadius={"lg"} p={6}>
            <Heading>Github Users List</Heading>
            <Divider marginY={6} />

        </Box>
    );
};

export default UsersListPage;
