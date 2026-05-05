// ==========================================================================
// CONFIGURAÇÕES GERAIS
// ==========================================================================
let cart = [];
const WPP_NUMBER = "5584992061776";

// Aqui estão os adicionais com o preço de R$ 2,50 que você pediu
const ingredientes = {
    frutas: ["Morango", "Banana", "Kiwi", "Manga", "Uva"],
    acompanhamentos: ["Leite Ninho", "Paçoca", "Granola", "Amendoim", "Chocoball", "Sucrilhos", "Ovomaltine"],
    caldas: ["Leite Condensado", "Morango", "Chocolate", "Maracujá", "Mel"],
    adicionais: [
        { nome: "Nutella Extra", preco: 2.50 },
        { nome: "Creme de Avelã", preco: 2.50 },
        { nome: "Gotas de Chocolate", preco: 2.50 },
        { nome: "Morango Extra", preco: 2.50 },
        { nome: "Kiwi Extra", preco: 2.50 }
    ]
};

let currentAcai = null;
let taxaEntrega = 5.00;
let tipoEntrega = 'delivery';

// ==========================================================================
// LÓGICA DO MODAL DE MONTAGEM E ADICIONAIS
// ==========================================================================
function openAcaiModal(nome, precoBase, maxAcomp, maxFruta, maxCalda) {
    currentAcai = {
        nome: nome,
        precoBase: precoBase,
        precoAdicionais: 0, // Inicia os custos extras zerados
        selecionados: { acomp: [], fruta: [], calda: [], adicionaisExtras: [] }
    };

    document.getElementById('modalTitle').innerText = `Montando ${nome}`;
    atualizarPrecoModal();

    document.getElementById('modalBody').innerHTML = '';
    document.getElementById('adicionaisBody').innerHTML = '';

    // Renderiza opções normais (gratuitas dentro do limite)
    renderOptions('fruta', ingredientes.frutas, maxFruta, 'Frutas Inclusas');
    renderOptions('acomp', ingredientes.acompanhamentos, maxAcomp, 'Acompanhamentos');
    renderOptions('calda', ingredientes.caldas, maxCalda, 'Caldas');

    // Renderiza opções pagas (Adicionais)
    renderAdicionaisPagos();

    document.getElementById('acaiModal').classList.add('active');
}

function closeAcaiModal() {
    document.getElementById('acaiModal').classList.remove('active');
    currentAcai = null;
}

function atualizarPrecoModal() {
    const totalCopo = currentAcai.precoBase + currentAcai.precoAdicionais;
    document.getElementById('modalPrice').innerText = `R$ ${totalCopo.toFixed(2).replace('.', ',')}`;
}

function renderOptions(categoriaKey, lista, limite, tituloDisplay) {
    const container = document.getElementById('modalBody');
    let html = `
        <div class="option-group">
            <h4>${tituloDisplay} <span class="option-limit">Escolha até ${limite}</span></h4>
            ${lista.map(item => `
                <label class="checkbox-label">
                    <input type="checkbox" name="${categoriaKey}" value="${item}" onchange="handleSelection(this, '${categoriaKey}', ${limite})">
                    <span>${item}</span>
                </label>
            `).join('')}
        </div>
    `;
    container.innerHTML += html;
}

function renderAdicionaisPagos() {
    const container = document.getElementById('adicionaisBody');
    let html = `
        <div class="option-group" style="margin-top: 15px;">
            <h4>Adicionais Extras <span class="option-limit" style="color:var(--verde-destaque)">R$ 2,50 cada</span></h4>
            ${ingredientes.adicionais.map(item => `
                <label class="checkbox-label adicional-label">
                    <input type="checkbox" name="adicional" value="${item.nome}" onchange="handleAdicional(this, ${item.preco})">
                    <span>${item.nome}</span>
                    <span class="adicional-preco">+ R$ ${item.preco.toFixed(2).replace('.', ',')}</span>
                </label>
            `).join('')}
        </div>
    `;
    container.innerHTML = html;
}

// Controla os limites dos itens normais
function handleSelection(checkbox, categoria, limite) {
    const marcados = document.querySelectorAll(`input[name="${categoria}"]:checked`);
    currentAcai.selecionados[categoria] = Array.from(marcados).map(cb => cb.value);

    const todosDaCategoria = document.querySelectorAll(`input[name="${categoria}"]`);
    if (marcados.length >= limite) {
        todosDaCategoria.forEach(cb => { if (!cb.checked) cb.disabled = true; });
    } else {
        todosDaCategoria.forEach(cb => cb.disabled = false);
    }
}

// Controla os itens pagos extras (Soma e subtrai o valor)
function handleAdicional(checkbox, preco) {
    if (checkbox.checked) {
        currentAcai.precoAdicionais += preco;
        currentAcai.selecionados.adicionaisExtras.push(checkbox.value);
    } else {
        currentAcai.precoAdicionais -= preco;
        currentAcai.selecionados.adicionaisExtras = currentAcai.selecionados.adicionaisExtras.filter(item => item !== checkbox.value);
    }
    atualizarPrecoModal();
}

// ==========================================================================
// CARRINHO E ENTREGA
// ==========================================================================
function toggleCart() {
    document.getElementById('cartSidebar').classList.toggle('active');
    document.getElementById('cartOverlay').classList.toggle('active');
}

function addCustomAcaiToCart() {
    let detalhesStr = `- Frutas: ${currentAcai.selecionados.fruta.join(', ') || 'Nenhuma'}\n- Acomp: ${currentAcai.selecionados.acomp.join(', ') || 'Nenhum'}\n- Caldas: ${currentAcai.selecionados.calda.join(', ') || 'Nenhuma'}`;

    if (currentAcai.selecionados.adicionaisExtras.length > 0) {
        detalhesStr += `\n➕ Adicionais (Pagos): ${currentAcai.selecionados.adicionaisExtras.join(', ')}`;
    }

    cart.push({
        id: Date.now(),
        nome: `${currentAcai.nome}\n${detalhesStr}`,
        preco: currentAcai.precoBase + currentAcai.precoAdicionais,
        quantidade: 1
    });

    closeAcaiModal();
    updateCart();
    showToast("Açaí adicionado com sucesso!");
}

function selectDelivery(tipo, element) {
    document.querySelectorAll('.delivery-option').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');

    tipoEntrega = tipo;
    if (tipo === 'delivery') {
        taxaEntrega = 5.00;
        document.getElementById('deliveryFee').innerText = `R$ ${taxaEntrega.toFixed(2).replace('.', ',')}`;
    } else {
        taxaEntrega = 0.00;
        document.getElementById('deliveryFee').innerText = 'Grátis';
    }
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    document.getElementById('cartBadge').innerText = cart.length;
    document.getElementById('mobileCartBadge').innerText = cart.length; // Atualiza a bolinha do celular

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = `
            <div class="cart-empty" style="text-align:center; padding: 20px; color:#666;">
                <i class="fas fa-shopping-basket" style="font-size: 3rem; margin-bottom:10px; color:#ddd;"></i>
                <p>Seu carrinho está vazio</p>
            </div>`;
        document.getElementById('checkoutBtn').disabled = true;
        document.querySelector('.cart-totals').style.display = 'none';
        document.querySelector('.delivery-section').style.display = 'none';
        return;
    }

    document.querySelector('.cart-totals').style.display = 'block';
    document.querySelector('.delivery-section').style.display = 'block';

    let total = 0;
    cartItemsDiv.innerHTML = cart.map((item, index) => {
        total += item.preco * item.quantidade;
        return `
            <div style="border-bottom: 1px solid #eee; padding: 15px 0;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <p style="font-weight:bold; color:var(--roxo-principal);">${item.quantidade}x ${item.nome.split('\n')[0]}</p>
                    <span style="font-weight:bold; color:var(--verde-destaque);">R$ ${(item.preco * item.quantidade).toFixed(2).replace('.', ',')}</span>
                </div>
                <p style="font-size: 0.85rem; color: #666; white-space: pre-line; margin: 8px 0;">${item.nome.substring(item.nome.indexOf('\n') + 1)}</p>
                <button onclick="removerItem(${index})" style="background:none; color:#e74c3c; border:none; cursor:pointer; font-size:0.9rem;"><i class="fas fa-trash"></i> Remover</button>
            </div>
        `;
    }).join('');

    document.getElementById('subtotal').innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
    document.getElementById('totalPrice').innerText = `R$ ${(total + taxaEntrega).toFixed(2).replace('.', ',')}`;
    document.getElementById('checkoutBtn').disabled = false;
}

function removerItem(index) {
    cart.splice(index, 1);
    updateCart();
}

// ==========================================================================
// CHECKOUT WHATSAPP
// ==========================================================================
function checkout() {
    if (cart.length === 0) return;
    let totalPedido = 0;
    let textoMsg = "Olá, Açaí Delicia26! 💜 Gostaria de fazer um pedido:%0A%0A";

    cart.forEach(item => {
        totalPedido += item.preco * item.quantidade;
        let detalhesFormatados = item.nome.replace(/\n/g, '%0A');
        textoMsg += `*${item.quantidade}x ${detalhesFormatados}* - R$ ${(item.preco * item.quantidade).toFixed(2).replace('.', ',')}%0A%0A`;
    });

    totalPedido += taxaEntrega;
    textoMsg += `*Subtotal:* R$ ${(totalPedido - taxaEntrega).toFixed(2).replace('.', ',')}%0A`;

    if (tipoEntrega === 'delivery') {
        textoMsg += `*Taxa de Entrega:* R$ ${taxaEntrega.toFixed(2).replace('.', ',')}%0A`;
        textoMsg += `*Tipo:* Delivery 🏍️%0A`;
    } else {
        textoMsg += `*Tipo:* Retirar no Local 🛍️%0A`;
    }

    textoMsg += `*TOTAL:* R$ ${totalPedido.toFixed(2).replace('.', ',')}%0A%0A`;
    textoMsg += tipoEntrega === 'delivery' ? "Qual o tempo estimado para entrega e como passo meu endereço?" : "Em quanto tempo posso passar para retirar?";

    window.open(`https://wa.me/${WPP_NUMBER}?text=${textoMsg}`, '_blank');
}

// ==========================================================================
// UI EXTRAS (MENU E TOAST)
// ==========================================================================
function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMsg').innerText = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.style.display === 'flex' && navLinks.style.flexDirection === 'column') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px'; navLinks.style.left = '0'; navLinks.style.width = '100%';
        navLinks.style.background = '#fff'; navLinks.style.padding = '20px';
    }
}