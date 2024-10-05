
import React from "react";
import Browser from "../Browser";




const MainTemplate = ({ children }) => {
    return(
        <>
         <Browser/>
            {children}
        </>
    );

}

export default MainTemplate;