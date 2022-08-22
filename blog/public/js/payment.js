$( document ).ready(function() {
    let list_payment = []
    if(getCookie('cart_box')){
        list_payment = JSON.parse(getCookie('cart_box'))
    }
    for (let i = 0; i < list_payment.length; i++) {
        // console.log(list_payment[1])
    }
    console.log(typeof list_payment)
    let tr = ''
    list_payment.map((item,index) => {

            tr+= `
                <tr class="title_one" >
                            <td>${index + 1}</td>
                            <td>${item.name}</td>
                            <td>${item.category_name}</td>
                            <td>${item.inventory}</td>
                            <td class="details_pay">
                                <input type="text" class="input_number" value="${item.quantity}" />
                            </td>
                            <td>${item.cost_price}</td>

                            <td id="total">${item.quantity * item.cost_price}</td>
                            <td>
                                <i class="fa-solid fa-trash-can delete_btn" data-id=${item.id}></i>
                            </td>
                        </tr>
           `
        })

        $("#table_payments").html(tr)





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

        /**
         * Chuyen tu json sang array
         * tim phan tu co id bang id vua chon va xoa phan tu ra khoi mang
         * chuyen arr sang json
         * luu lai cookie
         */
    })






});



