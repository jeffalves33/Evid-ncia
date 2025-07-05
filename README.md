# Bella Moda - Loja Feminina

Uma loja online elegante para roupas femininas com coleção semanal renovável.

## 🚀 Como usar

### Estrutura dos arquivos:
- `index.html` - Página principal com produtos em destaque
- `produto.html` - Página de detalhes do produto
- `data.js` - Dados dos produtos e configurações (EDITE AQUI!)
- `script.js` - Funcionalidades JavaScript

### 📝 Para atualizar a coleção semanal:

1. **Abra o arquivo `data.js`**
2. **Edite a seção `produtos`** com suas novas peças
3. **Atualize as informações** de cada produto:
   - Nome, preço, descrição
   - Imagens (use URLs do Unsplash ou suas próprias)
   - Tamanhos, cores, detalhes
   - Categoria e ocasiões

### 🔧 Configurações importantes:

**No arquivo `data.js`, altere:**
\`\`\`javascript
whatsapp: "5511999999999", // SEU NÚMERO DO WHATSAPP
endereco: "Sua rua, 123 - Seu bairro",
instagram: "@seuinstagram"
\`\`\`

### 📱 Como adicionar produtos:

\`\`\`javascript
{
    id: 7, // Próximo ID disponível
    nome: "Nome da Peça",
    categoria: "Categoria",
    preco: 99.90,
    precoOriginal: 129.90,
    desconto: 23,
    novo: true, // true/false
    destaque: true, // true/false (aparece na página principal)
    imagens: [
        "URL_da_imagem_1",
        "URL_da_imagem_2",
        "URL_da_imagem_3"
    ],
    imagemPrincipal: "URL_da_imagem_principal",
    descricao: "Descrição curta",
    descricaoDetalhada: "Descrição completa",
    detalhes: [
        "Detalhe 1",
        "Detalhe 2"
    ],
    tamanhos: ["P", "M", "G"],
    cores: ["Cor 1", "Cor 2"],
    avaliacoes: {
        nota: 4.5,
        total: 50
    },
    ocasioes: ["Trabalho", "Casual"]
}
\`\`\`

### 🖼️ Imagens:
- Use o Unsplash para imagens gratuitas: `https://images.unsplash.com/photo-ID?w=400&h=600&fit=crop`
- Ou faça upload das suas próprias imagens

### 🎨 Personalização:
- Cores e estilos estão no Tailwind CSS
- Para mudar cores principais, edite as classes `pink-` e `purple-`
- Layout totalmente responsivo

### 📞 WhatsApp:
- Substitua o número no `data.js`
- Formato: código do país + DDD + número (sem espaços)
- Exemplo: "5511999999999" para Brasil

## 🌟 Recursos:
- ✅ Design responsivo e elegante
- ✅ Carrossel de imagens
- ✅ Seleção de tamanho e cor
- ✅ Integração com WhatsApp
- ✅ Sistema de avaliações
- ✅ Badges de desconto e novidade
- ✅ Fácil atualização via JSON

Basta editar o `data.js` toda semana com suas novas peças! 🛍️
