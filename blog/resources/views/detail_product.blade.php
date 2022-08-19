<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <link rel="stylesheet" href="/css/base.css">
{{--    <link rel="stylesheet" href="/css/grid.css">--}}
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/detail_product.css">



    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>

    <!-- Popper JS -->
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

</head>
<body>

    <div class="" id="detail_product">
        <div class="detail_product_body row">
            <button class="btn btn-dark btn_back">Back</button>
            <div class="product_image col-lg-5">
                <img src="https://cf.shopee.vn/file/7db7e9c63d42783e5560e30ae1cc1b07" alt="">
            </div>
            <div class="product_info col-lg-7">
                <p class="product_name">Máy nước lọc Pureit Lavita</p>
                <div class="rate_star">
                    <span class="rate_number">4.5</span>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                </div>
                <div class="product_price">
                    <span class="old_price">2.000.000</span>
                    <span class="new_price">1.800.000</span>
                </div>
                <div class="product_quantity">
                    <span>Số lượng</span>
                    <div class="restore_quantity">

                            <button>-</button>

                        <input type="text" value="1">

                            <button>+</button>

                    </div>
                    <span class="inventory">100 sản phẩm có sẵn</span>
                </div>
                <button class="btn btn-outline-danger py-3 mt-5">Thêm vào giỏ hàng</button>
            </div>
        </div>
    </div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="/js/main.js"></script>
<script src="/js/detail_product.js"></script>
</body>
</html>
