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
  


