<div class="col p-12 t-12 m-12 radio-left">
    <div class="fillter__sidebar">
        <div class="teller">
            <p>Bộ Lọc</p>
        </div>
        <div class="sort search">
            <input type="search" class="input" name="gsearch" placeholder="search">
        </div>
        <div class="sort price">
        </div>
        <div class="type sort"></div>
        <div class="evaluate sort">
            <p>Đánh Giá</p>
            <div id="rating">
                <input type="radio" id="star5" name="rating" value="5" />
                <label class = "full" for="star5" title="Awesome - 5 stars"></label>

                <input type="radio" id="star4" name="rating" value="4" />
                <label class = "full" for="star4" title="Pretty good - 4 stars"></label>

                <input type="radio" id="star3" name="rating" value="3" />
                <label class = "full" for="star3" title="Meh - 3 stars"></label>

                <input type="radio" id="star2" name="rating" value="2" />
                <label class = "full" for="star2" title="Kinda bad - 2 stars"></label>

                <input type="radio" id="star1" name="rating" value="1" />
                <label class = "full" for="star1" title="Sucks big time - 1 star"></label>
            </div>
        </div>
        <div class="range sort">
            <p style="padding-top:20px; ">Khoảng Giá</p>
            <div class="range-slide">
                <div class="slide">
                    <div class="line" id="line" style="left: 0%; right: 0%;"></div>
                    <span class="thumb" id="thumbMin" style="left: 0%;"></span>
                    <span class="thumb" id="thumbMax" style="left: 100%;"></span>
                </div>
                <input class="range-input" id="rangeMin" type="range" max="100" min="0" step="1" value="0">
                <input class="range-input" id="rangeMax" type="range" max="100" min="0" step="1" value="100">
                <input id="ValueMax" type="hidden" value="0">
            </div>
            <div class="display">
                <span id="min">0</span>
                <span id="max">100</span>
            </div>

        </div>
    </div>
</div>
</div>
</div>
