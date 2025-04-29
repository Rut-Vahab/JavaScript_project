let str = sessionStorage.getItem("selectedItem");
let selectedItem = JSON.parse(str);
let productInfo = document.getElementById('product-info');
productInfo.innerHTML = `<h2>More Details</h2>
    <p>${selectedItem.name}</p>
    <p>ID: ${selectedItem.id}</p>
    <p>Description: ${selectedItem.Description}</p>
    <p>Price: $${selectedItem.price}</p>
`;


let productImage = document.getElementById('product-image');
productImage.src = selectedItem.pic;


function zoomIn() {
    let currentScale = parseFloat(productImage.style.transform.replace('scale(', '').replace(')', ''));
    if (!currentScale) currentScale = 1.0;
    productImage.style.transform = `scale(${currentScale + 0.2})`;
}


function zoomOut() {
    let currentScale = parseFloat(productImage.style.transform.replace('scale(', '').replace(')', ''));
    if (!currentScale) currentScale = 1.0;
    if (currentScale > 0.2) {
        productImage.style.transform = `scale(${currentScale - 0.2})`;
    }
}