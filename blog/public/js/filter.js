$(function (){
//     // Lọc giá từ thấp đến cao
//     $('#price0').click(function(){
//         let listPrice = []
//         listPrice = products.sort((a,b) => (a["cost_price"] - (a["cost_price"]*a["discount"]/100)) - (b["cost_price"] - (b["cost_price"]*b["discount"]/100)))
//         renderProduct(0,6,1,listPrice)
//     })
//     // Lọc giá từ cao đến thấp
//     $('#price1').click(function(){
//         let listPrice = []
//         listPrice = products.sort((a,b) => (b["cost_price"] - (b["cost_price"]*b["discount"]/100)) - (a["cost_price"] - (a["cost_price"]*a["discount"]/100)))
//         renderProduct(0,6,1,listPrice)
//     })
//     // Lọc theo chữ cái từ A - Z
//     $('#price2').click(function(){
//         let listName = []
//         listName = products.sort((a,b) => a["name"].localeCompare(b["name"]))
//         // console.log(listName)
//         renderProduct(0,6,1,listName)
//     })
//
//     // Lọc theo chữ cái từ Z - A
//     $('#price3').click(function() {
//         let listName = []
//         listName = products.sort((a, b) => b["name"].localeCompare(a["name"]))
//         // console.log(listName)
//         renderProduct(0, 6, 1, listName)
//     })
//     // Lọc giảm giá cao đến thấp
//     $('#price4').click(function(){
//         let listDiscount = []
//         listDiscount = products.sort((a,b) => b["discount"] - a["discount"])
//         renderProduct(0,6,1,listDiscount)
//     })
//     // Lọc khuyến mãi thấp đến cao
//     $('#price5').click(function(){
//         let listDiscount = []
//         listDiscount = products.sort((a,b) => a["discount"] - b["discount"])
//         renderProduct(0,6,1,listDiscount)
//     })
//     //Lọc theo danh mục
//     // $('.box-categories--item').click(function (){
//     //     // console.log()
//     //     // $('.box-categories--item.active').removeClass('active');
//     //     let name_cate = $(this).text()
//     //     if($(this).hasClass('active')){
//     //         $('.box-categories--item.active').removeClass('active');
//     //
//     //     } else {
//     //         $('.box-categories--item.active').removeClass('active');
//     //         $(this).addClass('active')
//     //         $('#name_cate').text('/' + name_cate)
//     //
//     //     }
//     //
//     //     // console.log(listNameCate)
//     //     let list_category = [];
//     //     let cate_id = $(this).data('id')
//     //     list_category = products.filter(product => {
//     //         return product.category == cate_id
//     //     })
//     //     // console.log(list_category)
//     //     renderProduct(0,6,1,list_category)
//     // })
//     //Lọc theo loại hình
//     $('.radio-title1').click(function (){
//         let list_category = []
//         let type_id = $(this).data('id')
//         list_category = products.filter(product => {
//             return product.type == type_id
//         })
//         renderProduct(0,6,1,list_category)
//     })
//     // Lọc sao
//     $('.filter_star').click(function (){
//         let list_category = []
//         let number_star = $(this).attr('value');
//         let number_star_filter = Number(number_star) + 1;
//         list_category = products.filter(product => {
//             console.log(number_star , number_star_filter)
//             return (product.evaluate >= number_star && product.evaluate <  number_star_filter)
//         })
//         renderProduct(0,6,1,list_category)
//     })
// //    Lọc giá
//     $('#confirm_price').click(function (){
//         let min_price = $('#min_price').val()
//         let max_price = $('#max_price').val()
//         let list_category = []
//         list_category = products.filter(product => {
//             let real_price = (product.cost_price - (product.cost_price*product.discount/100))
//             return real_price >= min_price && real_price <=max_price
//         })
//         renderProduct(0,0,1,list_category)
//     })

})

function filterProduct(){
    let listProduct = products;
    // console.log()
    // $('.box-categories--item.active').removeClass('active');
    let name_cate = $(this).text()
    if($(this).hasClass('active')){
        $('.box-categories--item.active').removeClass('active');

    } else {
        $('.box-categories--item.active').removeClass('active');
        $(this).addClass('active')
        $('#name_cate').text('/' + name_cate)
    }
    // console.log(listNameCate)
    // let cate_id = $(this).data('id')
    // listProduct = listProduct.filter(product => {
    //     return product.category == cate_id
    // })


    if($('.price input').is(':checked')){
        listProduct = listProduct.sort((a,b) => (a["cost_price"] - (a["cost_price"]*a["discount"]/100)) - (b["cost_price"] - (b["cost_price"]*b["discount"]/100)))
        listProduct = listProduct.sort((a,b) => (b["cost_price"] - (b["cost_price"]*b["discount"]/100)) - (a["cost_price"] - (a["cost_price"]*a["discount"]/100)))
        listProduct = listProduct.sort((a,b) => a["name"].localeCompare(b["name"]))
    }
    console.log(listProduct);
    renderProduct(0,6,0,listProduct)
}
filterProduct()




