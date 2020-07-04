class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
    this.matriz = [
      [0, 0],
      [220, 0],
      [440, 0],
      [660, 0],
      [0, 270],
      [220, 270],
      [440, 270],
      [660, 270],
      [0, 540],
      [220, 540],
      [440, 540],
      [660, 540],
      [0, 810],
      [220, 810],
      [440, 810],
      [660, 810],
    ] 
    
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - 30;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.gravidade = 5;
    this.alturaDoPulo = -50;
    this.pulos = 0;
    this.invencivel = false;
  }
  
  pula(){
    if(this.pulos < 2){
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;
      somDoPulo.play()
    }
  
  }
  
  aplicaGravidade(){
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if(this.y > this.yInicial){
      this.y = this.yInicial;
      this.pulos = 0;  
      
    }
  }
  
  tornarInvencivel(){
    this.invencivel = true;
    setTimeout(() =>{
      this.invencivel = false
    },1000)
  }
  
  estaColidindo(inimigo){
    if(this.invencivel){
      return false
    }
    const precisao = .65
    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    )
    
    return colisao;
  }
  
  

  
}