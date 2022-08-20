$( document ).ready(function() {

    let product_item = JSON.parse(getCookie('product_info'))
    console.log(product_item)

// console.log(product_info)
    let detailproduct = `
<!--            <a class="btn btn-dark btn_back" href="/">Back</a>-->
            <div class="product_image col-lg-5">
                <img src=${product_item.img} alt="">
            </div>
            <div class="product_info col-lg-7">
                <p class="product_name">${product_item.name}</p>
                <div class="rate_star">
                    <span class="rate_number">${product_item.rate}</span>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                </div>
                <div class="product_price">
                    <span class="old_price">${product_item.old_price}</span>
                    <span class="new_price">${product_item.new_price}</span>
                </div>
                <div class="product_quantity">
                    <span>Số lượng</span>
                    <div class="restore_quantity">

                            <button>-</button>

                        <input type="text" value="1">

                            <button>+</button>

                    </div>
                    <span class="inventory">${product_item.inventory} sản phẩm có sẵn</span>
                </div>
                <button class="btn btn-outline-danger py-3 mt-5">Thêm vào giỏ hàng</button>
            </div>
        `

console.log(detailproduct)
    $('.detail_product_body').html(detailproduct)

});







