# Cross Knights - Site de Vitrine

Um site de vitrine elegante e moderno para a marca **Cross Knights**, especializada em roupas oversized medievais. Desenvolvido com HTML, CSS e JavaScript puro, otimizado para mobile e pronto para deploy.

## 🎯 Características

- **Design Medieval Moderno**: Combinação elegante de preto e vermelho sangue
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves**: Utiliza AOS (Animate On Scroll) para transições fluidas
- **Performance Otimizada**: Código limpo e otimizado para carregamento rápido
- **SEO Friendly**: Meta tags e estrutura otimizada para motores de busca

## 🚀 Como Usar

### Execução Local (Live Server)

1. Abra o projeto no VSCode
2. Instale a extensão "Live Server" se ainda não tiver
3. Clique com o botão direito no arquivo `index.html`
4. Selecione "Open with Live Server"
5. O site abrirá automaticamente no navegador

### Deploy no GitHub Pages

1. Faça upload dos arquivos para um repositório no GitHub
2. Vá em Settings > Pages no seu repositório
3. Selecione "Deploy from a branch"
4. Escolha a branch "main" e pasta "/ (root)"
5. Clique em "Save"
6. Seu site estará disponível em: `https://seuusuario.github.io/nome-do-repositorio`

## 📁 Estrutura do Projeto

```
cross-knights-store/
├── index.html          # Página principal
├── style.css           # Estilos CSS
├── script.js           # JavaScript e animações
├── README.md           # Este arquivo
└── assets/             # Recursos visuais
    ├── logo.png        # Logo da marca
    ├── favicon.png     # Ícone do site
    ├── product1.jpg    # Imagem do produto 1
    ├── product2.jpg    # Imagem do produto 2
    └── product3.jpg    # Imagem do produto 3
```

## ✏️ Como Editar

### Alterando Produtos

Para modificar os produtos exibidos, edite o arquivo `index.html` na seção `products-section`:

```html
<div class="product-card" data-aos="fade-up" data-aos-delay="200">
    <div class="product-image">
        <img src="assets/product1.jpg" alt="Nome do Produto">
        <!-- Altere o src para sua imagem -->
    </div>
    <div class="product-info">
        <h3 class="product-name">Nome do Produto</h3>
        <!-- Altere o nome do produto -->
        <p class="product-description">Descrição do produto</p>
        <!-- Altere a descrição -->
        <div class="product-price">R$ 89,90</div>
        <!-- Altere o preço -->
        <a href="https://shopee.com.br/seu-produto" target="_blank" class="buy-button">
            <!-- Altere o link da Shopee -->
            <i class="fas fa-shopping-cart"></i>
            Comprar na Shopee
        </a>
    </div>
</div>
```

### Alterando Links de Redes Sociais

No rodapé do `index.html`, altere os links das redes sociais:

```html
<div class="footer-social">
    <a href="https://instagram.com/seu-perfil" target="_blank" class="social-link">
        <i class="fab fa-instagram"></i>
    </a>
    <a href="https://tiktok.com/@seu-perfil" target="_blank" class="social-link">
        <i class="fab fa-tiktok"></i>
    </a>
    <a href="https://shopee.com.br/seu-perfil" target="_blank" class="social-link">
        <i class="fas fa-shopping-bag"></i>
    </a>
</div>
```

### Alterando Cores

Para modificar as cores, edite as variáveis CSS no arquivo `style.css`:

```css
:root {
    --primary-black: #0a0a0a;      /* Fundo principal */
    --secondary-black: #1a1a1a;    /* Fundo secundário */
    --blood-red: #8b0000;          /* Vermelho escuro */
    --bright-red: #b30000;         /* Vermelho claro */
    --white: #ffffff;              /* Branco */
    --gray-light: #cccccc;         /* Cinza claro */
    --gray-dark: #333333;          /* Cinza escuro */
}
```

### Alterando Textos

- **Título Principal**: Edite a tag `<h1 class="hero-title">` no `index.html`
- **Subtítulo**: Edite a tag `<p class="hero-subtitle">` no `index.html`
- **Descrição**: Edite a tag `<p class="hero-description">` no `index.html`
- **Seção Sobre**: Edite o conteúdo da `<section id="about">` no `index.html`

### Adicionando Novos Produtos

1. Adicione a imagem do produto na pasta `assets/`
2. Copie um card de produto existente no `index.html`
3. Altere as informações (imagem, nome, descrição, preço, link)
4. Incremente o `data-aos-delay` para animação escalonada

### Alterando Imagem de Fundo

Para modificar a imagem de fundo principal, edite o arquivo `style.css` na seção `body`:

```css
body {
    background-image: url("assets/background.jpg"); /* Altere para o caminho da sua imagem */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
```

Certifique-se de que a imagem esteja na pasta `assets/` e o caminho esteja correto.

## 🎨 Paleta de Cores

- **Preto Principal**: `#0a0a0a`
- **Preto Secundário**: `#1a1a1a`
- **Vermelho Sangue**: `#8b0000`
- **Vermelho Brilhante**: `#b30000`
- **Branco**: `#ffffff`
- **Cinza Claro**: `#cccccc`
- **Cinza Escuro**: `#333333`

## 🔤 Tipografias

- **Títulos**: Cinzel Decorative (Google Fonts)
- **Corpo**: Spectral SC (Google Fonts)

## 📱 Responsividade

O site é totalmente responsivo e se adapta automaticamente a:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## ⚡ Funcionalidades

- **Tela de Carregamento**: Logo animada com efeito de pulsação durante o carregamento
- **Navegação Suave**: Scroll suave entre seções
- **Modal de Produtos**: Visualização rápida ao clicar em "Ver Detalhes"
- **Efeitos Hover**: Animações nos produtos e botões
- **Header Dinâmico**: Muda aparência conforme o scroll
- **Animações AOS**: Elementos aparecem suavemente durante o scroll

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com Flexbox e Grid
- **JavaScript ES6+**: Interatividade e animações
- **AOS Library**: Animações on scroll
- **Font Awesome**: Ícones das redes sociais
- **Google Fonts**: Tipografias personalizadas

## 📞 Suporte

Para dúvidas ou suporte, consulte a documentação ou entre em contato através das redes sociais da Cross Knights.

---

**Cross Knights** - Roupas Oversized Medievais  
© 2024 Todos os direitos reservados.

