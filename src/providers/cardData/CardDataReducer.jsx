const CardDataReducer = (state , action) =>{

    switch (action.type) {
        case "FETCH_USER_DATA":
            return {
                ...state,
                Details : action.payload
        }
            
              
        default:
            return state
    }

}


export default CardDataReducer;