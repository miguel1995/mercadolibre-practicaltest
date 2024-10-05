import React, {useEffect, useState} from "react";

import logoMl from '../assets/images/Logo_ML.png';
import icSearch from '../assets/images/ic_Search.png';

import {Input} from "antd";

const Browser = () => {

    const { Search } = Input;

    const onSearch = (value, _e, info) => {

        console.log(info?.source, value)

    };



    return(
        <div className="browser__container">
            <img src={logoMl}/>

            <Search
                placeholder="Nunca dejes de buscar"
                onSearch={onSearch}
                style={{ width: '100%' }}
                allowClear
                enterButton={
                    <div>
                        <img
                                src={icSearch}
                                alt="buscar"
                            />
                    </div>
                }
            />


        </div>
    );
}

export default Browser;