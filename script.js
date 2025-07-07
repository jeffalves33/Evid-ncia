// Variáveis globais
let produtoAtual = null
let imagemAtiva = 0
let tamanhoSelecionado = ""
let corSelecionada = ""

const siteConfig = {
  site: {
    nome: "Evidência Moda",
    tagline: "Peças exclusivas semanais. NÃO PERCA TEMPO!",
    whatsapp: "5527999033630",
    endereco: "Rua Pelitas, São Marcos III, 32 - Serra Sede",
    instagram: "@evidenciamodaofc",
  },

  produtos: [
    {
      id: 1,
      nome: "Vestido Estampa Animal Print",
      categoria: "Vestidos",
      preco: 124.99,
      precoOriginal: 156.99,
      desconto: 20,
      novo: false,
      destaque: true,
      imagens: [
        "https://res.cloudinary.com/dpnqxj57j/image/upload/v1751892333/IMG_8887_d5k2ve.jpg",
        "https://res.cloudinary.com/dpnqxj57j/image/upload/v1751892334/IMG_8883_rh6cwy.jpg",
        "https://res.cloudinary.com/dpnqxj57j/image/upload/v1751892334/IMG_8884_b69kf9.jpg",
      ],
      imagemPrincipal: "https://res.cloudinary.com/dpnqxj57j/image/upload/v1751892333/IMG_8887_d5k2ve.jpg",
      descricao:
        "O vestido tem estampa animal print de oncinha em tons de marrom e preto, com mangas longas e uma amarração na cintura. A estampa animal print surgiu há muitos séculos. Antigamente, peles de animais eram usadas por reis e nobres como símbolo de poder, riqueza e status. Na moda, ela ganhou força nos anos 40 e voltou com tudo nas décadas de 60, 80 e 2000, sendo constantemente reinventada.",
      detalhes: [
        "Estampa: Animal print de oncinha",
        "Cor: Tons de marrom e preto",
        "Mangas: Longas",
        "Cintura: Marcada com cinto preto fino",
        "Comprimento: Acima do joelho",
        "Estilo: Versátil, pode ser usado casualmente ou em ocasiões mais arrumadas",
      ],
      tamanhos: ["EXG ao G2"],
      cores: ["Nude com Preto"],
      avaliacoes: { nota: 4.8, total: 127 },
      ocasioes: ["Outono/Inverno", "Eventos sociais", "Eventos casuais"],
    },
    {
      id: 2,
      nome: "Vestido Estampado Manga Longa",
      categoria: "Vestidos",
      preco: 124.99,
      precoOriginal: 156.99,
      desconto: 20,
      novo: false,
      destaque: true,
      imagens: [
        "https://res.cloudinary.com/dpnqxj57j/image/upload/v1751893496/IMG_8878_ygl4bl.jpg",
        "https://res.cloudinary.com/dpnqxj57j/image/upload/v1751893497/IMG_8879_ra9qk2.jpg",
      ],
      imagemPrincipal: "https://res.cloudinary.com/dpnqxj57j/image/upload/v1751893496/IMG_8878_ygl4bl.jpg",
      descricao:
        "Delicadeza que valoriza! Vestido com mangas longas e punho com elástico, botões frontais (fake) e estampa floral apaixonante! Confortável, elegante e perfeito para todas as estações!",
      detalhes: [
        "Cor: Nude",
        "Estampa: Floral em tons de amarelo e branco",
        "Mangas: Longas com volume e punho elástico",
        "Decote: V com botões frontais",
        "Comprimento: Acima do joelho",
        "Modelagem: Solta"
      ],
      tamanhos: ["EXG ao G2"],
      cores: ["Nude", "Off-white"],
      avaliacoes: { nota: 4.6, total: 89 },
      ocasioes: ["Casual", "Dia a Dia", "Passeios", "Encontros"],
    },
    {
      id: 3,
      nome: "Vestido Canelado",
      categoria: "Vestidos",
      preco: 159.99,
      precoOriginal: 177.99,
      desconto: 24,
      novo: true,
      destaque: true,
      imagens: [
        "https://res.cloudinary.com/dpnqxj57j/image/upload/v1751894125/IMG_8655_q3kix3.jpg",
        "https://res.cloudinary.com/dpnqxj57j/image/upload/v1751894124/IMG_8653_oop6jr.jpg",
        "https://res.cloudinary.com/dpnqxj57j/image/upload/v1751894133/IMG_8639_1_dmgihd.jpg",
        "https://res.cloudinary.com/dpnqxj57j/image/upload/v1751894124/IMG_8631_nnw7zu.jpg",
      ],
      imagemPrincipal: "https://res.cloudinary.com/dpnqxj57j/image/upload/v1751894125/IMG_8655_q3kix3.jpg",
      descricao: "O marrom é a cor do momento, e esse vestido é a definição de elegância! Longo tubinho com fendas laterais, mangas compridas e gola alta que valoriza e alonga a silhueta. Um look versátil, quentinho e estiloso para os dias mais fresquinhos!",
      detalhes: [
        "Cor: Marrom (ou marrom chocolate)",
        "Tecido: Canelado (com textura em relevo)",
        "Decote: Gola alta",
        "Mangas: Longas",
        "Comprimento: Midi (abaixo do joelho, cobrindo as panturrilhas)",
        "Modelagem: Ajustada ao corpo",
        "Detalhe: Fenda lateral (visível em parte)"
      ],
      tamanhos: ["P", "M"],
      cores: ["Marrom"],
      avaliacoes: { nota: 4.9, total: 156 },
      ocasioes: ["Outono/Inverno", "Jantares", "Eventos sociais", "Casual elegante"],
    },
    {
      id: 4,
      nome: "Sobretudo",
      categoria: "Vestidos",
      preco: 169.99,
      precoOriginal: 178.99,
      desconto: 5,
      novo: true,
      destaque: true,
      imagens: [
        "https://res.cloudinary.com/dpnqxj57j/image/upload/v1751894568/IMG_8875_uauyml.jpg",
        "https://res.cloudinary.com/dpnqxj57j/image/upload/v1751894568/IMG_8872_gayncp.jpg",
        "https://res.cloudinary.com/dpnqxj57j/image/upload/v1751894568/IMG_8873_bdogja.jpg",
        "https://res.cloudinary.com/dpnqxj57j/image/upload/v1751894784/IMG_8913_aqvlwz.jpg",
        "https://res.cloudinary.com/dpnqxj57j/image/upload/v1751894784/IMG_8899_k9kzfp.jpg",
        "https://res.cloudinary.com/dpnqxj57j/image/upload/v1751894784/IMG_8901_w5grk0.jpg",
      ],
      imagemPrincipal: "https://res.cloudinary.com/dpnqxj57j/image/upload/v1751894568/IMG_8875_uauyml.jpg",
      descricao: "Versatilidade com elegância! Esse vestido é aquele modelo inteligente e fashion, que pode ser usado tanto fechado como vestido, quanto aberto como sobretudo.",
      detalhes: [
        "Babado nos ombros",
        "Manga longa com elástico no punho",
        "Gola alta",
        "Botões frontais",
        "Fenda frontal",
        "Cinto do mesmo tecido que valoriza a silhueta",
        "Estampa em riscas verticais, que alongam o corpo com sofisticação.",
      ],
      tamanhos: ["GG"],
      cores: ["Marrom", "Preto"],
      avaliacoes: { nota: 4.7, total: 203 },
      ocasioes: ["Trabalho", "Reuniões", "Apresentações", "Eventos corporativos"],
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
  //document.getElementById("descricao-detalhada").textContent = produtoAtual.descricaoDetalhada

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
  const imagemPrincipal = document.getElementById("imagem-principal")

  // Efeito de transição suave
  imagemPrincipal.style.opacity = "0.7"

  setTimeout(() => {
    imagemPrincipal.src = produtoAtual.imagens[index]
    imagemPrincipal.style.opacity = "1"
  }, 150)

  // Atualizar thumbnails
  const thumbnails = document.querySelectorAll("#thumbnails .thumbnail")
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

// Função para experimentar via WhatsApp
function ExperimentarWhatsApp() {
  if (!produtoAtual) return

  let mensagem = `Olá! Gostaria de no seu espaço provar esse produto: ${produtoAtual.nome} - R$ ${produtoAtual.preco.toFixed(2).replace(".", ",")}`

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

// Variáveis para o modal
let modalImagemAtiva = 0

// Função para abrir modal de imagem
function abrirModal(index) {
  if (!produtoAtual) return

  modalImagemAtiva = index
  const modal = new bootstrap.Modal(document.getElementById("imageModal"))

  // Configurar imagem do modal
  const modalImage = document.getElementById("modal-image")
  modalImage.src = produtoAtual.imagens[index]
  modalImage.alt = produtoAtual.nome
  modalImage.classList.add("modal-fade-in")

  // Atualizar título
  document.getElementById("modalImageTitle").textContent = produtoAtual.nome

  // Atualizar contador
  atualizarContador()

  // Criar thumbnails do modal
  criarThumbnailsModal()

  // Mostrar modal
  modal.show()

  // Adicionar eventos de teclado
  document.addEventListener("keydown", handleKeyPress)
}

// Função para navegar para imagem anterior
function imagemAnterior() {
  if (!produtoAtual) return

  modalImagemAtiva = modalImagemAtiva > 0 ? modalImagemAtiva - 1 : produtoAtual.imagens.length - 1
  atualizarImagemModal()
}

// Função para navegar para próxima imagem
function proximaImagem() {
  if (!produtoAtual) return

  modalImagemAtiva = modalImagemAtiva < produtoAtual.imagens.length - 1 ? modalImagemAtiva + 1 : 0
  atualizarImagemModal()
}

// Função para atualizar imagem do modal
function atualizarImagemModal() {
  const modalImage = document.getElementById("modal-image")

  // Efeito de fade
  modalImage.style.opacity = "0.5"

  setTimeout(() => {
    modalImage.src = produtoAtual.imagens[modalImagemAtiva]
    modalImage.style.opacity = "1"
    atualizarContador()
    atualizarThumbnailsModal()
  }, 150)
}

// Função para atualizar contador
function atualizarContador() {
  const counter = document.getElementById("image-counter")
  counter.textContent = `${modalImagemAtiva + 1} de ${produtoAtual.imagens.length}`
}

// Função para criar thumbnails do modal
function criarThumbnailsModal() {
  const modalThumbnails = document.getElementById("modal-thumbnails")
  modalThumbnails.innerHTML = ""

  produtoAtual.imagens.forEach((imagem, index) => {
    const img = document.createElement("img")
    img.src = imagem
    img.alt = `${produtoAtual.nome} ${index + 1}`
    img.className = `thumbnail ${index === modalImagemAtiva ? "active" : ""}`
    img.onclick = () => {
      modalImagemAtiva = index
      atualizarImagemModal()
    }
    modalThumbnails.appendChild(img)
  })
}

// Função para atualizar thumbnails do modal
function atualizarThumbnailsModal() {
  const thumbnails = document.querySelectorAll("#modal-thumbnails .thumbnail")
  thumbnails.forEach((thumb, index) => {
    if (index === modalImagemAtiva) {
      thumb.classList.add("active")
    } else {
      thumb.classList.remove("active")
    }
  })
}

// Função para lidar com teclas do teclado
function handleKeyPress(event) {
  if (document.getElementById("imageModal").classList.contains("show")) {
    switch (event.key) {
      case "ArrowLeft":
        imagemAnterior()
        break
      case "ArrowRight":
        proximaImagem()
        break
      case "Escape":
        const modal = bootstrap.Modal.getInstance(document.getElementById("imageModal"))
        modal.hide()
        break
    }
  }
}

// Remover event listener quando modal fechar
document.getElementById("imageModal").addEventListener("hidden.bs.modal", () => {
  document.removeEventListener("keydown", handleKeyPress)
})

// Adicionar suporte a gestos touch para mobile
let touchStartX = 0
let touchEndX = 0

document.getElementById("imageModal").addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].screenX
})

document.getElementById("imageModal").addEventListener("touchend", (event) => {
  touchEndX = event.changedTouches[0].screenX
  handleSwipe()
})

function handleSwipe() {
  const swipeThreshold = 50
  const diff = touchStartX - touchEndX

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe left - próxima imagem
      proximaImagem()
    } else {
      // Swipe right - imagem anterior
      imagemAnterior()
    }
  }
}
