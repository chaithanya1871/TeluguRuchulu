import { createContext } from "react";

const AddressContext = createContext({
    address:''
})
AddressContext.displayName = "addressContext"
export default AddressContext;