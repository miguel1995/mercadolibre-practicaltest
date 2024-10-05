import {useParams} from "react-router-dom";
import {useState} from "react";
import {getItemById} from "../services/itemServices";


const useDetailHandler = () => {
    let { id } = useParams();

    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const loadItems =  (response) => {
        setItem(response.data.item);
        setIsLoading(false);
    }

    const loadItemFromUrlId = () => {
        if (id){
            getItemById(id).then(
                (response) => {
                    setTimeout(()=>{
                        loadItems(response);
                    }, 2000)

                }
            );
        }
    }

    return{
        item,
        isLoading,
        loadItemFromUrlId
    }

}

export default useDetailHandler;