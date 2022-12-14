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

<div class="wrapper row container-fluid">
    <div class="col-lg-9">
        <h3>Danh sách sản phẩm</h3>
        <div class="row">
            <div class="col p-12 t-12 m-12">
                <table class="table">
                    <thead>
                        <tr >
                            <th style="width: 10%;">STT</th>
                            <th style="width: 20%">Tên sản phẩm</th>
                            <th style="width: 15%">Danh mục</th>
                            <th style="width: 15%">Tồn kho</th>
                            <th style="width: 10%">Số lượng mua</th>
                            <th style="width: 10%">Giá tiền</th>
                            <th style="width: 10%">Thành tiền</th>
                            <th style="width: 10%">Xóa</th>
                        </tr>
                    </thead>
                    <tbody id="table_payments">



                    </tbody>

                </table>

            </div>
        </div>
    </div>
    <div class="col-lg-3">
        <h3>Thành tiền</h3>
        <div class="card w-100" style="width: 18rem;" id="card_thanhtien">
            <div class="card-body">
                <p>Tổng tiền : <span id="total"></span></p>
                <div class="d-flex">
                    Giảm giá :
                    <input type="text" class="pl-1 mx-1 type" style="width: 40%" name="currency-field" id="type_price"  data-type="currency"  />
                    <input type="text" class="pl-1 mx-1 type" style="width: 40%;display: none;" name="currency-field" id="type_percent" data-type="currency"  />


                    <select id="type_discount">
                        <option value="0" selected>Tiền</option>
                        <option value="1">%</option>
                    </select>
                </div>
                <div id="vat">
                    <p>VAT(10%) <span><input type="checkbox" value="10"/></span></p>
                </div>
                <p class="mt-3 h5 d-flex justify-content-between font-weight-bold" ><u>Thành tiền:</u> <span class="total_final" id="total-for_price"></span><span class="total_final" style="display: none;" id="total-for_percent"></span></p>
            </div>

        </div>

        <div class="pay-btn mt-2 " >
            <button class="btn btn-success w-100">Thanh toán</button>
        </div>
    </div>


    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="/js/main.js"></script>
{{--    <script src="/js/detail_cart.js"></script>--}}
    <script src="/js/payment.js"></script>
    <script src="/js/cookie/main_cookie.js"></script>
    <script src="/js/show_detail_cart.js"></script>


</body>
</html>
