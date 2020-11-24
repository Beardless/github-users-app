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
        <ListItem key={user.id}>
            <Link to={`user/${user.id}`}>
                <UserListItem {...user} />
            </Link>
            {users.length !== index + 1 && <Divider marginY={4} />}
        </ListItem>
    ))

    return <List>{renderedUsers}</List>
}
