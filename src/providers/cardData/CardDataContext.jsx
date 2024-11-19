import { createContext, useReducer } from "react";
import CardDataReducer from "./CardDataReducer";

const CardDataContext = createContext()

export const CardDataProvider = ({children}) => {

    const initialState = {
        Details: null,
        user : [],
        loading : false,
        error : null
    }

    const [state , dispatch] = useReducer(CardDataReducer , initialState)
    return (
        <CardDataContext.Provider value={{...state , dispatch}}>
            {children}
        </CardDataContext.Provider>
    )
}

export default CardDataContext;