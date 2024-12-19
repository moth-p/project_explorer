// main 商品卡片 template 模板
const products = [
    {
        img: './src/img/product-img-1.png',
        imgBig:'./src/img/product-big-img-1.png',
        title: 'Laugavegur Trail',
        price: 200,
        brief: 'South',
        briefLong: 'The Laugavegur Trail is one of Iceland’s most famous hiking routes, stretching from the Landmannalaugar region to Þórsmörk. Known for its diverse landscapes, it features hot springs, colorful rhyolite mountains, glaciers, and vast lava fields.',
        aboutTheTour: 'Embark on an unforgettable adventure along the Laugavegur Trail. This tour will take you through Iceland’s iconic landscapes, where you’ll experience the incredible variety of terrain, including geothermal hot springs, volcanic craters, and lush valleys. As you hike, our knowledgeable guides will share insights into the area’s geology, flora, and history, offering you a deeper connection to this stunning natural wonder.',
        quantity:1,
        url:'./location-1-Laugavegur.html'
    },
    {
        img: './src/img/product-img-2.png',
        imgBig:'./src/img/product-big-img-2.png',
        title: 'Hornstrandir Nature Reserve',
        price: 150,
        brief: 'West',
        briefLong: 'Located in the Westfjords of Iceland, it is an untouched wilderness paradise known for its stunning fjords, rugged mountains, and diverse wildlife, especially Arctic foxes.', 
        aboutTheTour: 'Discover the hidden gem of Iceland’s Westfjords—Hornstrandir Nature Reserve. During this tour, you will hike through the reserve\'s stunning landscapes, enjoy panoramic ocean views, and learn about the area\'s rich history and culture from our expert guide.',
        quantity: 1,
        url:'./location-2-Hornstrandir.html'
    },
    {
        img: './src/img/product-img-3.png',
        imgBig:'./src/img/product-big-img-3.png',
        title: 'Skaftafell Glacier Hikes.html',
        price: 150,
        brief: 'South',
        briefLong: 'Skaftafell, located within Vatnajökull National Park, is known for its spectacular glaciers, breathtaking ice formations, and scenic mountain landscapes. The area offers a variety of hiking trails suitable for all levels of adventurers.',
        aboutTheTour: 'Embark on a thrilling adventure in the heart of Vatnajökull National Park with our Skaftafell Glacier Hike. During this tour, you will explore the massive glaciers, trek across ice-covered terrain, and marvel at the stunning ice formations. Our expert guides will lead you through the glacier’s fascinating features, providing insights into the region’s unique geology and the forces that shaped this icy wonderland.',
        quantity:1,
        url:'./location-3-Skaftafell.html'
    },
    {
        img: './src/img/product-img-4.png',
        imgBig:'./src/img/product-big-img-4.png',
        title: 'Ásbyrgi Canyon Hike',
        price: 150,
        brief: 'North',
        briefLong: 'Ásbyrgi Canyon, located in the northern part of Iceland, is a stunning horseshoe-shaped depression surrounded by towering cliffs. Known for its unique geological features and lush vegetation, it is a serene hiking destination.',
        aboutTheTour: 'Join us for a hike through Ásbyrgi Canyon, one of Iceland’s most picturesque natural wonders. During this tour, you will walk along the canyon’s winding paths, surrounded by towering cliffs and lush greenery. Our expert guides will share the fascinating history and geology of the area, including the legend of the canyon’s creation, and introduce you to the rich wildlife that inhabits this tranquil oasis.',
        quantity:1,
        url:'./location-4-Ásbyrgi.html'
    },
    {
        img: './src/img/product-img-5.png',
        imgBig:'./src/img/product-big-img-5.png',
        title: 'Jökulsárlón Glacier Lagoon Boat Tour',
        price: 350,
        brief: 'South',
        briefLong: 'Jökulsárlón Glacier Lagoon, located in southeastern Iceland, is a breathtaking natural wonder. Known for its stunning icebergs floating in the lagoon, it offers an unforgettable view of the nearby Vatnajökull glacier.',
        aboutTheTour: 'Embark on an unforgettable boat tour of the Jökulsárlón Glacier Lagoon, where you’ll witness majestic icebergs drifting serenely in the crystal-clear waters. During this tour, you’ll glide past colossal ice formations and get a closer look at the stunning beauty of the Vatnajökull glacier. Our experienced guides will provide insight into the glacier’s history, its impact on the landscape, and the unique wildlife that inhabits the area, including seals and birds.',
        quantity:1,
        url:'./location-5-Jökulsárló.html'
    },
    {
        img: './src/img/product-img-6.png',
        imgBig:'./src/img/product-big-img-6.png',
        title: 'Mývatn Geothermal and Nature Reserve Tour',
        price: 200,
        brief: 'North',
        briefLong: 'Mývatn Geothermal and Nature Reserve, located in northeastern Iceland, is a geothermal paradise known for its unique volcanic landscapes, bubbling mud pools, and diverse birdlife, especially during the summer months.',
        aboutTheTour: 'Join us for a fascinating tour through Mývatn Geothermal and Nature Reserve, a place where nature’s raw energy is on full display. During this tour, you will explore the geothermal hot springs, fumaroles, and volcanic craters that define this region. Our expert guide will lead you through the area, explaining the geothermal processes and the history behind the formation of the landscape. You’ll also have the chance to spot the diverse bird species that thrive in the area, making it a must-see destination for nature lovers.',
        quantity:1,
        url:'./location-6-Mývatn.html'
    },
    {
        img: './src/img/product-img-7.png',
        imgBig:'./src/img/product-big-img-7.png',
        title: 'Snæfellsnes Coastal Ecology Walk',
        price: 150,
        brief: 'West',
        briefLong: 'Snæfellsnes Peninsula, located in western Iceland, is known for its diverse coastal ecosystems, rugged cliffs, black sand beaches, and the iconic Snæfellsjökull volcano, which is surrounded by a rich array of plant and animal life.',
        aboutTheTour: 'Embark on a peaceful and educational walk along the stunning coastline of Snæfellsnes Peninsula. During this tour, you’ll explore dramatic cliffs, black sand beaches, and observe the diverse ecology of the area, including seabirds, marine life, and wildflowers. Our experienced guide will share fascinating insights into the region’s unique natural history and geology, as well as its connection to Icelandic folklore and mythology. This tour offers a perfect blend of nature, culture, and history, ideal for nature enthusiasts and those seeking tranquility.',
        quantity:1,
        url:'./location-7-Snæfellsnes.html'
    },
    {
        img: './src/img/product-img-8.png',
        imgBig:'./src/img/product-big-img-8.png',
        title: 'Golden Circle Tour',
        price: 150,
        brief: 'Southwest',
        briefLong: 'The Golden Circle is one of Iceland’s most popular tourist routes, featuring stunning natural attractions such as Þingvellir National Park, the Geysir geothermal area, and the powerful Gullfoss waterfall.',
        aboutTheTour: 'Join us for a memorable journey through the Golden Circle, where you will experience some of Iceland’s most iconic landmarks. Our tour will take you to Þingvellir National Park, a UNESCO World Heritage Site, where you can witness the rift between the Eurasian and North American tectonic plates. You’ll also visit the famous Geysir geothermal area, home to the erupting Strokkur geyser, and the breathtaking Gullfoss waterfall, where water cascades dramatically into a deep canyon. Along the way, your knowledgeable guide will provide fascinating insights into Iceland’s history, geology, and natural wonders.',
        quantity:1,
        url:'./location-8-Golden.html'
    },
    {
        img: './src/img/product-img-9.png',
        imgBig:'./src/img/product-big-img-9.png',
        title: 'Dalvík Snowboarding',
        price: 150,
        brief: 'North',
        briefLong: 'Dalvík, a charming town in northern Iceland, is renowned for its excellent snowboarding slopes, surrounded by picturesque mountains and the stunning fjords of Eyjafjörður.',
        aboutTheTour: 'Experience the thrill of snowboarding in Dalvík, one of Iceland’s best winter sports destinations. Nestled in the heart of the stunning Eyjafjörður fjord, this tour offers a variety of slopes suitable for all skill levels. Whether you’re a beginner or an experienced snowboarder, you’ll enjoy breathtaking views of the surrounding mountains and the Arctic waters. Our expert instructors will guide you through the slopes, ensuring safety and providing tips to improve your technique. After an exhilarating day on the slopes, relax and take in the unique beauty of the Northern Lights, a perfect way to end your adventure in Dalvík.',
        quantity:1,
        url:'./location-9-Dalvík.html'
    },
    {
        img: './src/img/product-img-10.png',
        imgBig:'./src/img/product-big-img-10.png',
        title: 'Westfjords Kayaking',
        price: 200,
        brief: 'North',
        briefLong: 'The Westfjords of Iceland are a remote paradise for kayaking enthusiasts, featuring dramatic coastlines, hidden fjords, and abundant wildlife, including seals and seabirds.',
        aboutTheTour: 'Embark on a kayaking adventure through the pristine waters of the Westfjords, one of Iceland’s most secluded and untouched regions. This tour will take you along the rugged coastlines, where you’ll paddle through serene fjords, explore dramatic cliffs, and get up close to the abundant wildlife, such as seals and a variety of seabirds. With your experienced guide, you’ll navigate through calm waters, taking in the breathtaking scenery of the Westfjords’ dramatic landscapes. This tour offers a unique perspective of Iceland’s natural beauty, perfect for those seeking adventure and tranquility in one of the country’s most beautiful regions.',
        quantity:1,
        url:'./location-10-Westfjords.html'
    },
    {
        img: './src/img/product-img-11.png',
        imgBig:'./src/img/product-big-img-11.png',
        title: 'Eldhestar Horseback Riding',
        price: 150,
        brief: 'West',
        briefLong: 'Located in the heart of Iceland, Eldhestar offers a unique horseback riding experience through stunning volcanic landscapes, valleys, and rivers.',
        aboutTheTour: 'Discover the magic of Iceland on horseback with Eldhestar Horseback Riding. This tour will take you through some of the most scenic and diverse landscapes in Iceland, from volcanic terrains and rugged valleys to serene rivers. You’ll ride Icelandic horses, known for their gentle nature and unique gait, offering a comfortable and memorable experience. Your expert guide will share fascinating insights into the region’s history, geology, and wildlife as you explore the natural beauty of the Icelandic countryside. Whether you’re a seasoned rider or a beginner, this tour offers an unforgettable adventure in the heart of Iceland.',
        quantity:1,
        url:'./location-11-Eldhestar.html'
    },
    {
        img: './src/img/product-img-12.png',
        imgBig:'./src/img/product-big-img-12.png',
        title: 'Vestmannaeyjar Puffins Viewing',
        price: 100,
        brief: 'South',
        briefLong: 'Located off the southern coast of Iceland, Vestmannaeyjar is a paradise for birdwatching enthusiasts, offering a unique opportunity to observe puffins up close in their natural habitat.',
        aboutTheTour: 'Embark on an unforgettable puffin viewing tour in Vestmannaeyjar, one of Iceland’s most iconic birdwatching destinations. During the summer months, thousands of puffins return to the islands to nest, creating a stunning display of wildlife. This tour will take you to the best viewing spots where you can observe these charming seabirds as they perch on the cliffs and soar over the waters. With the help of a knowledgeable guide, you’ll learn about the puffins’ lifecycle, their role in the local ecosystem, and the importance of conservation efforts. Whether you’re a birdwatching enthusiast or simply in awe of nature, this tour offers a rare and unforgettable experience in one of Iceland’s most beautiful settings.',
        quantity:1,
        url:'./location-12-Vestmannaeyjar.html'

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

    // 取得 <a> 標籤，並設置 href 屬性
    const link = clone.querySelector('a');
    const url = `product-detail.html?title=${encodeURIComponent(item.title)}`;
    const queryParams = new URLSearchParams(item).toString(); // 將商品資料轉換為查詢字串
    link.href = url + '?' + queryParams; // 將商品詳情頁的 URL 設為 <a> 標籤的 href
    
    
    productContainer.appendChild(clone);

})

const saveProducts = JSON.stringify(products);
localStorage.setItem('products', saveProducts);

let cartItems = JSON.parse(localStorage.getItem('products'));
