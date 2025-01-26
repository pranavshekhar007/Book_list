import { createContext } from "react";

const userContext = createContext({
    loggedInUser: "Dummy Users",
});

export default userContext;