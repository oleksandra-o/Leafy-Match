let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Cacti',
        image: 'cacti.jpg',
        price: 32.99
    },
    {
        id: 2,
        name: 'White Cacti',
        image: 'cacti-white.jpg',
        price: 32.99
    },
    {
        id: 3,
        name: 'Cactus',
        image: 'Cactus.jpg',
        price: 32.99
    },
    {
        id: 4,
        name: 'Diffen',
        image: 'Diffen.jpg',
        price: 22.99
    },
    {
        id: 5,
        name: 'Dracena',
        image: 'Dracena.jpg',
        price: 22.99
    },
    {
        id: 6,
        name: 'Green Plant',
        image: 'DSC06273.jpg',
        price: 19.99
    },
    {
        id: 7,
        name: 'Fiddlehead',
        image: 'Fiddlehead.jpg',
        price: 22.99
    },
    {
        id: 8,
        name: 'Neon Pothos',
        image: 'NeonPothos.jpg',
        price: 19.99
    },
    {
        id: 9,
        name: 'Njoy Pothos',
        image: 'NjoyPothos.jpg',
        price: 25.99
    },
    {
        id: 10,
        name: 'Norfolk',
        image: 'Norfolk.jpg',
        price: 19.99
    },
    {
        id: 11,
        name: 'Orchid',
        image: 'Orchid.jpg',
        price: 27.99
    },
    {
        id: 12,
        name: 'White Orchid',
        image: 'orchid-white.jpg',
        price: 27.99
    },
    {
        id: 13,
        name: 'Peace Lily',
        image: 'PeaceLily.jpg',
        price: 19.99
    },
    {
        id: 14,
        name: 'Philo',
        image: 'Philo.jpg',
        price: 19.99
    },
    {
        id: 15,
        name: 'Pink Rose',
        image: 'pink-rose.jpg',
        price: 22.99
    },
    {
        id: 16,
        name: 'Pothos',
        image: 'Pothos.jpg',
        price: 19.99
    },
    {
        id: 17,
        name: 'Rose',
        image: 'rose.jpg',
        price: 22.99
    },
    {
        id: 18,
        name: 'Snake',
        image: 'Snake.jpg',
        price: 22.99
    },
    {
        id: 19,
        name: 'Spider',
        image: 'Spider.jpg',
        price: 22.99
    },
];
let listCarts  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCart(key){
    if(listCarts[key] == null){
        // copy product form list to list Cart
        listCarts[key] = JSON.parse(JSON.stringify(products[key]));
        listCarts[key].quantity = 1;
    }
    reloadCart();
}
function reloadCart(){
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCart.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCarts[key];
    }else{
        listCarts[key].quantity = quantity;
        listCarts[key].price = quantity * products[key].price;
    }
    reloadCart();
}