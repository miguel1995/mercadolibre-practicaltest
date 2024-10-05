import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getItemById} from "../services/itemServices";
import {Button, Col, Image, Row, Spin} from "antd";
import {convertNumberToMoney} from "../utils/convertionsUtils";

const DetailPage = () => {

    let { id } = useParams();
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log(id);

        if (id){
            getItemById(id).then(
                (response) => {
                    console.log(response)


                    setTimeout(()=>{
                        setItem(response.data.item);
                        setIsLoading(false);

                    }, 2000)

                }
            );
        }





    }, []);

    return (
        <div className="detail__container--margin">

            {
                (!isLoading) && (
                    <Row>
                        <Col xs={24} sm={24} md={16} lg={16} xl={16} xxl={16}>

                            <Image src={item.picture} width={180}/>
                            <br/>
                            <br/>
                            <br/>
                            {item.description}
                            <br/>
                            <br/>
                            <br/>


                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                            <div className="detail__aditional-info">
                                <div className="detail__aditional-info--header">
                                    <div className="detail__condition--text">{item.condition}</div>
                                    -
                                    <div className="detail__cuantity--text">{item.sold_quantity} vendidos</div>
                                </div>
                                <div className="detail__title--text">{item.title}</div>

                                <div className="detail__price--container">
                                    <div className="detail__amount--text">$ {convertNumberToMoney(item.price.amount, item.price.currency)}</div>
                                    <div className="detail__decimal--text">{item.price.decimals}</div>
                                </div>

                                <button className="detail__button--decoration ">Comprar</button>

                                </div>
                        </Col>

                    </Row>
                )


            }

            {(isLoading)&&(
                <>
                    <Spin/>
                </>
            )}







        </div>
    );
}

export default DetailPage;

