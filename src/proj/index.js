const header = document.querySelector(".top-bar");

header.innerHTML = `
    <style>
        .step1 {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 106px;
            background: #F5F5F5;
            height: 47px;
            max-height: max-content;
        }
        .step1 .a {
            text-decoration: none;
            color: #000
        }
        .step1:first-child {
            color: #646464;
        }
        
        .step1 svg {
            font-size: 22px;
            cursor: pointer;
            color: #000;
        }
    </style>
    <div class="step1">
        <span>г. Москва</span>
        <a href="/сборка-и-установка">Сборка и установка</a>
        <a href="/доставка-и-самовывоз">Доставка и самовывоз</a>
        <a href="/пункт-выдачи">Пункт выдачи</a>
        <a href="/оплата-и-возврат">Оплата и возврат</a>
        <a href="/user">
            <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-user-interface-kiranshastry-lineal-kiranshastry-1.png"/>
        </a>
    </div>
`;


console.log(header)
