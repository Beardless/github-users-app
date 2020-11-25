import {Divider, List, ListItem } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import {User} from "../../api/githubApi";
import UserListItem from './UserListItem';

interface Props {
    users: User[]
}

export const UsersList = ({ users }: Props) => {
    const renderedUsers = users.map((user, index) => (
        <ListItem marginY={4} key={user.id} _hover={{
            background: "gray.100",
            color: "blue.500",
        }}>
            <Link to={`user/${user.login}`}>
                <UserListItem {...user} />
            </Link>
            {users.length !== index + 1 && <Divider paddingTop={2} />}
        </ListItem>
    ))

    return <List>{renderedUsers}</List>
}
