let filter_price = '<p>Sắp Xếp</p>'

fillter_sorts.forEach((filter, i) => {
    filter_price += `<div>
                <input type="radio" id="price${i}" name="price" class="radio-title"  value="${filter.name}"
                       ${i==0 ?'checked':''}/>
                <label for="price${i}" >${filter.name}</label>
            </div>`
})
console.log(filter_price)
$(".sort.price").html(filter_price)

let filter_type = ' <p>Loại Hình</p>'

fillter_type.forEach((filter,i)=>{
    filter_type += `<div>
                <input type="radio" id="price${i}" class="radio-title" name="type" value="${filter.name}"  ${i==0 ?'checked':''}/>
                <label for="price${i}" >${filter.name}</label>
            </div>`
})

console.log(filter_type)
$(".type .sort").html(filter_type)