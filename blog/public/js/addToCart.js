$( document ).ready(function() {
    let list_item = []
    let quantity = Number($('.cart_item_quantity').html())
    console.log(quantity)

    $('.addCart button').on('click', function (){
        let product_id = $(this).data('id')
        let item = ''
        count_item = 0
        let new_item = []
        let id = $(this).attr('data-id'),
            price = $(this).parents('.cart_content').find('.rate_and_price .new_price').text(),
            name = $(this).parents('.cart_content').find('.product_name').text(),
            image = $(this).parents('.product_item').find('.cart_header img').attr('src');
        let flag = 0;
        list_item.map(function (a, b){
            if(a.id == id){
                a.quantity++
            }else {
                flag ++ ;
            }
        })
        if(flag == list_item.length) {
            list_item.push({
                id: id,
                cost_price: price,
                image: image,
                name: name,
                quantity: 1
            });
        }

        list_item.map(function (a, b){
            item += `<div class="cart_item">
                            <div class="cart_item_image">
                                <img src=${a.image} alt="">
                            </div>
                            <p class="cart_item_name">${a.name}</p>
                            <p class="cart_item_price">${a.cost_price} x <span class="cart_item_quantity">${a.quantity}</span></p>
                        </div>`;
            count_item = list_item.length
        })
        $('.cart .count_item').html(count_item + ' ')
        $('.cart_list').html(item);
    })
});
