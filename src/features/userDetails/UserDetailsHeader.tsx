import React from 'react';
import {Link} from "react-router-dom";
import {Avatar, Flex, Heading, IconButton} from "@chakra-ui/react";
import {ArrowBackIcon} from "@chakra-ui/icons";

const UserDetailsHeader = ({ login, avatar_url }: { login: string; avatar_url: string }) => {
    return (
        <Flex align={"center"} justifyContent={"space-between"}>
            <Link to={"/"}><IconButton variant="outline" aria-label="Go Back" icon={<ArrowBackIcon/>}/></Link>
            <Heading>Username: {login}</Heading>
            <Avatar name={"Github Avatar"} src={avatar_url} />
        </Flex>
    );
};

export default UserDetailsHeader;
