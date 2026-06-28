let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    const savedCart = localStorage.getItem('restaurant_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        renderCartUI();
    }
});

document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('add-to-cart-btn')) {
        e.preventDefault();
        const productId = parseInt(e.target.getAttribute('data-id'));
        
        if (typeof productsData !== 'undefined') {
            const product = productsData.find(item => item.id === productId);
            if (product) {
                addToCart(product);
            }
        }
    }
});

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    renderCartUI();
    
    const cartElement = document.getElementById('offcanvasCart');
    if (cartElement) {
        const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(cartElement);
        bsOffcanvas.show();
    }
}

function saveCart() {
    localStorage.setItem('restaurant_cart', JSON.stringify(cart));
}

function renderCartUI() {
    const wrapper = document.getElementById('cart-items-wrapper');
    const countBadge = document.getElementById('cart-count');
    const totalAmount = document.getElementById('cart-total');
    
    if (!wrapper) return;
    wrapper.innerHTML = '';
    
    let totalPrice = 0;
    let totalItemsCount = 0;

    if (cart.length === 0) {
        wrapper.innerHTML = '<p id="empty-msg" class="text-center text-muted mt-5">The cart is empty.</p>';
        if (countBadge) countBadge.innerText = '0';
        if (totalAmount) totalAmount.innerText = '0 EGP';
        return;
    }

    cart.forEach((item, index) => {
        totalPrice += item.price * item.quantity;
        totalItemsCount += item.quantity;

        const row = document.createElement('div');
        row.className = 'd-flex justify-content-between align-items-center mb-3 p-2 border-bottom';
        row.innerHTML = `
            <div style="flex: 1; text-align: right; direction: rtl;">
                <h6 class="m-0 fw-bold" style="font-size: 14px;">${item.name}</h6>
                <small class="text-success fw-bold">${item.price} EGP</small>
            </div>
            <div class="d-flex align-items-center gap-2 mx-3">
                <button class="btn btn-sm btn-outline-secondary rounded-circle px-2 py-0 fw-bold" onclick="modifyQty(${index}, -1)">-</button>
                <span class="fw-bold" style="font-size: 14px;">${item.quantity}</span>
                <button class="btn btn-sm btn-outline-secondary rounded-circle px-2 py-0 fw-bold" onclick="modifyQty(${index}, 1)">+</button>
            </div>
            <div>
                <button class="btn btn-sm text-danger border-0 p-1" onclick="deleteItem(${index})">
                    <i class="bi bi-trash3 fs-5" style="color: red;"></i>
                </button>
            </div>
        `;
        wrapper.appendChild(row);
    });

    if (countBadge) countBadge.innerText = totalItemsCount;
    if (totalAmount) totalAmount.innerText = totalPrice + ' EGP';
}

window.modifyQty = function(index, amount) {
    cart[index].quantity += amount;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    saveCart();
    renderCartUI();
};

window.deleteItem = function(index) {
    cart.splice(index, 1);
    saveCart();
    renderCartUI();
};

document.querySelector('#offcanvasCart .btn-danger').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('العربة فارغة حالياً! أضف بعض المنتجات أولاً.');
        return;
    }
    localStorage.setItem('restaurant_cart', JSON.stringify(cart));
    window.location.href = "pages/checkout.html"; 
});