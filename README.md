<div align="center">

# 🫐 AÇAITERIA JJTECH

### **Sistema de Pedidos Online (Em Desenvolvimento)**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

![Em Desenvolvimento](https://img.shields.io/badge/Status-🚧_Em_Desenvolvimento-F4A900?style=for-the-badge)
![Versão](https://img.shields.io/badge/v0.1.0—Alpha-6c2b8c?style=for-the-badge)
![Responsivo](https://img.shields.io/badge/Responsivo-✅_Mobile_First-25D366?style=for-the-badge)

---

**Aplicação web em desenvolvimento para automação de pedidos de açaiteria.**
Clientes montam seus copos e barcas de forma 100% autônoma e enviam o pedido formatado diretamente para o WhatsApp da loja.

> ⚠️ **Projeto em fase de desenvolvimento.** Funcionalidades podem estar incompletas ou sofrer alterações.

[📱 WhatsApp](https://wa.me/5584996970693) · [📸 Instagram](https://instagram.com/johnyysantoss)

</div>

---

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Funcionalidades](#-funcionalidades)
- [Cardápio](#-cardápio)
- [Tecnologias](#-tecnologias)
- [Arquitetura](#-arquitetura)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Rodar](#-como-rodar)
- [Configuração Firebase](#-configuração-firebase)
- [Screenshots](#-screenshots)
- [Autor](#-autor)

---

## 🎯 Visão Geral

O **Açaiteria JJTECH** é um sistema web em desenvolvimento que visa eliminar a necessidade de aplicativo nativo ou plataforma de delivery cara. Toda a lógica de negócio roda no navegador do cliente (**client-side**), enquanto o WhatsApp funciona como "backend" para recebimento dos pedidos.

```
Cliente monta açaí → Carrinho calcula totais → WhatsApp envia pedido formatado → Loja recebe
```

> 🚧 **Status:** Projeto em fase alpha. Algumas funcionalidades podem estar incompletas ou passando por ajustes.

---

## ⚡ Funcionalidades

<details>
<summary><strong>📱 Página Principal (index.html)</strong></summary>

<br>

| Funcionalidade | Descrição |
|:-:|:--|
| 🎨 **Montador Inteligente** | Modal dinâmico que adapta opções conforme o tamanho escolhido |
| 💰 **Adicionais Pagos** | Acréscimo automático de R$ 2,50 para extras premium |
| 🛒 **Carrinho Sidebar** | Painel lateral com adição/remoção e cálculo em tempo real |
| 🏍️ **Logística Flexível** | Delivery (R$ 5,00) ou Retirada no Local (Grátis) |
| 📲 **Checkout WhatsApp** | Mensagem formatada automaticamente pronta para enviar |
| 💾 **Persistência** | Carrinho salvo no `localStorage` — nada se perde ao recarregar |
| ✨ **Animações** | Scroll animations, efeito "voar até o carrinho" e marquee |
| 📱 **100% Responsivo** | Layout adaptado para mobile, tablet e desktop |

</details>

<details>
<summary><strong>🛵 Painel do Entregador (entregador.html)</strong></summary>

<br>

| Funcionalidade | Descrição |
|:-:|:--|
| 📍 **Rastreamento GPS** | Captura de localização em tempo real via Geolocation API |
| 🔥 **Firebase Realtime** | Coordenadas enviadas continuamente ao banco de dados |
| 📦 **Múltiplos Pedios** | Rastreamento simultâneo de vários pedidos |
| ✅ **Controle de Sessão** | Iniciar/Finalizar entrega com limpeza automática dos dados |

</details>

---

## 🍧 Cardápio

<table>
<tr>
<th>Tamanho</th>
<th>Preço</th>
<th>Acomp.</th>
<th>Frutas</th>
<th>Caldas</th>
</tr>
<tr>
<td><strong>Copo 300ml</strong></td>
<td>R$ 11,00</td>
<td>3</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td><strong>Copo 400ml</strong></td>
<td>R$ 15,00</td>
<td>4</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td><strong>Copo 500ml</strong> ⭐</td>
<td>R$ 18,00</td>
<td>5</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td><strong>Copo 1 Litro</strong></td>
<td>R$ 28,99</td>
<td>6</td>
<td>2</td>
<td>2</td>
</tr>
<tr>
<td><strong>Barca 1 Litro</strong></td>
<td>R$ 36,00</td>
<td>5</td>
<td>2</td>
<td>2</td>
</tr>
</table>

> ⭐ **Mais Pedido:** Copo 500ml

### Adicionais Extras — R$ 2,50 cada

| Item | Preço |
|:--|:-:|
| Nutella Extra | + R$ 2,50 |
| Creme de Avelã | + R$ 2,50 |
| Gotas de Chocolate | + R$ 2,50 |
| Morango Extra | + R$ 2,50 |
| Kiwi Extra | + R$ 2,50 |

### Ingredientes Disponíveis

| 🍓 Frutas | 🥜 Acompanhamentos | 🍫 Caldas |
|:--|:--|:--|
| Banana | Leite Ninho | Leite Condensado |
| Kiwi | Paçoca | Morango |
| Uva | Granola | Chocolate |
| | Amendoim | |
| | Chocoball | |
| | Farinha Láctea | |
| | Ovomaltine | |
| | Jujuba | |
| | Coco Ralado | |
| | Confete | |

---

## 🛠️ Tecnologias

<table>
<tr>
<td align="center" width="120">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="50"/><br>
<strong>HTML5</strong>
</td>
<td align="center" width="120">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="50"/><br>
<strong>CSS3</strong>
</td>
<td align="center" width="120">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50"/><br>
<strong>JavaScript ES6+</strong>
</td>
<td align="center" width="120">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" width="50"/><br>
<strong>Firebase RTDB</strong>
</td>
</tr>
</table>

- **100% Vanilla JS** — Sem frameworks, sem dependências, máxima performance
- **CSS Custom Properties** — Sistema de design com variáveis para fácil personalização
- **Geolocation API** — Rastreamento GPS nativo do navegador
- **LocalStorage** — Persistência do carrinho sem backend
- **Google Fonts** — Tipografia Bebas Neue + Inter
- **Font Awesome 6.5** — Ícones vetoriais de alta qualidade

---

## 🏗️ Arquitetura

```
┌─────────────────────────────────────────────────────┐
│                    CLIENTE                          │
│                                                     │
│  ┌─────────────┐    ┌──────────────┐                │
│  │  index.html  │───▶│   script.js  │                │
│  │  (UI/UX)     │◀───│  (Lógica)    │                │
│  └─────────────┘    └──────┬───────┘                │
│                            │                        │
│                     ┌──────▼───────┐                │
│                     │  localStorage │                │
│                     │  (Carrinho)   │                │
│                     └──────────────┘                │
│                            │                        │
│                     Checkout WhatsApp               │
└────────────────────────────┼────────────────────────┘
                             │
                    ┌────────▼────────┐
                    │   WhatsApp API  │
                    │  (Recebimento)  │
                    └────────┬────────┘
                             │
┌────────────────────────────┼────────────────────────┐
│                    LOJA                              │
│                      📱                              │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│                  ENTREGADOR                          │
│                                                     │
│  ┌───────────────┐    ┌───────────────┐             │
│  │entregador.html │───▶│  Firebase RTDB │             │
│  │  (GPS Share)   │    │  (Coordenadas) │             │
│  └───────────────┘    └───────────────┘             │
└─────────────────────────────────────────────────────┘
```

> **Filosofia:** Lógica 100% client-side para custo zero de infraestrutura no MVP. O WhatsApp substitui qualquer backend de pedidos.

---

## 📁 Estrutura do Projeto

```
acaiteria-jjtech/
│
├── 📄 index.html          # Página principal — cardápio + carrinho
├── 📄 entregador.html     # Painel de rastreamento GPS do entregador
├── 📄 script.js           # Toda a lógica de negócio
├── 📄 style.css           # Estilos, responsividade e animações
├── 📄 README.md           # Este arquivo
│
└── 📁 img/
    ├── 🖼️ logo-jjtech.jpeg    # Logo da marca
    ├── 🖼️ açai1.webp          # Imagem — Copo 300ml
    ├── 🖼️ açai2.webp          # Imagem — Copo 400ml
    ├── 🖼️ açai3.webp          # Imagem — Copo 500ml
    └── 🖼️ açai4.webp          # Imagem — Copo 1L / Barca
```

---

## 🚀 Como Rodar

```bash
# 1. Clone o repositório
git clone https://github.com/johnysantos22/acaiteria-jjtech.git

# 2. Entre na pasta do projeto
cd acaiteria-jjtech

# 3. Abra diretamente no navegador
open index.html

# --- ou use um servidor local ---
npx serve .
```

> 💡 **Dica:** Para testar o `entregador.html` com GPS, é necessário rodar via servidor local (HTTPS) ou localhost, pois a Geolocation API bloqueia acesso via `file://`.

---

## ⚙️ Configuração Firebase

Para ativar o rastreamento GPS do entregador, edite as credenciais em `entregador.html` (linha 74):

```javascript
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_PROJETO.firebaseapp.com",
    databaseURL: "https://SEU_PROJETO-default-rtdb.firebaseio.com",
    projectId: "SEU_PROJETO",
    storageBucket: "SEU_PROJETO.appspot.com",
    messagingSenderId: "123456789",
    appId: "SEU_APP_ID"
};
```

1. Acesse [Firebase Console](https://console.firebase.google.com)
2. Crie um novo projeto ou use existente
3. Ative o **Realtime Database**
4. Copie as credenciais e substitua no código

---

## 📸 Screenshots

<div align="center">

> 🚧 *Seção em construção — capturas de tela serão adicionadas após conclusão das funcionalidades*

| Hero Section | Montador de Açaí | Carrinho Lateral |
|:--:|:--:|:--:|
| *Tela inicial com CTA* | *Modal de personalização* | *Sidebar de pedidos* |

</div>

---

## 👨‍💻 Autor

**jjtech** — Desenvolvedor Full Stack

[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/5584996970693)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/johnyysantoss)

---

<div align="center">

Feito com 💜 e muito açaí 🚧 *Em desenvolvimento*

**© 2026 Açaiteria JJTECH. Todos os direitos reservados.**

</div>
