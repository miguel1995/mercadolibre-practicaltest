import React, {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {getItemsBySearch} from "../services/itemServices";

const BrowserResultPage = () => {
    const [queryParameters] = useSearchParams()

    useEffect(() => {
        const searchParam = queryParameters.get('search');
        if(searchParam){

            getItemsBySearch("moto").then(
                (response) => {console.log(response)}
            );


        }

    }, []);

    return (
        <div>
            BrowserResultPage
        </div>
    );
}

export default BrowserResultPage;

