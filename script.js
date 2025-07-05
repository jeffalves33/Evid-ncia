// Variáveis globais
let produtoAtual = null
let imagemAtiva = 0
let tamanhoSelecionado = ""
let corSelecionada = ""

const siteConfig = {
  site: {
    nome: "Bella Moda",
    tagline: "Moda feminina exclusiva com renovação semanal",
    whatsapp: "5511999999999", // SUBSTITUA pelo seu número
    endereco: "Rua das Flores, 123 - Centro",
    instagram: "@bellamoda",
  },

  produtos: [
    {
      id: 1,
      nome: "Vestido Midi Floral Primavera",
      categoria: "Vestidos",
      preco: 189.9,
      precoOriginal: 249.9,
      desconto: 24,
      novo: true,
      destaque: true,
      imagens: [
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=700&fit=crop",
        "https://images.unsplash.com/photo-1566479179817-c0b5b4b4b1e8?w=500&h=700&fit=crop",
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=700&fit=crop",
      ],
      imagemPrincipal: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
      descricao:
        "Vestido midi com estampa floral delicada, perfeito para a primavera. Confeccionado em tecido fluido de alta qualidade, com caimento impecável que valoriza a silhueta feminina.",
      descricaoDetalhada:
        "Este vestido midi é a peça perfeita para quem busca elegância e conforto. A estampa floral exclusiva foi desenvolvida especialmente para nossa coleção, trazendo um toque romântico e sofisticado.",
      detalhes: [
        "Tecido: Crepe georgette premium",
        "Forro: 100% viscose",
        "Comprimento: Midi (altura do joelho)",
        "Modelagem: Solta, com amarração na cintura",
        "Cuidados: Lavar à mão ou lavagem delicada",
        "Origem: Confecção nacional",
      ],
      tamanhos: ["P", "M", "G", "GG"],
      cores: ["Floral Rosa", "Floral Azul", "Floral Verde"],
      avaliacoes: { nota: 4.8, total: 127 },
      ocasioes: ["Trabalho", "Encontros", "Eventos casuais", "Passeios"],
    },
    {
      id: 2,
      nome: "Blusa Cropped Renda Delicada",
      categoria: "Blusas",
      preco: 89.9,
      precoOriginal: 119.9,
      desconto: 25,
      novo: false,
      destaque: true,
      imagens: [
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=700&fit=crop",
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=700&fit=crop",
      ],
      imagemPrincipal: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop",
      descricao:
        "Blusa cropped em renda delicada com forro interno. Peça versátil que combina com saias, calças e shorts.",
      descricaoDetalhada: "Nossa blusa cropped em renda é a combinação perfeita entre delicadeza e modernidade.",
      detalhes: [
        "Material: Renda francesa + forro viscose",
        "Modelagem: Cropped ajustado",
        "Manga: Curta com acabamento em renda",
        "Fechamento: Zíper invisível nas costas",
        "Cuidados: Lavagem delicada",
      ],
      tamanhos: ["P", "M", "G"],
      cores: ["Branco", "Off-white", "Nude"],
      avaliacoes: { nota: 4.6, total: 89 },
      ocasioes: ["Trabalho", "Balada", "Encontros", "Eventos"],
    },
    {
      id: 3,
      nome: "Saia Plissada Alta Costura",
      categoria: "Saias",
      preco: 129.9,
      precoOriginal: 169.9,
      desconto: 24,
      novo: true,
      destaque: true,
      imagens: [
        "https://images.unsplash.com/photo-1583496661160-fb5886a13d27?w=500&h=700&fit=crop",
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=700&fit=crop",
      ],
      imagemPrincipal: "https://images.unsplash.com/photo-1583496661160-fb5886a13d27?w=400&h=500&fit=crop",
      descricao: "Saia plissada com pregas marcadas e caimento perfeito. Cintura alta que alonga a silhueta.",
      descricaoDetalhada: "Esta saia plissada é uma verdadeira obra de arte da costura.",
      detalhes: [
        "Tecido: Crepe premium com elastano",
        "Modelagem: Cintura alta",
        "Comprimento: Midi (abaixo do joelho)",
        "Pregas: Marcadas e fixadas",
        "Fechamento: Zíper lateral invisível",
      ],
      tamanhos: ["P", "M", "G", "GG"],
      cores: ["Preto", "Marinho", "Caramelo", "Vinho"],
      avaliacoes: { nota: 4.9, total: 156 },
      ocasioes: ["Trabalho", "Eventos formais", "Reuniões", "Jantares"],
    },
    {
      id: 4,
      nome: "Conjunto Blazer + Short Executivo",
      categoria: "Conjuntos",
      preco: 259.9,
      precoOriginal: 329.9,
      desconto: 21,
      novo: false,
      destaque: true,
      imagens: [
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=700&fit=crop",
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=700&fit=crop",
      ],
      imagemPrincipal: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
      descricao: "Conjunto executivo moderno com blazer estruturado e short alfaiataria.",
      descricaoDetalhada: "Este conjunto representa o equilíbrio perfeito entre profissionalismo e modernidade.",
      detalhes: [
        "Blazer: Alfaiataria com forro completo",
        "Short: Cintura alta com pregas frontais",
        "Tecido: Gabardine stretch premium",
        "Botões: Madrepérola natural",
        "Bolsos: Funcionais no blazer",
      ],
      tamanhos: ["P", "M", "G", "GG"],
      cores: ["Preto", "Marinho", "Cinza", "Bege"],
      avaliacoes: { nota: 4.7, total: 203 },
      ocasioes: ["Trabalho", "Reuniões", "Apresentações", "Eventos corporativos"],
    },
    {
      id: 5,
      nome: "Body Manga Longa Elegante",
      categoria: "Bodies",
      preco: 79.9,
      precoOriginal: 99.9,
      desconto: 20,
      novo: true,
      destaque: true,
      imagens: [
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=700&fit=crop",
        "https://images.unsplash.com/photo-1566479179817-c0b5b4b4b1e8?w=500&h=700&fit=crop",
      ],
      imagemPrincipal: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
      descricao:
        "Body manga longa com gola alta e fechamento discreto. Tecido com elastano para perfeito ajuste ao corpo.",
      descricaoDetalhada: "Este body é a peça coringa do seu guarda-roupa.",
      detalhes: [
        "Tecido: Viscose com elastano",
        "Gola: Alta e ajustada",
        "Manga: Longa com punho ajustado",
        "Fechamento: Colchetes na parte inferior",
        "Modelagem: Justa ao corpo",
      ],
      tamanhos: ["P", "M", "G"],
      cores: ["Preto", "Branco", "Nude", "Vinho"],
      avaliacoes: { nota: 4.5, total: 78 },
      ocasioes: ["Trabalho", "Casual", "Balada", "Sobreposição"],
    },
    {
      id: 6,
      nome: "Calça Wide Leg Premium",
      categoria: "Calças",
      preco: 149.9,
      precoOriginal: 199.9,
      desconto: 25,
      novo: false,
      destaque: true,
      imagens: [
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=700&fit=crop",
        "https://images.unsplash.com/photo-1583496661160-fb5886a13d27?w=500&h=700&fit=crop",
      ],
      imagemPrincipal: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
      descricao: "Calça wide leg de cintura alta com caimento fluido. Modelagem que alonga a silhueta.",
      descricaoDetalhada: "Nossa calça wide leg é sinônimo de elegância e conforto.",
      detalhes: [
        "Tecido: Crepe com elastano",
        "Modelagem: Wide leg, cintura alta",
        "Comprimento: Longo (até o chão)",
        "Bolsos: Laterais funcionais",
        "Fechamento: Zíper lateral + botão",
      ],
      tamanhos: ["P", "M", "G", "GG"],
      cores: ["Preto", "Caramelo", "Verde Militar", "Terracota"],
      avaliacoes: { nota: 4.8, total: 134 },
      ocasioes: ["Trabalho", "Casual chic", "Eventos", "Viagens"],
    },
  ],
}

// Função para carregar produtos na página principal
function carregarProdutos() {
  const grid = document.getElementById("produtos-grid")
  if (!grid) return

  const produtos = siteConfig.produtos.filter((p) => p.destaque)
  grid.innerHTML = ""

  produtos.forEach((produto) => {
    const col = document.createElement("div")
    col.className = "col-md-6 col-lg-4"

    col.innerHTML = `
            <div class="card product-card h-100 fade-in" onclick="irParaProduto(${produto.id})">
                <div class="position-relative overflow-hidden">
                    <img src="${produto.imagemPrincipal}" class="card-img-top product-image" alt="${produto.nome}">
                    <div class="position-absolute top-0 start-0 m-2">
                        ${produto.novo ? '<span class="badge badge-gradient">NOVO</span>' : ""}
                        <span class="badge bg-danger ms-1">-${produto.desconto}%</span>
                    </div>
                    <button class="btn btn-light position-absolute top-0 end-0 m-2 rounded-circle btn-heart">
                        <i class="bi bi-heart"></i>
                    </button>
                </div>
                <div class="card-body d-flex flex-column">
                    <span class="badge badge-outline-pink align-self-start mb-2">${produto.categoria}</span>
                    <h5 class="card-title">${produto.nome}</h5>
                    <div class="mt-auto">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <div class="fs-5 fw-bold text-pink">R$ ${produto.preco.toFixed(2).replace(".", ",")}</div>
                                <div class="small text-muted text-decoration-line-through">R$ ${produto.precoOriginal.toFixed(2).replace(".", ",")}</div>
                            </div>
                            <button class="btn btn-pink btn-sm">Ver Detalhes</button>
                        </div>
                    </div>
                </div>
            </div>
        `

    grid.appendChild(col)
  })
}

// Função para ir para página do produto
function irParaProduto(id) {
  window.location.href = `produto.html?id=${id}`
}

// Função para carregar detalhes do produto
function carregarProdutoDetalhes() {
  const urlParams = new URLSearchParams(window.location.search)
  const produtoId = Number.parseInt(urlParams.get("id"))

  produtoAtual = siteConfig.produtos.find((p) => p.id === produtoId)

  if (!produtoAtual) {
    alert("Produto não encontrado!")
    window.location.href = "index.html"
    return
  }

  // Atualizar título da página
  document.title = `${produtoAtual.nome} - Bella Moda`

  // Preencher informações básicas
  document.getElementById("categoria-badge").textContent = produtoAtual.categoria
  document.getElementById("nome-produto").textContent = produtoAtual.nome
  document.getElementById("preco-atual").textContent = `R$ ${produtoAtual.preco.toFixed(2).replace(".", ",")}`
  document.getElementById("preco-original").textContent =
    `R$ ${produtoAtual.precoOriginal.toFixed(2).replace(".", ",")}`
  document.getElementById("economia").textContent =
    `Economize R$ ${(produtoAtual.precoOriginal - produtoAtual.preco).toFixed(2).replace(".", ",")}`

  // Preencher descrições
  document.getElementById("descricao").textContent = produtoAtual.descricao
  document.getElementById("descricao-detalhada").textContent = produtoAtual.descricaoDetalhada

  // Carregar componentes
  carregarImagens()
  carregarBadges()
  carregarAvaliacoes()
  carregarTamanhos()
  carregarCores()
  carregarDetalhes()
  carregarOcasioes()
}

// Função para carregar imagens
function carregarImagens() {
  const imagemPrincipal = document.getElementById("imagem-principal")
  const thumbnails = document.getElementById("thumbnails")

  // Definir primeira imagem
  imagemPrincipal.src = produtoAtual.imagens[0]
  imagemPrincipal.alt = produtoAtual.nome

  // Criar thumbnails
  thumbnails.innerHTML = ""
  produtoAtual.imagens.forEach((imagem, index) => {
    const img = document.createElement("img")
    img.src = imagem
    img.alt = `${produtoAtual.nome} ${index + 1}`
    img.className = `thumbnail rounded ${index === 0 ? "active" : ""}`
    img.onclick = () => trocarImagem(index)
    thumbnails.appendChild(img)
  })
}

// Função para trocar imagem principal
function trocarImagem(index) {
  imagemAtiva = index
  document.getElementById("imagem-principal").src = produtoAtual.imagens[index]

  // Atualizar thumbnails
  const thumbnails = document.querySelectorAll(".thumbnail")
  thumbnails.forEach((thumb, i) => {
    if (i === index) {
      thumb.classList.add("active")
    } else {
      thumb.classList.remove("active")
    }
  })
}

// Função para carregar badges
function carregarBadges() {
  const badges = document.getElementById("badges-produto")
  badges.innerHTML = ""

  if (produtoAtual.novo) {
    const badge = document.createElement("span")
    badge.className = "badge badge-gradient me-1"
    badge.textContent = "NOVO"
    badges.appendChild(badge)
  }

  const discountBadge = document.createElement("span")
  discountBadge.className = "badge bg-danger"
  discountBadge.textContent = `-${produtoAtual.desconto}%`
  badges.appendChild(discountBadge)
}

// Função para carregar avaliações
function carregarAvaliacoes() {
  const avaliacoes = document.getElementById("avaliacoes")
  const estrelas = Math.floor(produtoAtual.avaliacoes.nota)

  let estrelasHTML = ""
  for (let i = 0; i < 5; i++) {
    if (i < estrelas) {
      estrelasHTML += '<i class="bi bi-star-fill star-filled"></i>'
    } else {
      estrelasHTML += '<i class="bi bi-star star-empty"></i>'
    }
  }

  avaliacoes.innerHTML = `
        <div class="me-2">${estrelasHTML}</div>
        <span class="text-muted">${produtoAtual.avaliacoes.nota} (${produtoAtual.avaliacoes.total} avaliações)</span>
    `
}

// Função para carregar tamanhos
function carregarTamanhos() {
  const tamanhos = document.getElementById("tamanhos")
  tamanhos.innerHTML = ""

  produtoAtual.tamanhos.forEach((tamanho) => {
    const btn = document.createElement("button")
    btn.className = "btn size-btn"
    btn.textContent = tamanho
    btn.onclick = () => selecionarTamanho(tamanho, btn)
    tamanhos.appendChild(btn)
  })
}

// Função para selecionar tamanho
function selecionarTamanho(tamanho, elemento) {
  tamanhoSelecionado = tamanho

  // Remover active de todos
  document.querySelectorAll(".size-btn").forEach((btn) => {
    btn.classList.remove("active")
  })

  // Adicionar active ao selecionado
  elemento.classList.add("active")
}

// Função para carregar cores
function carregarCores() {
  const cores = document.getElementById("cores")
  cores.innerHTML = ""

  produtoAtual.cores.forEach((cor) => {
    const btn = document.createElement("button")
    btn.className = "btn color-btn"
    btn.textContent = cor
    btn.onclick = () => selecionarCor(cor, btn)
    cores.appendChild(btn)
  })
}

// Função para selecionar cor
function selecionarCor(cor, elemento) {
  corSelecionada = cor

  // Remover active de todos
  document.querySelectorAll(".color-btn").forEach((btn) => {
    btn.classList.remove("active")
  })

  // Adicionar active ao selecionado
  elemento.classList.add("active")
}

// Função para carregar detalhes
function carregarDetalhes() {
  const detalhes = document.getElementById("detalhes")
  detalhes.innerHTML = ""

  produtoAtual.detalhes.forEach((detalhe) => {
    const li = document.createElement("li")
    li.className = "text-muted mb-1"
    li.innerHTML = `<i class="bi bi-check-circle text-pink me-2"></i>${detalhe}`
    detalhes.appendChild(li)
  })
}

// Função para carregar ocasiões
function carregarOcasioes() {
  const ocasioes = document.getElementById("ocasioes")
  ocasioes.innerHTML = ""

  produtoAtual.ocasioes.forEach((ocasiao) => {
    const badge = document.createElement("span")
    badge.className = "badge bg-light text-purple border"
    badge.textContent = ocasiao
    ocasioes.appendChild(badge)
  })
}

// Função para comprar via WhatsApp
function comprarWhatsApp() {
  if (!produtoAtual) return

  let mensagem = `Olá! Tenho interesse no produto: ${produtoAtual.nome} - R$ ${produtoAtual.preco.toFixed(2).replace(".", ",")}`

  if (tamanhoSelecionado) {
    mensagem += ` - Tamanho: ${tamanhoSelecionado}`
  }

  if (corSelecionada) {
    mensagem += ` - Cor: ${corSelecionada}`
  }

  const url = `https://wa.me/${siteConfig.site.whatsapp}?text=${encodeURIComponent(mensagem)}`
  window.open(url, "_blank")
}

// Função para abrir WhatsApp geral
function abrirWhatsApp() {
  const mensagem = "Olá! Gostaria de saber mais sobre a coleção da semana!"
  const url = `https://wa.me/${siteConfig.site.whatsapp}?text=${encodeURIComponent(mensagem)}`
  window.open(url, "_blank")
}

// Inicializar quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
  // Se estiver na página principal
  if (document.getElementById("produtos-grid")) {
    carregarProdutos()
  }

  // Se estiver na página do produto
  if (window.location.pathname.includes("produto.html")) {
    carregarProdutoDetalhes()
  }
})
