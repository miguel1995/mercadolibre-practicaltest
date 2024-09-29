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
            decimals: detailResult["price"]??0
        },
        picture: detailResult["thumbnail"]??"",
        condition: detailResult["condition"]??"",
        free_shipping: detailResult["shipping"]["free_shipping"]??""
    }
}

module.exports = {buildItems, buildDetailItem}