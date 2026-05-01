import { useContext } from "react";
import { UserAuthentication } from "../Context/UserAuthentication";

export const useUserAuthentication = () => {
    const userContext = useContext(UserAuthentication);

    if(!userContext){
        throw Error("The useUserAuthentication must be under UserAuthenticationProvider")
    }
    return userContext
}