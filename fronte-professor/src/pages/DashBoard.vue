<script setup lang="ts">
import SideBar from '../components/sideBar.vue'
import cardMaior from '../components/cardMaior.vue';


import { Calendar, Users, BookOpen } from "lucide-vue-next"
</script>

<template>
    <div class="layout">
        <SideBar />

        <div class="main">
            

            <div class="content">
                <cardMaior 
                    nome="Manoel"
                    :aulas="3"
                    :tarefas="12"
                />
                <div class="cards">

                    <!-- CARD HOJE -->
                    <div class="card">
                        <div class="card-header">
                            <span>Hoje</span>
                            <Calendar class="icon" />
                        </div>

                        <div class="card-value">
                            12 Out
                        </div>

                        <div class="card-info">
                            ~ 3 aulas pendentes
                        </div>
                    </div>

                    <!-- CARD ALUNOS -->
                    <div class="card">
                        <div class="card-header">
                            <span>Alunos</span>
                            <Users class="icon" />
                        </div>

                        <div class="card-value">
                            24
                        </div>

                        <div class="card-info">
                            Alunos Cadastrados
                        </div>
                    </div>

                    <!-- CARD ATIVIDADES -->
                    <div class="card">
                        <div class="card-header">
                            <span>Atividades</span>
                            <BookOpen class="icon" />
                        </div>

                        <div class="card-value">
                            8
                        </div>

                        <div class="card-info">
                            atividades postadas
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<style scoped src="../style/dashboard.css"></style>