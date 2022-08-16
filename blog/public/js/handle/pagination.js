let limit = 6
let total_product = products.length
let total_page = Math.floor(total_product / limit) + 1

const setPagination = (currentPage = 0) => {

    currentPage = currentPage == 0 ? (localStorage.getItem("currentPage") || 1) : currentPage
    localStorage.setItem("currentPage", currentPage)

    renderProduct((currentPage - 1)*limit, (currentPage - 1)*limit + limit)

}

const pagination = (currentPage = 0) => {

    currentPage = currentPage == 0 ? (localStorage.getItem("currentPage") || 1) : currentPage

    let nextArr = []
    for (let i = currentPage; i < total_page; i++) {
        nextArr.push(`<a href="javascript:setCurrentPage(${i*1 + 1})" class="pagination__item">${i*1 + 1}</a>`)
    }
    console.log(nextArr)

    let prevArr = []
    for (let i = currentPage; i > 1; i--) {
        prevArr.push(`<a href="javascript:setCurrentPage(${i*1 - 1})" class="pagination__item">${i*1 - 1}</a>`)
    }

    prevArr.reverse()
    console.log(prevArr)

    let leftPage = currentPage*1 - 1 > 0 ? currentPage - 1 : 1
    let rightPage = currentPage*1 + 1 < total_page ? currentPage*1 + 1 : total_page

    let nextHTML = nextArr.join("")

    let prevHTML = prevArr.join("")

    let htmlPagination =
        `<a href="javascript:setCurrentPage(${leftPage})" class="pagination__item">
            <i class="fa-solid fa-angles-left"></i>
        </a>
        ${prevHTML}
        <a href="javascript:setCurrentPage(${currentPage})" class="pagination__item active">${currentPage}</a>
        ${nextHTML}
        <a href="javascript:setCurrentPage(${rightPage})" class="pagination__item">
            <i class="fa-solid fa-angles-right"></i>
        </a>`

    $('.pagination').html(htmlPagination)
    setPagination(currentPage)
}
pagination()

const setCurrentPage = (currentPage = 1) => {
    localStorage.setItem("currentPage", currentPage)
    pagination(localStorage.getItem("currentPage"))
}
