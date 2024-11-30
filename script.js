// مصفوفة لتخزين العناصر المضافة إلى السلة
let cart = [];

// وظيفة لإضافة منتج إلى السلة
function addToCart() {
    // إضافة منتج إلى السلة (يمكنك تخصيص هذا الجزء حسب المنتج)
    let productName = event.target.previousElementSibling.previousElementSibling.innerText;
    let productPrice = event.target.previousElementSibling.innerText;

    let item = { name: productName, price: productPrice };
    cart.push(item);

    updateCart();
}

// تحديث عرض السلة
function updateCart() {
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ""; // مسح المحتويات السابقة للسلة

    // إضافة العناصر الموجودة في السلة إلى واجهة المستخدم
    cart.forEach(item => {
        let listItem = document.createElement('li');
        listItem.innerText = `${item.name} - ${item.price}`;
        cartItems.appendChild(listItem);
    });

    // عرض عدد العناصر في السلة
    if (cart.length > 0) {
        document.getElementById('checkout').style.display = 'block';
    } else {
        document.getElementById('checkout').style.display = 'none';
    }
}
