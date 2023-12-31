








// End colors
// Start Product
let cards =document.getElementById('cards');
console.log(cards)

let cardItemsData =[{
    id: 1 ,
    type: 'Watches',
    name: 'Xiaomi Mi Band 5',
    stars: ` <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bx-star'></i></li>` ,
    review: "4.5",
    offer:" ",
    price: 199.00,
    img:'/images/Product1.webp'
},
{
    id: 2 ,
    type: 'Speaker',
    name: 'Big Power Sound Speaker',
    stars: ` <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li> ` ,
    review: "4.5",
    offer:`<span class="offer">-25%</span>`,
    price: 275.00,
    img:'/images/Product2.webp'
},
{
    id: 3 ,
    type: 'Camera',
    name: 'WiFi Security Camera',
    stars: ` <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li> ` ,
    review: "4.5",
    offer:" ",
    price: 399.00,
    img:'/images/Product3.webp'
},
{
    id: 4 ,
    type: 'Phones',
    name: 'iphone 6x plus',
    stars: ` <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li> ` ,
    review: "4.5",
    offer:`<span class="offer" style="background: #0167f3;">New</span>`,
    price: 400.00,
    img:'/images/Product4.webp'
},
{
    id: 5 ,
    type: 'Headphones',
    name: 'Wireless Headphones',
    stars: ` <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li> ` ,
    review: "5.0",
    offer:" ",
    price: 350.00,
    img:'/images/Product5.webp'
},
{
    id: 6 ,
    type: 'Speaker',
    name: 'Mini Bluetooth Speaker',
    stars: ` <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bx-star'></i></li>`,
    review: "4.0",
    offer:" ",
    price: 70.00,
    img:'/images/Product6.webp'
},
{
    id: 7 ,
    type: 'Headphones',
    name: 'PX7 Wireless Headphones',
    stars: ` <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bx-star'></i></li>` ,
    review: "4.0",
    offer: `<span class="offer">-50%</span>`,
    price: 100.00,
    img:'/images/Product7.webp'
},
{
    id: 8 ,
    type: 'Laptop',
    name: 'Apple MacBook Air',
    stars: ` <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li>
    <li><i class='bx bxs-star'></i></li>` ,
    review: "5.0",
    offer:" ",
    price: 899,
    img:'/images/Product8.webp'
}
]
let generateShop = () =>{
    return (cards.innerHTML = cardItemsData
        .map((x)=>{
            let{id, type, name, stars, review, price, img ,offer}=x;
        return` 
        <div class="col-lg-3 col-md-6 col-12  ">
        <div class="product">
          <div class="image">
            <img src=${img} alt="">
            <button><i class="fa-solid fa-cart-shopping"></i> <span> Add To Cart</span></button>
            ${offer}
          </div>
          <div class="info">
            <h5>${type}</h5>
            <h4>${name}</h4>
            <div class="stars-gru">
              <ul class="stars">
              ${stars}
              </ul>
              <p>${review} Review(s)</p>
            </div>
            <h3>$${price}.00</h3>
          </div>
        </div>
      </div>
        `
    }).join(''));
};
// End Product
generateShop();


` 
    <div class="col-lg-3 col-md-6 col-12  ">
    <div class="product">
      <div class="image">
        <img src="/images/Product1.webp" alt="">
        <button><i class="fa-solid fa-cart-shopping"></i> <span> Add To Cart</span></button>
      </div>
      <div class="info">
        <h5>Watches</h5>
        <h4>Xiaomi Mi Band 5</h4>
        <div class="stars-gru">
          <ul class="stars">
            <li><i class='bx bxs-star'></i></li>
            <li><i class='bx bxs-star'></i></li>
            <li><i class='bx bxs-star'></i></li>
            <li><i class='bx bxs-star'></i></li>
            <li><i class='bx bx-star'></i></li>
          </ul>
          <p>4.0 Review(s)</p>
        </div>
        <h3>$199.00</h3>
      </div>
    </div>
  </div>
    
    `
