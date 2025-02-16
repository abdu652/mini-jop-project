import {DISPLAY_ALERT,CLEAR_ALERT} from "./action.jsx";
const reducer = (state, action) => {
    switch(action.type){
        case DISPLAY_ALERT:
            return {
                ...state,
                showAlert: true,
                alertText: action.payload.alertText,
                alertType: action.payload.alertType,
            };
        case CLEAR_ALERT:
            return {
                ...state,
                showAlert: false,
                alertText: "",
                alertType: "",
            };
        default:
             throw new Error(`Unhandled action type: ${action.type}`);    
    }
}
export default reducer;