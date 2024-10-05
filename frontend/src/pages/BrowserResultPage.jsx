import React, {useEffect, useState} from "react";

import {Breadcrumb, Col, Divider, Row} from "antd";
import {convertNumberToMoney} from "../utils/convertionsUtils";
import useResultHandler from "../hooks/useResultHandler";
import {useSearchParams} from "react-router-dom";

const BrowserResultPage = () => {

    const [queryParameters] = useSearchParams();

    const {loadImageFromUrlParam, clearItems, goToDetail, categoryList, itemsList} = useResultHandler();
    useEffect(() => {
        const searchParam = queryParameters.get('search');
        if (searchParam) {
            loadImageFromUrlParam(queryParameters);
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
                        <Row key={index} gutter={[16, 0]}>

                            <Col
                                xs={24}
                                sm={24}
                                md={4}
                                lg={4}
                                xl={4}
                                xxl={4}

                            >

                                <img src={item.picture} width="180" height="180" alt="imagenProducto"/>

                            </Col>
                            <Col
                                xs={24}
                                sm={24}
                                md={16}
                                lg={16}
                                xl={16}
                                xxl={16}
                            >

                                <div className="card__amount--text">
                                    $ {convertNumberToMoney(item.price.amount)}
                                </div>

                                <div className="card__title--text">
                                    {item.title}
                                </div>

                            </Col>
                            <Col xs={24} sm={24} md={4} lg={4} xl={4} xxl={4}>
                                <div className="card__location--text">
                                    Capital Federal
                                </div>
                            </Col>

                        </Row>

                            <Divider></Divider>

                    </div>

                ))
            }
        </div>
        </>
    );
}

export default BrowserResultPage;

