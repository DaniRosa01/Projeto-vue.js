
<template>
<div class="corpo">
      <div class="container">
        <div class="form-imagem">
          <img src="./login.png">
        </div>
        <div class="form">
          <form action="#">
            <div class="form-header">
              <div class="title">
                <h1>Cadastre-se</h1>
              </div>
              <div class="login-button">
                <button><a href="#">Entrar</a></button>
              </div>
            </div>

            <div class="input-group">
              <div class="input-box">
                <label for="firstname">Primeiro nome</label>
                <input id="firstname" type="text" name="firstname" placeholder="Digite seu primeiro nome" required> 
              </div>

              <div class="input-box">
                <label for="lastname">Sobrenome</label>
                <input id="lastname" type="text" name="lastname" placeholder="Digite seu sobrenome" required> 
              </div>

              <div class="input-box">
                <label for="email">E-mail</label>
                <input id="email" type="email" name="firstname" placeholder="Digite seu email" required> 
              </div>

              <div class="input-box">
                <label for="number">Celular</label>
                <input id="number" type="tel" name="number" placeholder="(xx) xxxx-xxxx" required> 
              </div>

              <div class="input-box">
                <label for="password">Senha</label>
                <input id="password" type="password" name="password" placeholder="Digite sua senha" required> 
              </div>

              <div class="input-box">
                <label for="confirmpassword">Confirma sua senha</label>
                <input id="confirmpassword" type="password" name="confirmpassword" placeholder="Digite seu primeiro nome" required> 
              </div>
            </div>

            <div class="gender-inputs">
              <div class="gender-title">
                <h6>Gênero</h6>
              </div>

              <div class="gender-group">
                <div class="gender-input">
                  <input type="radio" id="female" name="gender">
                  <label for="female">Feminino</label>
                </div>

                <div class="gender-input">
                  <input type="radio" id="male" name="gender">
                  <label for="male">Masculino</label>
                </div>

                <div class="gender-input">
                  <input type="radio" id="others" name="gender">
                  <label for="others">Outros</label>
                </div>

                <div class="gender-input">
                  <input type="radio" id="none" name="gender">
                  <label for="none">Prefiro não informar</label>
                </div>
              </div>
            </div>

            <div class="continue-button">
              <button><a href="#">Continuar</a></button>
            </div>
          </form>
        </div>
      </div>
</div>
</template>

<script>
export default {
  name: 'loginLogin'
}
</script>

<style>
 @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@100&family=Open+Sans:wght@300&family=Poppins:wght@600;700;900&family=Roboto+Mono:wght@100&family=Zen+Antique&family=Zen+Antique+Soft&display=swap');
 * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Heebo', sans-serif;
 } 

  .corpo{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
 } 
 .container {
  width: 80%;
  height: 100%;
  display: flex;
  box-shadow: 5px 5px  10px  rgba(0, 0, 0, .212);

 }
 .form-imagem{
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  padding-bottom: 8%;
  padding-top: 8%;
 }
 .form-imagem img{
  width: 31rem;
  height: 32rem;
  border-radius: 4px;
 }
 .form{
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f2f2f2;
  padding: 3rem;
 }
 .form-header{
  margin-bottom: 5rem;
  display: flex;
  justify-content: space-between;
 }
 .login-button{
  display: flex;
  align-items: center;
 }
 .login-button button{
  border: none;
  background-color: #6c63ff;
  padding: 0.4rem 1rem;
  border-radius: 5px;
  cursor: pointer;
 }
 .login-button button:hover{
  background-color: #6b63fff1;
 }
  .login-button button a{
    text-decoration: none;
    font-weight: 500;
    color: #fff;
  }
  .form-header h1::after{
    content: '';
    display: block;
    width: 5rem;
    height: 0.3rem;
    background-color: #6c63ff;
    margin: 0 auto;
    position: absolute;
    border-radius: 10px;
  }
  .input-group{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1rem 0;
  }
  .input-box{
    display: flex;
    flex-direction: column;
    margin-bottom: 2px;
  }
  .input-box input{
    margin: 0.6rem 0;
    padding: 0.6rem 1.2rem;
    border-radius: 10px;
    box-shadow: 1px 1px 6px #0000001c; 
  }
  .input-box input:hover{
    background-color: #eeeeee75;
  }
  .input-box input:focus-visible{
    outline: 1px solid #6c63ff;
  }
  .input-box label,
  .gender-title h6{
    font-size: 0.75rem;
    font-weight: 600;
    color: #000000c0;
  }
  .input-box input::placeholder{
    color: #000000be;
  }
  .gender-group{
    display: flex;
    justify-content: space-between;
    margin-top: 0.62rem;
    padding: 0 0.5rem;
  }
  .gender-input{
    display: flex;
    align-items: center;
  }
  .gender-input input{
    margin-right: 0.35rem;
  }
  .gender-input label{
    font-size: 0.81rem;
    font-weight: 600;
    color: #000000c0;
  }
  .continue-button button{
    width: 100%;
    margin-top: 2.5rem;
    border: none;
    background-color: #6c63ff;
    padding: 0.62rem;
    border-radius: 5px;
    cursor: pointer;
  }
  .continue-button button:hover{
    background-color: #6b63fff1;
  }
    .continue-button button a{
      text-decoration: none;
      font-size: 0.93rem;
      font-weight: 500;
      color: #fff;
    }
</style>