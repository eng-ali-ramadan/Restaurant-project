let localProducts = [];
document.addEventListener('DOMContentLoaded', () => {
    const savedProducts = localStorage.getItem('restaurant_products_json');
    
    if (savedProducts) {
        localProducts = JSON.parse(savedProducts);
        renderDashboardTable();
    } else {
        fetch('assets/js/products.json') // تأكد من مسار الملف عندك صح
            .then(response => response.json())
            .then(data => {
                localProducts = data;
                saveProductsToStorage(); 
                renderDashboardTable();
            })
            .catch(error => {
                console.error("خطأ في قراءة ملف الـ JSON الافتراضي:", error);
                if (typeof productsData !== 'undefined') {
                    localProducts = productsData;
                    saveProductsToStorage();
                    renderDashboardTable();
                }
            });
    }

    document.getElementById('product-form').addEventListener('submit', handleAddProduct);

});

function renderDashboardTable() {
    const tbody = document.getElementById('dashboard-table-body');
    const countSpan = document.getElementById('total-products-count');
    if (!tbody) return;

    tbody.innerHTML = '';
    countSpan.innerText = localProducts.length;

    if (localProducts.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="text-center text-muted py-4">لا توجد منتجات بالمنيو حالياً.</td></tr>`;
        return;
    }

    localProducts.forEach(p => {
        tbody.innerHTML += `
            <tr>
                <td><div class="disbg"></div></td>
                <td class="fw-bold">${p.name}</td>
                <td><span class="badge bg-secondary rounded-pill px-2 py-1">${p.category}</span></td>
                <td class="text-success fw-bold">${p.price} EGP</td>
                <td class="text-center">
                    <button class="btn btn-sm btn-outline-danger" onclick="deleteProduct(${p.id})">
                        <i class="bi bi-trash"></i> delete
                    </button>
                </td>
            </tr>
        `;
    });
}

function handleAddProduct(e) {
    e.preventDefault();

    const name = document.getElementById('product-name').value.trim();
    const price = parseFloat(document.getElementById('product-price').value);
    const category = document.getElementById('product-category').value;
    const imageInput = document.getElementById('product-image');

    if (!name || isNaN(price) || !category || !imageInput.files[0]) {
        alert('الرجاء ملء كافة الحقول الأساسية واختيار صورة للمنتج.');
        return;
    }

    const fileName = imageInput.files[0].name;
    
    const fullImagePath = `assets/images/${fileName}`;

    const newId = localProducts.length > 0 ? Math.max(...localProducts.map(p => p.id)) + 1 : 1;
    
    localProducts.push({ 
        id: newId, 
        category: category, 
        price: price, 
        discount: "", 
        name: name, 
        image: fullImagePath, 
        msg: "" 
    });

    saveProductsToStorage();
    renderDashboardTable();
    document.getElementById('product-form').reset();
}

window.deleteProduct = function(id) {
    if (confirm('هل أنت متأكد من رغبتك في حذف هذا المنتج نهائياً؟')) {
        localProducts = localProducts.filter(p => p.id !== id);
        saveProductsToStorage();
        renderDashboardTable();
    }
};

function saveProductsToStorage() {
    localStorage.setItem('restaurant_products_json', JSON.stringify(localProducts));
}

