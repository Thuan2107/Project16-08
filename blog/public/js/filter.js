$(function () {
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

    // $('#sort1 input').on('change', function (){
    //     console.log($(this).val())
    //     switch ($(this).val()){
    //         case '0':
    //             console.log('đang sort theo giá nè')
    //             break;
    //
    //         default:
    //             console.log('đang sort theo không biết nè')
    //     }
    // })
        $('#search-filter').on('input', function () {
            filter()
        })
        $('#sort1 input, #sort_type input').on('change', function () {
            filter()
        })
        $('#rating input').on('click', function () {
            filter()
        })

        $('.box-categories--item').on('click',function (){
            if($(this).hasClass('active')){
                $('.box-categories--item.active').removeClass('active')
            }else {
                $('.box-categories--item.active').removeClass('active')
                $(this).addClass('active')
            }
            filter()
        })
        $('#min_price, #max_price').on('change', function (){
            filter()
        })
        filter();

})


function filter() {
    let search = ChangeToSlug($('#search-filter').val().toLowerCase()),
        sort = $('#sort1 input:checked').val(),
        type = parseInt($('#sort_type input:checked').val()),
        rating = parseInt($('#rating input:checked').val()),
        cate_active =  parseInt($('.box-categories--item.active').data('id')),
        min_price = parseInt($('#min_price').val()),
        max_price = parseInt($('#max_price').val());

    // console.log(cate_active)
    let productFilter = [];
    for (let i = 0; i < products.length; i++) {
        let price = products[i].cost_price - (products[i].cost_price*products[i].discount/100)
        if(ChangeToSlug(products[i].name.toLowerCase()).includes(search)
            && (type === 0 || type ===products[i].type)
            && (rating <= products[i].evaluate)
            && (!cate_active || cate_active === products[i].category)
            // && ('' || (price <= max_price && price >= min_price))
        )
            // console.log(typeof price,typeof min_price)
        {
        // if((type === 0 || type ===products[i].type)){
            // console.log(products[i]);
            productFilter.push(products[i]);
        }
    }
    // console.log(productFilter)
    switch (sort){
        case '0':
            productFilter = productFilter.sort((a,b) => (a.cost_price - (a.cost_price*a.discount/100))-(b.cost_price - (b.cost_price*b.discount/100)))
            // console.log('thap den cao')
            break;
        case '1':
            productFilter = productFilter.sort((a,b) => (b.cost_price - (b.cost_price*b.discount/100))-(a.cost_price - (a.cost_price*a.discount/100)))
            // console.log( 'cao den thap')
            break;
        case '2':
            productFilter = productFilter.sort((a,b) => a.name.localeCompare(b.name))
            // console.log('a - z')
            break;
        case '3':
            productFilter = productFilter.sort((a,b) => b.name.localeCompare(a.name))
            // console.log('z - a')
            break;
        case '4':
            productFilter = productFilter.sort((a,b) => b.discount - a.discount)
            // console.log('khuyen mai nhieu nhat')
            break;
        case '5':
            productFilter = productFilter.sort((a,b) => a.discount - b.discount)
            // console.log('khuyen mai thap nhat')
            break;
    }

    //Lọc giá

    // console.log(productFilter)
    renderProduct(0,21,0,productFilter)
}










