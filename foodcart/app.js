let openshopping=document.querySelector('.shopping');
let closeshopping=document.querySelector('.closeshopping');
let list=document.querySelector('.list');
let body=document.querySelector('body');
let total=document.querySelector('.total');
let quantity=document.querySelector('.quantity');

openshopping.addEventListener('click',()=>{
body.classList.add('active');
})
closeshopping.addEventListener('click',()=>{
    body.classList.remove('active');
})

let product=[
    {
    id: 1,
    name: 'Product Name',
    image: '1.JPG',
    price: 12000
    },
    {
        id: 2,
        name: 'Product Name',
        image: '2.JPEG',
        price: 12000
        },

        {
            id: 3,
            name: 'Product Name',
            image: '3.jpeg',
            price: 12000
            },

            {
                id: 4,
                name: 'Product Name',
                image: '4.JPEG',
                price: 12000
                },
                
];

let listcard = [];
function App(){
    product.foreach((value, key)=>{
        let newDiv=document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src="image/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocalString()}</div>
        <button onclick="addToCard(${key})">Add To Card</button>
        `;
        list.appendChild(newDiv);
    })
}
App();