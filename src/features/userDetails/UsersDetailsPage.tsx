import React, {useEffect} from 'react';
import {Box, Button, Divider, Heading, useColorMode} from '@chakra-ui/react';
import {useParams} from 'react-router-dom';
import {fetchUser} from "../usersList/UsersSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/rootReducer";
import UserDetailsHeader from "./UserDetailsHeader";
import UserDetails from "./UserDetails";
import {UsersList} from "../usersList/UsersList";

interface ParamTypes {
    userLogin: string
}

const UsersDetailsPage = () => {
    const dispatch = useDispatch();
    const {currentUser, isLoading} = useSelector((state: RootState) => state.users);
    const {userLogin} = useParams<ParamTypes>();

    useEffect(() => {
        dispatch(fetchUser(userLogin));
    }, [])

    const renderedUser = isLoading ? (
        <Heading size={"sm"}>Loading...</Heading>
    ) : (
        currentUser && <UserDetails {...currentUser} />
    )

    return (
        <Box borderWidth={"1px"} borderRadius={"lg"} p={6} marginY={2}>
            <UserDetailsHeader login={currentUser?.login || ""} avatar_url={currentUser?.avatar_url || ""}/>
            <Divider marginY={6}/>
            {renderedUser}
        </Box>
    );
};

export default UsersDetailsPage;
