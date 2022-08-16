const renderProduct = (start = 0, limit = 0) => {
    let cloneProducts = products.slice(start, limit)
    let listProduct = ''
    cloneProducts.forEach((product,index) => {
        listProduct += `<div class="product_item p-4">
                    <div class="product_cart">
                        <div class="cart_header">
                            <div class="product_image">
                                <img src="${product.image}" alt="">
                            </div>
                            <div class="shop_info">
                                <div class="shop_avatar">
                                    <img src="${product.logo_shop}" alt="">
                                </div>
                                <span class="shop_name">${product.name_shop}</span>
                            </div>
                            <div class="kpi">${fillter_type[product.type].name}</div>
                        </div>
                        <div class="cart_content">
                            <div class="product_name">
                                ${product.name}
                            </div>
                            <div class="rate_and_price">
                                <div class="rate_star">
                                    <span class="rate_number">${product.evaluate}</span>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <div class="product_price">
                                    <span class="old_price">${product.cost_price.toLocaleString('it-IT', )} </span>
                                    <span class="new_price"> ${(product.cost_price - (product.cost_price * (product.discount / 100))).toLocaleString('it-IT', )}</span>
                                </div>
                            </div>
                            <div class="addCart">
                                <button>Thêm vào giỏ</button>
                            </div>
                        </div>
                    </div>
                </div>
        `
    })
    $('.product_list').html(listProduct)

}
