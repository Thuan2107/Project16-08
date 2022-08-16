let filter_price = '<p>Sắp Xếp</p>'

fillter_sorts.forEach((filter, i) => {
    filter_price += `<div>
                <input type="radio" id="price${i}" name="price" class="radio-title"  value="${filter.name}"
                       ${i==0 ?'checked':''}/>
                <label for="price${i}" >${filter.name}</label>
            </div>`
})
$(".sort.price").html(filter_price)

let filter_loaihinh = ' <p>Loại Hình</p>'

fillter_type.forEach((filter,i)=>{
    filter_loaihinh += `<div>
                <input type="radio" id="type${i}" class="radio-title" name="type" value="${filter.name}"
                       ${i==0 ?'checked':''}/>
                <label for="type${i}" >${filter.name}</label>
            </div>`
})

$(".type ").html(filter_loaihinh)


// $('.input').on('input', function () {
//     console.log($(this).val().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
//
// });

