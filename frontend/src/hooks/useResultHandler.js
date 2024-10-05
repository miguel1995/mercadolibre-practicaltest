import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {getItemsBySearch} from "../services/itemServices";


const useResultHandler = () => {

    const [itemsList, setItemsList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const navigate = useNavigate();
    
    const loadImageFromUrlParam = (searchParam) => {
        getItemsBySearch(searchParam).then(
            (response) => {
                setItemsList(response.data.items);
                let categories = response.data.categories || [];
                if (categories && categories.length > 0) {
                    categories = categories.slice(1,6);
                }

                const categoryListBreadcrumbItems = categories.map(
                    (text, index)=>{
                        return {
                            key: index,
                            title: text

                        }
                    }
                );

                setCategoryList(categoryListBreadcrumbItems);
            }
        );
    }

    const clearItems = () => {

        setItemsList([]);

    }

    const goToDetail = (id) => {
        navigate(id);
    }


    return {
        itemsList,
        categoryList,
        loadImageFromUrlParam,
        clearItems,
        goToDetail

    };

}

export default useResultHandler;