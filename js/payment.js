let menuIcon = document.querySelector('.burgerIcon');

let menu = document.querySelector('.responsive-nav');

let totalItem = document.querySelector('.totItems')

let totalPrice = document.querySelector('.totPrice');

let paymentBody = document.querySelector('.paymentBody');

var myModal = new bootstrap.Modal(document.getElementById('exampleModal'))

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active')
})

let productArr = JSON.parse(localStorage.getItem('items'))

totalItem.textContent = localStorage.getItem('length');

totalPrice.textContent = localStorage.getItem('total')

productArr.forEach(item => {
    paymentBody.innerHTML += `
    <div class="list-group-item">
        <div class="paymentSummary" id="paymentDetails">
            <img class="tableImg" src="./images/${item.image}.jpg" alt="img">
            <p>${item.name}</p>
            <p>$${item.price}</p>
            <p>x1</p>
        </div>
    </div>  `
})

function payment(){
    setTimeout(() => {
        myModal.hide()
    }, 2000)

    localStorage.clear()
    setTimeout(() => {
        window.location.href = "index.html"

    },2000)
}