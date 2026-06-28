document.addEventListener('DOMContentLoaded', () => {
    renderMenuProducts("all");

    const filterButtons = document.querySelectorAll(".btn-filter");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelector(".btn-filter.active").classList.remove("active");
            e.target.classList.add("active");

            const selectedCategory = e.target.getAttribute("data-category");
            
            renderMenuProducts(selectedCategory);
        });
    });
});

function renderMenuProducts(categoryFilter = "all") {
    const gridContainer = document.querySelector(".discount-card");
    if (!gridContainer) return; // Exit if container not found

    gridContainer.innerHTML = "";

    const savedProducts = localStorage.getItem('restaurant_products_json');
    
    const actualProducts = savedProducts ? JSON.parse(savedProducts) : productsData;

    const filtered = categoryFilter.toLowerCase() === "all" 
        ? actualProducts 
        : actualProducts.filter(p => p.category.toLowerCase() === categoryFilter.toLowerCase());

    if (filtered.length === 0) {
        gridContainer.innerHTML = `<div class="col-12 text-center my-5 text-muted fs-5">No items found in this category.</div>`;
        return;
    }

    gridContainer.innerHTML = filtered.map(p => `
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
}