import {Avatar, Box, Flex, Text} from '@chakra-ui/react';
import React from 'react';
import {User} from "../../api/githubApi";

const UserListItem = ({login, avatar_url}: User) => {
    return (
        <Flex _hover={{bg: 'grey.300'}}>
            <Avatar name="Github Avatar" src={avatar_url}/>
            <Flex ml={2} align={"center"}>
                <Text>{login}</Text>
            </Flex>
        </Flex>
    );
};

export default UserListItem;
