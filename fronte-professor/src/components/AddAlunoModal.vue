<script setup lang="ts">

import { ref } from "vue"
import { X } from "lucide-vue-next"

const emit = defineEmits(["close","save"])

const nome = ref("")
const email = ref("")
const assunto = ref("")

function salvar(){

  emit("save",{
    nome: nome.value,
    email: email.value,
    assunto: assunto.value
  })

  emit("close")
}

</script>

<template>

<div class="overlay">

  <div class="modal">

    <!-- HEADER -->

    <div class="modal-header">
      <h2>Novo Aluno</h2>

      <button @click="$emit('close')">
        <X class="icon"/>
      </button>
    </div>

    <!-- FORM -->

    <div class="form">

      <div class="form-group">
        <label>Nome</label>
        <input v-model="nome" placeholder="Nome do aluno"/>
      </div>

      <div class="form-group">
        <label>Email</label>
        <input v-model="email" placeholder="email@email.com"/>
      </div>

    </div>

    <!-- ACTIONS -->

    <div class="actions">

      <button class="btn-cancel" @click="$emit('close')">
        Cancelar
      </button>

      <button class="btn-save" @click="salvar">
        Salvar
      </button>

    </div>

  </div>

</div>

</template>

<style scoped src="../style/addAlunoModal.css"></style>