

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
                            <td>${item.inventory}</td>
                            <td class="details_pay">
                                <input type="text" class="input_number" value="${item.quantity}" />
                            </td>
                            <td >${(item.cost_price * 1).toLocaleString('en-US')}</td>


                            <td class="td_price">${(item.quantity * item.cost_price).toLocaleString('en-US')}</td>

                            <td>
                                <i class="fa-solid fa-trash-can delete_btn" data-id=${item.id}></i>
                            </td>
                        </tr>
           `
        })

        $("#table_payments").html(tr)


    getTotal()
    // function getTotal(){
    //     let summ=0;
    //     for (let i = 0; i < list_payment.length; i++) {
    //         summ += parseInt(list_payment[i].cost_price)
    //     }
    //     console.log(summ)
    //     $('#total').text(summ.toLocaleString('en-US'))
    // }

    function getTotal(){
        let tr_price = $('.title_one')
        let total = 0
        tr_price.each(function (){
            total += Number(formatNum($(this).find('.td_price').text()))
        })
        $("#total").text(total.toLocaleString('en-US'))

    }

    function formatNum(num){
        return num.replaceAll(',','')
    }


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
        getTotal()
        // $('#total').text(getTotal())
    })




});









