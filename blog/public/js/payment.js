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
                            <td >${(item.cost_price * 1).toLocaleString('en-US')}</td>

                            <td >${(item.quantity * item.cost_price).toLocaleString('en-US')}</td>
                            <td>
                                <i class="fa-solid fa-trash-can"></i>
                            </td>
                        </tr>
           `
    })
    $("#table_payments").html(tr)
    function getTotal(){
        let summ=0;
        for (let i = 0; i < list_payment.length; i++) {
            let total = list_payment[i].cost_price * list_payment[i].quantity
            summ += total

        }
        return summ.toLocaleString('en-US')
    }

    $('.total_price').text(getTotal())

    console.log(getTotal())
});





