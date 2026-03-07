<script setup lang="ts">
import { ref } from "vue"

const nome = ref("")
const email = ref("")
const telefone = ref("")
const senha = ref("")
const confirmarSenha = ref("")

function registrar() {

  if(senha.value !== confirmarSenha.value){
    alert("As senhas não coincidem")
    return
  }

  const dados = {
    nome: nome.value,
    email: email.value,
    telefone: telefone.value,
    senha: senha.value
  }

  console.log(dados)

  // depois vamos enviar para API
}
</script>

<template>
  <div class="container">

    <!-- IMAGEM -->
    <div class="left">
      <div class="overlay"></div>
    </div>

    <!-- FORM -->
    <div class="right">

      <form class="register-form" @submit.prevent="registrar">

        <h2>Begin</h2>
        <p class="subtitle">Cadastre-se no sistema</p>

        <div class="input-group">
          <label>Nome</label>
          <input
            type="text"
            v-model="nome"
            placeholder="Seu nome"
            required
          />
        </div>

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
          <label>Telefone</label>
          <input
            type="tel"
            v-model="telefone"
            placeholder="(00) 00000-0000"
          />
        </div>

        <div class="input-group">
          <label>Senha</label>
          <input
            type="password"
            v-model="senha"
            placeholder="Digite uma senha"
            required
          />
        </div>

        <button class="btn-register">
          Criar conta
        </button>

        <p class="login">
          Já possui conta?
          <router-link to="/login"> Entrar </router-link>
        </p>

      </form>

    </div>

  </div>
</template>

<style scoped src="../style/register.css"></style>