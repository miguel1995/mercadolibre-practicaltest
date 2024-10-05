import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {getItemsBySearch} from "../services/itemServices";
import {Col, Divider, Row} from "antd";
import {convertNumberToMoney} from "../utils/convertionsUtils";

const BrowserResultPage = () => {
    const [queryParameters] = useSearchParams();
    const [itemsList, setItemsList] = useState([]);

    useEffect(() => {
        const searchParam = queryParameters.get('search');
        if (searchParam) {

            getItemsBySearch(searchParam).then(
                (response) => {
                    console.log(response)
                    setItemsList(response.data.items);
                }
            );


        }

    }, []);

    return (
        <div className="result__container--margin">
            {
                itemsList.map((item, index) => (
                    <>
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
                                {convertNumberToMoney(item.price.amount)}
                            </div>

                            <div className="card__title--text">
                                {item.title}
                            </div>

                        </Col>
                        <Col
                            xs={24}
                            sm={24}
                            md={4}
                            lg={4}
                            xl={4}
                            xxl={4}
                        >
                            <div className="card__location--text">
                                Capital Federal
                            </div>
                        </Col>

                    </Row>
                        <Divider></Divider>

                    </>

                ))
            }
        </div>
    );
}

export default BrowserResultPage;

