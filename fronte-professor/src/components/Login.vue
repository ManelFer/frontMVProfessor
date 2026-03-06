<script setup lang="ts">
import { ref } from "vue"

const email = ref("")
const senha = ref("")

function login() {
  console.log(email.value, senha.value)
}
</script>

<template>
  <div class="container">

    <!-- LADO ESQUERDO (IMAGEM) -->
    <div class="left">
      <div class="overlay"></div>
    </div>

    <!-- LADO DIREITO (LOGIN) -->
    <div class="right">

      <form class="login-form" @submit.prevent="login">

        <h2>Begin</h2>
        <p class="subtitle">Acesse sua conta</p>

        <div class="input-group">
          <label>Email</label>
          <input
            type="email"
            v-model="email"
            placeholder="seu@email.com"
            required
          />
        </div>

        <div class="input-group">
          <label>Senha</label>
          <input
            type="password"
            v-model="senha"
            placeholder="Digite sua senha"
            required
          />
        </div>

        <button class="btn-login">
          Entrar
        </button>

        <p class="create">
          Não tem conta?
          <a href="#">Criar conta</a>
        </p>

      </form>

    </div>

  </div>
</template>

<style scoped>

.container{
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
}

/* LADO IMAGEM */

.left{
  background-image: url("../assets/loginimg.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
}

.overlay{
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.6);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
  text-align: center;
  padding: 40px;
}

.overlay h1{
  font-size: 40px;
  margin-bottom: 10px;
}

.overlay p{
  font-size: 18px;
  max-width: 400px;
}

/* LADO LOGIN */

.right{
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FDF9F3;
}

/* FORM */

.login-form{
  background-color: white;
  width: 350px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  padding: 40px;
  margin: 10vh;

  border-radius: 16px;

  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

h2{
  text-align: center;
  font-size: 28px;
}

.subtitle{
  color: #94a3b8;
  margin-bottom: 10px;
}

.input-group{
  display: flex;
  flex-direction: column;
}

label{
  font-size: 14px;
  margin-bottom: 5px;
}

input{
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #334155;
  background: #ffffff;
  color: rgb(0, 0, 0);
}

input:focus{
  outline: none;
  border-color: #6366f1;
}

.btn-login{
  margin-top: 10px;
  padding: 12px;

  border-radius: 10px;
  border: none;

  background: #6366f1;
  color: white;

  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}

.btn-login:hover{
  background: #4f46e5;
}

.create{
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: #94a3b8;
}

a{
  color: #6366f1;
}

/* RESPONSIVO */

@media(max-width:900px){

.container{
  grid-template-columns: 1fr;
}

.left{
  display:none;
}

}

</style>