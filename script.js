document.addEventListener('DOMContentLoaded', () => {
  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(items => renderItems(items))
  .catch(error => {
    console.error('Error fetching items:', error);
  });
}
fetchItems()
function renderItems(items){ 
  items.forEach(item => {
    let card = document.createElement('div')
    card.className="card"
    card.innerHTML=`
    <div id="product-image">
    <img src ="${item.image}">
    <div>
    <h3>${item.category}</h3>
    <p>Price:${item.price}</p>`
    console.log(card)

    document.querySelector('#items').appendChild(card)
  })
}
 //       document.addEventListener('click', (event) => {
   //     if (event.target.classList.contains('add-to-cart-btn')) {
     //       const itemId = event.target.dataset.itemId;
     //       addToCart(itemId);
      //     } else if (event.target.id === 'checkout-btn') {
         //       checkout();
          //     }
           //   });
             //   document.getElementById('comments-form').addEventListener('submit', (event) => {
              //     event.preventDefault();
  


