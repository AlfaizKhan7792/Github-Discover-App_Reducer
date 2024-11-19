const CardDataReducer = (state, action) => {
    console.log("Reducer received action:", action); // Debug log
    console.log("Current state:", state); // Debug log
    
    switch (action.type) {

        case "SET_LOADING":
            return {
                ...state,
                loading: true,
                error: null
            };

        case "FETCH_USER_DATA":
            return {
                ...state,
                Details: action.payload,
                loading: false,
                error: null
            };
        case "FETCH_USER_DATA_DETAILS":
            console.log("Setting Details with:", action.payload); // Debug log
            return {
                ...state,
                Details: action.payload,
                loading: false,
                error: null
            };

        case "SET_ERROR":
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }

}

export default CardDataReducer
