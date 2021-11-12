<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">

<script>
$(document).ready(execute)
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
         .step1 {
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
        <a href="/login">
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
            <a href="/cart"><span class="cart-count">${window.cart_products.length}</span><i class="fal fa-shopping-bag"></i></a>
        </div>
    </div>
`



const nav = document.querySelector(".navigation-wrapper .container");
nav.innerHTML = `
    <style>
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
         @media(max-width: 1200px) {
             .step3 {
                  display: none;
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
`



const categories = document.querySelector(".homefeatured_category .container");
categories.innerHTML += `
    <style>
        .homefeatured_category .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            margin-top: 71px;
        }
        .homefeatured_category .container h2 {
            font-size: 28px;
            font-weight: 600;
            line-height: 34px;
            margin: 0 0 30px;
        }
        .homefeatured_category .container .categories {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: 50% 50%;
        }
        .homefeatured_category .category {
            cursor: pointer;
            position: relative;
        }
        .homefeatured_category .category img {
            width: 100%;
        }
        .homefeatured_category .category button {
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
        .homefeatured_category .category button:hover {
            background: #E31E24;
        }   
        @media(max-width: 1180px) {
            .homefeatured_category .container .categories {
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
</div>
`






const ProductStyles = (current) => `
    <style>
        .productsWrapper.container{
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 100%;
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
        @media(max-width: 400px) {
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
            background: url(${current.thumb.thumb});
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

        .productWrapper button {
            min-width: 200px;
            width: 100%;
            display: flex;
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
            display: flex;
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

function getProducts(cart = false) {
    return ( 
window.products.reduce((prev, current, index) => prev += `
        ${ProductStyles(current)}
        <div class="productWrapper">
            <div class="product-image">
                ${current.sticker ? `<Info>SALE</Info>` : ""}
                <span class="favorite"><i class="far fa-heart"></i></span>
            </div>
            <span class="name">${current.name}</span>
            <span class="price">${current.price}</span>

            ${ current.rating  ? 
            `<span class="stars">
                <span>{Array(5).fill(5).map((_, id) => <AiFillStar key={id} color={id + 1 <= stars ? "#E31E24" : "#A3A4A5" } />)}</span>
                <span>${current.rating} ({rating.count})</span>
            </span>` : ""}

            <div data-index="${index}" class="QuantityControl">  
                <span data-index="${index}" data-type="sub" class="controls updater">- 
                </span>
                <span class="quantity"></span>
                <span data-index="${index}" data-type="add" class="controls updater">+ 
                </span>
            </div>
            <button class="updater" data-index="${index}" data-type="add">КУПИТЬ</button>
          </div>
    `, "")
   )
}

const Container = document.querySelector(".content-area");
Container.innerHTML += `
        <section class="page-section">
            <div class="container productsWrapper">
                <h2>Хиты продаж</h2>
                <div class="products">
                    ${getProducts()}
                </div>
            </div>
        </section>
`
const cartCount = document.querySelector(".cart-count");
function updateCart({target}) {
    const {index, type} = target.dataset;
    const {name, price, product_id} = window.products[index];
    let cartIndex = window.cart_products.findIndex(ele => ele.id === product_id)
    if (cartIndex >=0) {
        type === "add" ? window.cart_products[cartIndex].quantity += 1 : window.cart_products[cartIndex].quantity -= 1
    } else {
        window.cart_products.push({name, price, product_id, quantity: 1})
        cartIndex = window.cart_products.length -1
    }

    const quantityControl = document.querySelector(`.QuantityControl[data-index="${index}"]`);
    const button = document.querySelector(`.productWrapper button[data-index="${index}"]`);
    if(window.cart_products[cartIndex].quantity > 0) {
        button.style.display = "none";
        quantityControl.style.display = "flex";
    } else {
        quantityControl.style.display = "none";
        button.style.display = "flex";
    }

    
    cartCount.textContent = window.cart_products.length
}

const updaters = document.querySelectorAll(".updater")
updaters.forEach(element => {
    element.addEventListener("click", updateCart)
});

} </script>
