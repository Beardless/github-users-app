import {Box, Divider, Heading} from '@chakra-ui/react';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from './UsersSlice';
import {RootState} from "../../app/rootReducer";
import {UsersList} from "./UsersList";

const UsersListPage = () => {
    const dispatch = useDispatch();
    const { page, sinceUser, usersById, usersId, isLoading } = useSelector((state: RootState) => state.users)

    useEffect(() => {
        dispatch(fetchUsers(page))
    }, [page])

    const users = usersId.map(id => {
        return usersById[id];
    })

    const renderedList = isLoading ? (
        <Heading size={"sm"}>Loading...</Heading>
    ) : (
        <UsersList users={users} />
    )


    return (
        <Box borderWidth={"1px"} borderRadius={"lg"} p={6} marginY={2}>
            <Heading>Github Users List</Heading>
            <Divider marginY={6}/>
            {renderedList}
        </Box>
    );
};

export default UsersListPage;
