function preload() {
  imagemTelaInicial =loadImage('imagens/assets/telaInicial.png');
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoVoador =loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf')
  imagemVida = loadImage('imagens/assets/coracao.png')
  fita = loadJSON('fita/fita.json')
  
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3')
  somDoHit = loadSound('sons/somDoHit.mp3')
  somInicial = loadSound('sons/musica.mp3')
}