{/* <script src="https://www.gstatic.com/firebasejs/9.4.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.4.1/firebase-auth-compat.js"></script> */}

{/* <script>  */}
function CheckoutPopup() {
    return `
        <style>
            .popupWrapper {
                position: fixed;
                z-index: 4;
                color: #000;
                top: 0;
                left: 0;
                background: url(https://cdn.sellavi.com/image/upload/t_media_lib_thumb/v1637126730/ru/clients/121756/f265dbfe5dbb2e59d690bcbaae836d63900c24f7.png) no-repeat 50% 50%;
                background-size: cover;
                width: 100vw;
                height: 561px;
                display: none;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            
            .popupWrapper i.closeBtn {
                position: absolute;
                top: 33px;
                right: 33px;
                width: 25px;
                height: 25px;
                cursor: pointer;
                font-size: 25px;
            }
            .popupWrapper .title {
                font-size: 34px;
                font-weight: 500;
                line-height: 41px;
                margin-bottom: 18px;
            }
            .popupWrapper .desc {
                font-size: 18px;
                font-weight: 500;
                line-height: 24px;
                text-align: center;
                margin-bottom: 24px;
            }
            .popupWrapper form {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .popupWrapper form button {
                height: 53px;
                width: 307px;
                background: #E31E24;
                cursor: pointer;
                border: none;
                color: #fff;
                font-weight: 700;
                display: flex;
                align-items: center;
                justify-content: center;
                :disabled {
                    cursor: not-allowed;
                    background: darkred;
                }
            }
            .popupWrapper form .inputs {
                display: flex;
                align-items: center;
                gap: 29px;
                margin-bottom: 27px;
            }
            .popupWrapper form input {
                height: 50px;
                width: 253px;
                font-size: 16px;
                font-weight: 500;
                line-height: 19px;
                padding-left: 26px;
            }
            .popupWrapper form input:placeholder {
                color: #000;
            }
            @media(max-width: 720px) {
                .popupWrapper {
                    height: 100vh;
                }
                .popupWrapper form .inputs {
                    flex-direction: column;
                }
            }
        </style>
        <div onclick="" class="popupWrapper">
            <i class="fal fa-times closeBtn" onclick="event.stopPropagation(); checkout(event)" ></i>
            <span class="title">Заказать звонок</span>
            <span class="desc">Оставьте ваши контакты и мы свяжемся <br /> с вами в ближайшее время</span>
            <form onsubmit="handleSubmit(event)">
                <div class="inputs">
                    <input type="text" placeholder="Ваше Имя" oninput="handleInput(this)" />
                    <input type="tel" placeholder="Телефон" oninput="handleInput(this)" />
                </div>
                <button>Получить консультацию</button>
            </form>
        </div>
    `
}

function checkout () {
    if(!window.showpopup) {
        window.showpopup = true;
        $('.popupWrapper').fadeIn("300", function() {
            $(this).css("display", "flex")
        });
    } else {
        window.showpopup = false;
        $('.popupWrapper').fadeOut("300");
        
    }
}

function handleInput (target) {
    if(target.type === "text") {
        window.ORDER.customerName = target.value;
    } else {
        window.ORDER.contactNumber = target.value;
    }
}

const firebaseConfig = {
    apiKey: "AIzaSyA5vCoDuVOnqRy_1riH1I_W_6-G-B97pfU",
    authDomain: "sellavi-9e675.firebaseapp.com",
    databaseURL: "https://sellavi-9e675-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sellavi-9e675",
    storageBucket: "sellavi-9e675.appspot.com",
    messagingSenderId: "159229693979",
    appId: "1:159229693979:web:ba4398a3f70d05ca7d68be"
};

const app = firebase.initializeApp(firebaseConfig);
firebase.auth().signInWithEmailAndPassword('smithnkereuwem2@gmail.com', '123456')
const firestore = app.firestore();

function handleSubmit(event) {
    // Push to Sellavi
    // Push to Firebase
    if(ORDER.customerName && ORDER.contactNumber && ORDER.cart_products.length) {
        firestore.collection("orders").add(window.ORDER)
    } else {
        event.preventDefault()
    }
}

fetch("https://cors-anywhere.herokuapp.com/https://ru.sellavi.com/gateway/products/5/1", {
    headers: {
      Accept: "application/json",
      "X-Token": "8be493-a3a2b8-a8bca2-4e9f7d-8d808e",
    }
  })
.then(res => res.json())
.then(data => {
    window.products = data.products
    // SET ORDER
    handleOrder()
    // LOAD PAGE
    $(document).ready(execute)
});

const {pathname} = location;
window.showpopup = false;
function handleOrder() {
    const customerName = localStorage.getItem("customerName") ? localStorage.getItem("customerName") : "";
    const contactNumber = localStorage.getItem("contactNumber") ? localStorage.getItem("contactNumber") : "";
    const cart_products = localStorage.getItem("cart_products") ? JSON.parse(localStorage.getItem("cart_products")) : [];

    window.ORDER = {customerName, contactNumber, cart_products}
}


const ProductStyles =`
    <style>
        .productsWrapper.container{
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 100%;
              cursor: pointer;
        }
        .productsWrapper h2 {
            font-size: 28px;
            font-weight: 600;
            line-height: 34px;
            margin: 0 0 30px;
        }
        .products {
            display: grid;
            grid-gap: 50px 45px;
            grid-template-columns: repeat(4, 1fr);
        }
        @media(max-width: 1240px) {
            .products {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        @media(max-width: 720px) {
            .products {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        @media(max-width: 460px) {
            .products {
                grid-template-columns:1fr;
            }
        }
        .productWrapper {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px; 
            font-family: Lato;  
        }

        .name {
            font-size: 16px;
            font-weight: 500;
            line-height: 19px;  
        } 
        .price {
            font-size: 18px;
            font-weight: 700;
            line-height: 22px;
        }
        
        .product-image {
            position: relative;
            width: 100%;
            height: 200px;
            background-size: cover;
        }
        .product-image .favorite {
            position: absolute;
            bottom: 14px;
            right: 14px;
            font-size: 20px;
            width: 40px;
            height: 40px;
            box-shadow: 0px 0px 4px 0px #00000040;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 100%;
            cursor: pointer;
            background: #fff;
            color: #E31E24;
            font-size: 18px;
        }

        .product-image .sticker {
            position: absolute;
            top: 0;
            width: 41px;
            height: 93.6px;
        }

        .productWrapper button {
            min-width: 200px;
            width: 100%;
            display: ${pathname === '/cart/' ? "none" : "flex"};;
            align-items: center;
            justify-content: center;
            height: 51px;
            background: #E31E24;
            color: #fff;
            border: none;
        }
        .productWrapper button:hover {
            background: #2B2A29;
        }
        .productWrapper .stars {
            display: flex;
            align-items: center;
            gap: 5px;
            font-weight: 700;
        }
        .productWrapper .stars svg {
            font-size: 26px;
        }
        div.QuantityControl {
            min-width: 200px;
            width: 100%;
            display: ${pathname === '/cart/' ? "flex" : "none"};
            align-items: center;
            justify-content: space-between;
            height: 51px;
        }
        div.QuantityControl span.controls {
            width: 75px;
            height: 100%;
            background: #F5F5F5;
            font-size: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
    </style>
`

function getProducts(products) {
    return ( 
    products.reduce((prev, current, index) => prev += `
        <div class="productWrapper">
            <div style="background: url(${current.image}) 50% 50% no-repeat" class="product-image">
                ${current.sticker_image ? `<img src="${current.sticker_image}" class="sticker" />` : ""}
                <span class="favorite"><i class="far fa-heart"></i></span>
            </div>
            <span class="name">${current.keyword}</span>
            <span class="price">${+current.price} p.</span>

            ${ current.rating  ? 
            `<span class="stars">
                <span>{Array(5).fill(5).map((_, id) => <AiFillStar key={id} color={id + 1 <= stars ? "#E31E24" : "#A3A4A5" } />)}</span>
                <span>${current.rating} ({rating.count})</span>
            </span>` : ""}

            <div data-index="${index}" class="QuantityControl">  
                <span onclick="updateCart(event)" data-index="${index}" data-type="sub" class="controls">- 
                </span>
                <span class="quantity">${current.order_quantity}</span>
                <span onclick="updateCart(event)" data-index="${index}" data-type="add" class="controls">+ 
                </span>
            </div>
            <button onclick="updateCart(event)" data-index="${index}" data-type="add">КУПИТЬ</button>
          </div>
    `, ProductStyles)
   )
}


function updateCart({target}) {
    const cartCount = document.querySelector(".cart-count");
    const {index, type} = target.dataset;
    let cart = window.ORDER.cart_products;
    const product = window.products[index];
    
    let cartIndex = pathname === "/cart/" ? +index : cart.findIndex(ele => ele.id === product.id)
    
    if (cartIndex >=0) {
        type === "add" ? cart[cartIndex].order_quantity += 1 : cart[cartIndex].order_quantity -= 1
    } else {
        cart.push({...product, order_quantity: 1})
        cartIndex = cart.length -1
    }

    const quantityControl = document.querySelector(`.QuantityControl[data-index="${index}"]`);
    const button = document.querySelector(`.productWrapper button[data-index="${index}"]`);
    const quantityElement = document.querySelector(`.QuantityControl[data-index="${index}"] .quantity`);
    if(cart[cartIndex].order_quantity > 0) {
        button.style.display = "none";
        quantityControl.style.display = "flex";
        quantityElement.textContent = cart[cartIndex].order_quantity;
    } else {
        quantityControl.style.display = "none";
        button.style.display = "flex";
        cart = cart.filter((_, idx) => idx !== cartIndex)
    }

    cartCount.textContent = cart.length;
    window.ORDER.cart_products = cart;
    localStorage.setItem("cart_products", JSON.stringify(cart))

    if(pathname === "/cart/") {
        const priceElement = document.querySelector(".cartWrapper .bottom .price");
        const productsWrapper = document.querySelector(".cartWrapper .products")
        priceElement.textContent = `${window.ORDER.cart_products.reduce((prev, product) => prev + +product.price * product.order_quantity, 0)} p.`;
        productsWrapper.innerHTML = getProducts(window.ORDER.cart_products)
    }
}


function execute () {
  const topBar = document.querySelector(".top-bar");
  topBar.innerHTML = `
    <style>
        .header-style-4 .top-bar {
            background: #F5F5F5;
         }
        .step1 {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 106px;
            height: 47px;
            max-height: max-content;
        }
        .step1 > * {
            text-decoration: none;
            color: #000
        }
        .step1:first-child {
            color: #646464;
        }
        
        .step1 img {
            width: 22px;
            cursor: pointer;
            color: #000;
        }
      @media(max-width: 1200px) {
         .step1, .top-bar  {
           display: none;
         }
       }
    </style>
    <div class="step1">
        <span>г. Москва</span>
        <a href="/сборка-и-установка">Сборка и установка</a>
        <a href="/доставка-и-самовывоз">Доставка и самовывоз</a>
        <a href="/пункт-выдачи">Пункт выдачи</a>
        <a href="/оплата-и-возврат">Оплата и возврат</a>
        <a href="https://waleobysmith.netlify.app/user">
            <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-user-interface-kiranshastry-lineal-kiranshastry-1.png"/>
        </a>
    </div>
`;


const step2 = document.querySelector(".header-wrapper");
step2.innerHTML += `
     <style>
        .step2 {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            height: 95px;
            max-height: fit-content;
        }
        @media(max-width: 1200px) {
             .step2 {
                  display: none;
              }
        }
        .step2 img {
            width: 217px;
            margin-right: 54px;
        }

        #search {
            display: flex;
            align-items: center;
            margin-right: 43px;
        }

        #search input {
            box-sizing: border-box;
            width: 371px;
            height: 41px;
            border: 1px solid #B4B4B4;
            padding: 10px 0 12px 21px;
        }

        #search input::placeholder {
            color: #A3A4A5;
        }

        #search button { 
            padding: 0 34px;
            background: #E31E24;
            cursor: pointer;
            border: none;
            color: #fff;
            font-weight: 700;
            height: 41px;
            display: flex;
            align-items: center;
        }
        
        .contact-number {
            font-size: 19px;
            font-weight: 600;
            line-height: 23px;
            display: flex;
            flex-direction: column;
            gap: 2px;
            margin-right: 80px;
        }
        .contact-number a {
            color: #646464;
            font-size: 15px;
            font-weight: 400;
            line-height: 18px;
            letter-spacing: 0em;
            border-bottom: 1px solid #646464;
            text-decoration: none;
        }
        .shop-utils {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 34.5px;
        }
        .shop-utils i {
            font-size: 25px;
            font-weight: 100;
            cursor: pointer;
        }
        .shop-utils a:last-child {
            position: relative;
            color: #000;
        }
        .cart-count {
            color: #fff;
            font-family: Roboto;
            font-size: 11px;
            font-weight: 500;
            line-height: 12px;
            letter-spacing: 0em;
            text-align: center;
            position: absolute;
            top: -4px;
            right: -8px;
            background: #E31E24;
            border-radius: 100%;
            width: 17px;
            height: 17px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
     </style>

    <div class="step2">
        <a href="/"><img alt="logo" src="https://cdn.sellavi.com/image/upload/c_fit,g_center,h_176,q_100,w_430/c_pad,h_176,w_430/v1636394035/ru/clients/121756/5665852fad9a581e919f48e3febc2e6e9cdd495f.png "/></a>
        <div id="search">
            <input type="text" placeholder="Поиск по сайту..." />
            <button>Найти</button>
        </div>
        <div class="contact-number">
            8 800 000 000
            <a href="tel:8 800 000 000" >Обратный звонок</a>
        </div>
        <div class="shop-utils">
            <i class="far fa-file"></i>
            <i class="far fa-heart"></i>
            <a href="/cart"><span class="cart-count">${window.ORDER.cart_products.length}</span><i class="fal fa-shopping-bag"></i></a>
        </div>
    </div>
`



const nav = document.querySelector(".navigation-wrapper .container");
nav.innerHTML = `
    <style>
        .mobile-navigation-wrapper {
            display: none !important;
        }
        .navigation-wrapper {
            background: #2B2A29 !important;
        }
        .step3 {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 91px;
            color: #fff;
            font-size: 16px;
            line-height: 19px;
            background: #2B2A29;
            width: 100%;
        }
        .step3 .menu-btn {
            display: flex;
            gap: 19px;
            padding: 14px 40px 14px 26px;
            background: #E31E24;
            align-items: center;
        }
        .step3 .menu-btn i {
            font-size: 14px;
        }
        nav {
            display: flex;
            align-items: center;
            gap: 135px;
        }
        nav a {
            color: #fff !important;
            text-decoration: none;
            padding: 14px 18px;
        }
        nav a:hover {
            background: #E31E24;
            cursor: pointer;
            color:  #fff !important;
        }
        .mobileNav {
            display: none;
        }
         @media(max-width: 1200px) {
            .navigation-wrapper, .navigation-wrapper .container {
                width: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
                display: block !important;
                max-width: 100% !important;
            }
            .step3 {
                display: none;
            }
            .mobileNav {
                display: flex;
                background: #fff;
                z-index: 2;
                align-items: center;
                justify-content: space-between;
                padding: 22px 15px;
                width: 100%;
            }
            .mobileNav .burgerMenu {
                font-size: 30px;
            }
            .mobileNav  a.logo {
                width: 30%;
                margin: 0 !important;
            }
            .mobileNav a.logo img {
                width: 100%;
            }
            .mobileNav a:last-child {
                position: relative;
                color: #000;
                font-size: 25px;
                cursor: pointer; 
            }
            .mobileNav img.user {
                width: 25px;
                cursor: pointer;
            }
         }
    </style>
    <div class="step3">
        <span class="menu-btn">
            <i class="fas fa-bars"></i>
            Каталог
        </span>
        <nav>
            <a href="#new">Новинки</a>
            <a href="/бренды">Бренды</a>
            <a href="#services">Услуги дизайнерам</a>
            <a href="#blog">Блог</a>
        </nav>
    </div>
    <div class="mobileNav">
        <i class="fas fa-bars burgerMenu"></i>
        <a class="logo" href="/"><img alt="logo" src="https://cdn.sellavi.com/image/upload/c_fit,g_center,h_176,q_100,w_430/c_pad,h_176,w_430/v1636394035/ru/clients/121756/5665852fad9a581e919f48e3febc2e6e9cdd495f.png" /></a>
        <a href="https://waleobysmith.netlify.app/user">
            <img class="user" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-user-interface-kiranshastry-lineal-kiranshastry-1.png"/>
        </a>
        <a href="/cart"><span class="cart-count">${window.ORDER.cart_products.length}</span><i class="fal fa-shopping-bag"></i></a>
    </div>
`





const getCategories = () => `
<style>
    .categoriesWrapper.container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-top: 71px;
    }
    .categoriesWrapper h2 {
        font-size: 28px;
        font-weight: 600;
        line-height: 34px;
        margin: 0 0 30px;
    }
    .categoriesWrapper .categories {
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 50% 50%;
    }
    .category {
        cursor: pointer;
        position: relative;
    }
    .category img {
        width: 100%;
    }
    .category button {
        position: absolute;
        cursor: inherit;
        width: 158px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        top: calc(50% - 35px);
        left: 0;
        border: none;
        color: #fff;
        background: #2B2A29;
    }
    .category button:hover {
        background: #E31E24;
    }   
    @media(max-width: 1180px) {
        .categoriesWrapper .categories {
            grid-template-columns: 100%;
        }
    }
</style>

<h2>Категории</h2>
<div class="categories">
    <a href="/сантехника" class="category">
        <button>САНТЕХНИКА ></button>
        <img alt="modernBathroom" src="https://cdn.sellavi.com/image/upload/t_media_lib_thumb/ru/clients/121756/489f48335dbd0d97e028c4c1dc1c00d9bca4b021.png" />
    </a>
    <a href="/плитка" class="category">
        <button>ПЛИТКА ></button>
        <img alt="modernBathroom2" src="https://cdn.sellavi.com/image/upload/t_media_lib_thumb/ru/clients/121756/6357dd308dcc7d307b875532b0b0dd9b5806d242.png" />
    </a>
    <a href="/лепнина" class="category">
        <button>ЛЕПНИНА ></button>
        <img alt="corridoor" src="https://cdn.sellavi.com/image/upload/t_media_lib_thumb/ru/clients/121756/fbbc387e81def555547d94366fa2c22d4a96bb86.png" />
    </a>
    <a href="/фреска" class="category">
        <button>ФРЕСКА ></button>
        <img alt="livingRoom" src="https://cdn.sellavi.com/image/upload/t_media_lib_thumb/ru/clients/121756/2e8bb38fe848e2604ea3098ca310e1a3ba0cc277.png" />
    </a>
</div>`

const getFeedback = () => `
    <style>
        .feedbackWrapper.container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            margin-top: 71px;
            position: relative;
        }
        .feedbackWrapper h2 {
            font-size: 28px;
            font-weight: 600;
            line-height: 34px;
            margin: 0 0 30px;
        }
        .scroller {
            position: absolute;
            z-index: 1;
            cursor: pointer;
        }
        .leftScroll {
            top: 50%;
            left: -40px;
        }
        .rightScroll {
            top: 50%;
            right: -40px;
        }
        @media(max-width: 720px) {
            .leftScroll {
                left: -15px;
            }
            .rightScroll {
                right: -15px;
            }
        }
        .scrollWrapper {
            width: 100%;
            overflow-x: scroll;
        }
        .scrollWrapper::-webkit-scrollbar{
            width: 0px;
        }
        .feedbacks {
            display: flex;
            gap: 45px;
            align-items: center;
            width: max-content;
            padding: 5px;
        }
        .feedback {
            box-shadow: 2px 3px 9px 0px #83838542;
            width: 350px;
            max-width: 88vw;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 36px 40px;
        }
        .feedback img {
            width: 100%;
            height: 206px;
        }
        .feedback .customer-name {
            margin: 23px 0 6px;
            color: #E31E24;
            font-size: 18px;
        }
        .feedback .customer-city {
            color: #4F4F4F;
            font-size: 15px;
            margin-bottom: 10px;
        }
        .feedback .customer-comment {
            font-size: 16px;
            font-style: italic;
            font-weight: 300;
            line-height: 21px;
            text-align: left;
        }
    </style>
    <div class="container feedbackWrapper">
        <i class="fas fa-chevron-left scroller leftScroll"></i>
        <i class="fas fa-chevron-right scroller rightScroll"></i>
        <h2>Отзывы</h2>
        <div class="scrollWrapper">
        <div class="feedbacks">
            <div class="feedback">
                <img alt="feedback" src="" />
                <span class="customer-name">Снежана</span>
                <span class="customer-city">Москва</span>
                <span class="customer-comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit at nisi vulputate risus tempus luctus risus. Hendrerit in magna purus amet et faucibus mauris posuere neque. Integer viverra sagittis, ligula id tempus, elit consectetur eget. Tortor lectus massa at eros sed aliquet.</span>
            </div>

            <div class="feedback">
                <img alt="feedback" src="" />
                <span class="customer-name">Инна Васильева</span>
                <span class="customer-city">Екатеринбург</span>
                <span class="customer-comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit at nisi vulputate risus tempus luctus risus. Hendrerit in magna purus amet et faucibus mauris posuere neque. Integer viverra sagittis, ligula id tempus, elit consectetur eget. Tortor lectus massa at eros sed aliquet.</span>
            </div>

            <div class="feedback">
                <img alt="feedback" src="" />
                <span class="customer-name">Андрей Семенов</span>
                <span class="customer-city">Санкт - Петербург</span>
                <span class="customer-comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit at nisi vulputate risus tempus luctus risus. Hendrerit in magna purus amet et faucibus mauris posuere neque. Integer viverra sagittis, ligula id tempus, elit consectetur eget. Tortor lectus massa at eros sed aliquet.</span>
            </div>

            <div class="feedback">
                <img alt="feedback" src="" />
                <span class="customer-name">Инна</span>
                <span class="customer-city">Екатеринбург</span>
                <span class="customer-comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit at nisi vulputate risus tempus luctus risus. Hendrerit in magna purus amet et faucibus mauris posuere neque. Integer viverra sagittis, ligula id tempus, elit consectetur eget. Tortor lectus massa at eros sed aliquet.</span>
            </div>
        </div>
        </div>
    </div>`


const getBrands = () => `
    <style> 
        .brands {
            display: flex;
            gap: 29px;
            align-items: center;
            width: max-content;
            padding: 5px;
        }
        .brand {
            box-shadow: 2px 3px 9px 0px #83838542;
            width: 253px;
            height: 253px;
            max-width: 88vw;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .brand img {
            max-width: 100%;
        }
    </style>
    <div class="scrollWrapper">
        <div class="brands">
            <span class="brand"><img src="https://cdn.sellavi.com/image/upload/if_w_gt_1000/w_1000,q_100/if_end/v1636533476/ru/clients/121756/75b4f9ac59ffc288943c662eed1b592419c9059d.png" style="width: 173px;"></span>
            <span class="brand"><img src="https://cdn.sellavi.com/image/upload/if_w_gt_1000/w_1000,q_100/if_end/v1636590592/ru/clients/121756/a1585f785d6df8b9166eebe2f83f59f2f82dd502.png" style="width: 94px;"></span>
            <span class="brand"><img src="https://cdn.sellavi.com/image/upload/if_w_gt_1000/w_1000,q_100/if_end/v1636590616/ru/clients/121756/3784b738a7957ce7d57f786af492c7558527908c.png" style="width: 146px;"></span>
            <span class="brand"><img src="https://cdn.sellavi.com/image/upload/if_w_gt_1000/w_1000,q_100/if_end/v1636590627/ru/clients/121756/18604022e28e756de8bff294b8d4e40ab267bc16.png" style="width: 93px;"></span>
        </div>
    </div>
`

const getContacts = () => `
<div class="container">
<div class="addresses-and-phonenumbers">
    <span class="title-l">Наши контакты</span>
    <div class="map">
        <div class="left">
            <span class="title-s">Наши контакты</span>
            <span class="row">
                <img src="" />
                <span class="innerText">
                    Наш адрес:
                    <span class="subtext">г. Москва, ул.Максима Горького 84</span>
                </span>
            </span>
            <span class="row">
                <img src="" />
                <span class="innerText">
                    Контакт-центр
                    <span class="subtext">Ежедневно с 8:00 до 01:00 (МСК)</span>
                    +8 800 000 000
                </span>
            </span>
            <span class="row">
                <img src="" />
                <span class="innerText">
                    Мессенджеры
                    <span class="subtext">Ежедневно с 9:00 до 23:00</span>
                </span>
            </span>
            <span class="row">
                <i class="fab fa-instagram"></i>
                <i class="fab fa-telegram-plane"></i>
                <i class="fab fa-whatsapp"></i>
            </span>
        </div>
        <div class="right"></div>
    </div>
</div>
</div>
`
const getFooterWidgets = () => `
    <style>
    .footer-widgets {
        background-color: #F5F5F5;
        padding: 30px 0 !important;
        font-family: "Jato", sans-serif;
    }

    .footer-widgets .container {
        height: fit-content;
        display: flex;
        gap: 132px;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 0;
    }

    .footer-col {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    .footer-col span:first-child {
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: 700;
        line-height: 22px;
        text-align: left;
    }

    .footer-col a:not(:first-child) {
        font-family: Lato;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
        text-decoration: none;
        color: black;
    }

    .footer-col:first-child a:last-child {
        font-size: 30px;
    }
    .footer-col img {
        width: 216.9998321533203px;
        margin: 0;
    }


    @media (max-width: 800px) {
        .footer-widgets .container {
            flex-direction: column;
            gap: 42px;
            width: 100%;
            align-items: flex-start;
            padding: 2vw;
        }

        .footer-col img {
            width: 144.99996948242188px
        }
        .footer-col span:first-child {
            font-family: "Lato";
            font-weight: 600;
            line-height: 21px;
        }
        .footer-col a:not(:first-child) {
            font-family: "Lato";
            font-weight: 500;
            line-height: 19px;
        }
    }
    </style>
    <div class="footer-widgets">
        <div class="container">
            <div class="footer-col">
                <a href="/"><img class="logo" alt="logo" src="https://cdn.sellavi.com/image/upload/c_fit,g_center,h_176,q_100,w_430/c_pad,h_176,w_430/v1636394035/ru/clients/121756/5665852fad9a581e919f48e3febc2e6e9cdd495f.png "/></a>
                <a href="">Номер</a>
                <a href="">Email</a>
                <a href="">Наш магазин находится по адресу: <br />Москва,</a>
                <a href=""><i class="fab fa-instagram"></i></a>
            </div>
            <div class="footer-col">
                <span>Посетителям</span>
                <a href="">О нас</a>
                <a href="">Пользовательское соглашение</a>
                <a href="">Политика конфиденциальности</a>
                <a href="">Оплата и доставка</a>
                <a href="">Условия возврата</a>
                <a href="">Обратная связь</a>
                <a href="">Карта сайта</a>
            </div>
            <div class="footer-col">
                <span>Клиентам</span>
                <a href="">Личный кабинет</a>
                <a href="">История заказов</a>
                <a href="">Рассылка</a>
            </div>
        </div>
    </div>
`
const getFooterMeta = () => `
    <style>
        .footer-section {
            background: #fff;
            padding: 40px 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .footer-section .left {
            display: flex;
            gap: 20px;
            align-items: center;
            width: fit-content;
        }
        .footer-section .right {
            width: fit-content;
        }
        @media(max-width: 992px) {
            .footer-section {
                flex-direction: column-reverse;
            }
            .footer-section .left img {
                width: 15vw;
            }
            .footer-section .right img {
                width: 28vw;
            }
        }
    </style>
    <div class="footer-section">
        <div class="left">
            <img alt="mastercard" src="https://cdn.sellavi.com/image/upload/t_media_lib_thumb/v1636950530/ru/clients/121756/2d573177106e00635d4f1bd0e09d26d8823ceb45.png" />
            <img alt="visa" src="https://cdn.sellavi.com/image/upload/t_media_lib_thumb/v1636950556/ru/clients/121756/aac51e436d3046221b48996b33da56724aa640ef.png" />
            <img alt="мир" src="https://cdn.sellavi.com/image/upload/t_media_lib_thumb/v1636950574/ru/clients/121756/ab7195e665df42c878a00192749ea264dbab7705.png" />
            <img alt="ssl" src="https://cdn.sellavi.com/image/upload/t_media_lib_thumb/v1636950649/ru/clients/121756/416cf4528792e7eff24c689f0dd489512f98d97c.png" />
            <img alt="pci" src="https://cdn.sellavi.com/image/upload/t_media_lib_thumb/v1636950540/ru/clients/121756/9682f8efc69b36894db5d07a5e46e2937343cc4e.png" />
        </div>
        <div class="right"><img alt="sellavi-logo" src="https://cdn.sellavi.com/image/upload/t_media_lib_thumb/v1636950548/ru/clients/121756/fe77f27bebfa687c00c5fc5a6ed1f7bd9dae8d19.png" /></div>
    </div>
`

const Container = document.querySelector(".content-area");

if(pathname === "/") {
    Container.innerHTML += `
        <section class="page-section">
            <div class="container productsWrapper">
                <h2>Хиты продаж</h2>
                <div class="products">
                    ${getProducts(window.products)}
                </div>
            </div>
        </section>
        <section class="page-section">
            <div class="categoriesWrapper container">
                ${getCategories()}
            </div>
        </section>
        <section class="page-section">
                ${getFeedback()}
        </section>
        <section class="page-section">
            <div class="container feedbackWrapper">
                <i class="fas fa-chevron-left scroller leftScroll"></i>
                <i class="fas fa-chevron-right scroller rightScroll"></i>
                <h2>Бренды</h2>
                ${getBrands()}
            </div>
        </section>
        <section class="page-section">
            ${getContacts()}
        </section>
    `
}
else if(pathname === "/cart/") {
    Container.innerHTML = `
    <style>
        .cartWrapper .bottom {
            width: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 20px !important;
            margin-top: 40px !important;
        }
        .cartWrapper .bottom button {
            padding: 0 34px !important;
            background: #E31E24;
            cursor: pointer;
            border: none;
            color: #fff;
            font-weight: 700;
            height: 41px !important;
            display: flex;
            align-items: center;
            min-width: fit-content !important;
        } 
        .cartWrapper .bottom button:disabled {
            cursor: not-allowed;
            background: darkred;
        }
    </style>
    <div class="page-section">
        <div class="container">
            <div class="cartWrapper">
                <div class="showPopup">
                    ${CheckoutPopup()}
                </div>
                <div class="products">
                    ${getProducts(window.ORDER.cart_products)}
                </div>
                <div class="bottom">
                    <button onclick="checkout(event)">Buy Now</button>
                    <span class="price">${window.ORDER.cart_products.reduce((prev, product) => prev + +product.price * product.order_quantity, 0)} p.</span>
                </div>
            </div>
        </div>
    </div>
    `
}


    const footer = document.querySelector("footer");
    footer.innerHTML = `
        <div class="footer-widgets">
            <div class="container">
                ${getFooterWidgets()}
            </div>
        </div>
        <div class="footer-meta">
            <div class="container">
                ${getFooterMeta()}
            </div>
        </div>
    `

} // End of Execute


// </script>