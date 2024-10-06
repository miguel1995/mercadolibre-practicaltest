
import React from 'react';
import {convertNumberToMoney} from "../utils/convertionsUtils";

const AditionalInfo = ({currentItem, callbackBtn}) => {


    return (
        <div className="detail__aditional-info">
            <div className="detail__aditional-info--header">
                <div className="detail__condition--text">{currentItem.condition}</div>
                -
                <div className="detail__cuantity--text">{currentItem.sold_quantity} vendidos</div>
            </div>
            <div className="detail__title--text">{currentItem.title}</div>


            <div className="detail__price--container">
                <div
                    className="detail__amount--text">$ {convertNumberToMoney(currentItem.price.amount, currentItem.price.currency)}</div>
                <div className="detail__decimal--text">{currentItem.price.decimals}</div>
            </div>

            <button className="detail__button--decoration" onClick={callbackBtn}>Comprar</button>

        </div>
    );
}

export default AditionalInfo;