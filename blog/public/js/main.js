let min = 10;
let max = 100;

const calcLeftPosition = value => 100 / (100 - 10) *  (value - 10);

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
    $('#max').html(newValue);
    $('#line').css({
        'left': calcLeftPosition(min) + '%',
        'right': (100 - calcLeftPosition(newValue)) + '%'
    });
});

const products = [
    {
        name: "Chuột Gaming Wavecom VM01 Black - White Siêu Bền ( Hàng Chính Hãng )",
        id: 1,
        category: [1,2,3],
        image: "https://cf.shopee.vn/file/238afb2d478cc78f91485add3bf7afb0",
        cost_price: 170000,
        discount: "39%",
        evaluate: 4.5,
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
        category: [2,3],
        image: "https://cf.shopee.vn/file/008b389310647a8f6c9a4b17e4d04660",
        cost_price: 200000,
        discount: "30%",
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
        category: [1,3,4],
        image: "https://cf.shopee.vn/file/15b8a768ef5950f926e472cad811100e",
        cost_price: 120000,
        discount: "30%",
        evaluate: 4.4,
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
        category: [1,2,3],
        image: "https://cf.shopee.vn/file/c87bd72e526c5e973b0e21d08f82f754",
        cost_price: 140000,
        discount: "25%",
        evaluate: 4,
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
        category: [1,2,3],
        image: "https://cf.shopee.vn/file/9a4fb9804e22f3ed9fd2c2e534f938a8",
        cost_price: 119000,
        discount: "15%",
        evaluate:4.8,
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
        category: [2,3],
        image: "https://cf.shopee.vn/file/e08ad5948268316c6ef09e097f1b0f3b",
        cost_price: 350000,
        discount: "19%",
        evaluate: 4.7,
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
        category: [2,3],
        image: "https://cf.shopee.vn/file/c8e9b6801ef72375bf3a7fcc4a55b6f7",
        cost_price: 450000,
        discount: "15%",
        evaluate: 4.8,
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
        category: 4,
        image: "https://cf.shopee.vn/file/90a5607d6fe6b78425af544325e61231",
        cost_price: 3200000,
        discount: "20%",
        evaluate: 4.5,
        type: 3,
        logo_shop: "https://cf.shopee.vn/file/3581ce5bba80e2106f6981fafc05f3b8_tn",
        name_shop: "asus.officialstore",
        inventory: 280,
        trade_price: 3000000,
        trade_inventory: 10
    },
    {
        name: "Chuột Gaming Wavecom VM01 Black - White Siêu Bền ( Hàng Chính Hãng )",
        id: 9,
        category: [4],
        image: "https://cf.shopee.vn/file/5d6082b492403ddeb404115576c29da9",
        cost_price: 2850000,
        discount: "15%",
        evaluate: 4.6,
        type: 3,
        logo_shop: "https://cf.shopee.vn/file/b1b54406f2857aff1767a03a31a8fc2d_tn",
        name_shop: "gigadigital",
        inventory: 240,
        trade_price: 2700000,
        trade_inventory: 10
    },
    {
        name: "Chuột Gaming Wavecom VM01 Black - White Siêu Bền ( Hàng Chính Hãng )",
        id: 10,
        category: [4],
        image: "https://cf.shopee.vn/file/ac2d063a81a0c122bba96de3256c1d85",
        cost_price: 2800000,
        discount: "20%",
        evaluate: 4.8,
        type: 3,
        logo_shop: "https://cf.shopee.vn/file/661e874c48d95129a80bd77f80b2f2ba_tn",
        name_shop: "huynhlamcomputer",
        inventory: 379,
        trade_price: 2700000,
        trade_inventory: 10
    },

]
