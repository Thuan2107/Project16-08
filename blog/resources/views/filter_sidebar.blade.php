<div class="col p-12 t-12 m-12 radio-left">
    <div class="fillter__sidebar">
        <div class="teller">
            <p>Bộ Lọc</p>
        </div>
        <div class="sort search">
            <input type="search" class="input" name="gsearch" placeholder="search">
        </div>
        <div class="sort price" id="sort">
            <p>Sắp Xếp</p>
            <div class="group_radio">
                <input type="radio" name="price" class="radio-title" id="0" checked value="0"/>
                <label for="0">Giá từ thấp đến cao</label>
            </div>
            <div class="group_radio">
                <input type="radio" name="price" class="radio-title" id="1" value="1"/>
                <label for="1">Giá từ cao đến thấp</label>
            </div>
            <div class="group_radio">
                <input type="radio" name="price" class="radio-title" id="2" value="2"/>
                <label for="2">A - Z</label>
            </div>
            <div class="group_radio">
                <input type="radio" name="price" class="radio-title" id="3" value="3"/>
                <label for="3">Z - A</label>
            </div>
            <div class="group_radio">
                <input type="radio" name="price" class="radio-title" id="4" value="4"/>
                <label for="4">Khuyến mãi nhiều nhất</label>
            </div>
            <div class="group_radio">
                <input type="radio" name="price" class="radio-title" id="5" value="5"/>
                <label for="5">Khuyến mãi ít nhất</label>
            </div>
        </div>
        <div class="type sort"></div>
        <div class="evaluate sort">
            <p>Đánh Giá</p>
            <div id="rating">
                <input type="radio" class="filter_star" id="star5" name="rating" value="5" />
                <label class = "full" for="star5" title="Awesome - 5 stars"></label>

                <input type="radio" class="filter_star" id="star4" name="rating" value="4" />
                <label class = "full" for="star4" title="Pretty good - 4 stars"></label>

                <input type="radio" class="filter_star" id="star3" name="rating" value="3" />
                <label class = "full" for="star3" title="Meh - 3 stars"></label>

                <input type="radio" class="filter_star" id="star2" name="rating" value="2" />
                <label class = "full" for="star2" title="Kinda bad - 2 stars"></label>

                <input type="radio" class="filter_star" id="star1" name="rating" value="1" />
                <label class = "full" for="star1" title="Sucks big time - 1 star"></label>
            </div>
        </div>
        <div class="range sort">
            <p style="padding-top:20px; ">Khoảng Giá</p>
{{--            <div class="range-slide">--}}
{{--                <div class="slide">--}}
{{--                    <div class="line" id="line" style="left: 0%; right: 0%;"></div>--}}
{{--                    <span class="thumb" id="thumbMin" style="left: 0%;"></span>--}}
{{--                    <span class="thumb" id="thumbMax" style="left: 100%;"></span>--}}
{{--                </div>--}}
{{--                <input class="range-input" id="rangeMin" type="range" max="100" min="0" step="1" value="0">--}}
{{--                <input class="range-input" id="rangeMax" type="range" max="100" min="0" step="1" value="100">--}}
{{--                <input id="ValueMax" type="hidden" value="0">--}}
{{--            </div>--}}
{{--            <div class="display">--}}
{{--                <span id="min">0</span>--}}
{{--                <span id="max">100</span>--}}
{{--            </div>--}}
            <div class="range_price">
                <input type="text" placeholder="Từ" id="min_price" >
                <input type="text" placeholder="Đến" id="max_price" >
                <button id="confirm_price" onclick="filterProduct()">áp dụng</button>
            </div>

        </div>
    </div>
</div>
</div>
</div>
