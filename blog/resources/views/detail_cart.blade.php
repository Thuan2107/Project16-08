<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <link rel="stylesheet" href="/css/base.css">
    <link rel="stylesheet" href="/css/grid.css">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/detail_cart.css">



    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

</head>
<body>

<div class="wrapper">
    <div class="grid wide">
        <h3>Danh sách sản phẩm</h3>
        <div class="row">
            <div class="col p-12 t-12 m-12">
                <table class="table">
                    <thead>
                        <tr >

                            <th >Hình ảnh</th>
                            <th class="size">Tên sản phẩm</th>
                            <th >Đơn giá</th>
                            <th >Số lượng</th>
                            <th >Số tiền</th>
                            <th >Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="title_one">
                            <td  class="details_img">
                                <img src="https://cf.shopee.vn/file/90a5607d6fe6b78425af544325e61231">
                            </td>
                            <td>Màn hình ASUS VA249HE 24 inch Full HD 5ms Bảo Vệ Mắt Màn hình ASUS VA249HE 24 inch Full HD 5ms Bảo Vệ Mắt</td>
                            <td>10.000</td>
                            <td class="details_pay">
                                <button>-</button>
                                <input type="text" class="input_number" aria-valuenow="1" value="1"/>
                                <button>+</button>
                            </td>
                            <td>10.000</td>
                            <td>
                                <i class="fa-solid fa-trash-can"></i>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row" class="details_img">
                                <img src="https://cf.shopee.vn/file/90a5607d6fe6b78425af544325e61231">
                            </td>
                            <td>Màn hình ASUS VA249HE 24 inch Full HD 5ms Bảo Vệ Mắt</td>
                            <td>10.000</td>
                            <td class="details_pay">
                                <button onclick="btn_apart">-</button>
                                <input type="text" class="input_number" aria-valuenow="1" value="1"/>
                                <button onclick="btn_add">+</button>
                            </td>
                            <td>10.000</td>
                            <td>
                                <i class="fa-solid fa-trash-can"></i>
                            </td>

                        </tr>
                        <tr class="title_one">
                            <td  class="details_img">
                                <img src="https://cf.shopee.vn/file/90a5607d6fe6b78425af544325e61231">
                            </td>
                            <td>Màn hình ASUS VA249HE 24 inch Full HD 5ms Bảo Vệ Mắt Màn hình ASUS VA249HE 24 inch Full HD 5ms Bảo Vệ Mắt</td>
                            <td>10.000</td>
                            <td class="details_pay">
                                <button>-</button>
                                <input type="text" class="input_number" aria-valuenow="1" value="1"/>
                                <button>+</button>
                            </td>
                            <td>10.000</td>
                            <td>
                                <i class="fa-solid fa-trash-can"></i>
                            </td>
                        </tr>
                    </tbody>

                </table>
                <div class="product_pay">
                    <label>Tổng tiền: <span></span></label>
                    <button>Thanh toán</button>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="/js/main.js"></script>
<script src="/js/detail_cart.js"></script>
</body>
</html>
