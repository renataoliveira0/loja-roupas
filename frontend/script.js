const produtos = [
  { id: 1, nome: "Camiseta Básica", preco: 59.90, imagem: "https://via.placeholder.com/300" },
  { id: 2, nome: "Calça Jeans", preco: 129.90, imagem: "https://via.placeholder.com/300" },
  { id: 3, nome: "Vestido Floral", preco: 149.90, imagem: "https://via.placeholder.com/300" }
];

let carrinho = [];

const container = document.getElementById("produtos");
const listaCarrinho = document.getElementById("listaCarrinho");
const totalSpan = document.getElementById("total");
const qtdSpan = document.getElementById("qtd");
const carrinhoDiv = document.getElementById("carrinho");

document.getElementById("btnCarrinho").onclick = () => {
  carrinhoDiv.classList.toggle("oculto");
};

function renderProdutos() {
  produtos.forEach(produto => {
    const div = document.createElement("div");
    div.classList.add("produto");

    div.innerHTML = `
      <img src="${produto.imagem}">
      <h3>${produto.nome}</h3>
      <p>R$ ${produto.preco.toFixed(2)}</p>
      <button onclick="adicionar(${produto.id})">Adicionar</button>
    `;

    container.appendChild(div);
  });
}

function adicionar(id) {
  const produto = produtos.find(p => p.id === id);
  carrinho.push(produto);
  atualizarCarrinho();
}

function remover(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  listaCarrinho.innerHTML = "";
  let total = 0;

  carrinho.forEach((item, index) => {
    total += item.preco;

    const li = document.createElement("li");
    li.innerHTML = `
      ${item.nome} - R$ ${item.preco.toFixed(2)}
      <button onclick="remover(${index})">X</button>
    `;
    listaCarrinho.appendChild(li);
  });

  totalSpan.innerText = total.toFixed(2);
  qtdSpan.innerText = carrinho.length;
}

renderProdutos();
