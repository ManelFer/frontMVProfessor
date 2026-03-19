<script setup lang="ts">
import sideBar from "../components/sideBar.vue"
import { Search } from "lucide-vue-next"
</script>

<template>

<div class="layout">

  <sideBar/>

  <div class="main">

    <!-- HEADER -->

    <div class="page-header">

      <div>
        <h1>Feedbacks</h1>
        <p>Veja os feedbacks recebidos dos alunos</p>
      </div>

      <div class="search">
        <Search class="icon"/>
        <input placeholder="Buscar feedback..."/>
      </div>

    </div>


    <!-- LISTA -->

    <div class="feedback-list">

      <div class="feedback-card">

        <div class="top">
          <strong>Ana Beatriz</strong>
          <span class="date">Hoje</span>
        </div>

        <p>
          Professor, gostei muito da atividade! Foi bem dinâmica e ajudou a entender melhor o conteúdo.
        </p>

      </div>


      <div class="feedback-card">

        <div class="top">
          <strong>Guilherme Santos</strong>
          <span class="date">Ontem</span>
        </div>

        <p>
          Achei a atividade um pouco difícil, mas consegui concluir com ajuda dos colegas.
        </p>

      </div>


      <div class="feedback-card">

        <div class="top">
          <strong>Mariana Costa</strong>
          <span class="date">2 dias atrás</span>
        </div>

        <p>
          Gostaria de mais exemplos antes das atividades.
        </p>

      </div>

    </div>

  </div>

</div>

</template>

<style scoped src="../style/feadback.css"></style>