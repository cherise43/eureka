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



   document.addEventListener('click', (event) => {
      if (event.target.classList.contains('add-to-cart-btn')) {
           const itemId = event.target.dataset.itemId;
          addToCart(itemId);
          } else if (event.target.id === 'checkout-btn') {
             checkout();
             }
             });
                document.getElementById('comments-form').addEventListener('submit', (event) => {
                 event.preventDefault();
                 const commentInput = document.getElementById('comment-input');
                  const comment = commentInput.value.trim();
        //     if (comment !== '') {
  //       addComment(comment);
  //       commentInput.value = '';
  //     }
  //   });
  
  //   function createItemElement(item){
  //     const itemElement = document.createElement('div');
  //     itemElement.className = 'item';
  
  //     const imageElement = document.createElement('img');
  //     imageElement.src = item.image;
  //     imageElement.alt = item.title;
  //     itemElement.appendChild(imageElement);
  
  //     const titleElement = document.createElement('h3');
  //     titleElement.textContent = item.title;
  //     itemElement.appendChild(titleElement);
  
  //     const priceElement = document.createElement('p');
  //     priceElement.textContent = `$${item.price}`;
  //     itemElement.appendChild(priceElement);
  
  //     const addToCartButton = document.createElement('button');
  //     addToCartButton.textContent = 'Add to Cart';
  //     addToCartButton.className = 'add-to-cart-btn';
  //     addToCartButton.dataset.itemId = item.id;
  //     itemElement.appendChild(addToCartButton);
  
  //     return itemElement;
  //   }
  
  //   let cart = [];
  
  //   function addToCart(itemId) {
  //     const item = getItemById(itemId);
  //     if (item) {
  //       cart.push(item);
  //       updateCartDisplay();
  //     }
  //   }
  
  //   function getItemById(itemId) {
  //     // Retrieve item by ID from the API or a local item list
  //     // This is a simplified example assuming the item exists
  //     return cart.find(item => item.id === itemId);
  //   }
  
  //   function updateCartDisplay() {
  //     const cartItemsList = document.getElementById('cart-items');
  //     cartItemsList.innerHTML = '';
  
  //     cart.forEach(item => {
  //       const cartItemElement = document.createElement('li');
  //       cartItemElement.textContent = item.title;
  //       cartItemsList.appendChild(cartItemElement);
  //     });
  //   }
  
  //   function checkout() {
  //     if (cart.length > 0) {
  //       console.log('Checkout');
  //       cart = [];
  //       updateCartDisplay();
  //     } else {
  //       console.log('Cart is empty. Add items before checking out.');
  //     }
  //   }
  
  //   let comments = [];
  
  //   function loadComments() {
  //     const commentsList = document.getElementById('comments-list');
  //     commentsList.innerHTML = '';
  
  //     comments.forEach(comment => {
  //       const commentElement = document.createElement('li');
  //       commentElement.className = 'comment';
  //       const commentText = document.createElement('p');
  //       commentText.textContent = comment;
  //       commentElement.appendChild(commentText);
  //       commentsList.appendChild(commentElement);
  //     });
  //   }
  
  //   function addComment(comment) {
  //     comments.push(comment);
  //     loadComments();
  //   }
  })        
  
       
      
    
  