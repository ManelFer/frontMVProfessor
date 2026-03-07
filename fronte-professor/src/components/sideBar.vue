<template>
  <div class="sidebar">

    <div class="logo">
      <h2>Begin</h2>
    </div>

    <nav class="menu">

      <router-link to="/dashboard" class="menu-item">
        <span class="icon">📊</span>
        Dashboard
      </router-link>

      <router-link to="/alunos" class="menu-item">
        <span class="icon">👨‍🎓</span>
        Alunos
      </router-link>

      <router-link to="/feedbacks" class="menu-item">
        <span class="icon">💬</span>
        Feedbacks
      </router-link>

      <router-link to="/atividades" class="menu-item">
        <span class="icon">📚</span>
        Atividades
      </router-link>

    </nav>

  </div>
</template>

<style scoped src="../style/sidebar.css"></style>