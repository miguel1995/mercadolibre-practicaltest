import React from 'react';
import {Col, Row} from "antd";
import {convertNumberToMoney} from "../utils/convertionsUtils";

const ItemCard = ({item, index}) => {


    return (
        <Row key={index} gutter={[16, 0]}>

            <Col xs={24} sm={24} md={4} lg={4} xl={4} xxl={4} >

                <img src={item.picture} width="180" height="180" alt="imagenProducto"/>

            </Col>
            <Col xs={24} sm={24} md={16} lg={16} xl={16} xxl={16}>

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
    );
}

export default ItemCard;