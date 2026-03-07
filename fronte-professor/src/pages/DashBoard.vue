<script setup lang="ts">
import SideBar from '../components/sideBar.vue';
import NavBar from '../components/navBar.vue';

</script>

<template>
    <div class="layout">
        <SideBar/>
        <div class="main">
            <NavBar/>
            <div class="cards">
                <div class="card">
                    <h3>Hoje</h3>
                    <p>40</p>
                </div>

                <div class="card">
                    <h3>Alunos</h3>
                    <p>2</p>
                </div>

                <div class="card">
                    <h3>Atividades postadas</h3>
                    <p>3</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped src="../style/dashboard.css"></style>