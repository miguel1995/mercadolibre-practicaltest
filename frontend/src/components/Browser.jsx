import React from "react";

import logoMl from '../assets/images/Logo_ML.png';
import icSearch from '../assets/images/ic_Search.png';

import {Input} from "antd";
import {useNavigate} from "react-router-dom";

const Browser = () => {

    const { Search } = Input;
    const navigate = useNavigate();

    const onSearch = (value, _e, info) => {

        console.log(info?.source, value)
        if(info?.source === "input"){
            console.log("go to items");
            navigate(`/items?search=${value}`,{
                replace:true
            });

            window.location.reload();
        }

    };



    return(
        <div className="browser__container">
            <img src={logoMl}/>

            <Search
                key="search"
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