<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from 'vue-router'
import { api } from '../services/api'

const nome = ref("")
const email = ref("")
//const telefone = ref("")
const senha = ref("")
const confirmarSenha = ref("")

const router = useRouter()

async function registrar() {

  if (senha.value !== confirmarSenha.value) {
    alert("As senhas não coincidem")
    return
  }

  const dados = {
    name: nome.value,
    email: email.value,
    password: senha.value
  }

  try {
    const response = await api.post('/auth/register', dados)
    console.log('cadastro realizado', response.data)
    // redireciona para login após cadastro bem‑sucedido
    router.push('/login')
  } catch (error: any) {
    console.error('erro no cadastro', error)
    alert(
      error?.response?.data?.message ||
        'Falha ao tentar cadastrar. Verifique os dados e tente novamente.'
    )
  }
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

        <!-- campo telefone removido, não enviado ao backend -->

        <div class="input-group">
          <label>Senha</label>
          <input
            type="password"
            v-model="senha"
            placeholder="Digite uma senha"
            required
          />
        </div>

        <div class="input-group">
          <label>Repetir Senha</label>
          <input
            type="password"
            v-model="confirmarSenha"
            placeholder="Repita a senha"
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