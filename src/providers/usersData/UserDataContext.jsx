import { createContext, useReducer } from "react";
import UserDataReducer from "./UserDataReducer";

const UserDataContext = createContext()

export const UserDataProvider = ({ children }) => {

    const initialState = {
        user: null,
        loading: false,
        error: null
    }
    const [state, dispatch] = useReducer(UserDataReducer, initialState)
    return (
        <UserDataContext.Provider value={{...state, dispatch }}>
            {children}
        </UserDataContext.Provider>
    )

}

export default UserDataContext;