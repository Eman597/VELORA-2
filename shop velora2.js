// ============================================
// VELORA 2 - SHOP JAVASCRIPT
// ============================================


// ============================================
// 1. PRODUCTS DATA
// ============================================

const shopProducts = [

    {
        id: 1,
        nameTranslations: {
            en: "Linen Blend 2-Piece Tracksuit - Mustard Yellow",
            ar: "ترينينج قطعتين من الكتان - أصفر خردلي"
        },
        image_url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80",
        rating: 5,
        category: "women",
        price: 860
    },

    {
        id: 2,
        nameTranslations: {
            en: "Light Blue Linen Pants + Black Basic Tee + White Sneakers + Minimalist Watch",
            ar: "بنطلون كتان أزرق فاتح + تيشيرت أسود أساسي + حذاء أبيض + ساعة بسيطة"
        },
        image_url: "https://images.unsplash.com/photo-1544441893-675973e31985?w=500&q=80",
        rating: 5,
        category: "men",
        price: 1600
    },

    {
        id: 3,
        nameTranslations: {
            en: "Shint Blend Skirt",
            ar: "تنورة من مزيج الشينت"
        },
        image_url: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&q=80",
        rating: 5,
        category: "women",
        price: 330
    },

    {
        id: 4,
        nameTranslations: {
            en: "Retro Look - White Off-Shoulder Top + Black & White Wide Stripe Pants",
            ar: "إطلالة ريترو - توب أبيض بأكتاف مكشوفة + بنطلون بخطوط أبيض وأسود"
        },
        image_url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80",
        rating: 5,
        category: "women",
        price: 2190
    },

    {
        id: 5,
        nameTranslations: {
            en: "Sandals Shorts",
            ar: "شورت صيفي"
        },
        image_url: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&q=80",
        rating: 5,
        category: "women",
        price: 220
    },

    {
        id: 6,
        nameTranslations: {
            en: "Elegant Black Dress",
            ar: "فستان أسود أنيق"
        },
        image_url: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&q=80",
        rating: 5,
        category: "women",
        price: 980
    },

    {
        id: 7,
        nameTranslations: {
            en: "Kids Casual Outfit",
            ar: "طقم أطفال كاجوال"
        },
        image_url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80",
        rating: 5,
        category: "kids",
        price: 420
    },

    {
        id: 8,
        nameTranslations: {
            en: "Casual Kids 2-Piece Set - Unisex",
            ar: "طقم أطفال كاجوال قطعتين - للجنسين"
        },
        image_url: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=600&q=80",
        rating: 5,
        category: "kids",
        price: 960
    },

    {
        id: 9,
        nameTranslations: {
            en: "Striped Kids T-Shirt - Unisex",
            ar: "تيشيرت أطفال مخطط - للجنسين"
        },
        image_url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80",
        rating: 5,
        category: "kids",
        price: 280
    },

    {
        id: 10,
        nameTranslations: {
            en: "Kids Denim 2-Piece Set - Boy",
            ar: "طقم أطفال جينز قطعتين - أولاد"
        },
        image_url: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&q=80",
        rating: 5,
        category: "kids",
        price: 650
    },

    {
        id: 11,
        nameTranslations: {
            en: "Mini Gentleman Polo T-Shirt - Boy",
            ar: "تيشيرت بولو ميني جنتلمان - أولاد"
        },
        image_url: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=600&q=80",
        rating: 5,
        category: "kids",
        price: 380
    },

    {
        id: 12,
        nameTranslations: {
            en: "Basic Cotton Kids Tee - White - Unisex",
            ar: "تيشيرت أطفال قطن أساسي - أبيض - للجنسين"
        },
        image_url: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=600&q=80",
        rating: 5,
        category: "kids",
        price: 350
    },

    {
        id: 13,
        nameTranslations: {
            en: "Sport Kids Tracksuit 2-Piece - Boys",
            ar: "ترينينج رياضي للأطفال قطعتين - أولاد"
        },
        image_url: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=600&q=80",
        rating: 5,
        category: "kids",
        price: 390
    },

    {
        id: 14,
        nameTranslations: {
            en: "Denim Man Straight Fit Jeans - Men",
            ar: "بنطلون جينز رجالي بقصة مستقيمة"
        },
        image_url: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=700&q=80",
        rating: 5,
        category: "men",
        price: 790
    },

    {
        id: 15,
        nameTranslations: {
            en: "Royal Blue Check 3-Piece Tailored Suit - Men",
            ar: "بدلة رجالي 3 قطع كاروهات باللون الأزرق الملكي"
        },
        image_url: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=80",
        rating: 5,
        category: "men",
        price: 2900
    },

    {
        id: 16,
        nameTranslations: {
            en: "Slim Fit Chino Pants",
            ar: "بنطلون تشينو بقصة سليم"
        },
        image_url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
        rating: 5,
        category: "men",
        price: 750
    },

    {
        id: 17,
        nameTranslations: {
            en: "Formal White Shirt",
            ar: "قميص أبيض رسمي"
        },
        image_url: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?auto=format&fit=crop&w=700&q=80",
        rating: 5,
        category: "men",
        price: 550
    },

    {
        id: 18,
        nameTranslations: {
            en: "Leather Biker Jacket",
            ar: "جاكيت بايكر جلد"
        },
        image_url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80",
        rating: 5,
        category: "men",
        price: 2100
    },

    {
        id: 19,
        nameTranslations: {
            en: "Royal Blue Classic Blazer - Men",
            ar: "بليزر رجالي كلاسيك أزرق ملكي"
        },
        image_url: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=700&q=80",
        rating: 5,
        category: "men",
        price: 790
    },

    {
        id: 20,
        nameTranslations: {
            en: "Classic Beige Trench Coat - Men",
            ar: "ترنش كوت رجالي كلاسيك بيج"
        },
        image_url: "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=700&q=80",
        rating: 5,
        category: "men",
        price: 1850
    },

    {
        id: 21,
        nameTranslations: {
            en: "Milano Blue Winter Set - Coat & Dress",
            ar: "طقم شتوي ميلانو أزرق - معطف وفستان"
        },
        image_url: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop&q=80",
        rating: 5,
        category: "women",
        price: 3299
    },

    {
        id: 22,
        nameTranslations: {
            en: "Summer Floral Dress",
            ar: "فستان صيفي مزهر"
        },
        image_url: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop&q=80",
        rating: 5,
        category: "women",
        price: 950
    },

    {
        id: 23,
        nameTranslations: {
            en: "Black Check Oversized Coat - Black & Navy",
            ar: "معطف واسع كاروهات أسود - أسود وكحلي"
        },
        image_url: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&auto=format&fit=crop&q=80",
        rating: 5,
        category: "women",
        price: 1650
    },

    {
        id: 24,
        nameTranslations: {
            en: "Royal Burgundy Off-Shoulder Dress",
            ar: "فستان أوف شولدر باللون العنابي الملكي"
        },
        image_url: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&auto=format&fit=crop&q=80",
        rating: 5,
        category: "women",
        price: 1200
    },

    {
        id: 25,
        nameTranslations: {
            en: "Boho Beach Crochet Poncho - Beige",
            ar: "بونشو كروشيه بوهيمي للشاطئ - بيج"
        },
        image_url: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&auto=format&fit=crop&q=80",
        rating: 5,
        category: "women",
        price: 690
    },

    {
        id: 26,
        nameTranslations: {
            en: "Retro Look - White Off-Shoulder Top + Black & White Wide Stripe Pants",
            ar: "إطلالة ريترو - توب أبيض بأكتاف مكشوفة + بنطلون بخطوط أبيض وأسود"
        },
        image_url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop&q=80",
        rating: 5,
        category: "women",
        price: 2190
    }

];


// ============================================
// 2. CURRENT LANGUAGE
// ============================================

let currentLanguage = localStorage.getItem("veloraLanguage") || "en";


// ============================================
// 3. TRANSLATIONS
// ============================================

const shopTranslations = {

    en: {
        noProducts: "No products found.",
        addedToCart: "Added to Cart Successfully!",
        addedToWishlist: "Added to Wishlist!",
        alreadyWishlist: "Product is already in your Wishlist."
    },

    ar: {
        noProducts: "لم يتم العثور على منتجات.",
        addedToCart: "تمت إضافة المنتج إلى السلة بنجاح!",
        addedToWishlist: "تمت إضافة المنتج إلى المفضلة!",
        alreadyWishlist: "المنتج موجود بالفعل في المفضلة."
    }

};


// ============================================
// 4. GET PRODUCT NAME
// ============================================

function getProductName(product) {

    if (product.nameTranslations) {
        return product.nameTranslations[currentLanguage] ||
               product.nameTranslations.en;
    }

    return product.name || "";
}


// ============================================
// 5. FORMAT PRICE
// ============================================

function formatPrice(price) {

    const numericPrice = Number.parseInt(price, 10);

    if (Number.isNaN(numericPrice)) {
        return price;
    }

    return `${numericPrice} EGP`;
}


// ============================================
// 6. RENDER SHOP PRODUCTS
// ============================================

function renderShopProducts(productsToDisplay) {

    const grid = document.getElementById("shop-product-grid");

    if (!grid) {
        return;
    }

    grid.innerHTML = "";

    if (productsToDisplay.length === 0) {

        grid.innerHTML = `
            <div class="col-12">
                <p class="text-white-50 text-center py-5">
                    ${shopTranslations[currentLanguage].noProducts}
                </p>
            </div>
        `;

        return;
    }


    productsToDisplay.forEach(product => {

        const productName = getProductName(product);

        const col = document.createElement("div");

        col.className = "col-12 col-md-4";


        col.innerHTML = `

            <div
                class="product-card p-3 shadow-sm h-100 d-flex flex-column justify-content-between border border-secondary bg-dark"
                data-product-id="${product.id}"
                style="cursor:pointer;"
            >

                <div>

                    <img
                        src="${product.image_url}"
                        class="card-img-top mb-3 img-fluid"
                        alt="${productName}"
                        style="height:220px; object-fit:cover;"
                    >

                    <div
                        class="product-details text-start text-white text-uppercase"
                        style="font-size:0.8rem;"
                    >

                        <h6 class="fw-semibold mb-1">
                            ${productName}
                        </h6>


                        <div
                            class="rating mb-1 text-gold"
                            style="color:#d1b86c;"
                        >
                            ${generateStars(product.rating)}
                        </div>


                        <p
                            class="price fw-bold text-white mb-2"
                            style="font-size:1rem;"
                        >
                            ${formatPrice(product.price)}
                        </p>

                    </div>

                </div>


                <div class="d-flex gap-2 mt-2">

                    <button
                        class="btn btn-velora-gold w-75 rounded-0 add-cart-btn"
                        type="button"
                        data-product-id="${product.id}"
                    >
                        ${currentLanguage === "ar" ? "أضف إلى السلة" : "Add to Cart"}
                    </button>


                    <button
                        class="btn btn-outline-warning w-25 rounded-0 wishlist-btn"
                        type="button"
                        title="${currentLanguage === "ar" ? "أضف للمفضلة" : "Add to Wishlist"}"
                        data-product-id="${product.id}"
                    >
                        <i class="bi bi-heart"></i>
                    </button>

                </div>

            </div>
        `;


        grid.appendChild(col);

    });


    setupProductCardEvents();
}


// ============================================
// 7. GENERATE STARS
// ============================================

function generateStars(rating) {

    let stars = "";

    for (let i = 0; i < 5; i++) {

        if (i < rating) {

            stars += `<i class="bi bi-star-fill"></i>`;

        } else {

            stars += `<i class="bi bi-star"></i>`;

        }

    }

    return stars;
}


// ============================================
// 8. PRODUCT CARD EVENTS
// ============================================

function setupProductCardEvents() {

    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {

        card.addEventListener("click", event => {

            if (event.target.closest("button")) {
                return;
            }

            const productId = Number(card.dataset.productId);

            const product = shopProducts.find(
                item => item.id === productId
            );

            if (!product) {
                return;
            }

            viewProduct(product);

        });


        const addCartButton = card.querySelector(".add-cart-btn");

        if (addCartButton) {

            addCartButton.addEventListener("click", event => {

                event.stopPropagation();

                const productId = Number(addCartButton.dataset.productId);

                const product = shopProducts.find(
                    item => item.id === productId
                );

                if (product) {
                    addToCart(product);
                }

            });

        }


        const wishlistButton = card.querySelector(".wishlist-btn");

        if (wishlistButton) {

            wishlistButton.addEventListener("click", event => {

                event.stopPropagation();

                const productId = Number(wishlistButton.dataset.productId);

                const product = shopProducts.find(
                    item => item.id === productId
                );

                if (product) {
                    addToWishlist(product);
                }

            });

        }

    });

}


// ============================================
// 9. VIEW PRODUCT DETAILS
// ============================================

function viewProduct(product) {

    const selectedProduct = {

        id: product.id,

        name: getProductName(product),

        nameTranslations: product.nameTranslations,

        price: product.price,

        image: product.image_url,

        category: product.category,

        rating: product.rating

    };


    localStorage.setItem(
        "selectedProduct",
        JSON.stringify(selectedProduct)
    );


    window.location.href = "product-details velora2.html";
}


// ============================================
// 10. ADD TO CART
// ============================================

function addToCart(product) {

    let cart =
        JSON.parse(localStorage.getItem("veloraCart")) || [];


    const existingItem = cart.find(
        item => item.id === product.id
    );


    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({

            id: product.id,

            name: getProductName(product),

            nameTranslations: product.nameTranslations,

            price: product.price,

            image: product.image_url,

            category: product.category,

            quantity: 1

        });

    }


    localStorage.setItem(
        "veloraCart",
        JSON.stringify(cart)
    );


    updateCartCount();


    alert(shopTranslations[currentLanguage].addedToCart);

}


// ============================================
// 11. ADD TO WISHLIST
// ============================================

function addToWishlist(product) {

    let wishlist =
        JSON.parse(localStorage.getItem("veloraWishlist")) || [];


    const exists = wishlist.some(
        item => item.id === product.id
    );


    if (exists) {

        alert(shopTranslations[currentLanguage].alreadyWishlist);

        return;
    }


    wishlist.push({

        id: product.id,

        name: getProductName(product),

        nameTranslations: product.nameTranslations,

        price: product.price,

        image: product.image_url,

        category: product.category

    });


    localStorage.setItem(
        "veloraWishlist",
        JSON.stringify(wishlist)
    );


    alert(shopTranslations[currentLanguage].addedToWishlist);

}


// ============================================
// 12. SEARCH
// ============================================

function setupSearch() {

    const searchInput =
        document.getElementById("search-input");


    const searchButton =
        document.getElementById("search-button");


    const performSearch = () => {

        const searchTerm =
            searchInput.value.toLowerCase().trim();


        if (!searchTerm) {

            renderShopProducts(shopProducts);

            return;
        }


        const filteredProducts =
            shopProducts.filter(product => {

                const englishName =
                    product.nameTranslations?.en?.toLowerCase() || "";

                const arabicName =
                    product.nameTranslations?.ar?.toLowerCase() || "";


                return (
                    englishName.includes(searchTerm) ||
                    arabicName.includes(searchTerm)
                );

            });


        renderShopProducts(filteredProducts);

    };


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            performSearch
        );

    }


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            performSearch
        );

    }

}


// ============================================
// 13. SORT PRODUCTS
// ============================================

function setupSorting() {

    const sortSelect =
        document.getElementById("sort");


    if (!sortSelect) {
        return;
    }


    sortSelect.addEventListener("change", () => {

        const selectedValue = sortSelect.value;


        let sortedProducts = [...shopProducts];


        if (selectedValue === "low-high") {

            sortedProducts.sort(
                (a, b) => a.price - b.price
            );

        }


        if (selectedValue === "high-low") {

            sortedProducts.sort(
                (a, b) => b.price - a.price
            );

        }


        renderShopProducts(sortedProducts);

    });

}


// ============================================
// 14. CATEGORY FILTER
// ============================================

function setupFilters() {

    const filterButton =
        document.getElementById("filterBtn");


    const catAll =
        document.getElementById("catAll");


    const catWomen =
        document.getElementById("catWomen");


    const catMen =
        document.getElementById("catMen");


    const catKids =
        document.getElementById("catKids");


    if (!filterButton) {
        return;
    }


    filterButton.addEventListener("click", () => {

        let filteredProducts = [...shopProducts];


        const selectedCategories = [];


        if (catWomen.checked) {
            selectedCategories.push("women");
        }


        if (catMen.checked) {
            selectedCategories.push("men");
        }


        if (catKids.checked) {
            selectedCategories.push("kids");
        }


        if (
            catAll.checked ||
            selectedCategories.length === 0
        ) {

            filteredProducts = [...shopProducts];

        } else {

            filteredProducts =
                shopProducts.filter(product =>
                    selectedCategories.includes(product.category)
                );

        }


        renderShopProducts(filteredProducts);

    });


    if (catAll) {

        catAll.addEventListener("change", () => {

            if (catAll.checked) {

                catWomen.checked = false;
                catMen.checked = false;
                catKids.checked = false;

            }

        });

    }


    [catWomen, catMen, catKids].forEach(categoryCheckbox => {

        if (!categoryCheckbox) {
            return;
        }


        categoryCheckbox.addEventListener("change", () => {

            if (categoryCheckbox.checked) {

                catAll.checked = false;

            }


            const anyCategorySelected =
                catWomen.checked ||
                catMen.checked ||
                catKids.checked;


            if (!anyCategorySelected) {

                catAll.checked = true;

            }

        });

    });

}


// ============================================
// 15. CART COUNT
// ============================================

function updateCartCount() {

    const cartCount =
        document.getElementById("cart-count");


    if (!cartCount) {
        return;
    }


    const cart =
        JSON.parse(localStorage.getItem("veloraCart")) || [];


    const totalQuantity =
        cart.reduce(
            (total, item) =>
                total + Number(item.quantity || 1),
            0
        );


    cartCount.textContent = totalQuantity;

}


// ============================================
// 16. LANGUAGE TOGGLE
// ============================================

function setupLanguageToggle() {

    const languageButton =
        document.getElementById("languageToggle");


    if (!languageButton) {
        return;
    }


    languageButton.addEventListener("click", () => {

        currentLanguage =
            currentLanguage === "en" ? "ar" : "en";


        localStorage.setItem(
            "veloraLanguage",
            currentLanguage
        );


        applyShopLanguage();

    });

}


// ============================================
// 17. APPLY LANGUAGE
// ============================================

function applyShopLanguage() {

    document.documentElement.lang =
        currentLanguage;


    document.documentElement.dir =
        currentLanguage === "ar" ? "rtl" : "ltr";


    const translations = {

        en: {
            navHome: "Home",
            navShop: "Shop",
            navWomen: "Women",
            navMen: "Men",
            navKids: "Kids",
            navNewArrivals: "New Arrivals",

            allProducts: "All Products",
            filtering: "Filtering",
            categories: "Categories",

            categoryAll: "All",
            categoryWomen: "Women's Clothing",
            categoryMen: "Men's Clothing",
            categoryKids: "Kids Clothing",

            applyFilters: "Apply Filters",

            productsCatalog: "Products Catalog",
            sortBy: "Sort by",
            sortNewest: "Newest",
            sortLowHigh: "Price: Low to High",
            sortHighLow: "Price: High to Low",

            searchPlaceholder: "Search...",
            searchTitle: "Search",

            login: "Login",
            wishlist: "Wishlist",
            cart: "Cart",

            footerRights: "All Rights Reserved",
            footerForWebsite: "For Website",
            developedDesigned: "Developed and Designed by"
        },


        ar: {
            navHome: "الرئيسية",
            navShop: "المتجر",
            navWomen: "نساء",
            navMen: "رجال",
            navKids: "أطفال",
            navNewArrivals: "وصل حديثًا",

            allProducts: "كل المنتجات",
            filtering: "التصفية",
            categories: "التصنيفات",

            categoryAll: "الكل",
            categoryWomen: "ملابس نسائية",
            categoryMen: "ملابس رجالية",
            categoryKids: "ملابس أطفال",

            applyFilters: "تطبيق الفلاتر",

            productsCatalog: "كتالوج المنتجات",
            sortBy: "ترتيب حسب",
            sortNewest: "الأحدث",
            sortLowHigh: "السعر: من الأقل للأعلى",
            sortHighLow: "السعر: من الأعلى للأقل",

            searchPlaceholder: "ابحث...",
            searchTitle: "بحث",

            login: "تسجيل الدخول",
            wishlist: "المفضلة",
            cart: "السلة",

            footerRights: "جميع الحقوق محفوظة",
            footerForWebsite: "لموقع",
            developedDesigned: "تم التطوير والتصميم بواسطة"
        }

    };


    const languageData =
        translations[currentLanguage];


    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;


            if (languageData[key]) {

                element.textContent =
                    languageData[key];

            }

        });


    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach(element => {

            const key =
                element.dataset.i18nPlaceholder;


            if (languageData[key]) {

                element.placeholder =
                    languageData[key];

            }

        });


    document
        .querySelectorAll("[data-i18n-title]")
        .forEach(element => {

            const key =
                element.dataset.i18nTitle;


            if (languageData[key]) {

                element.title =
                    languageData[key];

            }

        });


    const languageButton =
        document.getElementById("languageToggle");


    if (languageButton) {

        languageButton.textContent =
            currentLanguage === "en"
                ? "AR"
                : "EN";

    }


    renderShopProducts(shopProducts);

}


// ============================================
// 18. PAGE START
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    applyShopLanguage();

    setupSearch();

    setupSorting();

    setupFilters();

    setupLanguageToggle();

    updateCartCount();

});