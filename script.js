// ==================== MENU DATA ====================
const menuItems = [
    { id: 1, name: "Cachorro Quente à Moda Antiga", price: 7.00, category: "lanches", desc: "Pão, carne moída, salsicha, frango, batata palha, vinagrete, milho verde e ervilha", icon: "🌭", badge: "Mais Vendido", img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600" },
    { id: 2, name: "Cachorro Quente do Edu", price: 9.00, category: "lanches", desc: "Pão, carne de sol ou carne de sol na nata, salsicha, frango, batata palha, vinagrete, milho verde e ervilha", icon: "🌭", badge: "Especial", img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600" },
    { id: 3, name: "Bauru Especial", price: 10.00, category: "lanches", desc: "Pão francês, queijo, presunto, tomate e orégano. Um clássico irresistível!", icon: "🥪", badge: null, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600" },
    { id: 4, name: "X-Frango", price: 13.00, category: "lanches", desc: "Hambúrguer de frango grelhado com queijo, alface, tomate e maionese especial.", icon: "🍔", badge: "Novo", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600" },
    { id: 5, name: "Bauru Artesanal", price: 17.99, category: "lanches", desc: "Pão artesanal, carne suculenta, queijo derretido, cebola caramelizada e molho especial.", icon: "🥪", badge: "Premium", img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600" },
    { id: 6, name: "Pastéis (unidade)", price: 10.00, category: "pasteis", desc: "Frango c/ queijo, frango, frango c/ catupiry ou cheddar, pizza, queijo, carne de sol, nordestino", icon: "🥟", badge: "Mais Vendido", img: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=600" },
    { id: 7, name: "Pastel da Casa", price: 13.00, category: "pasteis", desc: "Carne, frango, vinagrete, milho, ervilha, queijo e presunto. O pastel mais completo!", icon: "🥟", badge: "Especial", img: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=600" },
    { id: 8, name: "Tapioca Recheada", price: 10.00, category: "tapiocas", desc: "Frango desfiado, frango com catupiry ou carne de sol. Tapioca fresquinha e saborosa!", icon: "🫓", badge: null, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600" },
    { id: 9, name: "Tapioca da Casa", price: 13.00, category: "tapiocas", desc: "Carne, frango, vinagrete, milho, ervilha, queijo e presunto. A mais completa!", icon: "🫓", badge: "Especial", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600" },
    { id: 10, name: "Sopa de Costela", price: 10.00, category: "sopas", desc: "Costela desfiada com legumes frescos em caldo temperado. Conforto em cada colherada!", icon: "🍲", badge: null, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600" },
    { id: 11, name: "Sopa de Charque", price: 12.00, category: "sopas", desc: "Charque desfiado com mandioca e temperos nordestinos. Sabor autêntico!", icon: "🍲", badge: null, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600" },
    { id: 12, name: "Cuscuz Recheado + Café", price: 15.00, category: "sopas", desc: "Carne ou frango, vinagrete, milho, ervilha, queijo + café quentinho!", icon: "🥘", badge: "Combo", img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600" },
    { id: 13, name: "Cuscuz Recheado", price: 13.00, category: "sopas", desc: "Carne ou frango, vinagrete, milho, ervilha, queijo. O clássico cuscuz nordestino!", icon: "🥘", badge: null, img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600" },
    { id: 14, name: "Batata Frita Pequena", price: 8.00, category: "acompanhamentos", desc: "Batatas crocantes e douradas. O acompanhamento perfeito!", icon: "🍟", badge: null, img: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=600" },
    { id: 15, name: "Batata Frita Grande", price: 12.00, category: "acompanhamentos", desc: "Porção grande de batatas crocantes. Ideal para dividir!", icon: "🍟", badge: "Família", img: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=600" },
    { id: 16, name: "Coca Cola Litro", price: 10.00, category: "bebidas", desc: "Coca Cola ou Coca Cola Zero. Refrescante e geladinha!", icon: "🥤", badge: null, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600" },
    { id: 17, name: "Refrigerante Litro", price: 8.00, category: "bebidas", desc: "Guaraná, Sukita Laranja, Pepsi. Variedade para todos os gostos!", icon: "🥤", badge: null, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600" },
    { id: 18, name: "Refrigerante Lata", price: 5.00, category: "bebidas", desc: "Guaraná Kuat, Fanta Laranja, Pepsi, Coca Cola. Lata geladinha!", icon: "🥤", badge: null, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600" },
    { id: 19, name: "Suco 300ml", price: 4.00, category: "bebidas", desc: "Goiaba, acerola, abacaxi, manga, cajú, cajá. Sucos naturais!", icon: "🧃", badge: null, img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600" },
    { id: 20, name: "Suco 2 Sabores 300ml", price: 5.00, category: "bebidas", desc: "Morango ou maracujá. Dois sucos pelo preço de um!", icon: "🧃", badge: null, img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600" },
    { id: 21, name: "Vitamina", price: 6.00, category: "bebidas", desc: "Goiaba, acerola, abacaxi, manga, maracujá, cajú, cajá, laranja, morango", icon: "🥛", badge: null, img: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600" },
    { id: 22, name: "Vitamina de Coco Verde", price: 7.00, category: "bebidas", desc: "Água de coco natural com polpa de coco. Hidratação tropical!", icon: "🥥", badge: "Premium", img: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600" },
    { id: 23, name: "Água 500ml", price: 2.50, category: "bebidas", desc: "Água mineral natural. Sempre gelada!", icon: "💧", badge: null, img: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600" },
    { id: 24, name: "Água c/ Gás 500ml", price: 3.50, category: "bebidas", desc: "Água mineral com gás. Perfeita para acompanhar!", icon: "💧", badge: null, img: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600" }
];

// ==================== STATE ====================
let cart = [];
let deliveryType = 'delivery';
const DELIVERY_FEE = 5.00;

// ==================== RENDER MENU ====================
function renderMenu(category = 'todos') {
    const container = document.getElementById('menuGrid');
    container.innerHTML = '';

    const filtered = category === 'todos' ? menuItems : menuItems.filter(item => item.category === category);

    filtered.forEach(item => {
        const badgeClass = item.badge === 'Premium' || item.badge === 'Especial' || item.badge === 'Combo' ? 'destaque' : '';
        const badgeHtml = item.badge ? `<span class="menu-badge ${badgeClass}">${item.badge}</span>` : '';

        const card = document.createElement('div');
        card.className = 'menu-item';
        card.dataset.category = item.category;
        card.innerHTML = `
        <div class="menu-item-img">
            <img src="${item.img}" alt="${item.name}" loading="lazy">
            ${badgeHtml}
        </div>
        <div class="menu-item-content">
            <div class="menu-item-header">
                <h4>${item.name}</h4>
                <span class="price">R$ ${item.price.toFixed(2).replace('.', ',')}</span>
            </div>
            <p class="menu-desc">${item.desc}</p>
            <button type="button" class="add-to-cart" onclick="addToCart(${item.id}, this)">
                <i class="fas fa-plus"></i> Adicionar ao Pedido
            </button>
        </div>
    `;
        container.appendChild(card);
    });
}

// ==================== FILTER MENU ====================
function filterMenu(category, btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(category);
}

function filterAndScroll(category) {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        if (tab.textContent.toLowerCase().includes(category) ||
            (category === 'acai' && tab.textContent.includes('Açaí'))) {
            tab.click();
        }
    });
    document.getElementById('cardapio').scrollIntoView({ behavior: 'smooth' });
}

// ==================== CART FUNCTIONS ====================
function isMobile() {
    return window.innerWidth <= 768;
}

function addToCart(id, btn) {
    const item = menuItems.find(i => i.id === id);
    const existing = cart.find(i => i.id === id);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...item, qty: 1 });
    }

    updateCart();
    showToast(`${item.name} adicionado!`);

    if (btn) {
        btn.classList.add('added');
        btn.innerHTML = '<i class="fas fa-check"></i> Adicionado!';
        setTimeout(() => {
            btn.classList.remove('added');
            btn.innerHTML = '<i class="fas fa-plus"></i> Adicionar ao Pedido';
        }, 1500);
    }
}

function addAcaiToCart(name, price) {
    const existing = cart.find(i => i.name === name);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ id: Date.now(), name: name, price: price, qty: 1, icon: '🫐' });
    }
    updateCart();
    showToast(`${name} adicionado!`);
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
        updateCart();
    }
}

function removeItem(id) {
    cart = cart.filter(i => i.id !== id);
    updateCart();
    showToast('Item removido');
}

// ==================== UPDATE CART ====================
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartBadge = document.getElementById('cartBadge');
    const floatingCartBtn = document.getElementById('floatingCartBtn');
    const floatingCartBadge = document.getElementById('floatingCartBadge');
    const subtotalEl = document.getElementById('subtotal');
    const totalEl = document.getElementById('totalPrice');
    const deliveryRow = document.getElementById('deliveryRow');
    const deliveryFeeEl = document.getElementById('deliveryFee');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const deliverySection = document.querySelector('.delivery-section');
    const cartTotals = document.querySelector('.cart-totals');

    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

    cartBadge.textContent = totalItems;
    if (floatingCartBadge) floatingCartBadge.textContent = totalItems;

    if (cart.length === 0) {
        if (floatingCartBtn) floatingCartBtn.classList.remove('show');

        cartItems.innerHTML = `
        <div class="cart-empty">
            <i class="fas fa-shopping-basket"></i>
            <p>Seu carrinho está vazio</p>
            <span style="font-size: 0.85rem; color: var(--laranja-claro);">Adicione itens deliciosos!</span>
        </div>
        `;
        checkoutBtn.disabled = true;

        if (deliverySection) deliverySection.style.display = 'none';
        if (cartTotals) cartTotals.style.display = 'none';

    } else {
        if (floatingCartBtn) floatingCartBtn.classList.add('show');

        cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-header">
                <span class="cart-item-name">${item.icon || '🍽️'} ${item.name}</span>
                <span class="cart-item-price">R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}</span>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="changeQty(${item.id}, -1)">
                    <i class="fas fa-minus"></i>
                </button>
                <span class="cart-item-qty">${item.qty}</span>
                <button class="qty-btn" onclick="changeQty(${item.id}, 1)">
                    <i class="fas fa-plus"></i>
                </button>
                <button class="remove-btn" onclick="removeItem(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
        `).join('');

        checkoutBtn.disabled = false;

        if (deliverySection) deliverySection.style.display = 'block';
        if (cartTotals) cartTotals.style.display = 'block';
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const deliveryFee = (deliveryType === 'delivery' && cart.length > 0) ? DELIVERY_FEE : 0;
    const total = subtotal + deliveryFee;

    subtotalEl.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;

    if (deliveryType === 'delivery' && cart.length > 0) {
        deliveryRow.style.display = 'flex';
        deliveryFeeEl.textContent = `R$ ${deliveryFee.toFixed(2).replace('.', ',')}`;
    } else {
        deliveryRow.style.display = 'none';
    }

    totalEl.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

// ==================== DELIVERY OPTIONS ====================
function selectDelivery(type, el) {
    deliveryType = type;
    document.querySelectorAll('.delivery-option').forEach(opt => opt.classList.remove('selected'));
    el.classList.add('selected');
    updateCart();
}

// ==================== TOGGLE CART ====================
function toggleCart() {
    document.getElementById('cartOverlay').classList.toggle('active');
    document.getElementById('cartSidebar').classList.toggle('active');
}

// ==================== TOAST ====================
function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMsg').textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// ==================== CHECKOUT ====================
function checkout() {
    if (cart.length === 0) return;

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const deliveryFee = deliveryType === 'delivery' ? DELIVERY_FEE : 0;
    const total = subtotal + deliveryFee;

    const deliveryLabels = {
        delivery: '🛵 Delivery',
        pickup: '🏪 Retirar no Local',
        dinein: '🍽️ Comer no Local'
    };

    let msg = `*🍔 NOVO PEDIDO - EDU LANCHES*\n\n`;
    msg += `*Itens:*\n`;
    cart.forEach(item => {
        msg += `• ${item.name} x${item.qty} = R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}\n`;
    });
    msg += `\n*Forma de recebimento:* ${deliveryLabels[deliveryType]}\n`;
    if (deliveryType === 'delivery') {
        msg += `*Taxa de entrega:* R$ ${deliveryFee.toFixed(2).replace('.', ',')}\n`;
    }
    msg += `\n*Total:* R$ ${total.toFixed(2).replace('.', ',')}\n\n`;
    msg += `Por favor, confirmar meu pedido! 🙏`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/5584996722829?text=${encoded}`, '_blank');
}

// ==================== NAVBAR SCROLL ====================
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ==================== SCROLL REVEAL ====================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ==================== MOBILE MENU ====================
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// ==================== INIT ====================
renderMenu();