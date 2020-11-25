import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Links } from "parse-link-header";
import {getUser, getUsers, User, UsersResult} from "../../api/githubApi";
import {AppThunk} from "../../app/store";

interface UsersState {
    users: User[];
    currentUser: User | null;
    pageLinks: Links | null;
    sinceUser: number;
    isLoading: boolean;
    page: number;
    error: string | null;
}

const initialState: UsersState = {
    users: [],
    currentUser: null,
    pageLinks: {},
    page: 0,
    sinceUser: 0,
    isLoading: false,
    error: null
}

function startLoading(state: UsersState) {
    state.isLoading = true
}

function loadingFailed(state: UsersState, action: PayloadAction<string>) {
    state.isLoading = false
    state.error = action.payload
}

const users = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsersStart: startLoading,
        getUserStart: startLoading,
        getUsersStartSuccess(state, { payload }: PayloadAction<UsersResult>) {
            const { sinceUser, users, pageLinks } = payload
            state.sinceUser = sinceUser
            state.pageLinks = pageLinks
            state.isLoading = false
            state.error = null
            state.users = users;
        },
        getUserStartSuccess(state, { payload }: PayloadAction<User>) {
            state.isLoading = false
            state.error = null
            state.currentUser = payload;
        },
        getUsersStartFailure: loadingFailed,
        getUserStartFailure: loadingFailed
    }
});

export const {
    getUsersStart,
    getUsersStartSuccess,
    getUsersStartFailure,
    getUserStart,
    getUserStartSuccess,
    getUserStartFailure
} = users.actions

export default users.reducer;

export const fetchUsers = (
    since: number
): AppThunk => async dispatch => {
    try {
        dispatch(getUsersStart())
        const users = await getUsers(since)
        dispatch(getUsersStartSuccess(users))
    } catch (err) {
        dispatch(getUsersStartFailure(err.toString()))
    }
}

export const fetchUser = (
    userLogin: string
): AppThunk => async dispatch => {
    try {
        dispatch(getUserStart())
        const user = await getUser(userLogin)
        dispatch(getUserStartSuccess(user))
    } catch (err) {
        dispatch(getUserStartFailure(err.toString()))
    }
}
