let arr = [
    {Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero error sapiente velit quis natus, possimus, quaerat asperiores voluptate ab nihil cum quos corrupti unde earum doloribus minus? Veniam, at quas.", sort:3,id: 1, name: "Sneakers", pic: "../תמונות/נעלי שחורה.avif", price: 10 },
    {Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero error sapiente velit quis natus, possimus, quaerat asperiores voluptate ab nihil cum quos corrupti unde earum doloribus minus? Veniam, at quas.", sort:3,id: 2, name: "Shoes", pic: "../תמונות/נעלי בית.avif", price: 222 },
    {Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero error sapiente velit quis natus, possimus, quaerat asperiores voluptate ab nihil cum quos corrupti unde earum doloribus minus? Veniam, at quas.", sort:2,id: 3, name: "Shabbat Shoes", pic: "../תמונות/נעלי ספורט.avif", price:30},
    {Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero error sapiente velit quis natus, possimus, quaerat asperiores voluptate ab nihil cum quos corrupti unde earum doloribus minus? Veniam, at quas.", sort:1,id: 4, name: "Slippers", pic: "../תמונות/נעלי לבנה.avif", price: 12120 },
    {Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero error sapiente velit quis natus, possimus, quaerat asperiores voluptate ab nihil cum quos corrupti unde earum doloribus minus? Veniam, at quas.", sort:2,id: 5, name: "Shoes", pic: "../תמונות/נעלי ילדים צבעונית.avif", price: 222 },
    {Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero error sapiente velit quis natus, possimus, quaerat asperiores voluptate ab nihil cum quos corrupti unde earum doloribus minus? Veniam, at quas.", sort:2,id: 6, name: "Shoes", pic: "../תמונות/נעלי ילדים כחול.avif", price: 222 },
    {Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero error sapiente velit quis natus, possimus, quaerat asperiores voluptate ab nihil cum quos corrupti unde earum doloribus minus? Veniam, at quas.", sort:2,id: 7, name: "High Heels", pic: "../תמונות/נעלי ריצה.avif", price:20},
    {Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero error sapiente velit quis natus, possimus, quaerat asperiores voluptate ab nihil cum quos corrupti unde earum doloribus minus? Veniam, at quas.", sort:1,id: 8, name: "Shoes", pic: "../תמונות/נעל ציבעוני.avif", price: 222 },
    {Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero error sapiente velit quis natus, possimus, quaerat asperiores voluptate ab nihil cum quos corrupti unde earum doloribus minus? Veniam, at quas.", sort:1,id: 9, name: "Shoes", pic: "../תמונות/נעל ספורט שחורה.avif", price: 222 },
    {Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero error sapiente velit quis natus, possimus, quaerat asperiores voluptate ab nihil cum quos corrupti unde earum doloribus minus? Veniam, at quas.", sort:1,id: 10, name: "Shoes", pic: "../תמונות/נעל ספורט שחורה.avif", price: 222 },
    {Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero error sapiente velit quis natus, possimus, quaerat asperiores voluptate ab nihil cum quos corrupti unde earum doloribus minus? Veniam, at quas.", sort:1,id: 11, name: "Shoes", pic: "../תמונות/נעל ספורט שחורה.avif", price: 222 },
    {Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero error sapiente velit quis natus, possimus, quaerat asperiores voluptate ab nihil cum quos corrupti unde earum doloribus minus? Veniam, at quas.", sort:3,id: 12, name: "Shoes", pic: "../תמונות/נעל ספורט שחורה.avif", price: 222 },
    {Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero error sapiente velit quis natus, possimus, quaerat asperiores voluptate ab nihil cum quos corrupti unde earum doloribus minus? Veniam, at quas.", sort:1,id: 13, name: "Shoes", pic: "../תמונות/נעל ספורט שחורה.avif", price: 222 },
    {Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero error sapiente velit quis natus, possimus, quaerat asperiores voluptate ab nihil cum quos corrupti unde earum doloribus minus? Veniam, at quas.",sort:2, id: 14, name: "Shoes", pic: "../תמונות/נעל ספורט שחורה.avif", price: 222 },
    {Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero error sapiente velit quis natus, possimus, quaerat asperiores voluptate ab nihil cum quos corrupti unde earum doloribus minus? Veniam, at quas.",sort:2, id: 15, name: "Shoes", pic: "../תמונות/נעל ספורט שחורה.avif", price: 222 },
    {Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero error sapiente velit quis natus, possimus, quaerat asperiores voluptate ab nihil cum quos corrupti unde earum doloribus minus? Veniam, at quas.",sort:1, id: 16, name: "Shoes", pic: "../תמונות/נעל ספורט שחורה.avif", price: 222 },
   
 
];
//sessionStorage - העתקת כל הערכים הנמצאים ב
let arrsal = JSON.parse(sessionStorage.getItem("data_sal")) || []; 
  const f2=(myid)=>{   
    let obj=arr.find(x=>x.id==myid)
    let existingItem = arrsal.find(item => item.id === obj.id);
    //בדיקה האם קיים כזה obj כבר 
    if (existingItem) {
       //COUNT- אם כן אז העלת ה 
        existingItem.count++;
        alert(obj.name + " Added other to cart");
    } else {
        //אם לא אז הצבתו במערך
        obj.count = 1;
        arrsal.push(obj);
        alert(obj.name + " Added to cart");
    }
    //sessionStorage -הצבת המערך לאחר השינוי ב
    sessionStorage.setItem("data_sal",JSON.stringify(arrsal) )
    }

// פונקציה ליצירת DIV עבור כל מוצר והוספתו ל-HTML
const createProductDiv = (x,y,z) => {
    let productContainer = document.getElementById('products-container');
    //לבטל את הפעלת הפונקציות שכבר עשה (לנקות את כל השטח)
    productContainer.innerHTML="";
    arr.forEach((product,i )=> { 
    if(product.sort==x||product.sort==y||product.sort==z){
    
    // יצירת דיב חדש למוצר
    let productDiv = document.createElement('div');
    productDiv.classList.add('product');

    // הוספת תמונה לדיב המוצר
    let img = document.createElement('img');
    img.src = product.pic;
    productDiv.appendChild(img);

    // הוספת שם המוצר
    let name = document.createElement('p');
    name.textContent = `Name: ${product.name}`;
    productDiv.appendChild(name);

    // הוספת מחיר המוצר
    let price = document.createElement('p');
    price.textContent = `Price: ${product.price}`;
    productDiv.appendChild(price);

    // יצירת קישור לפרטים נוספים
    let detailsLink = document.createElement('a');
    detailsLink.href = `../HTML/addInfor.html?id=${product.id}`;
    detailsLink.textContent = 'Further Details';
    detailsLink.classList.add('details-link');
    productDiv.appendChild(detailsLink);

    // יצירת כפתור להוספה לעגלת קניות
    let addToCartBtn = document.createElement('button');
   
    addToCartBtn.textContent = 'Add to Cart';
    addToCartBtn.classList.add('add-to-cart-btn');
    productDiv.appendChild(addToCartBtn);
    addToCartBtn.addEventListener('click', () => f2(product.id));
    // הוספת המוצר למסגרת המוצרים ב-HTML
    productContainer.appendChild(productDiv);
    // הוספת אירוע ללחיצה על הקישור לפרטים נוספים
    detailsLink.addEventListener('click', (event) => {
        event.preventDefault();
        sessionStorage.setItem('selectedItem', JSON.stringify(product));
        window.location.href = detailsLink.href;
    })} });
}
// קוד נוסף להצגת נתוני משתמשן
let str = sessionStorage.getItem("currentUser");
if (str) {
    let userInfo = JSON.parse(str);
    let userInfoDiv = document.querySelector(".user-info");
    
    userInfoDiv.innerHTML += userInfo.name+"<br>";
    userInfoDiv.innerHTML += userInfo.password;
}
//הכל
createProductDiv(1,2,3);
//רק 1
//createProductDiv(1);
//רק2
//createProductDiv(2);

//פונקציה של הוספה לסל

  