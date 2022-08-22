<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <link rel="stylesheet" href="/css/base.css">
        <link rel="stylesheet" href="/css/grid.css">
        <link rel="stylesheet" href="/css/main.css">
        <link rel="stylesheet" href="/css/menu_category.css">
        <link rel="stylesheet" href="/css/filter_sidebar.css">
        <link rel="stylesheet" href="/css/main_category.css">
        <link rel="stylesheet" href="/css/cart.css">
        <link rel="stylesheet" href="/css/pagination.css">


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

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div class="wrapper">
            <div class="grid wide">
                <div class="row">
                    <div class="col-lg-3">
                        @include('menu_category')
                        @include('filter_sidebar')
                    </div>
                    <div class="col-lg-9">
                        @include('main_category')
                    </div>
                </div>
                @include('cart')

            </div>
        </div>
        <div class="modal_overlay">
                <div class="modal_content">
                    <i class="fa-solid fa-circle-check"></i>
                    <p>Thêm vào giỏ hàng thành công</p>
                </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="/js/main.js"></script>
        <script src="/js/sidebar.js"></script>
        <script src="/js/product.js"></script>
        <script src="/js/menu_category.js"></script>
        <script src="/js/filter.js"></script>
        <script src="/js/handle/sortPriceAndRate.js"></script>
        <script src="/js/handle/pagination.js"></script>
        <script src="/js/detail_product.js"></script>
        <script src="/js/addToCart.js"></script>
        <script src="/js/cookie/main_cookie.js"></script>
        <script src="/js/clickShowDetail.js"></script>
        <script src="/js/clickShowDetail.js"></script>
        <script src="/js/show_detail_cart.js"></script>


    </body>
</html>
