let menu_categories = ''

categories.forEach((category,index) => {
    menu_categories += `<div class="col-lg-2">
                            <div data-id=${category.id} class="box-categories--item" >
                                <div class="box-categories--img">
                                    <img src="${category.img}" alt="Items" />
                                    <div class="blur"></div>
                                    ${category.icon}
                                </div>
                                <div class="box-categories--text">${category.name}</div>
                            </div>
                        </div>`
})

$('.menu__categories-box').html(menu_categories)
