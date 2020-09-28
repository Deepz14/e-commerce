let menuIcon = document.querySelector('.burgerIcon');

let menu = document.querySelector('.responsive-nav');

let tableBody = document.querySelector('.tableBody');

let totalItem = document.querySelector('.totItems')

let totalPrice = document.querySelector('.totPrice');

let inc = 0;

let dec = 0;

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active')
})

let productArr = JSON.parse(localStorage.getItem('items'))

totalItem.textContent = productArr.length;

totalPrice.textContent = localStorage.getItem('total')

localStorage.setItem('length', productArr.length);

productArr.forEach(item => {
    tableBody.innerHTML += `
    <tr>
        <td>
            <img class="tableImg" src="./images/${item.image}.jpg" alt="img">
        </td>
        <td>${item.name}</td>
        <td>$${item.price}</td>
        <td>
        <div>
            x1
            <svg width="1em" height="1em" viewBox="0 0 16 16" data-price="${item.price}" class="bi bi-arrow-up-square arrow-up" fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path fill-rule="evenodd"
                    d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z" />
            </svg>
            <svg width="1em" height="1em" viewBox="0 0 16 16" data-price="${item.price}" class="bi bi-arrow-down-square arrow-down" fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path fill-rule="evenodd"
                    d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
            </svg>
        </div>      
        </td>
        <td>$${item.price}</td>
    </tr> `
})

const arrowUp = document.querySelectorAll('.arrow-up')

const arrowDown = document.querySelectorAll('.arrow-down')

arrowUp.forEach(arrow => {
    arrow.addEventListener("click", () => {
      let priceInc = arrow.getAttribute("data-price");

      let parentNode = arrow.parentElement.parentElement.parentElement.children;

      inc = parseInt(parentNode[4].textContent.slice(1,))

      inc+= parseInt(priceInc)

      parentNode[4].innerHTML = `$${inc}`;

      let getTot = parseInt(localStorage.getItem("total"));

      let getItem = parseInt(localStorage.getItem('length'));

      localStorage.setItem("total", getTot + parseInt(priceInc));

      localStorage.setItem('length', getItem + 1);

      totalPrice.textContent = localStorage.getItem("total");

      totalItem.textContent = localStorage.getItem('length');
    });
})

arrowDown.forEach(arrow => {
    arrow.addEventListener('click', () => {
        let parentNode = arrow.parentElement.parentElement.parentElement.children;
        dec = parseInt(arrow.getAttribute('data-price'))

        let value = parseInt(parentNode[4].textContent.slice(1,));

        value -= dec;

        parentNode[4].innerHTML = `$${value}`;

        let getTot = parseInt(localStorage.getItem("total"));

        let getItem = parseInt(localStorage.getItem("length"));

        localStorage.setItem('total', getTot - dec);

        localStorage.setItem('length', getItem - 1);

        totalPrice.textContent = localStorage.getItem('total');

        totalItem.textContent = localStorage.getItem('length');

    })
    
})