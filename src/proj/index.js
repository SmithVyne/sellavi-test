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
        <Link to="/">Сборка и установка</Link>
        <Link to="/">Доставка и самовывоз</Link>
        <Link to="/">Пункт выдачи</Link>
        <Link to="/">Оплата и возврат</Link>
        <Link to="/user"><BsPerson /></Link>
    </div>
`;
