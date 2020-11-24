import {combineReducers} from '@reduxjs/toolkit'
import usersReducer from "./../features/usersList/UsersSlice"

const rootReducer = combineReducers({
    users: usersReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
