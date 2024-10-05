const buildItems = (results) => {

    const itemList = results.map((result)=>{
        return {
            id: result["id"]??"",
            title: result["title"]??"",
            price: {
                currency: result["sale_price"]["currency_id"]??"",
                amount: result["sale_price"]["amount"]??0,
                decimals: result["sale_price"]["amount"]??0
            },
            picture: result["thumbnail"]??"",
            condition: result["new"]??"",
            free_shipping: result["shipping"]["free_shipping"]??""
        }
    });


    return itemList;
}

const buildDetailItem = (detailResult) => {

    return {
        id: detailResult["id"]??"",
        title: detailResult["title"]??"",
        price: {
            currency: detailResult["currency_id"]??"",
            amount: detailResult["price"]??0,
            decimals: "00"
        },
        picture: detailResult["pictures"][0]["url"]??"",
        condition: detailResult["condition"]=="new"?"Nuevo":detailResult["condition"],
        free_shipping: detailResult["shipping"]["free_shipping"]??""
    }
}

const getCategoryList = (availableFiltersList)=>{
    let categoryList=[]

    const index = availableFiltersList.findIndex((element)=>element["id"]==="category");


    if (index > -1) {
        const categoryObject = availableFiltersList.filter((element) => element["id"] === "category");
        console.log(categoryObject);
        const categoriesValues = categoryObject[0]["values"].filter((element) => element["results"] > 10);
        console.log(categoriesValues);
        categoryList  = categoriesValues.map((element)=>{
            return  element.name;
        });
    }




    return categoryList;
}

module.exports = {buildItems, buildDetailItem, getCategoryList}