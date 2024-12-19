
        // nav 點開漢堡標選單
        const hamBtn = document.querySelector('#hamBtn');
        const hamMenu = document.querySelector('#hamMenu');
        const navBar = document.querySelector('#navBar');

        hamMenu.style.display = 'none';

        // 點擊視窗空白處，關掉ham menu, searchBox bgMask, cartShow
        window.addEventListener('click', () => {
            // hamMenu.style.display = 'none';
            // searchBox.style.display = 'none';
            [hamMenu, searchBox, bgMask, cartShow].forEach(element => {
                element.style.display = 'none';
            })
        });

        // 防止ham menu事件冒泡（不要吃到 window.onclick 效果）
        hamMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        })

        hamBtn.addEventListener('click', function (e) {
            navBar.classList.remove('bg-white/50');
            navBar.classList.add('bg-lightGray');
            // 防止ham btn事件冒泡（不要吃到 window.onclick 效果）
            e.stopPropagation();

            function showHamMenu(result) {
                hamMenu.style.display = result ? 'block' : 'none';
            }

            if (hamMenu.style.display === 'none') {
                showHamMenu(true);
                showAccordion(false);
                plusIcon.innerHTML = plus;
            } else if (hamMenu.style.display === 'block') {
                showHamMenu(false);
            }
        });

        // ham-menu accordion 手風琴
        const accordionBtn = document.querySelector('#accordionBtn');
        const accordionContext = document.querySelector('#accordionContext');
        const plusIcon = document.querySelector('#plusIcon');
        const plus = `<i class="fa-solid fa-plus"></i>`;
        const minus = `<i class="fa-solid fa-minus"></i>`;

        function showAccordion(result) {
            accordionContext.style.display = result ? 'block' : 'none';
        }

        accordionBtn.addEventListener('click', function (e) {
            accordionContext.scrollTop = 0;
            e.stopPropagation();

            if (accordionContext.style.display === 'none' || accordionContext.style.display === '') {
                // 收起 -> 展開
                showAccordion(true);
                plusIcon.innerHTML = minus;
                accordionContext.scrollTop = 0;
            } else {
                // 展開 -> 收起
                showAccordion(false);
                plusIcon.innerHTML = plus;
            }
        })

        //nav flyout menu
        const bookingBtn = document.querySelector('#booking');
        const flyoutMenu = document.querySelector('#flyoutMenu');
        flyoutMenu.style.display = 'none';

        function showOrHide(result) {
            flyoutMenu.style.display = result ? 'block' : 'none';
        }

        [bookingBtn, flyoutMenu].forEach(element => {
            element.addEventListener('mouseover', function () { showOrHide(true) });
        });

        flyoutMenu.addEventListener('mouseout', function () { showOrHide(false) });

        // search box 搜尋框 顯示／隱藏 
        const searchIcon = document.querySelector('#searchIcon');
        const searchBox = document.querySelector('#searchBox');
        const bgMask = document.querySelector('#bgMask');

        searchIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            searchBox.style.display = 'block';
            bgMask.style.display = 'block';
        });

        searchBox.addEventListener('click', (e) => {
            e.stopPropagation(); // 防止事件冒泡
        })

        // nav cart icon 點開購物車
        const cartIcon = document.querySelector('#cartIcon');
        const cartShow = document.querySelector('#cartShow');
        const cartCloseBtn = document.querySelector('#cartCloseBtn');

        cartIcon.addEventListener('click', function (e) {
            cartShow.style.display = 'block';
            e.stopPropagation();
        })

        // cart 裡面的叉叉 關閉購物車
        cartCloseBtn.addEventListener('click', function () {
            cartShow.style.display = 'none';
        })

        cartShow.addEventListener('click', (e) => {
            e.stopPropagation
        })

        // banner 輪播
        const swiper = new Swiper('#bannerSwiper', {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 1000,
            autoplay: {
                delay: 2800,
                disableOnInteraction: true,
            },
            loop: true,
        });

        // header 點擊 banner 跳轉到下一張圖
        document.querySelector('#bannerSwiper').addEventListener('click', function () {
            swiper.slideNext();
            swiper.autoplay.start(); // 恢復自動輪播
        })

        // main 商品卡片 template 模板
        const products = [
            {
                img: './src/img/product-img-1.png',
                title: 'Laugavegur Trail',
                price: 200,
                brief: 'South',
                quantity:1,
            },
            {
                img: './src/img/product-img-2.png',
                title: 'Hornstrandir Nature Reserve',
                price: 150,
                brief: 'West',
                quantity:1,
                
            },
            {
                img: './src/img/product-img-3.png',
                title: 'Skaftafell Glacier Hikes',
                price: 150,
                brief: 'South',
                quantity:1,
            },
            {
                img: './src/img/product-img-4.png',
                title: 'Ásbyrgi Canyon Hike',
                price: 150,
                brief: 'North',
                quantity:1,
            },
            {
                img: './src/img/product-img-5.png',
                title: 'Jökulsárlón Glacier Lagoon Boat Tour',
                price: 350,
                brief: 'South',
                quantity:1,
            },
            {
                img: './src/img/product-img-6.png',
                title: 'Mývatn Geothermal and Nature Reserve Tour',
                price: 200,
                brief: 'North',
                quantity:1,
            },
            {
                img: './src/img/product-img-7.png',
                title: 'Snæfellsnes Coastal Ecology Walk',
                price: 150,
                brief: 'West',
                quantity:1,
            },
            {
                img: './src/img/product-img-8.png',
                title: 'Golden Circle Tour',
                price: 150,
                brief: 'Southwest',
                quantity:1,
            },
            {
                img: './src/img/product-img-9.png',
                title: 'Dalvík Snowboarding',
                price: 150,
                brief: 'North',
                quantity:1,
            },
            {
                img: './src/img/product-img-10.png',
                title: 'Westfjords Kayaking',
                price: 200,
                brief: 'North',
                quantity:1,
            },
            {
                img: './src/img/product-img-11.png',
                title: 'Eldhestar Horseback Riding',
                price: 150,
                brief: 'West',
                quantity:1,
            },
            {
                img: './src/img/product-img-12.png',
                title: 'Vestmannaeyjar ',
                price: 100,
                brief: 'South',
                quantity:1,
            }
        ];

        const productTemplate = document.querySelector('#productTemplate');
        const productContainer = document.querySelector('#productContainer');

        products.forEach((item) => {
            const clone = productTemplate.content.cloneNode(true);

            clone.querySelector('#productImg').src = item.img;
            clone.querySelector('#productTitle').textContent = item.title;
            clone.querySelector('#productPrice').textContent = item.price;
            clone.querySelector('#productBrief').textContent = item.brief;

            productContainer.appendChild(clone);
        })

        const saveProducts = JSON.stringify(products);
        localStorage.setItem('products', saveProducts);

        let cartItems = JSON.parse(localStorage.getItem('products'));


        
        



        

        
        
        
