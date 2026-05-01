import { useState } from "react"
import { useUserAuthentication } from "./useUserAuthentication";

export const useSignupUser = () => {

    const [error, setError] = useState("");
    const [isSigning, setIsSigning] = useState("");

    const {dispatch} = useUserAuthentication();

    const signup = async(email, password) => {
        setError("");
        setIsSigning(true);

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: email, password: password})
        });

        const json = await response.json();

        if(!response.ok){
            setError(json.error);
            setIsSigning(false);
        }
        if(response.ok){
            setError("");
            setIsSigning(false);

            localStorage.setItem("user", JSON.stringify(json));
            dispatch({type: "LOGIN", payload: json});
        }
    }
  return {signup, error, isSigning}
}
