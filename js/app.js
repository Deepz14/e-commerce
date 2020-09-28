let menuIcon = document.querySelector('.burgerIcon');

let menu = document.querySelector('.responsive-nav');

let cartBtn = document.querySelectorAll('.cartBtn');

let cartIcon = document.querySelector('.cartIcon');

let totCart = document.querySelector('.totCart');

let resTotCart = document.querySelector('.res-totCart');

let inc = 0;

var myModal = new bootstrap.Modal(document.getElementById('exampleModal'))

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active')
})

let products = [];

localStorage.setItem('total', 0)

cartBtn.forEach(cart => {
    cart.addEventListener('click', () => {
        let image = cart.getAttribute('data-image')
        let name = cart.getAttribute('data-name')
        let price = cart.getAttribute('data-price')

        let getTot = parseInt(localStorage.getItem('total'));
        
        localStorage.setItem('total',getTot + parseInt(price))

        cart.disabled = true

        let items = { image: image, name: name, price: price }

        products.push(items)

        localStorage.setItem('items', JSON.stringify(products))

        setTimeout(() => {
            myModal.hide()
        }, 1000)

        totCart.style.opacity = "1"

        resTotCart.style.opacity = "1"

        inc+=1

        totCart.textContent = inc;

        resTotCart.textContent = inc;
    })
})



