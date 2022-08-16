let obj = { a: 4, b: 0.5 , c: 0.35, d: 5 };

let minPrice = Math.min(...products.map(o => (o.cost_price)))

let maxPrice = Math.max(...products.map(o => (o.cost_price)))

let maxProduct = products.filter(product => {
    return product.cost_price == maxPrice
})

max = maxPrice

$('#max').html(max)
$('#ValueMax').val(max)
// $('#rangeMax').attr('max', max)
// $('#rangeMax').attr('value', max)
