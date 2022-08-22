$( document ).ready(function() {
    $('.product_item').on('click', function (){
        let product_name = $(this).find('.cart_content .product_name').text()
        let old_price = $(this).find('.cart_content .old_price').text()
        let new_price = $(this).find('.cart_content .new_price').text()
        let product_image = $(this).find('.product_image img').attr('src')
        let rate_number = $(this).find('.cart_content .rate_star .rate_number').text()
        // console.log(product_name, old_price, new_price, product_image,rate_number)
        let inventory = $(this).find('.product_cart').attr('data-id')
        let product_info = {
            name: product_name,
            old_price: old_price,
            new_price: new_price,
            img: product_image,
            rate: rate_number,
            inventory: inventory
        }
        setCookie("product_info", JSON.stringify(product_info), 10)

        window.location = "/chi-tiet-san-pham"
    })


});
