$( document ).ready(function() {
    let list_payment = []
    if(getCookie('cart_box')){
        list_payment = JSON.parse(getCookie('cart_box'))

    }

    let tr = ''
    list_payment.map((item,index) => {

           tr+= `
                <tr class="title_one">
                            <td>${index + 1}</td>
                            <td>${item.name}</td>
                            <td>${item.category_name}</td>
                            <td>${item.inventory}</td>
                            <td class="details_pay">
                                <input type="text" class="input_number" value="${item.quantity}" />
                            </td>
                            <td>${item.cost_price}</td>

                            <td>${item.quantity * item.cost_price}</td>
                            <td>
                                <i class="fa-solid fa-trash-can"></i>
                            </td>
                        </tr>
           `
    })
    $("#table_payments").html(tr)




});



