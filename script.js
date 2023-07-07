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

  


