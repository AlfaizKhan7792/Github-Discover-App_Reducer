import { createContext, useReducer } from "react";
import CardDataReducer from "./CardDataReducer";

const CardDataContext = createContext()

export const CardDataProvider = ({children}) =>{

const initialState = {
    Details : []
}

const [state , dispatch] = useReducer( CardDataReducer , initialState)

// console.log("Current State:", state);

return(
    <CardDataContext.Provider value={{...state , dispatch}}>
     {children}
</CardDataContext.Provider>
)

}

export default CardDataContext;