import {Box, Button, Divider, Flex, Heading} from '@chakra-ui/react';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers, setNextPage, setPrevPage} from './UsersSlice';
import {RootState} from "../../app/rootReducer";
import {UsersList} from "./UsersList";

const UsersListPage = () => {
    const dispatch = useDispatch();
    const { page, pagination, users, isLoading } = useSelector((state: RootState) => state.users)
    const { current, prev, next } = pagination[page]

    useEffect(() => {
        dispatch(fetchUsers(current))
    }, [page])

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
            <Flex justifyContent={"space-between"}>
                <Button disabled={current === 0} onClick={() => dispatch(setPrevPage())}>Prev page</Button>
                <Button onClick={() => dispatch(setNextPage({prev, next, current}))}>Next page</Button>
            </Flex>
        </Box>
    );
};

export default UsersListPage;
