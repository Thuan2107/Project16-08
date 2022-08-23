
$( document ).ready(function() {
    let list_payment = []
    if(getCookie('cart_box')){
        list_payment = JSON.parse(getCookie('cart_box'))
    }

    let tr = ''
    list_payment.map((item,index) => {

            tr+= `
                <tr class="title_one" >
                            <td>${index + 1}</td>
                            <td>${item.name}</td>
                            <td>${item.category_name}</td>
                            <td class="inventory">${item.inventory}</td>
                            <td class="details_pay">
                                <input type="text" class="input_quantity w-100" value="${item.quantity}" />
                            </td>
                            <td class="cost">${(item.cost_price * 1)}</td>


                            <td class="td_price">${(item.quantity * item.cost_price)}</td>

                            <td>
                                <i class="fa-solid fa-trash-can delete_btn" data-id=${item.id}></i>
                            </td>
                        </tr>
           `
        })

    $("#table_payments").html(tr)

    getTotal()

    $(".input_quantity").on("keypress keyup",function (e) {
        // let text = text.;
        let quantity = parseInt($(this).val()) || 1
        let inventory = parseInt($(this).parents('tr').find('.inventory').text())
        // console.log(typeof quantity, inventory)
        // console.log(quantity)
        if(quantity === NaN){
            console.log(1)
        }
        if(quantity > inventory){
            $(this).val(inventory)
        }
        let price = parseInt($(this).parents('tr').find('.cost').text())
        let price_cal = formatPrice(price*quantity)
        $(this).parents('tr').find('.td_price').text(price_cal)
    getTotal()
    })

    $(".delete_btn").on('click', function () {
        let id = $(this).data('id');
        $(this).parents('tr').remove();
        let newCookie = JSON.parse(getCookie('cart_box'));
        for (let i = 0; i < newCookie.length; i++) {
            if (newCookie[i].id == id){
                newCookie.splice(i, 1)
            }
        }
        setCookie('cart_box', JSON.stringify(newCookie))

        getTotal()

    })


    $('#type_discount').on('change', function (){
        let type_discount = $('#type_discount').val()

        if(type_discount == 1){

            $("#type_percent").css("display", "block");
            $("#type_price").css("display", "none");
            $("#total-for_price").css("display", "none");
            $("#total-for_percent").css("display", "block");
            totalPayment().text(formatPrice(getDiscount()))
        }else{
            $("#type_price").css("display", "block");
            $("#type_percent").css("display", "none");
            $("#total-for_percent").css("display", "none");
            $("#total-for_price").css("display", "block");
            totalPayment().text(formatPrice(getDiscount()))
        }

    })

    $('.type').on('keyup', function (){
        // let input_val = $(this).val()
        // console.log(formatPrice(input_val))
        // $(this).val(formatPrice(input_val))
        totalPayment().text(formatPrice(getDiscount()))
    })
//kiem tra VAT
    $('#vat input').on('click',function (){

        if($(this).is(':checked') === true){

            let vat = 0.1*formatNum($('#total').text())
            totalPayment().text(formatPrice(getDiscount() + vat))
        } else {
            totalPayment().text(formatPrice(getDiscount()))
        }

    })
});

function totalPayment(){
    let total_final = $('.total_final')

    getDiscount()
    getTypeDiscount()
    return total_final
}


// function totalPayment1(){
//     let total_for_price = $('#total-for_price')
//     getDiscount()
//     getTypeDiscount()
//     return total_for_price
// }
//
// function totalPayment2(){
//     let total_for_percent = $('#total-for_percent')
//
//     getDiscount()
//     getTypeDiscount()
//     return total_for_percent
// }
function getDiscount(){
    let discount_price = $('#type_price').val()
    let discount_percent = $('#type_percent').val()
    let type_discount = $('#type_discount').val()
    let total = formatNum($('#total').text())

    if (type_discount == 0) {
        total -= discount_price
    }else {
        total -= discount_percent*total/100
    }
    return total
}

function getTotal(){
    let tr_price = $('.title_one')
    let total = 0
    tr_price.each(function (){
        total += Number(formatNum($(this).find('.td_price').text()))
    })
    $("#total").text(total.toLocaleString('en-US'))
}

// console.log(formatNum( $('#total').text()))
function getTypeDiscount(){
    let discount_price = Number($('#type_price').val())
    let discount_percent = Number($('#type_percent').val())
    let total = formatNum( $('#total').text())
    let price_type = $('#type_discount').val()
    // console.log(typeof input_discount,typeof total)
    switch (price_type){
        case '0':
            if (discount_price > total){
                $('#type_price').val(total)
            }
            break
        case '1':
            if (discount_percent > 100){
                $('#type_percent').val(100)
            }
            break
    }
}

function formatNum(num){
    return num.replaceAll(',','')
}

function formatPrice(num) {
    return num.toString().replace(/^[+-]?\d+/,
        function(int) {
            return int.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        });
}

// })


