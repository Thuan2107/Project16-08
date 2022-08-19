$( document ).ready(function() {
    $('.product_item').on('click', function (){
        let item_id = $(this).attr('id')
        // console.log(typeof item_id)
        let itemDetail=[]
        let product_detail = ''
        for (let i = 0; i < products.length; i++) {
            if(item_id == products[i].id){
                itemDetail = products[i]
                // console.log(itemDetail)
                // console.log(products[i])
                product_detail += `
                    <button class="btn btn-dark btn_back">Back</button>
                    <div class="product_image col-lg-5">
                        <img src=${itemDetail.image} alt="">
                    </div>
                    <div class="product_info col-lg-7">
                        <p class="product_name">${itemDetail.name}</p>
                        <div class="rate_star">
                            <span class="rate_number">${itemDetail.evaluate}</span>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <div class="product_price">
                            <span class="old_price">${itemDetail.cost_price}</span>
                            <span class="new_price">${itemDetail.cost_price - (itemDetail.cost_price*itemDetail.discount/100)}</span>
                        </div>
                        <div class="product_quantity">
                            <span>Số lượng</span>
                            <div class="restore_quantity">

                                    <button>-</button>

                                <input type="text" value="1">

                                    <button>+</button>

                            </div>
                            <span class="inventory">${itemDetail.inventory} sản phẩm có sẵn</span>
                        </div>
                        <button class="btn btn-outline-danger py-3 mt-5">Thêm vào giỏ hàng</button>
                    </div>
                `
                $('.detail_product_body').html(product_detail)
            }
            // window.location = "/a";
            // console.log(product_detail)
        }
    })

    //load san pham
    // console.log(products)
});



