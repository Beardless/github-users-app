import {createSlice} from "@reduxjs/toolkit";
import { Links } from "parse-link-header";
import {User} from "../../api/githubApi";

interface UsersState {
    usersById: Record<number, User>
    currentPageIssues: number[]
    pageLinks: Links | null
    isLoading: boolean
    error: string | null
}

const initialState: UsersState = {
    usersById: {},
    currentPageIssues: [],
    pageLinks: {},
    isLoading: false,
    error: null
}

const users = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export default users.reducer;
