# 🧠 Jogo da Memória (Memory Game)

Um jogo da memória interativo e responsivo desenvolvido em HTML, CSS e JavaScript puro.

## 📋 Sobre o Projeto

O **Jogo da Memória** é uma implementação moderna do clássico jogo de cartas onde o objetivo é encontrar todos os pares de símbolos. O jogo apresenta uma interface limpa e intuitiva com animações suaves e design responsivo.

## 🎮 Como Jogar

1. **Objetivo**: Encontre todos os 8 pares de símbolos de frutas
2. **Regras**:
   - Clique em uma carta para revelá-la
   - Clique em uma segunda carta para formar um par
   - Se as cartas coincidirem, elas permanecerão viradas
   - Se não coincidirem, elas voltarão para baixo após 500ms
   - Continue até encontrar todos os pares

3. **Pontuação**:
   - **Movimentos**: Conta quantas tentativas de pares você fez
   - **Tempo**: Cronometra quanto tempo você leva para completar o jogo

## 🚀 Funcionalidades

- ✅ **8 pares de símbolos** de frutas (🍎, 🍌, 🍇, 🍊, 🍓, 🍒, 🍑, 🍍)
- ✅ **Contador de movimentos** em tempo real
- ✅ **Cronômetro** que inicia no primeiro clique
- ✅ **Animações suaves** com efeitos 3D
- ✅ **Design responsivo** que funciona em desktop e mobile
- ✅ **Botão de reiniciar** para começar uma nova partida
- ✅ **Embaralhamento automático** das cartas a cada jogo
- ✅ **Mensagem de vitória** com estatísticas finais

## 💻 Tecnologias Utilizadas

- **HTML5**: Estrutura da página
- **CSS3**: Estilização, animações e layout responsivo
  - Flexbox e CSS Grid
  - Transformações 3D
  - Gradientes lineares
  - Media queries
- **JavaScript ES6+**: Lógica do jogo
  - Manipulação do DOM
  - Event listeners
  - Array methods
  - LocalStorage (futuro)

## 🎨 Design e Interface

### Características Visuais:
- **Cores**: Gradient roxo-azul de fundo
- **Cartas**: Efeito 3D com flip animation
- **Estados das cartas**:
  - 🔴 Vermelho: Carta não revelada
  - 🔵 Azul: Carta revelada
  - 🟢 Verde: Carta com par encontrado
- **Tipografia**: Segoe UI (sistema)
- **Responsividade**: Layout adaptável para diferentes tamanhos de tela

### Layout:
- **Desktop**: Grid 4x4 com gaps de 15px
- **Mobile**: Grid 3x4 com gaps de 10px (telas < 600px)

## 📁 Estrutura do Projeto

```
MemoriaGame/
├── index.html      # Estrutura HTML principal
├── style.css       # Estilos e animações
├── script.js       # Lógica do jogo
└── README.md       # Documentação
```

### Arquivos Principais:

#### `index.html` (21 linhas)
- Estrutura semântica do jogo
- Cabeçalho com título
- Painel de informações (movimentos e tempo)
- Container do tabuleiro
- Botão de reiniciar

#### `script.js` (127 linhas)
- **Variáveis globais**: Estado do jogo
- **initGame()**: Inicializa/reinicia o jogo
- **shuffleArray()**: Embaralha as cartas
- **flipCard()**: Lógica de virar cartas
- **checkMatch()**: Verifica pares
- **startTimer()**: Controla o cronômetro
- **endGame()**: Finaliza o jogo

#### `style.css` (137 linhas)
- Reset CSS global
- Layout responsivo
- Animações de flip 3D
- Estados visuais das cartas
- Media queries para mobile

## 🎯 Como Executar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/deusbr/MemoriaGame.git
   ```

2. **Navegue até o diretório**:
   ```bash
   cd MemoriaGame
   ```

3. **Abra o arquivo HTML**:
   - Duplo clique em `index.html`, ou
   - Abra com um servidor local:
     ```bash
     # Com Python 3
     python -m http.server 8000
     
     # Com Node.js (http-server)
     npx http-server
     
     # Com PHP
     php -S localhost:8000
     ```

4. **Acesse no navegador**:
   - Arquivo local: `file://caminho/para/index.html`
   - Servidor local: `http://localhost:8000`

## 📱 Compatibilidade

- ✅ **Navegadores modernos** (Chrome, Firefox, Safari, Edge)
- ✅ **Dispositivos móveis** (iOS, Android)
- ✅ **Tablets** e desktops
- ⚠️ **IE11+** (funcional, mas sem algumas animações)

## 🔮 Melhorias Futuras

- [ ] **Níveis de dificuldade** (4x4, 6x6, 8x8)
- [ ] **Temas personalizáveis** (frutas, animais, números)
- [ ] **Sistema de pontuação** com ranking
- [ ] **Efeitos sonoros** e música de fundo
- [ ] **Modo multiplayer** local
- [ ] **Persistência de dados** (localStorage)
- [ ] **Estatísticas detalhadas** (melhor tempo, menos movimentos)
- [ ] **Modo escuro/claro**
- [ ] **Animações de partículas** na vitória

## 👨‍💻 Autor

**[@deusbr](https://github.com/deusbr)**

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

⭐ **Gostou do projeto?** Deixe uma estrela no repositório!

🐛 **Encontrou um bug?** Abra uma [issue](https://github.com/deusbr/MemoriaGame/issues)

🚀 **Quer contribuir?** Envie um [pull request](https://github.com/deusbr/MemoriaGame/pulls)
