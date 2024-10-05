import React, {useEffect} from "react";
import {Col, Image, Modal, Row, Spin} from "antd";
import {convertNumberToMoney} from "../utils/convertionsUtils";
import useDetailHandler from "../hooks/useDetailHandler";
import useModal from "../hooks/useModal";

const DetailPage = () => {

    const {
        item,
        isLoading, loadItemFromUrlId } = useDetailHandler();

   const {
       isModalOpen,
       showModal,
       handleOk,
       handleCancel
   } = useModal();

    useEffect(() => {

        loadItemFromUrlId();




    }, []);

    return (
        <div className="detail__container--margin">

            {
                (!isLoading) && (
                    <Row gutter={[16, 0]}>
                        <Col xs={24} sm={24} md={16} lg={16} xl={16} xxl={16}>
                            <div className="detail__main-info">

                                <Image src={item.picture} max={680}/>
                                <div className="detail__description--title">
                                    Descripción del producto
                                </div>
                                <div className="detail__description--content">
                                    {item.description}
                                </div>
                            </div>

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

                                <button className="detail__button--decoration" onClick={showModal}>Comprar</button>

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


            <Modal title="Mercado Libre" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
                   footer={[
                       <button key="dubmitModal" className="detail__button--decoration" onClick={handleOk}>Continuar Comprando</button>
                                          ]}
            >
                <p>Producto agregado al carrito de compras</p>
            </Modal>


        </div>
    );
}

export default DetailPage;

