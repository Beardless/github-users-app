import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Links } from "parse-link-header";
import {getUsers, User, UsersResult} from "../../api/githubApi";
import {AppThunk} from "../../app/store";

interface UsersState {
    usersById: Record<number, User>;
    usersId: number[];
    pageLinks: Links | null;
    sinceUser: number;
    isLoading: boolean;
    page: number;
    error: string | null;
}

const initialState: UsersState = {
    usersById: {},
    pageLinks: {},
    usersId: [],
    page: 1,
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
        getUsersStartSuccess(state, { payload }: PayloadAction<UsersResult>) {
            const { sinceUser, users, pageLinks } = payload
            state.sinceUser = sinceUser
            state.pageLinks = pageLinks
            state.isLoading = false
            state.error = null

            users.forEach(user => {
                state.usersById[user.id] = user
            })

            state.usersId = users.map(user => user.id)
        },
        getUsersStartFailure: loadingFailed
    }
});

export const {
    getUsersStart,
    getUsersStartSuccess,
    getUsersStartFailure,
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
