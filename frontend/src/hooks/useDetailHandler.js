import {useParams} from "react-router-dom";
import {useState} from "react";
import {getItemById} from "../services/itemServices";
import {useDispatch, useSelector} from "react-redux";
import {onSaveCurrentItem} from "../store/slices/itemsSlice";


const useDetailHandler = () => {

    let { id } = useParams();
    const { currentItem } = useSelector((state) => state.items);
    const { categoryList } = useSelector((state) => state.categories);

    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true);

    const loadItems =  (response) => {

        dispatch(onSaveCurrentItem(response.data.item));

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
        currentItem,
        isLoading,
        categoryList,
        loadItemFromUrlId
    }

}

export default useDetailHandler;