const UserDataReducer = (state , action) =>{
switch (action.type) {
    case "FETCH_USER_DATA_ERROR":
            return {
                ...state,
                user : action.payload,
                loading: false,
                error: action.payload
            };

    default:
        return state;
}
}


export default UserDataReducer