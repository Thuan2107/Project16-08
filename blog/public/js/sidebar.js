let filter_price = '<p>Sắp Xếp</p>'

fillter_sorts.forEach((filter, i) => {
    filter_price += `<div>
                <input type="radio" id="price${i}" name="price" class="radio-title"  value="${filter.name}"
                       />
                <label for="price${i}" >${filter.name}</label>
            </div>`
})
$(".sort.price").html(filter_price)

let filter_loaihinh = ' <p>Loại Hình</p>'

fillter_type.forEach((filter,i)=>{
    filter_loaihinh += `<div>
                <input type="radio" id="type${i}" data-id=${filter.id} class="radio-title radio-title1" name="type" value="${filter.name}"
                       />
                <label for="type${i}" >${filter.name}</label>
            </div>`
})

//


$(".type ").html(filter_loaihinh)


$('.input').on('input', function () {
    // console.log($(this).val()); // lấy giá trị
    // console.log($(this).val().toLowerCase()); //
    // console.log($(this).val().toLowerCase().normalize('NFD').replace(/[^0-9a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ\s]/gi), '');
    let keyword = ChangeToSlug($(this).val().toLowerCase())

    let sortCloneProduct = products.filter((product, i) => ChangeToSlug(product.name.toLowerCase()).includes(keyword))
    console.log(keyword === '')
    if(keyword === '') {
        renderProduct(0, limit)
    } else {
        renderProduct(0, 0, 1, sortCloneProduct)
    }

});
<<<<<<< HEAD


=======

<<<<<<< HEAD

=======
    $('#price0').click(function(){
        let listPrice = []
        listPrice = products.sort((a,b) => (a["cost_price"] - (a["cost_price"]*a["discount"]/100)) - (b["cost_price"] - (b["cost_price"]*b["discount"]/100)))
        console.log(listPrice)
        renderProduct(0,6,0,listPrice)
    })
    $('#price1').click(function(){
        let listPrice = []
        listPrice = products.sort((a,b) => (b["cost_price"] - (b["cost_price"]*b["discount"]/100)) - (a["cost_price"] - (a["cost_price"]*a["discount"]/100)))
        renderProduct(0,6,0,listPrice)
    })
>>>>>>> 0c88acd52c0b32ff33f8612517f61c8be2751d2b
>>>>>>> cb66fa48a3df2488f20094c025d0076978bb93d5


