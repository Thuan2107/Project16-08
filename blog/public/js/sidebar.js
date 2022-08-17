let filter_price = '<p>Sắp Xếp</p>'

fillter_sorts.forEach((filter, i) => {
    filter_price += `<div class="group_radio">
                <input type="radio" id="price${i}" name="price" class="radio-title"  value="${filter.name}"/>
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




