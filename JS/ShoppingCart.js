
// קריאה למידע מ-sessionStorage
const cartItems = JSON.parse(sessionStorage.getItem('data_sal')) || [];

//הוספת מוצר
function addToCart(index) {
    cartItems[index].count++;
    updateCart();
}
//הורדת מוצר
function removeFromCart(index) {
    if (cartItems[index].count > 1) {
        cartItems[index].count--;
    } else {
        // מחק אם יש רק מוצר אחד
        cartItems.splice(index, 1);
    }
    updateCart();
}
// המרה של הsessionStorage
function updateCart() {
    sessionStorage.setItem('data_sal', JSON.stringify(cartItems));
    renderCart();
}
//פונקצית ראשונה שמופעלת 
function renderCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';
    //-sessionStorageלולאה שעוברת על כל המערך שב
    cartItems.forEach((item, index) => {
        console.log(cartItems.x)
      
        //יוצרת DIV חדש
        const card = document.createElement('div');
        card.classList.add('card');
        //מוסיפה בHTMLאת כל המלל...
        //יוצרת 2 כפתורים +- 
        // בעת לחיצה עליהם מופעלת הפונקציה של הוספה 1 לCOUNT 
        //והפונקציה מופעלת עם שלחית הINDEX כדי לדעת איכן ממוקם
       let s=0;
       s+= item.price*item.count;
        card.innerHTML = `
        <img src="${item.pic}" alt="${item.name}">
        <div class="card-content">
          <h2 class="card-title">${item.name}</h2>
          <p class="card-price">price: $${s}</p>
        </div>
        <div class="add-to-cart">
          <div class="quantity">
            <button onclick="removeFromCart(${index})">-</button>
             <input type="number" value="${item.count}" disabled>
            <button onclick="addToCart(${index})">+</button>
          </div>
        </div>
      `;
      //אימוץ הDIV
        cartContainer.appendChild(card);}
    );
    
}
//איתחול הפונקציה
renderCart();
