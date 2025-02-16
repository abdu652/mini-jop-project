import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer.jsx"; // Import reducer

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: "",
    alertType: "",
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const displayAlert = (alertText, alertType,type) => {
        dispatch({
            type,
            payload: { alertText, alertType },
        });
        clearAlert();
    };

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({
                payload:{
                    alertText:"",
                    alertType:"",
                },
                type:'CLEAR_ALERT'
            });
        }, 3000);
    }
    return (
        <AppContext.Provider value={{ ...state, displayAlert }}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};

export { AppProvider, useAppContext };
