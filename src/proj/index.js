/*
.header-style-4 .container-fluid {
  max-width: 1140px;
  padding: 0;
}
.header-style-4 .container-fluid * {
  padding: 0 !important;
}
.header-style-4 .top-bar ul a, .header-style-4 .top-bar ul li {
    color: #000;
}
.header-style-4 .top-bar ul li span { 
  display: none;
}
.header-style-4 .top-bar ul li i {
   font-weight:  100;
}
.header-style-4 .top-bar ul li i.fa-envelope {
   display: none;
}
.top-bar .top-bar-right>ul>li+li:before {
   display: none;
}
.header-style-4 .top-bar .top-bar-left ul li:first-child {
    display: none !important;
}
.header-style-4 .top-bar .top-bar-left ul li:nth-child(2) {
    display: none !important;
} */

// const header = document.querySelector(".top-bar");

// header.innerHTML = `
//     <style>
//         .step1 {
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             flex-wrap: wrap;
//             gap: 106px;
//             background: #F5F5F5;
//             height: 47px;
//             max-height: max-content;
//         }
//         .step1 .a {
//             text-decoration: none;
//             color: #000
//         }
//         .step1:first-child {
//             color: #646464;
//         }
        
//         .step1 svg {
//             font-size: 22px;
//             cursor: pointer;
//             color: #000;
//         }
//     </style>
//     <div class="step1">
//         <span>г. Москва</span>
//         <a href="/сборка-и-установка">Сборка и установка</a>
//         <a href="/доставка-и-самовывоз">Доставка и самовывоз</a>
//         <a href="/пункт-выдачи">Пункт выдачи</a>
//         <a href="/оплата-и-возврат">Оплата и возврат</a>
//         <a href="/user"><BsPerson /></a>
//     </div>
// `;

// const step2 = document.querySelector(".header-wrapper");
// step2.innerHtml += `
//      <style>
//         .step2 {
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             flex-wrap: wrap;
//             height: 95px;
//             max-height: fit-content;
//         }
//         .step2 img {
//             width: 217px;
//             margin-right: 54px;
//         }

//         #search {
//             display: flex;
//             align-items: center;
//             margin-right: 43px;
//         }

//         #search input {
//             box-sizing: border-box;
//             width: 371px;
//             height: 41px;
//             border: 1px solid #B4B4B4;
//             padding: 10px 0 12px 21px;
//         }

//         #search input::placeholder {
//             color: #A3A4A5;
//         }

//         #search button { 
//             padding: 0 34px;
//             background: #E31E24;
//             cursor: pointer;
//             border: none;
//             color: #fff;
//             font-weight: 700;
//             height: 41px;
//             display: flex;
//             align-items: center;
//         }
        
//         .contact-number {
//             font-size: 19px;
//             font-weight: 600;
//             line-height: 23px;
//             display: flex;
//             flex-direction: column;
//             gap: 2px;
//             margin-right: 80px;
//         }
//         .contact-number a {
//             color: #646464;
//             font-size: 15px;
//             font-weight: 400;
//             line-height: 18px;
//             letter-spacing: 0em;
//             border-bottom: 1px solid #646464;
//             text-decoration: none;
//         }
//         .shop-utils {
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             gap: 34.5px;
//         }
//         .shop-utils svg {
//             font-size: 25px;
//             cursor: pointer;
//         }
//         .shop-utils a:last-child {
//             position: relative;
//             color: #000;
//         }
//         .cart-count {
//             color: #fff;
//             font-family: Roboto;
//             font-size: 11px;
//             font-weight: 500;
//             line-height: 12px;
//             letter-spacing: 0em;
//             text-align: center;
//             position: absolute;
//             top: -4px;
//             right: -8px;
//             background: #E31E24;
//             border-radius: 100%;
//             width: 17px;
//             height: 17px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//         }
//         @media(max-width: 992px) {
//             display: none;
//         }
//      </style>

//     <div class="step2">
//         <a href="/"><img alt="logo" src="https://cdn.sellavi.com/image/upload/c_fit,g_center,h_176,q_100,w_430/c_pad,h_176,w_430/v1636394035/ru/clients/121756/5665852fad9a581e919f48e3febc2e6e9cdd495f.png "/></a>
//         <div id="search">
//             <input type="text" placeholder="Поиск по сайту..." />
//             <button>Найти</button>
//         </div>
//         <div class="contact-number">
//             8 800 000 000
//             <a href="tel:8 800 000 000" >Обратный звонок</a>
//         </div>
//         <div class="shop-utils">
//             <i class="far fa-file"></i>
//             <i class="far fa-heart"></i>
//             <a href="/cart"><span class="cart-count">0</span><i class="fal fa-shopping-bag"></i></a>
//         </div>
//     </div>
// `


// const nav = document.querySelector(".navigation-wrapper .container")
// nav.innerHTML = `
//     <style>
//         .step3 {
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             flex-wrap: wrap;
//             gap: 91px;
//             color: #fff;
//             font-size: 16px;
//             line-height: 19px;
//             background: #2B2A29;
//             width: 100%;
//         }
//         .step3 .menu-btn {
//             display: flex;
//             gap: 19px;
//             padding: 14px 40px 14px 26px;
//             background: #E31E24;
//             align-items: center;
//         }
//         .step3 .menu-btn i {
//             font-size: 14px;
//         }
//         nav {
//             display: flex;
//             align-items: center;
//             gap: 135px;
//         }
//         nav a {
//             color: #fff;
//             text-decoration: none;
//             padding: 14px 18px;
//         }
//         nav a:hover {
//             background: #E31E24;
//             cursor: default;
//         }
//     </style>
//     <div class="step3">
//         <span class="menu-btn">
//             <i class="fas fa-bars"></i>
//             Каталог
//         </span>
//         <nav>
//             <a href="#new">Новинки</a>
//             <a href="/бренды">Бренды</a>
//             <a href="#services">Услуги дизайнерам</a>
//             <a href="#blog">Блог</a>
//         </nav>
//     </div>
// `



const categories = document.querySelector(".homefeatured_category .container");
categories.innerHTML = `
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
        <div class="category">
            <button>САНТЕХНИКА ></button>
            <img alt="modernBathroom" src="https://cdn.sellavi.com/image/upload/t_media_lib_thumb/ru/clients/121756/489f48335dbd0d97e028c4c1dc1c00d9bca4b021.png" />
        </div>
        <div class="category">
            <button>ПЛИТКА ></button>
            <img alt="modernBathroom2" src="https://cdn.sellavi.com/image/upload/t_media_lib_thumb/ru/clients/121756/6357dd308dcc7d307b875532b0b0dd9b5806d242.png" />
        </div>
        <div class="category">
            <button>ЛЕПНИНА ></button>
            <img alt="corridoor" src="https://cdn.sellavi.com/image/upload/t_media_lib_thumb/ru/clients/121756/fbbc387e81def555547d94366fa2c22d4a96bb86.png" />
        </div>
        <div class="category">
            <button>ФРЕСКА ></button>
            <img alt="livingRoom" src="https://cdn.sellavi.com/image/upload/t_media_lib_thumb/ru/clients/121756/2e8bb38fe848e2604ea3098ca310e1a3ba0cc277.png" />
        </div>
    </div>
`













const ProductStyles = (current) => `
    <style>
        .products.container {
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
        .product-image .favorite, .cart-property {
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
        }
        .cart-property {
            left: 14px;
            font-size: 30px;
            color: #E31E24;
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
                <span class="favorite">{liked ? <BsHeartFill color="#E31E24" /> : <BsHeart color="#E31E24" />}</span>
            </div>
            <span class="name">${current.name}</span>
            <span class="price">${current.price}</span>

            ${ current.rating && 
            `<span class="stars">
                <span>{Array(5).fill(5).map((_, id) => <AiFillStar key={id} color={id + 1 <= stars ? "#E31E24" : "#A3A4A5" } />)}</span>
                <span>${current.rating} ({rating.count})</span>
            </span>`}

                <div class="QuantityControl">  
                    <span onclick="updateCart(${index}, "-")" class="controls">-</span>
                    ${current.quantity}
                    <span onclick="updateCart(${index})" class="controls">+</span>
                </div>
                <button onclick="updateCart(${index})">КУПИТЬ</button>
        </div>
    `, ""))
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