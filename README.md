# 🍔 Delivery Web App - com Rastreamento em Tempo Real

> **Status do Projeto:** 🚧 Em Desenvolvimento

Uma aplicação web leve e responsiva para automação de pedidos de delivery. O sistema permite que os clientes montem seus pedidos de forma autônoma e os enviem diretamente para o WhatsApp do estabelecimento. O grande diferencial é o **módulo de rastreamento em tempo real**, onde o cliente pode acompanhar a localização exata do entregador pelo mapa.

## 🚀 Funcionalidades

### 📱 Interface do Cliente (`index.html`)
- **Cardápio Digital:** Visualização dos produtos divididos por categorias.
- **Carrinho Dinâmico:** Adição, remoção e alteração de quantidade de itens.
- **Persistência de Dados:** O carrinho é salvo no `LocalStorage`, evitando a perda do pedido se o navegador for fechado.
- **Checkout via WhatsApp:** Redirecionamento automático com a mensagem do pedido formatada (itens, total e endereço).
- **Acompanhamento (Live Tracking):** Mapa integrado mostrando a localização do entregador em tempo real.

### 🛵 Interface do Entregador (`entregador.html`)
- **Acesso Restrito:** Link exclusivo (ou salvo na tela inicial como PWA) para o motoqueiro.
- **Captura de GPS:** Uso da API `navigator.geolocation` para ler as coordenadas do dispositivo.
- **Sincronização:** Envio contínuo das coordenadas para o banco de dados.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído focando em alta performance e ausência de atritos para o usuário, utilizando 100% JavaScript nativo para o frontend.

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Armazenamento Local:** LocalStorage API
- **Banco de Dados (Rastreio):** Firebase Realtime Database
- **Mapas:** [Leaflet.js](https://leafletjs.com/)
- **Hospedagem:** [GitHub Pages]

## 🏗️ Arquitetura do Sistema

Para manter a aplicação leve e evitar painéis administrativos complexos, o sistema é dividido fisicamente em duas rotas principais:

1. `index.html`: Acessada pelo público geral.
2. `entregador.html`: Acessada apenas pela equipe de logística.

O Firebase atua exclusivamente como a "ponte" de comunicação em tempo real entre o celular do entregador e o mapa exibido no celular do cliente.

## 💻 Como rodar o projeto localmente

1. Clone este repositório:
   
```bash
   git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
