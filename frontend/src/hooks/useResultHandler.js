import {useNavigate} from "react-router-dom";
import {getItemsBySearch} from "../services/itemServices";
import {useDispatch, useSelector} from "react-redux";
import {onSaveItems} from "../store/slices/itemsSlice";
import {onSaveCategories} from "../store/slices/categorySlice";


const useResultHandler = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { itemsList } = useSelector((state) => state.items);
    const { categoryList } = useSelector((state) => state.categories);


    const loadItemsFromUrlParam = (searchParam) => {
        getItemsBySearch(searchParam).then(
            (response) => {

                dispatch(onSaveItems(response.data.items.slice(1,5)));

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
                dispatch(onSaveCategories(categoryListBreadcrumbItems));

            }
        );
    }

    const clearItems = () => {

        dispatch(onSaveItems([]));

    }

    const goToDetail = (id) => {
        navigate(id);
    }


    return {
        itemsList,
        categoryList,
        loadItemsFromUrlParam,
        clearItems,
        goToDetail

    };

}

export default useResultHandler;