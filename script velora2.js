/* =========================================================
   VELORA 2 - MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   1. LANGUAGE SYSTEM
   ========================================================= */

const translations = {

    en: {
        home: "Home",
        shop: "Shop",
        women: "Women",
        men: "Men",
        kids: "Kids",
        newArrivals: "New Arrivals",

        searchPlaceholder: "Search...",

        login: "Login",
        favourite: "Favourite",
        cart: "Cart",

        summerSale: "SUMMER SALE",
        upTo50: "UP TO 50% OFF",
        shopNow: "Shop Now",

        browseProducts: "Browse All Products",

        addToCart: "Add to Cart",
        addToWishlist: "Add to Wishlist",

        noProducts: "No products match your search.",

        addedToCart: "Added to Cart Successfully!",
        addedToWishlist: "Added to Wishlist Successfully!",

        copyright: "All Rights Reserved © 2026 For website VELORA",
        developedBy: "Developed and Designed by 💻 ✨ Eman Ahmad"
    },


    ar: {
        home: "الرئيسية",
        shop: "المتجر",
        women: "نساء",
        men: "رجال",
        kids: "أطفال",
        newArrivals: "وصل حديثًا",

        searchPlaceholder: "ابحث هنا...",

        login: "تسجيل الدخول",
        favourite: "المفضلة",
        cart: "السلة",

        summerSale: "تخفيضات الصيف",
        upTo50: "خصم يصل إلى 50%",
        shopNow: "تسوق الآن",

        browseProducts: "تصفح جميع المنتجات",

        addToCart: "أضف إلى السلة",
        addToWishlist: "أضف إلى المفضلة",

        noProducts: "لا توجد منتجات تطابق بحثك.",

        addedToCart: "تمت إضافة المنتج إلى السلة بنجاح!",
        addedToWishlist: "تمت إضافة المنتج إلى المفضلة بنجاح!",

        copyright: "جميع الحقوق محفوظة © 2026 لموقع VELORA",
        developedBy: "تم التطوير والتصميم بواسطة 💻 ✨ إيمان أحمد"
    }

};


/* Get saved language or use English */

let currentLanguage = localStorage.getItem("veloraLanguage") || "en";


/* =========================================================
   2. PRODUCTS DATA
   ========================================================= */

const newArrivalsData = [

    {
        id: 1,

        name: {
            en: "Linen Blend 2-Piece Tracksuit masterd yellow",
            ar: "ترينينج قطعتين من الكتان باللون الأصفر"
        },

        image_url:
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80",

        rating: 5,

        category: "women",

        price: "860 EGP"
    },


    {
        id: 2,

        name: {
            en: "Light blue linen pants + black basic tee + white sneakers + minimalist watch. Simple, comfy, and stylish for everyday wear.",
            ar: "بنطلون كتان أزرق فاتح مع تيشيرت أسود وحذاء رياضي أبيض وساعة بسيطة. إطلالة مريحة وأنيقة للاستخدام اليومي."
        },

        image_url:
            "https://images.unsplash.com/photo-1544441893-675973e31985?w=500&q=80",

        rating: 5,

        category: "men",

        price: "1600 EGP"
    },


    {
        id: 3,

        name: {
            en: "Shint Blend Skirt",
            ar: "تنورة من مزيج الشينت"
        },

        image_url:
            "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&q=80",

        rating: 5,

        category: "women",

        price: "330 EGP"
    },


    {
        id: 4,

        name: {
            en: "Retro look that turns heads white off-shoulder top + black & white wide stripe pants + red waist bag. Bold and feminine in one outfit.",
            ar: "إطلالة ريترو مميزة تتكون من توب أبيض مكشوف الكتفين وبنطلون واسع بخطوط سوداء وبيضاء وحقيبة خصر حمراء. إطلالة جريئة وأنثوية."
        },

        image_url:
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80",

        rating: 5,

        category: "women",

        price: "2190 EGP"
    },


    {
        id: 5,

        name: {
            en: "Sandals Shorts",
            ar: "شورت صيفي"
        },

        image_url:
            "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&q=80",

        rating: 5,

        category: "women",

        price: "220 EGP"
    },


    {
        id: 6,

        name: {
            en: "Elegant Black Dress",
            ar: "فستان أسود أنيق"
        },

        image_url:
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&q=80",

        rating: 5,

        category: "women",

        price: "980 EGP"
    },


    {
        id: 7,

        name: {
            en: "",
            ar: ""
        },

        image_url:
            "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80",

        rating: 5,

        category: "kids",

        price: "420 EGP"
    },


    {
        id: 8,

        name: {
            en: "Casual Kids 2-Piece Set - Unisex",
            ar: "طقم أطفال كاجوال قطعتين - للجنسين"
        },

        image_url:
            "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=600&q=80",

        rating: 5,

        category: "kids",

        price: "960 EGP"
    },


    {
        id: 9,

        name: {
            en: "Striped Kids T-Shirt - Unisex",
            ar: "تيشيرت أطفال مخطط - للجنسين"
        },

        image_url:
            "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80",

        rating: 5,

        category: "kids",

        price: "280 EGP"
    },


    {
        id: 10,

        name: {
            en: "Kids Denim 2-Piece Set - Boy",
            ar: "طقم أطفال جينز قطعتين - أولاد"
        },

        image_url:
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&q=80",

        rating: 5,

        category: "kids",

        price: "650 EGP"
    },


    {
        id: 11,

        name: {
            en: "Mini Gentleman Polo T-Shirt - Boy",
            ar: "تيشيرت بولو أطفال أنيق - أولاد"
        },

        image_url:
            "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=600&q=80",

        rating: 5,

        category: "kids",

        price: "380 EGP"
    },


    {
        id: 12,

        name: {
            en: "Basic Cotton Kids Tee - White - Unisex",
            ar: "تيشيرت أطفال قطني أساسي - أبيض - للجنسين"
        },

        image_url:
            "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=600&q=80",

        rating: 5,

        category: "kids",

        price: "350 EGP"
    },


    {
        id: 13,

        name: {
            en: "Sport Kids Tracksuit 2-Piece - Boys",
            ar: "ترينينج رياضي للأطفال قطعتين - أولاد"
        },

        image_url:
            "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=600&q=80",

        rating: 5,

        category: "kids",

        price: "390 EGP"
    },


    {
        id: 14,

        name: {
            en: "Denim Man Straight Fit Jeans - Men",
            ar: "بنطلون جينز رجالي بقصة مستقيمة"
        },

        image_url:
            "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=700&q=80",

        rating: 5,

        category: "men",

        price: "790 EGP"
    },


    {
        id: 15,

        name: {
            en: "Royal Blue Check 3-Piece Tailored Suit - Men",
            ar: "بدلة رجالية رسمية ثلاث قطع باللون الأزرق الملكي"
        },

        image_url:
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=80",

        rating: 5,

        category: "men",

        price: "2900 EGP"
    },


    {
        id: 16,

        name: {
            en: "Slim Fit Chino Pants",
            ar: "بنطلون تشينو بقصة Slim Fit"
        },

        image_url:
            "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",

        rating: 5,

        category: "men",

        price: "750 EGP"
    },


    {
        id: 17,

        name: {
            en: "Formal White Shirt",
            ar: "قميص أبيض رسمي"
        },

        image_url:
            "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?auto=format&fit=crop&w=700&q=80",

        rating: 5,

        category: "men",

        price: "550 EGP"
    },


    {
        id: 18,

        name: {
            en: "Leather Biker Jacket",
            ar: "جاكيت جلد راكب الدراجة"
        },

        image_url:
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80",

        rating: 5,

        category: "men",

        price: "2100 EGP"
    },


    {
        id: 19,

        name: {
            en: "Royal Blue Classic Blazer - Men",
            ar: "بليزر رجالي كلاسيك باللون الأزرق الملكي"
        },

        image_url:
            "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=700&q=80",

        rating: 5,

        category: "men",

        price: "790 EGP"
    },


    {
        id: 20,

        name: {
            en: "Classic Beige Trench Coat - Men",
            ar: "ترنش كوت رجالي كلاسيك باللون البيج"
        },

        image_url:
            "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=700&q=80",

        rating: 5,

        category: "men",

        price: "1850 EGP"
    },


    {
        id: 21,

        name: {
            en: "Milano Blue Winter Set - Coat & Dress",
            ar: "طقم شتوي أزرق ميلانو - معطف وفستان"
        },

        image_url:
            "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop&q=80",

        rating: 5,

        category: "women",

        price: "3299 EGP"
    },


    {
        id: 22,

        name: {
            en: "Summer Floral Dress",
            ar: "فستان صيفي مزهر"
        },

        image_url:
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop&q=80",

        rating: 5,

        category: "women",

        price: "950 EGP"
    },


    {
        id: 23,

        name: {
            en: "Black Check Oversized Coat - Black & Navy",
            ar: "معطف واسع كاروهات أسود - أسود وكحلي"
        },

        image_url:
            "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&auto=format&fit=crop&q=80",

        rating: 5,

        category: "women",

        price: "1650 EGP"
    },


    {
        id: 24,

        name: {
            en: "Royal Burgundy Off-Shoulder Dress",
            ar: "فستان برغندي ملكي مكشوف الكتفين"
        },

        image_url:
            "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&auto=format&fit=crop&q=80",

        rating: 5,

        category: "women",

        price: "1200 EGP"
    },


    {
        id: 25,

        name: {
            en: "Boho Beach Crochet Poncho - Beige",
            ar: "بونشو كروشيه شاطئي بوهيمي - بيج"
        },

        image_url:
            "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&auto=format&fit=crop&q=80",

        rating: 5,

        category: "women",

        price: "690 EGP"
    },


    {
        id: 26,

        name: {
            en: "Retro look that turns heads white off-shoulder top + black & white wide stripe pants + red waist bag. Bold and feminine in one outfit.",
            ar: "إطلالة ريترو مميزة تتكون من توب أبيض مكشوف الكتفين وبنطلون واسع بخطوط سوداء وبيضاء وحقيبة خصر حمراء. إطلالة جريئة وأنثوية."
        },

        image_url:
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop&q=80",

        rating: 5,

        category: "women",

        price: "2190 EGP"
    }

];


/* =========================================================
   3. DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    applyLanguage();

    generateProductGrid(newArrivalsData);

    setupSearch();

    setupLanguageToggle();

    updateCartCount();

});


/* =========================================================
   4. LANGUAGE FUNCTIONS
   ========================================================= */

function applyLanguage() {

    const html = document.documentElement;

    html.lang = currentLanguage;

    html.dir = currentLanguage === "ar"
        ? "rtl"
        : "ltr";


    /*
        Translate normal elements
    */

    const translatableElements =
        document.querySelectorAll("[data-i18n]");

    translatableElements.forEach(element => {

        const key = element.dataset.i18n;

        if (translations[currentLanguage][key]) {

            element.textContent =
                translations[currentLanguage][key];

        }

    });


    /*
        Translate placeholders
    */

    const placeholderElements =
        document.querySelectorAll("[data-i18n-placeholder]");

    placeholderElements.forEach(element => {

        const key = element.dataset.i18nPlaceholder;

        if (translations[currentLanguage][key]) {

            element.placeholder =
                translations[currentLanguage][key];

        }

    });


    /*
        Translate titles
    */

    const titleElements =
        document.querySelectorAll("[data-i18n-title]");

    titleElements.forEach(element => {

        const key = element.dataset.i18nTitle;

        if (translations[currentLanguage][key]) {

            element.title =
                translations[currentLanguage][key];

        }

    });


    /*
        Update language button
    */

    const languageButton =
        document.getElementById("languageToggle");

    if (languageButton) {

        languageButton.textContent =
            currentLanguage === "en"
                ? "العربية"
                : "English";

    }


    /*
        Re-render products using current language
    */

    const searchInput =
        document.getElementById("search-input");

    if (searchInput && searchInput.value.trim() !== "") {

        filterProducts(searchInput.value);

    } else {

        generateProductGrid(newArrivalsData);

    }


    localStorage.setItem(
        "veloraLanguage",
        currentLanguage
    );
}


/* =========================================================
   5. LANGUAGE TOGGLE
   ========================================================= */

function setupLanguageToggle() {

    const languageButton =
        document.getElementById("languageToggle");

    if (!languageButton) return;


    languageButton.addEventListener("click", () => {

        currentLanguage =
            currentLanguage === "en"
                ? "ar"
                : "en";

        applyLanguage();

    });

}


/* =========================================================
   6. GET PRODUCT NAME
   ========================================================= */

function getProductName(product) {

    return product.name[currentLanguage] ||
           product.name.en ||
           "";

}


/* =========================================================
   7. GENERATE PRODUCT GRID
   ========================================================= */

function generateProductGrid(productsToDisplay) {

    const productGrid =
        document.getElementById("product-grid");

    if (!productGrid) return;


    productGrid.innerHTML = "";


    /*
        No products
    */

    if (productsToDisplay.length === 0) {

        const message =
            translations[currentLanguage].noProducts;

        productGrid.innerHTML = `
            <p class="text-muted w-100 text-center">
                ${message}
            </p>
        `;

        return;
    }


    /*
        Generate products
    */

    productsToDisplay.forEach(product => {

        const colDiv =
            document.createElement("div");

        colDiv.className =
            "col-12 col-md-4";


        const productName =
            getProductName(product);


        colDiv.innerHTML = `

            <div
                class="product product-card p-3 shadow-sm h-100 d-flex flex-column justify-content-between"
                data-product-id="${product.id}"
                style="cursor: pointer;"
            >

                <div>

                    <img
                        src="${product.image_url}"
                        class="card-img-top mb-3 img-fluid"
                        alt="${productName}"
                        style="height: 250px; object-fit: cover;"
                    >


                    <div
                        class="product-details text-white text-uppercase"
                        style="font-size: 0.85rem;"
                    >

                        <h6
                            class="product-name fw-semibold text-truncate mb-1"
                        >
                            ${productName}
                        </h6>


                        <div class="rating mb-1 text-gold">

                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>

                        </div>


                        <p
                            class="price fw-bold text-white mb-2"
                            style="font-size: 1.1rem;"
                        >
                            ${product.price}
                        </p>

                    </div>

                </div>


                <div class="d-flex gap-2 mt-2">

                    <button
                        class="btn btn-velora-gold w-75 rounded-0"
                        type="button"
                        onclick="addProductToCart(${product.id}, event)"
                    >
                        ${translations[currentLanguage].addToCart}
                    </button>


                    <button
                        class="btn btn-outline-warning w-25"
                        type="button"
                        onclick="addProductToWishlist(${product.id}, event)"
                        title="${translations[currentLanguage].addToWishlist}"
                    >
                        <i class="bi bi-heart"></i>
                    </button>

                </div>

            </div>

        `;


        /*
            Click on product card
        */

        const card =
            colDiv.querySelector(".product-card");


        card.addEventListener("click", event => {

            if (event.target.closest("button")) {
                return;
            }

            viewProduct(product);

        });


        productGrid.appendChild(colDiv);

    });

}


/* =========================================================
   8. VIEW PRODUCT DETAILS
   ========================================================= */

function viewProduct(product) {

    const selectedProduct = {

        id: product.id,

        name: product.name,

        price: product.price,

        image: product.image_url,

        category: product.category

    };


    localStorage.setItem(
        "selectedProduct",
        JSON.stringify(selectedProduct)
    );


    window.location.href =
        "product-details velora2.html";
}


/* =========================================================
   9. ADD PRODUCT TO CART
   ========================================================= */

function addProductToCart(productId, event) {

    if (event) {
        event.stopPropagation();
    }


    const product =
        newArrivalsData.find(
            item => item.id === productId
        );


    if (!product) return;


    let cart =
        JSON.parse(
            localStorage.getItem("veloraCart")
        ) || [];


    const productName =
        product.name.en;


    const existingItem =
        cart.find(
            item => item.name === productName
        );


    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({

            id: product.id,

            name: productName,

            nameTranslations: product.name,

            price: product.price,

            image: product.image_url,

            quantity: 1

        });

    }


    localStorage.setItem(
        "veloraCart",
        JSON.stringify(cart)
    );


    updateCartCount();


    alert(
        translations[currentLanguage].addedToCart
    );

}


/* =========================================================
   10. ADD PRODUCT TO WISHLIST
   ========================================================= */

function addProductToWishlist(productId, event) {

    if (event) {
        event.stopPropagation();
    }


    const product =
        newArrivalsData.find(
            item => item.id === productId
        );


    if (!product) return;


    let wishlist =
        JSON.parse(
            localStorage.getItem("veloraWishlist")
        ) || [];


    const productName =
        product.name.en;


    const exists =
        wishlist.some(
            item => item.name === productName
        );


    if (!exists) {

        wishlist.push({

            id: product.id,

            name: productName,

            nameTranslations: product.name,

            price: product.price,

            image: product.image_url

        });


        localStorage.setItem(
            "veloraWishlist",
            JSON.stringify(wishlist)
        );


        alert(
            translations[currentLanguage].addedToWishlist
        );

    }


    window.location.href =
        "wishlist velora2.html";

}


/* =========================================================
   11. SEARCH
   ========================================================= */

function setupSearch() {

    const searchInput =
        document.getElementById("search-input");


    if (!searchInput) return;


    searchInput.addEventListener("input", event => {

        filterProducts(event.target.value);

    });

}


/* =========================================================
   12. FILTER PRODUCTS
   ========================================================= */

function filterProducts(searchValue) {

    const searchTerm =
        searchValue
            .toLowerCase()
            .trim();


    if (!searchTerm) {

        generateProductGrid(newArrivalsData);

        return;

    }


    const filteredProducts =
        newArrivalsData.filter(product => {

            const englishName =
                product.name.en
                    .toLowerCase();


            const arabicName =
                product.name.ar
                    .toLowerCase();


            return (
                englishName.includes(searchTerm) ||
                arabicName.includes(searchTerm)
            );

        });


    generateProductGrid(filteredProducts);

}


/* =========================================================
   13. CART COUNT
   ========================================================= */

function updateCartCount() {

    const cartCount =
        document.getElementById("cartCount");


    if (!cartCount) return;


    const cart =
        JSON.parse(
            localStorage.getItem("veloraCart")
        ) || [];


    const totalQuantity =
        cart.reduce(
            (total, item) =>
                total + (Number(item.quantity) || 0),
            0
        );


    cartCount.textContent =
        totalQuantity;

}


/* =========================================================
   14. GLOBAL CART UPDATE
   ========================================================= */

window.addEventListener("storage", event => {

    if (event.key === "veloraCart") {

        updateCartCount();

    }

});