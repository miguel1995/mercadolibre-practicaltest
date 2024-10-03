import React, {useEffect} from "react";
import {useParams} from "react-router-dom";

const DetailPage = () => {

    let { id } = useParams();

    useEffect(() => {
        console.log(id);
    }, []);

    return (
        <div>
            DetailPage
        </div>
    );
}

export default DetailPage;

