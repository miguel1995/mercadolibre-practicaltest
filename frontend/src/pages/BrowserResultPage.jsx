import React, {useEffect} from "react";

import {Breadcrumb, Divider} from "antd";
import useResultHandler from "../hooks/useResultHandler";
import {useSearchParams} from "react-router-dom";
import ItemCard from "../components/ItemCard";

const BrowserResultPage = () => {

    const [queryParameters] = useSearchParams();
    const {loadItemsFromUrlParam, clearItems, goToDetail, categoryList, itemsList} = useResultHandler();


    useEffect(() => {
        const searchParam = queryParameters.get('search');
        if (searchParam) {
            loadItemsFromUrlParam(searchParam);
        }else{
            clearItems();
        }

    }, []);


    return (
        <>
            <Breadcrumb
                key="breadcrumb"

                className="categories__breadcrumb--container"
                separator=">"
                items={categoryList}
            />


        <div key="resultContainer" className="result__container--margin">

            {
                itemsList.map((item, index) => (
                    <div  className='card__container' onClick={()=>goToDetail(item.id)}>
                            <ItemCard item={item} index={index}/>
                            <Divider></Divider>
                    </div>

                ))
            }
        </div>
        </>
    );
}

export default BrowserResultPage;

