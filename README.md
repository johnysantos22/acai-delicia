# 🫐 Açaí Delicia - Web App de Pedidos

> **Status do Projeto:** 🚀 Em Produção / Atualização Contínua

Uma aplicação web leve, fluida e responsiva desenvolvida para automação de pedidos de uma açaiteria. O sistema permite que os clientes montem seus copos ou barcas de forma 100% autônoma, respeitando limites de ingredientes por tamanho, e enviem o pedido formatado diretamente para o WhatsApp da loja. 

## 🚀 Funcionalidades Principais

### 📱 Interface do Cliente (`index.html`)
- **Montador de Açaí Dinâmico:** Sistema de modal inteligente que trava ou libera opções de acompanhamentos, frutas e caldas com base no tamanho do copo escolhido (ex: 300ml vs 1 Litro).
- **Adicionais Pagos:** Lógica de acréscimo de valor automático para extras (ex: Creme de Avelã ou Nutella + R$ 2,50).
- **Carrinho Interativo (Sidebar):** Adição e remoção de itens com atualização em tempo real do subtotal.
- **Opções de Logística:** Cálculo automático da taxa de entrega baseado na escolha do cliente (Delivery, Retirada no Local ou Comer no Local).
- **Checkout via WhatsApp:** Redirecionamento automático com a mensagem do pedido perfeitamente formatada (itens, totais, taxa e tipo de entrega) pronta para o envio.

### 🛵 Módulo de Logística (Em implementação)
- **Acompanhamento (Live Tracking):** Mapa integrado mostrando a localização do entregador em tempo real.
- **Interface do Entregador (`entregador.html`):** Captura de GPS via `navigator.geolocation` com envio contínuo das coordenadas para o banco de dados.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído focando em alta performance e ausência de atritos para o usuário, utilizando **100% JavaScript nativo (Vanilla JS)** para toda a regra de negócio do frontend.

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Persistência Temporária:** Variáveis de estado em memória (arrays e objetos JS)
- **Banco de Dados (Rastreio):** Firebase Realtime Database
- **Mapas:** [Leaflet.js](https://leafletjs.com/)
- **Hospedagem / Deploy:** [Vercel / GitHub Pages]

## 🏗️ Arquitetura do Sistema

Para manter a aplicação leve, sem custos de VPS no momento inicial (validação do MVP) e sem painéis administrativos complexos, a lógica de negócio do cardápio e das regras de montagem roda inteiramente no lado do cliente (Client-side). O pedido finalizado utiliza a API pública do WhatsApp como "backend" de recebimento de pedidos para a loja.

## 💻 Como rodar o projeto localmente

1. Clone este repositório:
   ```bash
   git clone [https://github.com/johnysantos22/acai-delicia.git](https://github.com/johnysantos22/acai-delicia26.git)