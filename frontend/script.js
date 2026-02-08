const produtos = [
  {
    nome: "Camiseta Básica",
    preco: 59.90,
    imagem: "https://via.placeholder.com/300"
  },
  {
    nome: "Calça Jeans",
    preco: 129.90,
    imagem: "https://via.placeholder.com/300"
  },
  {
    nome: "Vestido Floral",
    preco: 149.90,
    imagem: "https://via.placeholder.com/300"
  }
];

const container = document.getElementById("produtos");

produtos.forEach(produto => {
  const div = document.createElement("div");
  div.classList.add("produto");

  div.innerHTML = `
    <img src="${produto.imagem}">
    <h3>${produto.nome}</h3>
    <p>R$ ${produto.preco.toFixed(2)}</p>
    <button>Comprar</button>
  `;

  container.appendChild(div);
});
