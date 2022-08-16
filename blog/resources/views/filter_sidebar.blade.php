<div class="col p-12 t-12 m-12 radio-left">
    <div class="fillter__sidebar">
        <div class="teller">
            <p>Bộ Lọc</p>
        </div>
        <div class="sort">
            <p>Sắp Xếp</p>
            <div>
                <input type="radio" id="1" class="radio-title" name="drone" value="Giá Cao Đến Thấp"
                       checked/>
                <label for="1" >Giá Cao Đến Thấp</label>
            </div>
            <div>
                <input type="radio" id="2" class="radio-title" name="drone" value="Giá Thấp Đến Cao"/>
                <label for="2" >Giá Thấp Đến Cao</label>
            </div>
            <div>
                <input type="radio" id="3" class="radio-title" name="drone" value="Từ A-Z">
                <label for="3" >Từ A-Z</label>
            </div>
            <div>
                <input type="radio" id="4" class="radio-title" name="drone" value="Từ Z-A">
                <label for="4" >Từ Z-A</label>
            </div>
            <div>
                <input type="radio" id="5" id="radio-title " name="drone" value="Khuyến Mãi Nhiều Nhất">
                <label for="5" >Khuyến Mãi Nhiều Nhất</label>
            </div>
            <div>
                <input type="radio" id="6" class="radio-title" name="drone" value="Khuyến Mãi Ít Nhất">
                <label for="6" >Khuyến Mãi Ít Nhất</label>
            </div>
        </div>
        <div class="type sort">
            <p>Loại Hình</p>
            <div>
                <input type="radio" id="7" class="radio-title" name="drone1" value="TatCa"checked>
                <label for="7" >Tất Cả</label>
            </div>
            <div>
                <input type="radio" id="8" class="radio-title" name="drone1" value="BanChay">
                <label for="8" >Bán Chạy</label>
            </div>
            <div>
                <input type="radio" id="9" class="radio-title" name="drone1" value="GiamSau">
                <label for="9" >Giảm Sâu Friends</label>
            </div>
            <div>
                <input type="radio" id="10" class="radio-title" name="drone1" value="SieuHot">
                <label for="10" >Siêu Hot</label>
            </div>
        </div>
        <div class="evaluate sort">
            <p>Đánh Giá</p>
            <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star fa-color"></i>
            </div>
        </div>
        <div class="range sort">
            <p>Khoảng Giá</p>
            <div class="range-slide">
                <div class="slide">
                    <div class="line" id="line" style="left: 0%; right: 0%;"></div>
                    <span class="thumb" id="thumbMin" style="left: 0%;"></span>
                    <span class="thumb" id="thumbMax" style="left: 100%;"></span>
                </div>
                <input class="range-input" id="rangeMin" type="range" max="100" min="10" step="5" value="0">
                <input class="range-input" id="rangeMax" type="range" max="100" min="10" step="5" value="100">
            </div>
            <div class="display">
                <span id="min">10</span>
                <span id="max">100</span>
            </div>

        </div>
    </div>
</div>
</div>
</div>
