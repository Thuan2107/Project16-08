
$( document ).ready(function() {
    let list_item = []

    // console.log(getCookie('cart_box'));
    if(getCookie('cart_box')){
        list_item = JSON.parse(getCookie('cart_box'))
    }
    $('.addCart button').on('click', function (e){
        e.stopPropagation();
<<<<<<< HEAD


=======
>>>>>>> aa673aae34565ce0e7ce979c710913f64d8e2f53
        let item = ''

        count_item = 0
        let new_item = []
            // attr là phương thức tra về môt phần tử được chọn
            let id = $(this).attr('data-id'),
                // parents là tra về trực tiếp ptu được chọn
                // find trả về một phần tử  con của phần tử dc chọn
            price = $(this).parents('.cart_content').find('.rate_and_price .new_price').text(),
            name = $(this).parents('.cart_content').find('.product_name').text(),
            image = $(this).parents('.product_item').find('.cart_header img').attr('src');
        let flag = 0;
        // map sử dụng để dịch tất cả các mục trong một mảng hoặc đối tượng sang một mảng mục mới.
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


        setCookie('cart_box',JSON.stringify(list_item),10)
        // console.log(list_item)

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

        //hien pop up
        $('.modal_overlay').css("display", "flex");

            setTimeout(() => {
                $('.modal_overlay').css("display", "none");
            }, 1000);

    })

});


