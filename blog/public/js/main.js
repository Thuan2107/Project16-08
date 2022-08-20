let min = 0;
let max = 100;
let cloneProducts = []

const calcLeftPosition = value => 100 / (100 - 1) *  (value - 1);

$('#rangeMin').on('input', function(e) {
    const newValue = parseInt(e.target.value);
    if (newValue > max) return;
    min = newValue;
    $('#thumbMin').css('left', calcLeftPosition(newValue) + '%');
    $('#min').html(newValue);
    $('#line').css({
        'left': calcLeftPosition(newValue) + '%',
        'right': (100 - calcLeftPosition(max)) + '%'
    });
});

$('#rangeMax').on('input', function(e) {
    const newValue = parseInt(e.target.value);
    if (newValue < min) return;
    max = newValue;
    $('#thumbMax').css('left', calcLeftPosition(newValue) + '%');
    $('#max').html(Math.floor((newValue/100) * $('#ValueMax').val()));
    $('#line').css({
        'left': calcLeftPosition(min) + '%',
        'right': (100 - calcLeftPosition(newValue)) + '%'
    });
});

    const ChangeToSlug = (keyword) => {
    let namef, slug;

    namef = keyword

    slug = namef.toLowerCase();

    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    //Xóa các ký tự đặt biệt
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, "-");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');
    // Thay ,- thành ,
    slug = slug.replace(/\,\-/gi, ", ");
    slug = slug.replace(/\-/gi, "");
    //In kết quả ra slug
    return slug
}


const products = [
    {
        name: "Chuột Gaming Wavecom VM01 Black - White Siêu Bền ( Hàng Chính Hãng )",
        id: 1,
        category: 1,
        image: "https://cf.shopee.vn/file/238afb2d478cc78f91485add3bf7afb0",
        cost_price: 170000,
        discount: "39",
        evaluate: 3.9,
        type: 1,
        logo_shop: "https://cf.shopee.vn/file/d37efde5b9ede7845eedfdc23a0f2fcb_tn",
        name_shop: "viethuystores",
        inventory: 129,
        trade_price: 150000,
        trade_inventory: 10
    },
    {
        name: "Bàn Phím Máy Tính Gaming Giả Cơ Độ Chơi Game Đạt Nhạy Cao Chống Nước Có Đèn Led Nền Siêu Chất Đạt Tiêu Chuẩn ESPORTS",
        id: 2,
        category: 1,
        image: "https://cf.shopee.vn/file/008b389310647a8f6c9a4b17e4d04660",
        cost_price: 200000,
        discount: "30",
        evaluate: 4.6,
        type: 2,
        logo_shop: "https://cf.shopee.vn/file/2a9582daffe3d5ce066dc8ae178d4bca_tn",
        name_shop: "shopvinhnguyen",
        inventory: 210,
        trade_price: 180000,
        trade_inventory: 10
    },
    {
        name: "Chuột không dây HXSJ M103 wireless tự sạc pin siêu mỏng không gây tiếng ồn chuyên dùng cho Máy tính, pc, Laptop, Tivi",
        id: 3,
        category: 1,
        image: "https://cf.shopee.vn/file/15b8a768ef5950f926e472cad811100e",
        cost_price: 120000,
        discount: "30",
        evaluate: 2.1,
        type: 1,
        logo_shop: "https://cf.shopee.vn/file/ac14b47e7b1123ba1be00f83b8eb7467_tn",
        name_shop: "doantuyen1804",
        inventory: 309,
        trade_price: 99000,
        trade_inventory: 20
    },
    {
        name: "Chuột chơi game không dây HXSJ X801 thiết kế độc lạ Led RGB đổi màu click chống ồn DPI 1600 - Hàng chính hãng",
        id: 4,
        category: 1,
        image: "https://cf.shopee.vn/file/c87bd72e526c5e973b0e21d08f82f754",
        cost_price: 140000,
        discount: "25",
        evaluate: 4.0,
        type: 1,
        logo_shop: "https://cf.shopee.vn/file/ac14b47e7b1123ba1be00f83b8eb7467_tn",
        name_shop: "doantuyen1804",
        inventory: 201,
        trade_price: 120000,
        trade_inventory: 12
    },
    {
        name: "Chuột có dây chơi game HXSJ S200 sử dụng mượt mà với độ nhạy cao, chất liệu bền đẹp, led RGB - Hàng Chính Hãng",
        id: 5,
        category: 1,
        image: "https://cf.shopee.vn/file/9a4fb9804e22f3ed9fd2c2e534f938a8",
        cost_price: 119000,
        discount: "15",
        evaluate:3.5,
        type: 1,
        logo_shop: "https://cf.shopee.vn/file/ac14b47e7b1123ba1be00f83b8eb7467_tn",
        name_shop: "doantuyen1804",
        inventory: 405,
        trade_price: 109000,
        trade_inventory: 10
    },
    {
        name: "Bàn phím cơ Magegee MK-mini Kết nối Bluetooth & Có dây nhỏ gọn Đèn LED nhiều màu để lựa chọn (Chỉ Bluetooth trên MiniPlus)",
        id: 6,
        category: 1,
        image: "https://cf.shopee.vn/file/e08ad5948268316c6ef09e097f1b0f3b",
        cost_price: 350000,
        discount: "19",
        evaluate: 4.1,
        type: 2,
        logo_shop: "https://cf.shopee.vn/file/b198f223b12d24f2386f49fc9771a2af_tn",
        name_shop: "magegee.official.vn",
        inventory: 650,
        trade_price: 320000,
        trade_inventory: 10
    },
    {
        name: "Bàn phím cơ MageGee MK-Box 65% có dây 68 phím dành cho laptop",
        id: 7,
        category: 1,
        image: "https://cf.shopee.vn/file/c8e9b6801ef72375bf3a7fcc4a55b6f7",
        cost_price: 450000,
        discount: "15",
        evaluate: 5.0,
        type: 2,
        logo_shop: "https://cf.shopee.vn/file/b198f223b12d24f2386f49fc9771a2af_tn",
        name_shop: "magegee.official.vn",
        inventory: 520,
        trade_price: 420000,
        trade_inventory: 10
    },
    {
        name: "Màn hình ASUS VA249HE 24 inch Full HD 5ms Bảo Vệ Mắt",
        id: 8,
        category: 1,
        image: "https://cf.shopee.vn/file/90a5607d6fe6b78425af544325e61231",
        cost_price: 3200000,
        discount: "20",
        evaluate: 3.9,
        type: 3,
        logo_shop: "https://cf.shopee.vn/file/3581ce5bba80e2106f6981fafc05f3b8_tn",
        name_shop: "asus.officialstore",
        inventory: 280,
        trade_price: 3000000,
        trade_inventory: 10
    },
    {
        name: "Màn hình vi tính Xiaomi Mi Desktop Monitor 1C 23.8 inch (BHR4510GL) - Bản Quốc Tế Chính Hãng",
        id: 9,
        category: 1,
        image: "https://cf.shopee.vn/file/5d6082b492403ddeb404115576c29da9",
        cost_price: 2850000,
        discount: "15",
        evaluate: 3.0,
        type: 3,
        logo_shop: "https://cf.shopee.vn/file/b1b54406f2857aff1767a03a31a8fc2d_tn",
        name_shop: "gigadigital",
        inventory: 240,
        trade_price: 2700000,
        trade_inventory: 10
    },
    {
        name: "Màn Hình hãng GLOWAY17|19|22|24 inch - Mới 100% FULL BOX - Hàng chính hãng bảo hành 2 năm",
        id: 10,
        category: 1,
        image: "https://cf.shopee.vn/file/ac2d063a81a0c122bba96de3256c1d85",
        cost_price: 2800000,
        discount: "20",
        evaluate: 2.7,
        type: 3,
        logo_shop: "https://cf.shopee.vn/file/661e874c48d95129a80bd77f80b2f2ba_tn",
        name_shop: "huynhlamcomputer",
        inventory: 379,
        trade_price: 2700000,
        trade_inventory: 10
    },
    {
        name: "Áo sơ mi dài tay form rộng cổ V hàn quốc vải linen cao cấp, thấm hút mồ hôi tốt - SEOUL",
        id: 11,
        category: 0,
        image: "https://cf.shopee.vn/file/2c2ae38b3df22aac6ee2e576051a3430",
        cost_price: 350000,
        discount: "10",
        evaluate: 3.9,
        type: 2,
        logo_shop: "https://cf.shopee.vn/file/5ed29c1e4de6cfb23f319b67de6ac764_tn",
        name_shop: "seoulsg",
        inventory: 412,
        trade_price: 325000,
        trade_inventory: 10
    },
    {
        name: "QUẦN KAKI TÚI HỘP ỐNG RỘNG FORM UNISEX NAM NỮ (kèm ảnh thật)",
        id: 12,
        category: 0,
        image: "https://cf.shopee.vn/file/dc122831c7f86e0fbd370cea75e87ad2",
        cost_price: 170000,
        discount: "14",
        evaluate: 4.2,
        type: 2,
        logo_shop: "https://cf.shopee.vn/file/a4ab5a471a636cfeb2f8c59079df0b03_tn",
        name_shop: "sonmin_unisex",
        inventory: 311,
        trade_price: 150000,
        trade_inventory: 10
    },
    {
        name: "QUẦN SHORT ÂU - QUẦN ĐÙI FORM UNISEX NAM NỮ (kèm hình chụp thật)",
        id: 13,
        category: 0,
        image: "https://cf.shopee.vn/file/ac2d063a81a0c122bba96de3256c1d85",
        cost_price: 150000,
        discount: "18",
        evaluate: 4.8,
        type: 2,
        logo_shop: "https://cf.shopee.vn/file/a4ab5a471a636cfeb2f8c59079df0b03_tn",
        name_shop: "sonmin_unisex",
        inventory: 309,
        trade_price: 135000,
        trade_inventory: 10
    },
    {
        name: "Áo sơ mi dài tay form rộng hàn quốc cổ bẻ, vải linen mềm mại, thấm hút mồ hôi tốt - SEOUL",
        id: 14,
        category: 0,
        image: "https://cf.shopee.vn/file/86b4f78c85c71b128e3616ea3a282d87",
        cost_price: 210000,
        discount: "15",
        evaluate: 3.8,
        type: 2,
        logo_shop: "https://cf.shopee.vn/file/5ed29c1e4de6cfb23f319b67de6ac764_tn",
        name_shop: "seoulsg",
        inventory: 129,
        trade_price: 1900000,
        trade_inventory: 10
    },
    {
        name: "Đồng hồ nam dây da Dyanwatch đồng hồ đeo tay nam thời trang mặt vuông",
        id: 15,
        category: 3,
        image: "https://cf.shopee.vn/file/b58d5d62afee1bc720a327c747d1abc6",
        cost_price: 130000,
        discount: "5",
        evaluate: 3.2,
        type: 3,
        logo_shop: "https://cf.shopee.vn/file/8149b1ddd1f3fda236cbd13557da9a45_tn",
        name_shop: "dyanwatchshop",
        inventory: 801,
        trade_price: 120000,
        trade_inventory: 10
    },
    {
        name: "Đồng hồ thời trang nam nữ MSTIANQ mặt vuông, đồng hồ điện tử chính hãng dây cao su cao cấp chống nước chống sốc",
        id: 16,
        category: 3,
        image: "https://cf.shopee.vn/file/c39537056b56125c560e1635243b6c90",
        cost_price: 2800000,
        discount: "10",
        evaluate: 3.1,
        type: 3,
        logo_shop: "https://cf.shopee.vn/file/1a7bac6ad0f79a3665ab01e82103eeeb_tn",
        name_shop: "windwatch",
        inventory: 319,
        trade_price: 2600000,
        trade_inventory: 10
    },
    {
        name: "Đồng hồ nam cao cấp POEDAGAN mặt đính đá, đồng hồ chính hãng chống nước chống xước dây sắt",
        id: 17,
        category: 1,
        image: "https://cf.shopee.vn/file/9a23a4827746102408a4f061a54227a7",
        cost_price: 240000,
        discount: "15",
        evaluate: 4.0,
        type: 3,
        logo_shop: "https://cf.shopee.vn/file/1a7bac6ad0f79a3665ab01e82103eeeb_tn",
        name_shop: "windwatch",
        inventory: 349,
        trade_price: 220000,
        trade_inventory: 10
    },
    {
        name: "ÁO KHOÁC KAKI JEANS FULL 4 MÀU FORM UNISEX NAM NỮ (kèm ảnh thật)",
        id: 18,
        category: 0,
        image: "https://cf.shopee.vn/file/150ede4d326c53bba323e49c4ab9cd6f",
        cost_price: 170000,
        discount: "18",
        evaluate: 3.8,
        type: 2,
        logo_shop: "https://cf.shopee.vn/file/a4ab5a471a636cfeb2f8c59079df0b03_tn",
        name_shop: "sonmin_unisex",
        inventory: 503,
        trade_price: 160000,
        trade_inventory: 10
    },
    {
        name: "Nón mũ lưỡi trai WONDER thời trang unisex nam nữ",
        id: 19,
        category: 0,
        image: "https://cf.shopee.vn/file/46ddad2772eb651936a791099f773731",
        cost_price: 80000,
        discount: "10",
        evaluate: 5.0,
        type: 3,
        logo_shop: "https://cf.shopee.vn/file/840a8811ffb97c476b84c98275c7ced3_tn",
        name_shop: "ab_house",
        inventory: 379,
        trade_price: 70000,
        trade_inventory: 10
    },
    {
        name: "Giày AF1 Vệt Nâu Hàng Đẹp Full Box, giày Air force 1 Đủ Size 36-43 Full Box, Bill",
        id: 20,
        category: 4,
        image: "https://cf.shopee.vn/file/f003b2b1b8c2d994b6c53545c3ecdc32",
        cost_price: 315000,
        discount: "10",
        evaluate: 4.5,
        type: 3,
        logo_shop: "https://cf.shopee.vn/file/e6a64f3575ca9fc1c95986505aadf609_tn",
        name_shop: "mymon_shop",
        inventory: 420,
        trade_price: 290000,
        trade_inventory: 10
    },
    {
        name: "Giày thể thao Sneaker nam nữ AF1 trắng cao cấp ,thời trang Genz 2022",
        id: 21,
        category: 3.9,
        image: "https://cf.shopee.vn/file/f543e2b6d5eedc46610faec55137aea3",
        cost_price: 350000,
        discount: "10",
        evaluate: 5.0,
        type: 3,
        logo_shop: "https://cf.shopee.vn/file/be7ca6c9cd0778b79cfe3df2175fbe78_tn",
        name_shop: "h2_shoes",
        inventory: 420,
        trade_price: 330000,
        trade_inventory: 10
    }

]

const fillter_sorts = [
    {
        name : "Giá từ thấp đến cao",
    },
    {
        name : "Giá từ cao đến thấp",
    },
    {
        name : "Từ A - Z",
    },
    {
        name : "Từ Z - A",
    },
    {
        name : "Khuyến mãi nhiều nhất",
    },
    {
        name : "Khuyến mãi ít nhất",
    },
]

const fillter_type = [
    {
        id : 0,
        name : "Tất cả",
    },
    {
        id : 1,
        name : "Bán chạy",
    },
    {
        id : 2,
        name : "Giảm sâu Friends",
    },
    {
        id : 3,
        name : "Siêu hot",
    },
]

const categories = [
    {
        id: 0,
        name : "Thời trang",
        icon : "<i class=\"fa-solid fa-bath\"></i>",
        img  : "https://images.unsplash.com/photo-1660548842708-e83b9a17cdb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=405&q=80",
    },
    {
        id: 1,
        name : "Điện tử",
        icon : "<i class=\"fa-solid fa-basketball\"></i>",
        img  : "https://images.unsplash.com/photo-1660548842498-852ef7793ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    },
    {
        id: 2,
        name : "Điện thoại",
        icon : "<i class=\"fa-solid fa-baseball-bat-ball\"></i>",
        img  : "https://images.unsplash.com/photo-1660569883128-765b7c16f731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
        id : 3,
        name : "Đồng hồ",
        icon : "<i class=\"fa-solid fa-baseball\"></i>",
        img  : "https://images.unsplash.com/photo-1660569883128-765b7c16f731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
        id: 4,
        name : "Giày dép",
        icon : "<i class=\"fa-solid fa-barcode\"></i>",
        img  : "https://images.unsplash.com/photo-1660489060328-9868cad59617?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
        id: 5,
        name : "Ô tô/xe máy",
        icon : "<i class=\"fa-brands fa-bandcamp\"></i>",
        img  : "https://images.unsplash.com/photo-1611002214172-792c1f90b59a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
        id: 6,
        name : "Sắc đẹp",
        icon : "<i class=\"fa-solid fa-baht-sign\"></i>",
        img  : "https://images.unsplash.com/photo-1660548842807-0495cc5423e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    },
    {
        id: 7,
        name : "Sức khỏe",
        icon : "<i class=\"fa-solid fa-atom\"></i>",
        img  : "https://images.unsplash.com/photo-1660548840757-b92bc9a5f764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    },
    {
        id: 8,
        name : "Nhà cửa",
        icon : "<i class=\"fa-solid fa-arrow-up-from-water-pump\"></i>",
        img  : "https://images.unsplash.com/photo-1660569833895-afa346764cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
        id: 9,
        name : "Bách hóa",
        icon : "<i class=\"fa-brands fa-app-store-ios\"></i>",
        img  : "https://images.unsplash.com/photo-1660594714679-19b0173e0558?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
        id: 10,
        name : "Trang sức",
        icon : "<i class=\"fa-brands fa-angrycreative\"></i>",
        img  : "https://images.unsplash.com/photo-1660554042520-db71c7fea8d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
        id: 11,
        name : "Sách",
        icon : "<i class=\"fa-solid fa-address-book\"></i>",
        img  : "https://images.unsplash.com/photo-1657299143020-4f4bbf05174d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
    }
]


// $('.details_pay1').click('click',function (){
//     let cart_apart = $(this).val();
//     let add = [];
//     for (let i = 0; i < products.length; i++) {
//         if(cart_apart = cart_apart - products[i].id )
//         {
//             add = products[i]
//         }
//         console.log(add)
//     }
// })
