$(function (){
    // Lọc giá từ thấp đến cao
    $('#price0').click(function(){
        let listPrice = []
        listPrice = products.sort((a,b) => (a["cost_price"] - (a["cost_price"]*a["discount"]/100)) - (b["cost_price"] - (b["cost_price"]*b["discount"]/100)))
        renderProduct(0,6,1,listPrice)
        console.log(listPrice)
    })
    // Lọc giá từ cao đến thấp
    $('#price1').click(function(){
        let listPrice = []
        listPrice = products.sort((a,b) => (b["cost_price"] - (b["cost_price"]*b["discount"]/100)) - (a["cost_price"] - (a["cost_price"]*a["discount"]/100)))
        renderProduct(0,6,1,listPrice)
    })
    // Lọc theo chữ cái từ A - Z
    $('#price2').click(function(){
        let listName = []
        listName = products.sort((a,b) => a["name"].localeCompare(b["name"]))
        // console.log(listName)
        renderProduct(0,6,1,listName)
    })
    // Lọc theo chữ cái từ Z - A
    $('#price3').click(function() {
        let listName = []
        listName = products.sort((a, b) => b["name"].localeCompare(a["name"]))
        // console.log(listName)
        renderProduct(0, 6, 1, listName)
    })
    // Lọc giảm giá cao đến thấp
    $('#price4').click(function(){
        let listDiscount = []
        listDiscount = products.sort((a,b) => b["discount"] - a["discount"])
        renderProduct(0,6,1,listDiscount)
    })
    // Lọc khuyến mãi thấp đến cao
    $('#price5').click(function(){
        let listDiscount = []
        listDiscount = products.sort((a,b) => a["discount"] - b["discount"])
        renderProduct(0,6,1,listDiscount)
    })
    //Lọc theo danh mục
    $('.box-categories--item').click(function (){
        let list_category = [];
        let cate_id = $(this).data('id')
        list_category = products.filter(product => {
            return product.category == cate_id
        })
        // console.log(list_category)
        renderProduct(0,6,1,list_category)
    })
    //Lọc theo loại hình
    $('.radio-title1').click(function (){
        let list_category = []
        let type_id = $(this).data('id')
        list_category = products.filter(product => {
            return product.type == type_id
        })
        renderProduct(0,6,1,list_category)
    })
})




