document.getElementById('menu-search-input')?.addEventListener('input', (e) => {
    const text = e.target.value.toLowerCase().trim();
    
    const data = JSON.parse(localStorage.getItem('restaurant_products_json')) || productsData;
    
    const result = data.filter(p => p.name.toLowerCase().includes(text));

    const gridContainer = document.querySelector(".discount-card");
    if (!gridContainer) return; // Exit if container not found
    
    gridContainer.innerHTML = "";
    
    if (result.length === 0) {
        gridContainer.innerHTML = `<div class="col-12 text-center my-5 text-muted fs-5">No items found.. 🔍</div>`;
        return;
    }

    gridContainer.innerHTML = result.map(p => `
        <div class="dis">
            <div class="disbg"></div>
            <div class="details">
                <h4>${p.name}</h4>
                <p>${p.msg || ''}</p>
                <p>the price <span>${p.price} EGP</span></p>
                <button class="add-to-cart-btn" data-id="${p.id}">Give me that</button>
            </div>
        </div>
    `).join('');
});