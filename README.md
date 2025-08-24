# Corrida Educativa

Um jogo de corrida de carros 2D responsivo desenvolvido em HTML5 Canvas para web e mobile.

## 🎮 Como Jogar

### Objetivo
Desvie dos carros inimigos pelo maior tempo possível para obter a maior pontuação!

### Controles

#### Desktop
- **Setas ←/→** ou **A/D**: Mover entre as vias (esquerda/direita)
- **ESPAÇO**: Reiniciar após Game Over

#### Mobile
- **Toque na metade esquerda da tela**: Mover para a via esquerda
- **Toque na metade direita da tela**: Mover para a via direita
- Sem setas visuais na interface - jogabilidade intuitiva por toque

### Mecânicas do Jogo

- **Duas Vias**: O carro só pode estar na via esquerda ou direita
- **Movimento Suave**: Transições fluidas entre as vias
- **Dificuldade Progressiva**: Carros inimigos aparecem com frequência crescente
- **Game Over**: Apenas por colisão com carros inimigos
- **Pontuação Contínua**: Pontos por tempo sobrevivido + bônus por carros evitados

## 🚗 Características Técnicas

- **Responsivo**: Adapta-se automaticamente a diferentes tamanhos de tela
- **Tela Cheia**: Utiliza toda a área disponível do dispositivo
- **Carros Proporcionais**: Tamanho equivalente a ~15% da largura da tela
- **Rodas Visíveis**: Carros com rodas dianteiras e traseiras
- **HTML5 Canvas**: Renderização moderna e performática

## 🛠️ Instalação e Execução

### Requisitos
- Navegador web moderno com suporte a HTML5 Canvas
- Não requer instalação de dependências

### Como executar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/rai-abreu17/PROJETO-FINAL.git
   cd PROJETO-FINAL
   ```

2. **Abra diretamente no navegador**:
   - Abra o arquivo `index.html` em qualquer navegador web moderno
   
   **OU**

3. **Use um servidor local** (recomendado):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (se tiver instalado)
   npx serve
   ```
   
   Depois acesse `http://localhost:8000` no navegador.

### Estrutura do Projeto

```
PROJETO-FINAL/
├── index.html          # Página principal do jogo
├── style.css           # Estilos responsivos
├── script.js          # Lógica do jogo
├── README.md          # Este arquivo
└── imagens/           # Pasta de imagens (não utilizada no jogo atual)
```

## 🎯 Recursos Implementados

- ✅ **Responsividade Total**: Funciona em desktop e mobile
- ✅ **Controles Duais**: Teclado (desktop) e toque (mobile)
- ✅ **Sistema de Duas Vias**: Movimento restrito às vias
- ✅ **Dificuldade Progressiva**: Aumenta com o tempo
- ✅ **Detecção de Colisão**: Game over apenas por colisão
- ✅ **Carros com Rodas**: Design visual detalhado
- ✅ **Animação Fluida**: 60 FPS com requestAnimationFrame
- ✅ **Pontuação Dinâmica**: Sistema de score em tempo real

## 🎨 Personalização

O jogo pode ser facilmente personalizado alterando as seguintes variáveis no arquivo `script.js`:

- **Cores dos carros**: Modifique as cores nos métodos `drawPlayer()` e `drawEnemies()`
- **Velocidade inicial**: Ajuste `this.enemySpeed`
- **Taxa de spawn**: Modifique `this.enemySpawnRate`
- **Tamanho dos carros**: Altere o multiplicador em `this.carWidth`

## 🌐 Compatibilidade

- **Desktop**: Chrome, Firefox, Safari, Edge (versões modernas)
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- **Resolução**: Adapta-se automaticamente de 320px a 4K+

## 📱 Características Mobile

- Interface otimizada para toque
- Sem elementos de controle visuais desnecessários
- Prevenção de zoom/scroll indesejado
- Controles por área de toque intuitivos

Desenvolvido como projeto educativo demonstrando conceitos de game development web moderno.