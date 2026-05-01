import { createContext, useEffect, useReducer } from "react";

export const UserAuthentication = createContext();

export const UserAuthenticationReducer = (state, action) => {
    switch(action.type){
        case "LOGIN":
            return{
                user: action.payload
            }
        case "LOGOUT":
            return{
                user: null
            }
        default:
            return state
    }
}

export const UserAuthenticationProvider = ({children}) => {

    const [state, dispatch] = useReducer(UserAuthenticationReducer, {
        user: null
    });
    useEffect(()=>{
        const user=JSON.parse(localStorage.getItem('user'));

        if(user){
            dispatch({type: "LOGIN", payload: user});
        }
    }, []);
    return (
        <UserAuthentication.Provider value={{...state, dispatch}}>
            {children}
        </UserAuthentication.Provider>
    )
}