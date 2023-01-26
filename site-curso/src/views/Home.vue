<template>
  <body>
    <header class="cabecalho">
      <img class="cabecalho-imagem" src="./logoDev.jpg">
      <nav class="cabecalho-menu">
        <a class="cabecalho-menu-item">Inicio</a>
        <a class="cabecalho-menu-item">Sobre</a>
        <a class="cabecalho-menu-item">Equipe</a>
        <a class="cabecalho-menu-item">Contato</a>
      </nav>
    </header>

    <main class="conteudo">
      <section class="conteudo-principal">
        <div class="conteudo-principal-escrito">
          <h1 class="conteudo-principal-escrito-titulo">Desenvolvimento Web</h1>
          <h2 class="conteudo-principal-escrito-subtitulo">Dicas de estudos / Divulgação de vagas</h2>
          <router-link to="/login" class="conteudo-principal-escrito-botao">Acessar</router-link>
        </div>
        <img class="conteudo-principal-imagem" src="./program.gif">
      </section>
      <section class="conteudo-secudario">
        <h3 class="conteudo-secudario-titulo">O que faremos por você?</h3>
        <p class="conteudo-secudario-paragrafo">1. Ajudo você a<strong> programar </strong>do zero.</p>
        <p class="conteudo-secudario-paragrafo">2. Várias <strong>dicas</strong> de tecnológia</p>
        <p class="conteudo-secudario-paragrafo">3. Divulgamos <strong>vagas de emprego</strong>, dentro e fora do país.</p>
      </section>
    </main>

    <footer class="rodape">
      <img class="rodape-imagem" src="./logoDev.jpg" alt="">
      <p class="conteudo-secudario-paragrafo" >Desenvolvido por <strong> Daniela Rosa </strong></p>
    </footer>
  </body>
</template>

<script>
export default {
  name: 'HomeHome',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@100&family=Open+Sans:wght@300&family=Poppins:wght@600;700;900&family=Roboto+Mono:wght@100&family=Zen+Antique&family=Zen+Antique+Soft&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Heebo', sans-serif;
  }
  body{
    font-size: 100%;
    color: #eee;
  }
  .cabecalho{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding-top: -24px;
    margin: -10px;
    border-bottom: 0.4px solid rgb(46, 44, 44);
  }
  .cabecalho-imagem{
    width: -100px;
    height: 72px;
  }
  .cabecalho-menu{
    display: flex;
    gap: 32px;
  }
  .cabecalho-menu-item{
    font-family:'Heebo', sans-serif;
    color: rgb(46, 44, 44);
    font-weight: bolder;
    font-size: 18px;
    cursor: pointer;
  }
  .cabecalho-menu-item:hover{
     color: rgb(255, 9, 153);
  }
  .conteudo{
    margin-block: 48px;
    border-top: o.4px solid  rgb(46, 44, 44);
  }
  .conteudo-principal{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  .conteudo-principal-escrito{
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  .conteudo-principal-escrito-titulo{
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 50px;
    color:  rgb(46, 44, 44);
    border-block: 1.0px solid rgb(255, 9, 153);
  
  }
  .conteudo-principal-escrito-subtitulo{
     font-family: 'Open Sans', sans-serif;
     font-weight: bold;
     font-size: 24px;
     color:  rgb(46, 44, 44);;
     text-align: center;
  }
  .conteudo-principal-escrito-botao{
    background-color: rgb(216, 135, 189);
    width: 180px;
    height: 60px;
    border: none;
    box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: 18px;
    color:  rgb(46, 44, 44);;
    margin-left: 27%;
    cursor: pointer;
    padding-top: 10px;
  }
  .conteudo-principal-escrito-botao:hover{
    background-color: rgba(236, 158, 200, 0.53);
  }
  .conteudo-principal-imagem{
    height: 430px;
    padding-top: 10px;
  }
  .conteudo-secudario{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-top: 65px;
    border-bottom: 0.4px solid rgb(46, 44, 44);
}
.conteudo-secudario-titulo{
  border-top: 0.4px solid rgb(46, 44, 44);
  padding-bottom: 38px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 3000;
  font-size: 38px;
  color:  rgb(46, 44, 44);
  margin-bottom: 16px;
}
.conteudo-secudario-paragrafo{
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 18px;
  color:  rgb(46, 44, 44);
  margin-bottom: 40px;
  cursor: pointer;
}
.conteudo-secudario-paragrafo:hover{
  color: rgb(255, 9, 153);
}
.rodape{
  text-align: center;
  margin: -40px;
}
.rodape-imagem{
  height: 70px;
}
</style>
