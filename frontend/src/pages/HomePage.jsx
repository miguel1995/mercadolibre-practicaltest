import React from "react";
import {GithubOutlined} from "@ant-design/icons";

const HomePage = () => {

    return (
        <div className="home__container">

            <div>
                Miguel Andres Torres Chavarro
            </div>

            <div>
                Software Developer
            </div>

            <br/>
            <br/>
            <br/>
            
            <div>
                <a href="https://github.com/miguel1995/mercadolibre-practicaltest">
                    <GithubOutlined/>
                    Abrir Repositorio
                </a>
            </div>
        </div>
    );
}

export default HomePage;

