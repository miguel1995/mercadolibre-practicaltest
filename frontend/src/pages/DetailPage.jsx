import React, {useEffect} from "react";
import {Breadcrumb, Col, Image, Modal, Row, Spin} from "antd";
import {convertNumberToMoney} from "../utils/convertionsUtils";
import useDetailHandler from "../hooks/useDetailHandler";
import useModal from "../hooks/useModal";
import AditionalInfo from "../components/AditionalInfo";

const DetailPage = () => {

    const {
        currentItem,
        isLoading, loadItemFromUrlId, categoryList } = useDetailHandler();

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

        <>
            <Breadcrumb
                key="breadcrumb"
                className="categories__breadcrumb--container"
                separator=">"
                items={categoryList}
            />


        <div className="detail__container--margin">

            {
                (!isLoading) && (
                    <Row gutter={[16, 0]}>
                        <Col xs={24} sm={24} md={16} lg={16} xl={16} xxl={16}>
                            <div className="detail__main-info">

                                <Image src={currentItem.picture} max={680}/>
                                <div className="detail__description--title">
                                    Descripción del producto
                                </div>
                                <div className="detail__description--content">
                                    {currentItem.description}
                                </div>
                            </div>

                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                           <AditionalInfo currentItem={currentItem} callbackBtn={showModal} />
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
        </>
    );
}

export default DetailPage;

