<script setup lang="ts">
import { GraduationCap } from "lucide-vue-next"

defineProps({
  nome: {
    type: String,
    default: "Professor"
  },
  aulas: {
    type: Number,
    default: 0
  },
  tarefas: {
    type: Number,
    default: 0
  }
})

</script>

<template>
  <div class="welcome-banner">

    <div class="banner-content">
      <h1>Bem vindo, Prof. {{ nome }}</h1>

      <p>
        Você tem {{ aulas }} aulas agendadas para hoje e
        {{ tarefas }} tarefas para corrigir.
      </p>

      <div class="banner-actions">
        <button class="btn-primary">Ver Cronograma</button>
        <button class="btn-secondary">Relatórios</button>
      </div>
    </div>

    <div class="banner-icon">
      <GraduationCap class="icon"/>
    </div>

  </div>
</template>
<style scoped src="../style/banner.css"></style>